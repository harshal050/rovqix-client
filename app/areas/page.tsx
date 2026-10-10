import type { Metadata } from "next";

import { AreasDirectory } from "@/components/sections/landing/areas-directory";
import { serviceAreaCities } from "@/lib/content/landing/service-areas";
import { absoluteUrl, withBaseKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    `Starter websites for local businesses across ${serviceAreaCities.length} US metros — barbers, salons, restaurants, trades and shops. From $349, live in about a week.`,
  keywords: withBaseKeywords("local business website design", "small business web design near me"),
  alternates: { canonical: absoluteUrl("/areas") },
  openGraph: {
    type: "website",
    title: "Service Areas",
    description:
      `Starter websites for local businesses across ${serviceAreaCities.length} US metros. From $349, live in about a week.`,
    url: absoluteUrl("/areas"),
  },
};

export default function AreasHubPage() {
  return <AreasDirectory />;
}
