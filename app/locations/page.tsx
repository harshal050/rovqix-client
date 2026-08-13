import type { Metadata } from "next";

import { LandingHub } from "@/components/sections/landing/landing-hub";
import { absoluteUrl, withBaseKeywords } from "@/lib/seo";
import { getLandingPagesByGroup } from "@/lib/content/landing";

export const metadata: Metadata = {
  title: "Where We Work",
  description:
    "ROVQIX works with companies across the United States, United Kingdom, Canada and Australia — remote-first, with overlapping hours and contracts in your currency.",
  keywords: withBaseKeywords(
    ...getLandingPagesByGroup("locations").flatMap((page) => [
      page.primaryKeyword,
      ...page.secondaryKeywords.slice(0, 2),
    ])
  ),
  alternates: { canonical: absoluteUrl("/locations") },
  openGraph: {
    type: "website",
    title: "Where We Work",
    description:
      "ROVQIX works with companies across the United States, United Kingdom, Canada and Australia — remote-first, with overlapping hours and contracts in your currency.",
    url: absoluteUrl("/locations"),
  },
};

export default function LocationsHubPage() {
  return <LandingHub group="locations" />;
}
