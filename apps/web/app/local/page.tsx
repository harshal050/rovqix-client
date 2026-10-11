import type { Metadata } from "next";

import { LandingHub } from "@rovqix/shared/components/sections/landing/landing-hub";
import { absoluteUrl, withBaseKeywords } from "@/lib/seo";
import { getLandingPagesByGroup } from "@rovqix/shared/lib/content/landing";

export const metadata: Metadata = {
  title: "Local Business Websites",
  description:
    "Starter websites for barbers, salons, restaurants, trades and local shops. Built on a proven template, live in about a week from $349, and yours to keep.",
  keywords: withBaseKeywords(
    ...getLandingPagesByGroup("local").flatMap((page) => [
      page.primaryKeyword,
      ...page.secondaryKeywords.slice(0, 2),
    ])
  ),
  alternates: { canonical: absoluteUrl("/local") },
  openGraph: {
    type: "website",
    title: "Local Business Websites from $349",
    description:
      "Starter websites for barbers, salons, restaurants, trades and local shops. Live in about a week, and yours to keep.",
    url: absoluteUrl("/local"),
  },
};

export default function LocalHubPage() {
  return <LandingHub group="local" />;
}
