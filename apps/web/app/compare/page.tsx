import type { Metadata } from "next";

import { LandingHub } from "@rovqix/shared/components/sections/landing/landing-hub";
import { absoluteUrl, withBaseKeywords } from "@/lib/seo";
import { getLandingPagesByGroup } from "@rovqix/shared/lib/content/landing";

export const metadata: Metadata = {
  title: "Comparisons",
  description:
    "Agency or freelancer, in-house or outsourced, WordPress or custom, fixed price or hourly. Honest comparisons including when our answer is not to hire us.",
  keywords: withBaseKeywords(
    ...getLandingPagesByGroup("compare").flatMap((page) => [
      page.primaryKeyword,
      ...page.secondaryKeywords.slice(0, 2),
    ])
  ),
  alternates: { canonical: absoluteUrl("/compare") },
  openGraph: {
    type: "website",
    title: "Comparisons",
    description:
      "Agency or freelancer, in-house or outsourced, WordPress or custom, fixed price or hourly. Honest comparisons including when our answer is not to hire us.",
    url: absoluteUrl("/compare"),
  },
};

export default function CompareHubPage() {
  return <LandingHub group="compare" />;
}
