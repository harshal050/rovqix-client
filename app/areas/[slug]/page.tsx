import { createLandingRoute } from "@/lib/content/landing/route";

const route = createLandingRoute("areas");

/**
 * Static export: only the pages generated at build time exist. Unknown slugs
 * get the static 404 page. The set is capped by AREA_CITY_LIMIT in
 * service-areas.ts to stay under Cloudflare's file limit.
 */
export const dynamicParams = false;

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
