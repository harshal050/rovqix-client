import {
  getSitemapChunk,
  getSitemapChunkCount,
  renderUrlset,
} from "@/lib/sitemap-urls";

/**
 * /sitemaps/{n}.xml — one chunk of the full URL list, listed by /sitemap.xml.
 *
 * Written as an explicit route handler rather than Next's generateSitemaps()
 * metadata convention. That convention moves the index off /sitemap.xml, and
 * it passes `id` as a Promise resolving to a string — typing it as a number
 * silently yields NaN and an empty sitemap, which is easy to ship by accident.
 */
export const dynamic = "force-static";

// Static export: only the params listed below exist.
export const dynamicParams = false;

export async function generateStaticParams() {
  const count = await getSitemapChunkCount();
  return Array.from({ length: count }, (_, id) => ({ id: `${id}.xml` }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { id } = await params;
  const index = Number(id.replace(/\.xml$/, ""));

  if (!Number.isInteger(index) || index < 0) {
    return new Response("Not Found", { status: 404 });
  }

  const count = await getSitemapChunkCount();
  if (index >= count) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(renderUrlset(await getSitemapChunk(index)), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
