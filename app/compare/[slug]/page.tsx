import { createLandingRoute } from "@/lib/content/landing/route";

const route = createLandingRoute("compare");

export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
