import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/api/settings";
import { PageHero } from "@/components/shared/page-hero";
import { MissionVision } from "@/components/sections/about/mission-vision";
import { Values } from "@/components/sections/about/values";
import { Timeline } from "@/components/sections/about/timeline";
import { Capabilities } from "@/components/sections/about/capabilities";
import { Stats } from "@/components/sections/home/stats";
import { TechStack } from "@/components/sections/home/tech-stack";
import { Cta } from "@/components/sections/home/cta";
import { withBaseKeywords } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ROVQIX is a premium website development studio founded on craft, transparency, and product-team discipline.",
  keywords: withBaseKeywords(
    "about ROVQIX",
    "web design agency team",
    "website development studio",
    "digital product agency"
  ),
};

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <PageHero
        eyebrow="About ROVQIX"
        title={settings.aboutStory.title}
        description={settings.aboutStory.description}
      />
      <MissionVision />
      <Stats />
      <Values />
      <Timeline />
      <Capabilities />
      <TechStack />
      <Cta />
    </>
  );
}
