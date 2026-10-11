import type { Metadata } from "next";
import { PageHero } from "@rovqix/shared/components/shared/page-hero";
import { Process } from "@/components/sections/home/process";
import { Workflow } from "@/components/sections/home/workflow";
import { Faq } from "@/components/sections/home/faq";
import { Cta } from "@/components/sections/home/cta";
import { withBaseKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How ROVQIX takes a project from first conversation to launch — discovery, design, development, testing, and ongoing support.",
  keywords: withBaseKeywords(
    "web development process",
    "website design workflow",
    "product discovery to launch",
    "website development timeline"
  ),
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Process"
        title="From first conversation to launch day."
        description="Seven deliberate stages, the same for every engagement — so you always know what's next."
      />
      <Process />
      <Workflow />
      <Faq />
      <Cta />
    </>
  );
}
