import {
  AREA_PAGES_PUBLISHED_AT,
  areaPageUrl,
  areaTrackUrl,
  getCurrentShard,
  shardOrigin,
  shardPageSlugs,
} from "@rovqix/areas";

/**
 * This subdomain's own sitemap (~16,600 URLs, under Google's 50,000 per file).
 * The same URLs are also listed in rovqix.in/sitemap.xml; this copy lets
 * crawlers that start on the subdomain find everything via robots.txt.
 */

export function GET() {
  const shard = getCurrentShard();
  const lastmod = `${AREA_PAGES_PUBLISHED_AT}T00:00:00.000Z`;
  const urls = [
    shardOrigin(shard),
    ...shard.tracks.map((track) => areaTrackUrl(shard, track)),
    ...shardPageSlugs(shard).map((slug) => areaPageUrl(shard, slug)),
  ];

  const body = urls
    .map((url) => `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } }
  );
}
