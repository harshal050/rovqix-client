import { siteConfig } from "@/lib/constants/site";
import { sitemapChunkCount } from "@/app/sitemap";

/**
 * Sitemap index. Lists every chunk produced by generateSitemaps() in
 * app/sitemap.ts. robots.txt points search engines here rather than at a
 * single enormous file.
 */
export async function GET(): Promise<Response> {
  const count = await sitemapChunkCount();
  const lastmod = new Date().toISOString();

  const entries = Array.from({ length: count }, (_, id) =>
    [
      "  <sitemap>",
      `    <loc>${siteConfig.url}/sitemap/${id}.xml</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      "  </sitemap>",
    ].join("\n")
  ).join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    entries,
    "</sitemapindex>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
