/**
 * Writes the wrangler config for an asset-only Worker site, used by the
 * deploy workflow for trade sites hosted as Workers (see cloudflare-setup.mjs).
 * No script: Cloudflare serves the static export directly, on its own
 * subdomain. `wrangler deploy` creates the custom domain and DNS record.
 *
 *   node scripts/write-worker-config.mjs <name> <domain> <assets-dir> <config-path>
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const [name, domain, assets, configPath] = process.argv.slice(2);
if (!configPath) {
  console.error("Usage: write-worker-config.mjs <name> <domain> <assets-dir> <config-path>");
  process.exit(1);
}

const config = {
  name,
  compatibility_date: "2026-10-01",
  assets: {
    directory: resolve(assets),
    // /plumber-seo-denver -> plumber-seo-denver.html, like Cloudflare Pages.
    html_handling: "auto-trailing-slash",
    not_found_handling: "404-page",
  },
  routes: [{ pattern: domain, custom_domain: true }],
  workers_dev: false,
};

writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
console.log(`Wrote ${configPath} for ${name} → https://${domain}`);
