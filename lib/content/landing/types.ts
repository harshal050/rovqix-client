import type { ArticleFaq, ArticleSection, Block } from "@/lib/content/types";

export type { Block, ArticleSection, ArticleFaq };

/** The page families. Each maps to a route segment and a hub page. */
export type LandingGroup =
  | "services"
  | "hire"
  | "locations"
  | "industries"
  | "cost"
  | "compare"
  /** Small local businesses. Template-based starter work, not custom builds. */
  | "local"
  /** Generated business-type x metro pages. See service-areas.ts. */
  | "areas";

export type Deliverable = {
  title: string;
  description: string;
  /** Lucide icon name, resolved through the shared DynamicIcon component. */
  icon: string;
};

export type PricingTier = {
  name: string;
  /** Indicative range, stated in USD for international enquiries. */
  range: string;
  timeline: string;
  bestFor: string;
  includes: string[];
  featured?: boolean;
};

export type ProofPoint = {
  metric: string;
  label: string;
};

/**
 * A commercial landing page. Same content model for service, hire, location
 * and industry pages — one template renders all of them, so a new page is a
 * data entry rather than a new route.
 */
export type LandingPage = {
  slug: string;
  group: LandingGroup;

  /** H1. */
  title: string;
  /** <title>, under ~60 characters where possible. */
  seoTitle: string;
  /** Meta description, 140–160 characters. */
  description: string;
  /** Card summary on the hub page. */
  excerpt: string;
  eyebrow: string;

  primaryKeyword: string;
  secondaryKeywords: string[];

  /** Direct, self-contained answer under the H1 — the AEO/extraction unit. */
  answer: string;
  /** Short supporting paragraph in the hero. */
  intro: string;

  proof: ProofPoint[];
  deliverables: Deliverable[];
  sections: ArticleSection[];
  pricing?: PricingTier[];
  faqs: ArticleFaq[];

  /** Region this page speaks to, used in Service structured data. */
  areaServed?: string[];
  /** Related landing pages, by slug within any group. */
  related?: string[];
  /** Supporting articles from the blog. */
  readMore?: { label: string; href: string }[];

  publishedAt: string;
  updatedAt?: string;
};
