/**
 * Content model for the static, SEO-first article library.
 *
 * Everything an article page needs — metadata, structured data, breadcrumbs,
 * internal links, FAQs, references — is derived from this one object, so a new
 * article only ever means adding a data entry. No per-article page files.
 */

export type ClusterId =
  | "nextjs"
  | "react"
  | "backend"
  | "databases"
  | "devops"
  | "cloud"
  | "performance"
  | "security"
  | "seo"
  | "ai-seo";

export type Block =
  | { type: "p"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string }
  | { type: "code"; lang: string; code: string; caption?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; cite?: string };

export type ArticleSection = {
  /** Rendered as an H2. Phrase as a question where the intent is a question. */
  heading: string;
  /** Optional one-sentence direct answer rendered above the body for AEO. */
  answer?: string;
  body: Block[];
  subsections?: { heading: string; body: Block[] }[];
};

export type ArticleFaq = { question: string; answer: string };

export type ArticleLink = { label: string; href: string };

export type Article = {
  slug: string;
  /** H1 + card title. */
  title: string;
  /** <title> — keep under ~60 chars where possible. */
  seoTitle: string;
  /** Meta description — 140-160 chars. */
  description: string;
  /** Card/listing summary. */
  excerpt: string;
  category: string;
  cluster: ClusterId;
  primaryKeyword: string;
  secondaryKeywords: string[];
  authorId: AuthorId;
  publishedAt: string;
  updatedAt?: string;
  /** Direct, self-contained answer shown immediately under the H1. */
  answer: string;
  takeaways: string[];
  sections: ArticleSection[];
  faqs: ArticleFaq[];
  /** Authoritative external sources. */
  references: ArticleLink[];
  /** Hand-picked internal links (services, pages). Related posts are automatic. */
  internalLinks?: ArticleLink[];
  /** Slugs of related articles. Falls back to same-cluster articles. */
  related?: string[];
};

export type AuthorId = "harshal" | "rovqix-engineering" | "rovqix-growth";

export type Author = {
  id: AuthorId;
  name: string;
  role: string;
  bio: string;
  /** Short expertise line used for E-E-A-T and Person structured data. */
  expertise: string[];
  url: string;
  sameAs?: string[];
  initials: string;
};
