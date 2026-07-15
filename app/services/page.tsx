import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { ServiceDetailList } from "@/components/sections/services/service-detail-list";
import { Process } from "@/components/sections/home/process";
import { PricingPreview } from "@/components/sections/home/pricing-preview";
import { Faq } from "@/components/sections/home/faq";
import { Cta } from "@/components/sections/home/cta";
import { JsonLd } from "@/components/shared/json-ld";
import { getServices } from "@/lib/api/services";
import { serviceItemListJsonLd, withBaseKeywords } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const services = await getServices();
  return {
    title: "Services",
    description:
      "Business websites, startup launches, SaaS platforms, AI products, ecommerce, and custom software — built by ROVQIX.",
    keywords: withBaseKeywords(...services.map((s) => s.title)),
  };
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <JsonLd data={serviceItemListJsonLd(services)} />
      <PageHero
        eyebrow="Services"
        title="Every kind of digital product, one studio."
        description="Whatever stage your business is at, we scope the exact engagement it needs — not a one-size-fits-all package."
      />
      <ServiceDetailList />
      <Process />
      <PricingPreview />
      <Faq />
      <Cta />
    </>
  );
}
