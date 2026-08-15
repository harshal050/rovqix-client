import { createLandingRoute } from "@/lib/content/landing/route";

const route = createLandingRoute("areas");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
