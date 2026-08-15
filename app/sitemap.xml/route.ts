import { siteConfig } from "@/lib/constants/site";
import { escapeXml, getSitemapChunkCount } from "@/lib/sitemap-urls";

/**
 * /sitemap.xml — the sitemap index. This is the URL to submit to Google
 * Search Console and the one referenced from robots.txt.
 *
 * It is an index rather than a single flat file because the site has well over
 * Google's 50,000-URL-per-file limit. An index at /sitemap.xml is the standard
 * way to do this and search engines follow it automatically to every chunk.
 */
export const dynamic = "force-static";

export async function GET(): Promise<Response> {
  const count = await getSitemapChunkCount();
  const lastmod = new Date().toISOString();

  const entries = Array.from({ length: count }, (_, id) =>
    [
      "  <sitemap>",
      `    <loc>${escapeXml(`${siteConfig.url}/sitemaps/${id}.xml`)}</loc>`,
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
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
