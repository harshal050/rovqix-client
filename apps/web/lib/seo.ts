/**
 * Main-site SEO helpers. Everything shared with the area subdomains lives in
 * seo-base.ts and is re-exported here, so pages import from one place.
 */
import type { Metadata } from "next";

import { siteConfig } from "@rovqix/shared/lib/constants/site";
import type { BlogPostItem } from "@/lib/api/blog";
import type { CareerItem } from "@/lib/api/careers";
import type { Article } from "@rovqix/shared/lib/content/types";
import { getAuthor } from "@/lib/content/authors";
import { getCluster } from "@/lib/content/clusters";
import { getArticleWordCount, getLastUpdated } from "@/lib/content/articles";
import {
  absoluteUrl,
  keywordsFromText,
  organizationRef,
  withBaseKeywords,
} from "@rovqix/shared/lib/seo-base";

export * from "@rovqix/shared/lib/seo-base";

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
