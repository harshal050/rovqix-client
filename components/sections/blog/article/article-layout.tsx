import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, RefreshCw, Link2 } from "lucide-react";

import type { Article } from "@/lib/content/types";
import {
  getArticleNeighbours,
  getLastUpdated,
  getReadTime,
  getRelatedArticles,
  getTableOfContents,
  headingId,
} from "@/lib/content/articles";
import { getAuthor } from "@/lib/content/authors";
import { getCluster } from "@/lib/content/clusters";
import { formatArticleDate } from "@/lib/content/format";
import { articleBreadcrumbs, articleImagePath, articleJsonLd } from "@/lib/seo";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";

import { JsonLd } from "@/components/shared/json-ld";
import { AuroraBackground } from "@/components/shared/aurora-background";
import { Badge } from "@/components/ui/badge";
import { ArticleBlocks } from "@/components/sections/blog/article/article-blocks";
import { ArticleCta } from "@/components/sections/blog/article/article-cta";
import { ArticleFaqSection } from "@/components/sections/blog/article/article-faq";
import { ArticleNav } from "@/components/sections/blog/article/article-nav";
import { ArticleReferences } from "@/components/sections/blog/article/article-references";
import { AuthorCard } from "@/components/sections/blog/article/author-card";
import { Breadcrumbs } from "@/components/sections/blog/article/breadcrumbs";
import { KeyTakeaways } from "@/components/sections/blog/article/key-takeaways";
import { RelatedArticles } from "@/components/sections/blog/article/related-articles";
import { TableOfContents } from "@/components/sections/blog/article/table-of-contents";
import { NewsletterBanner } from "@/components/sections/blog/newsletter-banner";

/**
 * The single template every static article renders through. Adding an article
 * to lib/content/articles automatically gives it breadcrumbs, a TOC, author
 * and date signals, internal links, FAQ, references, related posts, CTA and
 * the full Article + Breadcrumb + FAQ structured data.
 */
export function ArticleLayout({ article }: { article: Article }) {
  const author = getAuthor(article.authorId);
  const cluster = getCluster(article.cluster);
  const toc = getTableOfContents(article.sections);
  const related = getRelatedArticles(article, 3);
  const { previous, next } = getArticleNeighbours(article);
  const breadcrumbs = articleBreadcrumbs(article);
  const updated = getLastUpdated(article);
  const readTime = getReadTime(article);

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      {article.faqs.length > 0 && <JsonLd data={faqPageJsonLd(article.faqs)} />}

      <header className="relative overflow-hidden px-6 pt-32 pb-10 sm:px-8 sm:pt-40">
        <AuroraBackground />
        <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <Breadcrumbs items={breadcrumbs} />

          <div className="flex flex-wrap items-center gap-3">
            <Link href={`/blog/topics/${cluster.slug}`}>
              <Badge variant="outline" className="rounded-full hover:border-brand-blue/50">
                {cluster.name}
              </Badge>
            </Link>
            <span className="text-sm text-muted-foreground">{article.category}</span>
          </div>

          <h1 className="font-heading text-3xl leading-[1.1] font-medium tracking-tight text-balance sm:text-4xl md:text-[2.9rem]">
            {article.title}
          </h1>

          <p className="text-lg leading-relaxed text-foreground/80">{article.answer}</p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
            <span className="text-foreground/80">
              By{" "}
              <Link href="/about" rel="author" className="underline-offset-4 hover:underline">
                {author.name}
              </Link>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays aria-hidden className="size-3.5" />
              <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt)}</time>
            </span>
            {updated !== article.publishedAt && (
              <span className="inline-flex items-center gap-1.5">
                <RefreshCw aria-hidden className="size-3.5" />
                Updated <time dateTime={updated}>{formatArticleDate(updated)}</time>
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <Clock aria-hidden className="size-3.5" />
              {readTime}
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 sm:px-8">
        <figure className="gradient-border overflow-hidden rounded-3xl">
          <Image
            src={articleImagePath(article.slug)}
            alt={`${article.title} — illustrated cover for the ${cluster.name} guide by ${author.name} at ROVQIX`}
            width={1200}
            height={630}
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
          />
        </figure>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
        <div className="flex min-w-0 flex-col gap-14">
          <KeyTakeaways items={article.takeaways} />

          <div className="flex flex-col gap-14">
            {article.sections.map((section) => {
              const id = headingId(section.heading);
              return (
                <section key={id} aria-labelledby={id} className="flex flex-col gap-5">
                  <h2
                    id={id}
                    className="font-heading scroll-mt-28 text-2xl font-medium tracking-tight text-balance sm:text-3xl"
                  >
                    <a href={`#${id}`} className="group inline-flex items-baseline gap-2">
                      {section.heading}
                      <Link2
                        aria-hidden
                        className="size-4 shrink-0 text-muted-foreground/0 transition-colors group-hover:text-muted-foreground"
                      />
                    </a>
                  </h2>
                  {section.answer && (
                    <p className="border-l-2 border-brand-blue/50 pl-5 text-[1.0625rem] leading-relaxed font-medium text-foreground/90">
                      {section.answer}
                    </p>
                  )}
                  <ArticleBlocks blocks={section.body} />
                  {section.subsections?.map((subsection) => {
                    const subId = headingId(subsection.heading);
                    return (
                      <div key={subId} className="mt-2 flex flex-col gap-4">
                        <h3
                          id={subId}
                          className="font-heading scroll-mt-28 text-lg font-medium tracking-tight"
                        >
                          {subsection.heading}
                        </h3>
                        <ArticleBlocks blocks={subsection.body} />
                      </div>
                    );
                  })}
                </section>
              );
            })}
          </div>

          {article.internalLinks && article.internalLinks.length > 0 && (
            <section
              aria-labelledby="keep-reading"
              className="gradient-border glass-panel rounded-3xl p-6 sm:p-7"
            >
              <h2
                id="keep-reading"
                className="font-heading text-xs font-medium tracking-widest text-muted-foreground uppercase"
              >
                Keep reading on ROVQIX
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {article.internalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <ArticleFaqSection faqs={article.faqs} />
          <ArticleReferences references={article.references} />
          <AuthorCard author={author} />
          <ArticleNav previous={previous} next={next} />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-28 flex flex-col gap-8">
            <TableOfContents items={toc} />
            <div className="rounded-2xl border border-border p-4">
              <p className="font-heading text-xs font-medium tracking-widest text-muted-foreground uppercase">
                Topic
              </p>
              <Link
                href={`/blog/topics/${cluster.slug}`}
                className="mt-2 block text-sm font-medium transition-colors hover:text-brand-blue"
              >
                {cluster.name}
              </Link>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {cluster.description}
              </p>
              <Link
                href={cluster.service.href}
                className="mt-4 inline-block text-xs text-brand-blue underline-offset-4 hover:underline"
              >
                {cluster.service.label}
              </Link>
            </div>
          </div>
        </aside>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 sm:px-8">
        <ArticleCta service={cluster.service} />
        <RelatedArticles articles={related} cluster={article.cluster} />
      </div>

      <NewsletterBanner />
    </>
  );
}
