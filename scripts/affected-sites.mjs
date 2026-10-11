/**
 * Decides which sites a push needs to rebuild, for the GitHub Actions deploy
 * (.github/workflows/deploy.yml). A site is affected when a changed file
 * matches one of its watch paths from cloudflare-projects.mjs — so a blog
 * post deploys rovqix.in only, and packages/areas/types/plumber.ts deploys
 * plumber-websites (and rovqix.in, whose sitemap lists it).
 *
 *   node scripts/affected-sites.mjs <before-sha> <after-sha>   # changed sites
 *   node scripts/affected-sites.mjs --all                      # every site
 *   node scripts/affected-sites.mjs --all --only=rovqix,rovqix-plumber-websites
 *   node scripts/affected-sites.mjs --all --new-only   # never-deployed sites (UNDEPLOYED_PROJECTS)
 *
 * READY_PROJECTS (JSON array, from cloudflare-setup.mjs) limits the result to
 * projects that exist on Cloudflare; the rest are reported and skipped.
 *
 * Writes `sites` (a JSON matrix) and `count` to $GITHUB_OUTPUT when set.
 */
import { execFileSync } from "node:child_process";
import { appendFileSync } from "node:fs";

import { getProjects } from "./cloudflare-projects.mjs";

const projects = getProjects();
const [before, after] = process.argv.slice(2);

function changedFiles() {
  // First push to a branch, a force-push, or an explicit --all: deploy everything.
  if (process.argv.includes("--all") || !before || /^0+$/.test(before)) return null;
  try {
    return execFileSync("git", ["diff", "--name-only", before, after ?? "HEAD"], { encoding: "utf8" })
      .split("\n")
      .filter(Boolean);
  } catch {
    return null;
  }
}

// Same wildcard semantics as Cloudflare watch paths: `*` matches anything, `/` included.
const toRegExp = (glob) => new RegExp(`^${glob.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*")}$`);

const files = changedFiles();
const only = (process.argv.find((arg) => arg.startsWith("--only=")) ?? "--only=")
  .slice("--only=".length)
  .split(",")
  .map((name) => name.trim())
  .filter(Boolean);
const unknown = only.filter((name) => !projects.some((p) => p.project === name));
if (unknown.length) {
  console.error(`Unknown project(s): ${unknown.join(", ")}. See npm run cf:projects.`);
  process.exit(1);
}

const affected = (files
  ? projects.filter((p) => p.include.map(toRegExp).some((re) => files.some((file) => re.test(file))))
  : projects
).filter((p) => !only.length || only.includes(p.project));

const readyList = process.env.READY_PROJECTS ? JSON.parse(process.env.READY_PROJECTS) : null;
const notReady = readyList ? affected.filter((p) => !readyList.includes(p.project)) : [];
if (notReady.length) {
  console.log(`::warning::Skipping ${notReady.length} site(s) with no Cloudflare project yet: ${notReady.map((p) => p.project).join(", ")}`);
}

// --new-only: just the sites that have never been deployed (from cloudflare-setup.mjs).
const newOnly = process.argv.includes("--new-only");
const undeployedList = JSON.parse(process.env.UNDEPLOYED_PROJECTS || "[]");

const sites = affected
  .filter((p) => !notReady.includes(p))
  .filter((p) => !newOnly || undeployedList.includes(p.project))
  .map((p) => ({
  project: p.project,
  filter: p.build.match(/--filter=(\S+)/)[1],
  output: p.output,
}));

console.log(
  `${files ? `${files.length} changed files` : "Full deploy"} → ${sites.length} site(s): ${sites.map((s) => s.project).join(", ") || "none"}`
);

if (process.env.GITHUB_OUTPUT) {
  appendFileSync(process.env.GITHUB_OUTPUT, `sites=${JSON.stringify(sites)}\ncount=${sites.length}\n`);
}
