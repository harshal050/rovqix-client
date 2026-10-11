/**
 * Makes sure every site has a Cloudflare Pages project, its custom domain and
 * its DNS record: rovqix.in plus one project per trade site. Safe to re-run:
 * anything that already exists is left alone.
 *
 * The GitHub Actions deploy (.github/workflows/deploy.yml) runs this before
 * every deploy. Projects are "Direct Upload": GitHub builds the sites and
 * uploads them; Cloudflare does no building, so its 500-builds-a-month limit
 * does not apply.
 *
 *   CLOUDFLARE_API_TOKEN=…  CLOUDFLARE_ACCOUNT_ID=…  npm run cf:setup            # dry run
 *   CLOUDFLARE_API_TOKEN=…  CLOUDFLARE_ACCOUNT_ID=…  npm run cf:setup -- --apply
 *
 * Token permissions: Account › Cloudflare Pages › Edit,
 * Zone › DNS › Edit and Zone › Zone › Read (zone rovqix.in).
 */
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
if (!zoneId) console.warn(`! Zone ${ROOT_DOMAIN} not found with this token; DNS records will be skipped.`);

console.log(APPLY ? "Applying\n" : "Dry run\n");
let failed = 0;

for (const p of getProjects()) {
  const steps = [];

  const existing = await cf("GET", `/accounts/${ACCOUNT}/pages/projects/${p.project}`);
  if (existing.status === 404) {
    steps.push("create project");
    if (APPLY) {
      const created = await cf("POST", `/accounts/${ACCOUNT}/pages/projects`, {
        name: p.project,
        production_branch: "main",
      });
      if (!created.ok) {
        console.error(`✘ ${p.project}: ${JSON.stringify(created.json.errors ?? created.json)}`);
        failed += 1;
        continue;
      }
    }
  } else if (!existing.ok) {
    console.error(`✘ ${p.project}: ${JSON.stringify(existing.json.errors ?? existing.json)}`);
    failed += 1;
    continue;
  }

  const domains = await cf("GET", `/accounts/${ACCOUNT}/pages/projects/${p.project}/domains`);
  if (!domains.json.result?.some((d) => d.name === p.domain)) {
    steps.push(`add domain ${p.domain}`);
    if (APPLY) await cf("POST", `/accounts/${ACCOUNT}/pages/projects/${p.project}/domains`, { name: p.domain });
  }

  if (zoneId) {
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

  console.log(`${steps.length ? (APPLY ? "✔" : "→") : "="} ${p.project}: ${steps.join(", ") || "already set up"}`);
}

if (!APPLY) console.log("\nNothing changed. Re-run with --apply to create the above.");
if (failed) process.exit(1);
