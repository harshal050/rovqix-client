import type { Metadata } from "next";

import { LandingHub } from "@/components/sections/landing/landing-hub";
import { absoluteUrl, withBaseKeywords } from "@/lib/seo";
import { getLandingPagesByGroup } from "@/lib/content/landing";

export const metadata: Metadata = {
  title: "Industries We Build For",
  description:
    "Web development for SaaS, healthcare, fintech, real estate, ecommerce and agencies — with the compliance, integration and conversion requirements each one brings.",
  keywords: withBaseKeywords(
    ...getLandingPagesByGroup("industries").flatMap((page) => [
      page.primaryKeyword,
      ...page.secondaryKeywords.slice(0, 2),
    ])
  ),
  alternates: { canonical: absoluteUrl("/industries") },
  openGraph: {
    type: "website",
    title: "Industries We Build For",
    description:
      "Web development for SaaS, healthcare, fintech, real estate, ecommerce and agencies — with the compliance, integration and conversion requirements each one brings.",
    url: absoluteUrl("/industries"),
  },
};

export default function IndustriesHubPage() {
  return <LandingHub group="industries" />;
}
