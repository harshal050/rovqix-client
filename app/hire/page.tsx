import type { Metadata } from "next";

import { LandingHub } from "@/components/sections/landing/landing-hub";
import { absoluteUrl, withBaseKeywords } from "@/lib/seo";
import { getLandingPagesByGroup } from "@/lib/content/landing";

export const metadata: Metadata = {
  title: "Hire Developers",
  description:
    "Hire vetted Next.js, React, Node.js and full-stack developers, or a dedicated remote team, with overlapping hours for US, UK and Australian clients.",
  keywords: withBaseKeywords(
    ...getLandingPagesByGroup("hire").flatMap((page) => [
      page.primaryKeyword,
      ...page.secondaryKeywords.slice(0, 2),
    ])
  ),
  alternates: { canonical: absoluteUrl("/hire") },
  openGraph: {
    type: "website",
    title: "Hire Developers",
    description:
      "Hire vetted Next.js, React, Node.js and full-stack developers, or a dedicated remote team, with overlapping hours for US, UK and Australian clients.",
    url: absoluteUrl("/hire"),
  },
};

export default function HireHubPage() {
  return <LandingHub group="hire" />;
}
