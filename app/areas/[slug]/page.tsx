import { createLandingRoute } from "@/lib/content/landing/route";
import { PRERENDERED_AREA_SLUGS } from "@/lib/content/landing/service-areas";

/**
 * Only a subset of /areas is prerendered — see PRERENDERED_AREA_SLUGS for why.
 * dynamicParams stays at its default (true), so any other valid slug renders on
 * first request and is then cached. Invalid slugs still 404 via notFound().
 */
const route = createLandingRoute("areas", {
  prerender: (pages) => pages.filter((page) => PRERENDERED_AREA_SLUGS.has(page.slug)),
});

/** Cache an on-demand page for a year; content only changes on redeploy. */
export const revalidate = 31536000;

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
