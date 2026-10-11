/**
 * The Cloudflare Pages settings for every site in this repo: rovqix.in plus
 * one project per area subdomain app (apps/*-websites).
 *
 *   npm run cf:projects            print them
 *   npm run cf:setup               create the subdomain projects (scripts/cloudflare-setup.mjs)
 *
 * "Build watch paths" make Cloudflare build a project only when a commit
 * touches files that site is built from: a blog post rebuilds rovqix.in only;
 * editing packages/areas/types/plumber.ts rebuilds only plumber-websites.rovqix.in
 * (and rovqix.in, whose sitemap lists it).
 */
import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

export const ROOT_DOMAIN = "rovqix.in";

// Files every build depends on: workspace manifests, lockfile, turbo, tooling.
const ROOT_FILES = ["package.json", "package-lock.json", "turbo.json", ".node-version", "scripts/check-export-size.mjs"];

export function getProjects() {
  const apps = readdirSync("apps")
    .filter((dir) => dir.endsWith("-websites"))
    .sort();

  return [
    {
      main: true,
      project: "rovqix",
      domain: ROOT_DOMAIN,
      build: "npx turbo run build --filter=@rovqix/web",
      output: "apps/web/out",
      env: {},
      include: ["apps/web/*", "packages/*", ...ROOT_FILES],
    },
    ...apps.map((id) => ({
      main: false,
      project: `rovqix-${id}`,
      domain: `${id}.${ROOT_DOMAIN}`,
      build: `npx turbo run build --filter=@rovqix/${id}`,
      output: `apps/${id}/out`,
      env: {},
      include: [
        `apps/${id}/*`,
        "packages/shared/*",
        "packages/area-site/*",
        "packages/typescript-config/*",
        "packages/areas/src/*",
        "packages/areas/package.json",
        `packages/areas/types/${id.replace(/-websites$/, "")}.ts`,
        ...ROOT_FILES,
      ],
    })),
  ];
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const projects = getProjects();
  if (process.argv.includes("--json")) {
    console.log(JSON.stringify(projects, null, 2));
  } else {
    for (const p of projects) {
      console.log(`
━━ ${p.project}  →  https://${p.domain}
  Framework preset        None
  Production branch       main
  Root directory          (leave empty)
  Build command           ${p.build}
  Build output directory  ${p.output}
  Environment variables   ${Object.entries(p.env).map(([k, v]) => `${k}=${v}`).join(", ") || "(none)"}
  Build watch paths       Include: ${p.include.join(", ")}
                          Exclude: (none)
  Custom domain           ${p.domain}`);
    }
    console.log(`\n${projects.length} Cloudflare Pages projects (100 allowed per account).`);
  }
}
