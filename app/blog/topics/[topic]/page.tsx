import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import { clusters, getClusterBySlug } from "@/lib/content/clusters";
import { getArticlesByCluster } from "@/lib/content/articles";
import { ArticleCard } from "@/components/sections/blog/article/article-card";
import { Breadcrumbs } from "@/components/sections/blog/article/breadcrumbs";
import { NewsletterBanner } from "@/components/sections/blog/newsletter-banner";
import { JsonLd } from "@/components/shared/json-ld";
import { LightBeam } from "@/components/shared/light-beam";
import { EyebrowBadge } from "@/components/shared/eyebrow-badge";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import {
  absoluteUrl,
  articleListJsonLd,
  breadcrumbJsonLd,
  withBaseKeywords,
} from "@/lib/seo";

// Static export: only the params listed below exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return clusters.map((cluster) => ({ topic: cluster.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  const cluster = getClusterBySlug(topic);
  if (!cluster) return {};

  const url = absoluteUrl(`/blog/topics/${cluster.slug}`);
  return {
    title: cluster.title,
    description: cluster.description,
    keywords: withBaseKeywords(cluster.name.toLowerCase(), `${cluster.name.toLowerCase()} guides`),
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: {
      title: cluster.title,
      description: cluster.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: cluster.title,
      description: cluster.description,
    },
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  const cluster = getClusterBySlug(topic);
  if (!cluster) notFound();

  const topicArticles = getArticlesByCluster(cluster.id);
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: cluster.name, path: `/blog/topics/${cluster.slug}` },
  ];

  return (
    <>
      <JsonLd
        data={articleListJsonLd(topicArticles, {
          name: cluster.title,
          description: cluster.description,
          path: `/blog/topics/${cluster.slug}`,
        })}
      />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <section className="relative overflow-hidden px-6 pt-36 pb-16 sm:px-8 sm:pt-44">
        <LightBeam />
        <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-30" />
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <Reveal>
            <Breadcrumbs items={breadcrumbs} />
          </Reveal>
          <Reveal delay={0.06}>
            <EyebrowBadge>{cluster.name}</EyebrowBadge>
          </Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <Reveal delay={0.12}>
              <h1 className="font-heading max-w-3xl text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
                {cluster.title}
              </h1>
            </Reveal>
            <Reveal delay={0.18} className="lg:max-w-sm">
              <p className="text-base leading-relaxed text-muted-foreground lg:text-right">
                {cluster.description}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.24}>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-muted-foreground">
                {topicArticles.length} {topicArticles.length === 1 ? "article" : "articles"}
              </span>
              <Button
                render={<Link href={cluster.service.href} />}
                nativeButton={false}
                variant="outline"
                size="sm"
                className="h-9 rounded-full px-4"
              >
                {cluster.service.label}
                <ArrowRight aria-hidden data-icon="inline-end" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section aria-label={`${cluster.name} articles`} className="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topicArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section aria-labelledby="other-topics" className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <h2 id="other-topics" className="font-heading text-xl font-medium tracking-tight">
          Other topics
        </h2>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {clusters
            .filter((item) => item.id !== cluster.id)
            .map((item) => (
              <li key={item.id}>
                <Link
                  href={`/blog/topics/${item.slug}`}
                  className="glass-panel inline-block rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          <li>
            <Link
              href="/blog"
              className="glass-panel inline-block rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              All articles
            </Link>
          </li>
        </ul>
      </section>

      <NewsletterBanner />
    </>
  );
}
