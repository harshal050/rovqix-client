import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

import { getBlogPosts, getBlogPostBySlug } from "@/lib/api/blog";
import { getArticleBySlug, getArticleSlugs } from "@/lib/content/articles";
import { ArticleLayout } from "@/components/sections/blog/article/article-layout";
import { AuroraBackground } from "@rovqix/shared/components/shared/aurora-background";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import { Badge } from "@rovqix/shared/components/ui/badge";
import { BlogCard } from "@/components/sections/blog/blog-card";
import { NewsletterBanner } from "@/components/sections/blog/newsletter-banner";
import { JsonLd } from "@rovqix/shared/components/shared/json-ld";
import { Breadcrumbs } from "@rovqix/shared/components/sections/blog/article/breadcrumbs";
import { formatArticleDate } from "@rovqix/shared/lib/content/format";
import {
  absoluteUrl,
  articleMetadata,
  blogPostingJsonLd,
  breadcrumbJsonLd,
  keywordsFromText,
  withBaseKeywords,
} from "@/lib/seo";

/**
 * One route serves two sources: the static article library
 * (lib/content/articles) and any posts coming from the admin API. Static
 * articles render through the full SEO template; API posts keep the simpler
 * layout they were written for.
 */
// Static export: only the params listed below exist.
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  const slugs = new Set([...getArticleSlugs(), ...posts.map((post) => post.slug)]);
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = getArticleBySlug(slug);
  if (article) return articleMetadata(article);

  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  const keywords = withBaseKeywords(
    post.category,
    ...keywordsFromText(post.title),
    ...keywordsFromText(post.excerpt, 12)
  );
  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: post.title,
    description: post.excerpt,
    keywords,
    authors: [{ name: "ROVQIX" }],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: "article",
      publishedTime: post.date,
      section: post.category,
      tags: keywords,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);
  if (article) return <ArticleLayout article={article} />;

  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  const allPosts = await getBlogPosts();
  const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd data={blogPostingJsonLd(post)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <article className="relative overflow-hidden px-6 pt-40 pb-16 sm:px-8 sm:pt-48">
        <AuroraBackground />
        <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-50" />
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Breadcrumbs items={breadcrumbs} />
          </Reveal>
          <Reveal delay={0.04} className="mt-6">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-3.5" />
              Back to blog
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="mt-6 flex items-center gap-3">
            <Badge variant="outline" className="rounded-full">
              {post.category}
            </Badge>
            <span className="text-sm text-muted-foreground">
              <time dateTime={post.date}>{formatArticleDate(post.date)}</time> · {post.readTime}
            </span>
          </Reveal>
          <Reveal delay={0.14}>
            <h1 className="font-heading mt-4 text-3xl font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-col gap-5 border-t border-border pt-10">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-6 pb-28 sm:px-8">
        <h2 className="font-heading text-xl font-medium">More from the blog</h2>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((relatedPost) => (
            <BlogCard key={relatedPost.slug} post={relatedPost} />
          ))}
        </div>
      </section>

      <NewsletterBanner />
    </>
  );
}
