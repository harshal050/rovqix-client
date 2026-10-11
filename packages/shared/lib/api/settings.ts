import { siteConfig } from "../constants/site";
import { stats as staticStats } from "../constants/stats";
import { missionVision, coreValues as staticCoreValues, timeline as staticTimeline, capabilities as staticCapabilities } from "../constants/about";

export type SiteSettingsData = {
  companyName: string;
  tagline: string;
  description: string;
  email: string;
  emailHref: string;
  phone: string;
  phoneHref: string;
  whatsappHref: string;
  businessHours: string;
  socials: { twitter: string; instagram: string; youtube: string; linkedin: string };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    subtext: string;
    statLabel: string;
    statValue: number;
    statSuffix: string;
    statCaption: string;
  };
  stats: { label: string; value: number; suffix: string }[];
  mission: { title: string; text: string };
  vision: { title: string; text: string };
  aboutStory: { title: string; description: string };
  coreValues: { title: string; description: string; icon: string }[];
  timeline: { year: string; title: string; description: string }[];
  capabilities: { title: string; description: string; icon: string }[];
  cta: { title: string; description: string };
};

const siteSettings: SiteSettingsData = {
  companyName: siteConfig.name,
  tagline: siteConfig.tagline,
  description: siteConfig.description,
  email: siteConfig.email,
  emailHref: siteConfig.emailHref,
  phone: siteConfig.phone,
  phoneHref: siteConfig.phoneHref,
  whatsappHref: siteConfig.whatsappHref,
  businessHours: "Mon – Sat, 10:00 AM – 7:00 PM IST",
  socials: {
    twitter: "https://x.com/rovqix",
    instagram: "http://instagram.com/rovqix",
    youtube: "https://www.youtube.com/@rovqix",
    linkedin: "https://linkedin.com/in/rovqix-tech-448623412",
  },
  hero: {
    eyebrow: "Premium Website Development Studio",
    line1: "Digital products",
    line2: "that grow",
    line3: "your business.",
    subtext:
      "ROVQIX designs and builds award-worthy business, SaaS, and AI websites — engineered with the craft of a design studio and the precision of a product team.",
    statLabel: "Projects Delivered",
    statValue: 120,
    statSuffix: "+",
    statCaption: "Across 14+ countries",
  },
  stats: staticStats.map((s) => ({ ...s })),
  mission: { title: "Our Mission", text: missionVision.mission },
  vision: { title: "Our Vision", text: missionVision.vision },
  aboutStory: {
    title: "A studio built around one obsession: craft.",
    description:
      "We started ROVQIX to prove that agency speed and product-team quality aren't mutually exclusive.",
  },
  coreValues: staticCoreValues.map((v) => ({ ...v })),
  timeline: staticTimeline.map((t) => ({ ...t })),
  capabilities: staticCapabilities.map((c) => ({ ...c })),
  cta: {
    title: "Let's build something worth remembering.",
    description: "Tell us about your product. We'll get back within one business day with next steps.",
  },
};

export async function getSiteSettings(): Promise<SiteSettingsData> {
  return siteSettings;
}
