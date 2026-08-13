import type {
  ArticleFaq,
  ArticleSection,
  Deliverable,
  LandingPage,
} from "@/lib/content/landing/types";
import {
  localReadMore,
  starterFaqs,
  starterPricing,
  starterProof,
} from "@/lib/content/landing/local-shared";

/**
 * The unique half of a local business page. Everything shared — pricing tiers,
 * proof strip, general FAQs, area served — is filled in by makeLocalPage, so
 * each entry below contains only what genuinely differs between business types.
 */
export type LocalSpec = {
  slug: string;
  /** Business type, shown as the eyebrow. */
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  answer: string;
  intro: string;
  /** 4–6 things this specific business type actually needs. */
  deliverables: Deliverable[];
  /** 2–3 sections about how this trade's customers behave. */
  sections: ArticleSection[];
  /** Questions specific to this trade. Shared ones are appended after. */
  faqs: ArticleFaq[];
  related?: string[];
  readMore?: { label: string; href: string }[];
};

export function makeLocalPage(spec: LocalSpec): LandingPage {
  return {
    slug: spec.slug,
    group: "local",
    title: spec.title,
    seoTitle: spec.seoTitle,
    description: spec.description,
    excerpt: spec.excerpt,
    eyebrow: spec.eyebrow,
    primaryKeyword: spec.primaryKeyword,
    secondaryKeywords: spec.secondaryKeywords,
    answer: spec.answer,
    intro: spec.intro,
    proof: starterProof,
    deliverables: spec.deliverables,
    sections: spec.sections,
    pricing: starterPricing,
    // Page-specific questions first, then the shared ones everyone asks.
    faqs: [...spec.faqs, ...starterFaqs],
    areaServed: ["United States"],
    related: spec.related,
    readMore: [...(spec.readMore ?? []), ...localReadMore],
    publishedAt: "2026-08-13",
  };
}

export function makeLocalPages(specs: LocalSpec[]): LandingPage[] {
  return specs.map(makeLocalPage);
}
