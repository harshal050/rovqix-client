import { siteConfig } from "@/lib/constants/site";
import type { BlogPostItem } from "@/lib/api/blog";
import type { CareerItem } from "@/lib/api/careers";

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
