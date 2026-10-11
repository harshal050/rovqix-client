import type { Metadata } from "next";

import { LandingHub } from "@rovqix/shared/components/sections/landing/landing-hub";
import { absoluteUrl, withBaseKeywords } from "@/lib/seo";
import { getLandingPagesByGroup } from "@rovqix/shared/lib/content/landing";

export const metadata: Metadata = {
  title: "What Things Cost",
  description:
    "What a website, ecommerce store, SaaS platform or custom application actually costs to build in 2026, with the variables that move the number.",
  keywords: withBaseKeywords(
    ...getLandingPagesByGroup("cost").flatMap((page) => [
      page.primaryKeyword,
      ...page.secondaryKeywords.slice(0, 2),
    ])
  ),
  alternates: { canonical: absoluteUrl("/cost") },
  openGraph: {
    type: "website",
    title: "What Things Cost",
    description:
      "What a website, ecommerce store, SaaS platform or custom application actually costs to build in 2026, with the variables that move the number.",
    url: absoluteUrl("/cost"),
  },
};

export default function CostHubPage() {
  return <LandingHub group="cost" />;
}
