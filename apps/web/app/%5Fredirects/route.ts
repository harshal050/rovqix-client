import { areaCities, areaPageUrl, areaTrackUrl, findTrack, serviceAreaSlug, serviceTypes } from "@rovqix/areas";

/**
 * Emits out/_redirects (the %5F folder prefix is how Next spells a literal
 * leading underscore). Cloudflare Pages reads it to 301 old URLs.
 *
 * Area pages used to live on rovqix.in/areas/… for the top 14 cities before
 * they moved to the subdomains. Those URLs may already be indexed or linked,
 * so each one is sent to its "web design" page on its subdomain. Pages allows
 * 2,000 static redirects; this file uses 1,530.
 */
export const dynamic = "force-static";

/** How many cities had pages on rovqix.in/areas before the move. */
const LEGACY_CITY_COUNT = 14;

export function GET() {
  const legacyCities = areaCities.slice(0, LEGACY_CITY_COUNT);

  const lines = serviceTypes.flatMap((service) => {
    const found = findTrack(service.slug, "web-design");
    if (!found) return [];
    const { shard, track } = found;
    return [
      `/areas/service/${service.slug} ${areaTrackUrl(shard, track)} 301`,
      ...legacyCities.map((city) => {
        const slug = serviceAreaSlug(service.slug, city.slug);
        return `/areas/${slug} ${areaPageUrl(shard, slug)} 301`;
      }),
    ];
  });

  return new Response(`${lines.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
