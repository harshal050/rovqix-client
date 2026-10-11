import { createLandingRoute } from "@rovqix/shared/lib/content/landing/route";

const route = createLandingRoute("local");

/**
 * Every valid slug in this group is prerendered from static data, so there is
 * nothing to render on demand. Setting this to false makes an unknown slug a
 * real 404 — with dynamicParams left on, Next renders notFound(), caches it as
 * an ISR entry and serves it with a 200, which is a soft 404.
 */
export const dynamicParams = false;

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
