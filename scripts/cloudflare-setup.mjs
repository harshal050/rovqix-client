/**
 * Decides where each site is hosted and prepares Cloudflare for it. Run by the
 * GitHub Actions deploy (.github/workflows/deploy.yml) before every deploy.
 * Safe to re-run: anything that already exists is left alone.
 *
 * Hosting:
 *   pages   rovqix.in, and any trade site that already has a Pages project.
 *           This script creates the main project if missing, plus the custom
 *           domain and DNS record for every Pages site.
 *   worker  every other trade site: an asset-only Worker (static files, no
 *           code). The account allows few Pages projects (error 8000027
 *           after 20), but 100 Workers. `wrangler deploy` in the workflow
 *           creates the Worker, its custom domain and DNS record.
 *
 * Writes to $GITHUB_OUTPUT:
 *   hosting     {"<project>": "pages" | "worker"} for every site
 *   undeployed  projects that have never been deployed (for "new-only" runs)
 *
 *   CLOUDFLARE_API_TOKEN=…  CLOUDFLARE_ACCOUNT_ID=…  npm run cf:setup            # dry run
 *   CLOUDFLARE_API_TOKEN=…  CLOUDFLARE_ACCOUNT_ID=…  npm run cf:setup -- --apply
 *
 * Token permissions: Account › Cloudflare Pages › Edit, Account › Workers
 * Scripts › Edit, Zone › Workers Routes › Edit, Zone › DNS › Edit and
 * Zone › Zone › Read (zone rovqix.in).
 */
import { appendFileSync } from "node:fs";

import { getProjects, ROOT_DOMAIN } from "./cloudflare-projects.mjs";

const APPLY = process.argv.includes("--apply");
const { CLOUDFLARE_API_TOKEN: TOKEN, CLOUDFLARE_ACCOUNT_ID: ACCOUNT } = process.env;
if (!TOKEN || !ACCOUNT) {
  console.error("Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID.");
  process.exit(1);
}

async function cf(method, path, body) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    method,
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, ok: res.ok && json.success !== false, json };
}

const zones = await cf("GET", `/zones?name=${ROOT_DOMAIN}`);
const zoneId = zones.json.result?.[0]?.id;
if (!zoneId) console.warn(`! Zone ${ROOT_DOMAIN} not found with this token; Pages DNS records will be skipped.`);

console.log(APPLY ? "Applying\n" : "Dry run\n");
const hosting = {};
const undeployed = [];
let failed = 0;

/** Custom domain + DNS record for a Pages site. */
async function ensurePagesDomain(p, steps) {
  const domains = await cf("GET", `/accounts/${ACCOUNT}/pages/projects/${p.project}/domains`);
  if (!domains.json.result?.some((d) => d.name === p.domain)) {
    steps.push(`add domain ${p.domain}`);
    if (APPLY) await cf("POST", `/accounts/${ACCOUNT}/pages/projects/${p.project}/domains`, { name: p.domain });
  }
  if (!zoneId) return;
  const records = await cf("GET", `/zones/${zoneId}/dns_records?name=${p.domain}`);
  if (!records.json.result?.length) {
    steps.push(`DNS CNAME → ${p.project}.pages.dev`);
    if (APPLY)
      await cf("POST", `/zones/${zoneId}/dns_records`, {
        type: "CNAME",
        name: p.domain,
        content: `${p.project}.pages.dev`,
        proxied: true,
      });
  }
}

for (const p of getProjects()) {
  const steps = [];
  const pages = await cf("GET", `/accounts/${ACCOUNT}/pages/projects/${p.project}`);

  if (pages.ok || p.main) {
    // Pages: an existing project, or the main site (created if missing).
    let deployed = Boolean(pages.json.result?.latest_deployment);
    if (!pages.ok) {
      deployed = false;
      steps.push("create Pages project");
      if (APPLY) {
        const created = await cf("POST", `/accounts/${ACCOUNT}/pages/projects`, { name: p.project, production_branch: "main" });
        if (!created.ok) {
          console.error(`✘ ${p.project}: ${JSON.stringify(created.json.errors ?? created.json)}`);
          failed += 1;
          continue;
        }
      }
    }
    await ensurePagesDomain(p, steps);
    hosting[p.project] = "pages";
    if (!deployed) undeployed.push(p.project);
  } else {
    // Worker: wrangler creates the script, custom domain and DNS on deploy.
    const script = await cf("GET", `/accounts/${ACCOUNT}/workers/scripts/${p.project}/settings`);
    if (!script.ok) {
      steps.push("new Worker (created on deploy)");
      undeployed.push(p.project);
    }
    hosting[p.project] = "worker";
  }

  console.log(`${steps.length ? (APPLY ? "✔" : "→") : "="} ${p.project} [${hosting[p.project]}]: ${steps.join(", ") || "ready"}`);
}

const counts = Object.values(hosting).reduce((acc, h) => ({ ...acc, [h]: (acc[h] ?? 0) + 1 }), {});
console.log(`\n${counts.pages ?? 0} on Pages, ${counts.worker ?? 0} as Workers, ${undeployed.length} never deployed.`);
if (process.env.GITHUB_OUTPUT) {
  appendFileSync(
    process.env.GITHUB_OUTPUT,
    `hosting=${JSON.stringify(hosting)}\nundeployed=${JSON.stringify(undeployed)}\n`
  );
}
if (!APPLY) console.log("\nNothing changed. Re-run with --apply to create the above.");
if (failed) process.exit(1);
