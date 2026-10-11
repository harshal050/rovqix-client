/**
 * Builds every page of every area subdomain in memory and checks it, without
 * running Next. `npm run validate -w @rovqix/areas`
 */
import { areaCities, getShardPage, shardOrigin, shardPageSlugs, shards } from "./src/index";

const MAX_FILES = 20000;
const OVERHEAD = 60; // _next assets, icons, hub, 404, robots, sitemap…
const seen = new Map<string, string>();
let pages = 0;
let failures = 0;
const fail = (msg: string) => {
  failures += 1;
  if (failures <= 20) console.error(`✘ ${msg}`);
};

for (const shard of shards) {
  const slugs = shardPageSlugs(shard);
  const files = slugs.length + shard.tracks.length + OVERHEAD;
  if (files > MAX_FILES) fail(`${shard.id}: ~${files} files`);
  for (const slug of slugs) {
    const owner = seen.get(slug);
    if (owner) fail(`${slug} on both ${owner} and ${shard.id}`);
    seen.set(slug, shard.id);
    const page = getShardPage(shard, slug);
    if (!page) { fail(`${shard.id}/${slug} did not build`); continue; }
    if (page.url !== `${shardOrigin(shard)}/${slug}`) fail(`${slug}: url ${page.url}`);
    if (!page.title || !page.seoTitle || !page.description || !page.answer || !page.sections.length || !page.faqs.length)
      fail(`${slug}: missing content`);
    pages += 1;
  }
}

const max = Math.max(...shards.map((s) => shardPageSlugs(s).length));
console.log(`${shards.length} subdomains, ${pages.toLocaleString()} pages (${areaCities.length} cities), largest ${max.toLocaleString()} pages`);
if (failures) {
  console.error(`${failures} problems`);
  process.exit(1);
}
console.log("✔ every page builds, URLs are unique and on their own subdomain, every site fits the file limit");
