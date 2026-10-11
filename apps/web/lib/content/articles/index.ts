import type { Article, ArticleSection, Block, ClusterId } from "@rovqix/shared/lib/content/types";
import { headingId } from "@rovqix/shared/lib/content/format";

import { nextjsArticles } from "@/lib/content/articles/nextjs";
import { reactArticles } from "@/lib/content/articles/react";
import { backendArticles } from "@/lib/content/articles/backend";
import { databaseArticles } from "@/lib/content/articles/databases";
import { devopsArticles } from "@/lib/content/articles/devops";
import { cloudArticles } from "@/lib/content/articles/cloud";
import { performanceArticles } from "@/lib/content/articles/performance";
import { securityArticles } from "@/lib/content/articles/security";
import { seoArticles } from "@/lib/content/articles/seo";
import { aiSeoArticles } from "@/lib/content/articles/ai-seo";
import { practiceArticles } from "@/lib/content/articles/practice";
import { smallBusinessArticles } from "@/lib/content/articles/small-business";
import { smallBusinessArticles2 } from "@/lib/content/articles/small-business-2";

/** Every static article, newest first. */
export const articles: Article[] = [
  ...nextjsArticles,
  ...reactArticles,
  ...backendArticles,
  ...databaseArticles,
  ...devopsArticles,
  ...cloudArticles,
  ...performanceArticles,
  ...securityArticles,
  ...seoArticles,
  ...aiSeoArticles,
  ...practiceArticles,
  ...smallBusinessArticles,
  ...smallBusinessArticles2,
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

const bySlug = new Map(articles.map((article) => [article.slug, article]));

export function getArticleBySlug(slug: string): Article | undefined {
  return bySlug.get(slug);
}

export function getArticleSlugs(): string[] {
  return articles.map((article) => article.slug);
}

export function getArticlesByCluster(cluster: ClusterId): Article[] {
  return articles.filter((article) => article.cluster === cluster);
}

export function getArticleCategories(): string[] {
  return Array.from(new Set(articles.map((article) => article.category))).sort();
}

/**
 * Explicit `related` slugs first, then same-cluster neighbours, so every
 * article always ships a full related-links block for the topic cluster.
 */
export function getRelatedArticles(article: Article, limit = 3): Article[] {
  const picked: Article[] = [];
  const seen = new Set([article.slug]);

  for (const slug of article.related ?? []) {
    const match = bySlug.get(slug);
    if (match && !seen.has(match.slug)) {
      picked.push(match);
      seen.add(match.slug);
    }
  }

  for (const candidate of getArticlesByCluster(article.cluster)) {
    if (picked.length >= limit) break;
    if (seen.has(candidate.slug)) continue;
    picked.push(candidate);
    seen.add(candidate.slug);
  }

  for (const candidate of articles) {
    if (picked.length >= limit) break;
    if (seen.has(candidate.slug)) continue;
    picked.push(candidate);
    seen.add(candidate.slug);
  }

  return picked.slice(0, limit);
}

/** Previous/next within the same cluster keeps navigation topically relevant. */
export function getArticleNeighbours(article: Article): {
  previous?: Article;
  next?: Article;
} {
  const siblings = getArticlesByCluster(article.cluster);
  const index = siblings.findIndex((item) => item.slug === article.slug);
  return {
    previous: index > 0 ? siblings[index - 1] : undefined,
    next: index >= 0 && index < siblings.length - 1 ? siblings[index + 1] : undefined,
  };
}

function blockWords(block: Block): number {
  switch (block.type) {
    case "p":
      return block.text.split(/\s+/).length;
    case "list":
      return block.items.join(" ").split(/\s+/).length;
    case "table":
      return [...block.head, ...block.rows.flat()].join(" ").split(/\s+/).length;
    case "code":
      return block.code.split(/\s+/).length;
    case "callout":
      return `${block.title} ${block.text}`.split(/\s+/).length;
    case "quote":
      return block.text.split(/\s+/).length;
  }
}

export function getArticleWordCount(article: Article): number {
  const sectionWords = article.sections.reduce((total, section) => {
    const own = section.body.reduce((sum, block) => sum + blockWords(block), 0);
    const sub = (section.subsections ?? []).reduce(
      (sum, subsection) =>
        sum + subsection.body.reduce((inner, block) => inner + blockWords(block), 0),
      0
    );
    return total + own + sub + section.heading.split(/\s+/).length;
  }, 0);

  const faqWords = article.faqs.reduce(
    (total, faq) => total + `${faq.question} ${faq.answer}`.split(/\s+/).length,
    0
  );

  return sectionWords + faqWords + article.answer.split(/\s+/).length;
}

/** Derived, never hand-written, so it can't drift from the actual content. */
export function getReadTime(article: Article): string {
  return `${Math.max(1, Math.round(getArticleWordCount(article) / 225))} min read`;
}

export function getTableOfContents(sections: ArticleSection[]) {
  return sections.map((section) => ({
    id: headingId(section.heading),
    label: section.heading,
    children: (section.subsections ?? []).map((subsection) => ({
      id: headingId(subsection.heading),
      label: subsection.heading,
    })),
  }));
}

export function getLastUpdated(article: Article): string {
  return article.updatedAt ?? article.publishedAt;
}

/** Kept here so existing article imports keep working. */
export { headingId };
