import type { Metadata } from "next";

import { siteConfig } from "./constants/site";
import type { LandingPage } from "./content/landing/types";
import { landingPath } from "./content/landing";
import { getGroup } from "./content/landing/groups";

export const baseKeywords = [
  "ROVQIX",
  "website development company",
  "custom website design",
  "business website development",
  "startup website design",
  "SaaS platform development",
  "AI website development",
  "ecommerce website development",
  "landing page design agency",
  "premium web design studio",
  "Next.js development agency",
  "custom software development",
];

/** Absolute URL on the main site. Already-absolute URLs (subdomain pages) pass through. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function withBaseKeywords(...extra: string[]): string[] {
  return Array.from(new Set([...extra, ...baseKeywords]));
}

export function keywordsFromText(text: string, limit = 8): string[] {
  const stopWords = new Set([
    "the", "and", "for", "with", "that", "this", "from", "your", "you", "are",
    "was", "were", "have", "has", "had", "not", "but", "can", "will", "into",
    "our", "their", "its", "how", "why", "what", "when", "where", "who", "a",
    "an", "of", "to", "in", "on", "is", "it", "as", "at", "by", "or", "be",
  ]);
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stopWords.has(word));
  return Array.from(new Set(words)).slice(0, limit);
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    sameAs: [
      "https://x.com/rovqix",
      "http://instagram.com/rovqix",
      "https://www.youtube.com/@rovqix",
      "https://linkedin.com/in/rovqix-tech-448623412",
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function organizationRef() {
  return {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/opengraph-image") },
  };
}

/* ------------------------------------------------------------------ *
 * Commercial landing pages (lib/content/landing)
 * ------------------------------------------------------------------ */

export function landingMetadata(page: LandingPage): Metadata {
  const url = absoluteUrl(landingPath(page));
  const image = absoluteUrl("/opengraph-image");

  return {
    title: page.seoTitle,
    description: page.description,
    keywords: Array.from(
      new Set([
        page.primaryKeyword,
        ...page.secondaryKeywords,
        ...keywordsFromText(page.title, 6),
        ...baseKeywords,
      ])
    ),
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type: "website",
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
      site: "@rovqix",
    },
  };
}

export function landingBreadcrumbs(page: LandingPage) {
  const group = getGroup(page.group);
  return [
    { name: "Home", path: "/" },
    { name: group.name, path: `/${group.segment}` },
    { name: page.title, path: landingPath(page) },
  ];
}

/**
 * Service structured data with the offer range and area served, plus the
 * page's FAQs surfaced as a separate FAQPage block by the template.
 */
export function serviceJsonLd(page: LandingPage) {
  const url = absoluteUrl(landingPath(page));
  const cheapest = page.pricing?.[0]?.range;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url,
    serviceType: page.primaryKeyword,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      logo: { "@type": "ImageObject", url: absoluteUrl("/opengraph-image") },
    },
    areaServed: (page.areaServed ?? ["Worldwide"]).map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasOfferCatalog: page.pricing
      ? {
          "@type": "OfferCatalog",
          name: `${page.title} packages`,
          itemListElement: page.pricing.map((tier) => ({
            "@type": "Offer",
            name: tier.name,
            description: tier.bestFor,
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "USD",
              description: tier.range,
            },
          })),
        }
      : undefined,
    offers: cheapest
      ? { "@type": "Offer", priceCurrency: "USD", description: cheapest, url }
      : undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function landingListJsonLd(
  pages: LandingPage[],
  meta: { name: string; description: string; path: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.name,
    description: meta.description,
    url: absoluteUrl(meta.path),
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    publisher: organizationRef(),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: pages.length,
      itemListElement: pages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(landingPath(page)),
        name: page.title,
      })),
    },
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceItemListJsonLd(
  services: { title: string; description: string; id: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        url: absoluteUrl(`/services#${service.id}`),
      },
    })),
  };
}
