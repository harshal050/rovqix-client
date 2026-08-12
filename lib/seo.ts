import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants/site";
import type { BlogPostItem } from "@/lib/api/blog";
import type { CareerItem } from "@/lib/api/careers";
import type { Article } from "@/lib/content/types";
import { getAuthor } from "@/lib/content/authors";
import { getCluster } from "@/lib/content/clusters";
import { getArticleWordCount, getLastUpdated } from "@/lib/content/articles";
import type { LandingPage } from "@/lib/content/landing/types";
import { landingPath } from "@/lib/content/landing";
import { getGroup } from "@/lib/content/landing/groups";

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

export function absoluteUrl(path: string): string {
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

export function blogPostingJsonLd(post: BlogPostItem) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    url: absoluteUrl(`/blog/${post.slug}`),
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    keywords: withBaseKeywords(post.category, ...keywordsFromText(post.title)).join(", "),
  };
}

/* ------------------------------------------------------------------ *
 * Static article library (lib/content/articles)
 * ------------------------------------------------------------------ */

export function articlePath(slug: string): string {
  return `/blog/${slug}`;
}

/**
 * Same-origin path for the generated cover image. Use this for next/image —
 * an absolute URL would require the host in next.config's remotePatterns.
 */
export function articleImagePath(slug: string): string {
  return `${articlePath(slug)}/opengraph-image`;
}

/** Absolute variant, for metadata and structured data where a full URL is required. */
export function articleImageUrl(slug: string): string {
  return absoluteUrl(articleImagePath(slug));
}

export function articleKeywords(article: Article): string[] {
  return Array.from(
    new Set([
      article.primaryKeyword,
      ...article.secondaryKeywords,
      article.category,
      ...keywordsFromText(article.title, 6),
    ])
  );
}

export function organizationRef() {
  return {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: { "@type": "ImageObject", url: absoluteUrl("/opengraph-image") },
  };
}

export function personJsonLd(authorId: Article["authorId"]) {
  const author = getAuthor(authorId);
  return {
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    knowsAbout: author.expertise,
    url: author.url,
    sameAs: author.sameAs,
    worksFor: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };
}

export function articleJsonLd(article: Article) {
  const url = absoluteUrl(articlePath(article.slug));
  const cluster = getCluster(article.cluster);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title.slice(0, 110),
    description: article.description,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en",
    datePublished: article.publishedAt,
    dateModified: getLastUpdated(article),
    articleSection: article.category,
    wordCount: getArticleWordCount(article),
    keywords: articleKeywords(article).join(", "),
    about: [article.primaryKeyword, ...article.secondaryKeywords.slice(0, 4)].map((term) => ({
      "@type": "Thing",
      name: term,
    })),
    image: {
      "@type": "ImageObject",
      url: articleImageUrl(article.slug),
      width: 1200,
      height: 630,
      caption: `${article.title} — ${siteConfig.name}`,
    },
    author: personJsonLd(article.authorId),
    publisher: organizationRef(),
    isPartOf: {
      "@type": "Blog",
      name: `${siteConfig.name} Blog`,
      url: absoluteUrl("/blog"),
    },
    citation: article.references.map((reference) => ({
      "@type": "WebPage",
      name: reference.label,
      url: reference.href,
    })),
    mentions: [{ "@type": "Thing", name: cluster.name }],
  };
}

export function articleBreadcrumbs(article: Article) {
  const cluster = getCluster(article.cluster);
  return [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: cluster.name, path: `/blog/topics/${cluster.slug}` },
    { name: article.title, path: articlePath(article.slug) },
  ];
}

/**
 * Single source of truth for an article's <head>: canonical, robots,
 * Open Graph and Twitter metadata are all derived here so no article page
 * can ship without them.
 */
export function articleMetadata(article: Article): Metadata {
  const url = absoluteUrl(articlePath(article.slug));
  const image = articleImageUrl(article.slug);
  const author = getAuthor(article.authorId);

  return {
    title: article.seoTitle,
    description: article.description,
    keywords: articleKeywords(article),
    authors: [{ name: author.name, url: author.url }],
    creator: author.name,
    publisher: siteConfig.name,
    category: article.category,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      publishedTime: article.publishedAt,
      modifiedTime: getLastUpdated(article),
      authors: [author.url],
      section: article.category,
      tags: articleKeywords(article),
      images: [{ url: image, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [image],
      creator: "@rovqix",
      site: "@rovqix",
    },
  };
}

/** ItemList of articles for a blog index or topic hub page. */
export function articleListJsonLd(
  articles: Article[],
  page: { name: string; description: string; path: string }
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.name,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
    publisher: organizationRef(),
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(articlePath(article.slug)),
        name: article.title,
      })),
    },
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

export function jobPostingJsonLd(job: CareerItem) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: new Date().toISOString().slice(0, 10),
    employmentType: job.type.toUpperCase().replace(/[\s-]+/g, "_"),
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
    },
    jobLocationType: job.location.toLowerCase().includes("remote") ? "TELECOMMUTE" : undefined,
    applicantLocationRequirements: job.location.toLowerCase().includes("remote")
      ? { "@type": "Country", name: "Worldwide" }
      : undefined,
    jobLocation: job.location.toLowerCase().includes("remote")
      ? undefined
      : {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: job.location },
        },
  };
}
