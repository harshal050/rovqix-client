import type { Metadata } from "next";

import { LandingHub } from "@/components/sections/landing/landing-hub";
import { absoluteUrl, withBaseKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Starter websites for local businesses across 25 US metros — barbers, salons, restaurants, trades and shops. From $349, live in about a week.",
  keywords: withBaseKeywords("local business website design", "small business web design near me"),
  alternates: { canonical: absoluteUrl("/areas") },
  openGraph: {
    type: "website",
    title: "Service Areas",
    description:
      "Starter websites for local businesses across 25 US metros. From $349, live in about a week.",
    url: absoluteUrl("/areas"),
  },
};

export default function AreasHubPage() {
  return <LandingHub group="areas" />;
}
