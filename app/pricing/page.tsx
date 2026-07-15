import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { PricingPreview } from "@/components/sections/home/pricing-preview";
import { ComparisonTable } from "@/components/sections/pricing/comparison-table";
import { Faq } from "@/components/sections/home/faq";
import { Cta } from "@/components/sections/home/cta";
import { withBaseKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for business websites, growth-stage builds, and enterprise-scale engagements from ROVQIX.",
  keywords: withBaseKeywords(
    "website development pricing",
    "web design cost",
    "SaaS development pricing",
    "custom website quote"
  ),
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Investment that scales with ambition."
        description="Every engagement is scoped precisely — these tiers are a starting point for the conversation."
      />
      <PricingPreview showHeading={false} showCompareLink={false} ctaHref="/contact" />
      <ComparisonTable />
      <Faq />
      <Cta />
    </>
  );
}
