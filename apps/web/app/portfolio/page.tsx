import type { Metadata } from "next";
import { getProjects } from "@/lib/api/projects";
import { PageHero } from "@rovqix/shared/components/shared/page-hero";
import { PortfolioGrid } from "@/components/sections/portfolio/portfolio-grid";
import { Cta } from "@/components/sections/home/cta";
import { withBaseKeywords } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const projects = await getProjects();
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  return {
    title: "Portfolio",
    description:
      "Selected case studies from ROVQIX — business websites, SaaS platforms, AI products, and ecommerce stores.",
    keywords: withBaseKeywords("website portfolio", "case studies", ...categories),
  };
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Selected work, not everything."
        description="A curated set of case studies across business, startup, SaaS, and AI-native products."
      />
      <PortfolioGrid projects={projects} />
      <Cta />
    </>
  );
}
