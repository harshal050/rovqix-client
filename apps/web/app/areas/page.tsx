import type { Metadata } from "next";

import { areaCities } from "@rovqix/areas";
import { AreasDirectory } from "@/components/sections/landing/areas-directory";
import { absoluteUrl, withBaseKeywords } from "@/lib/seo";

const description = `Starter websites for local businesses across ${areaCities.length.toLocaleString()} cities — barbers, salons, restaurants, trades and shops. From $349, live in about a week.`;

export const metadata: Metadata = {
  title: "Service Areas",
  description,
  keywords: withBaseKeywords("local business website design", "small business web design near me"),
  alternates: { canonical: absoluteUrl("/areas") },
  openGraph: {
    type: "website",
    title: "Service Areas",
    description,
    url: absoluteUrl("/areas"),
  },
};

export default function AreasHubPage() {
  return <AreasDirectory />;
}
