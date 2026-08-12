import type { Metadata } from "next";

import { getBlogPosts } from "@/lib/api/blog";
import { articles } from "@/lib/content/articles";
import { clusters } from "@/lib/content/clusters";
import { PageHero } from "@/components/shared/page-hero";
import { BlogGrid } from "@/components/sections/blog/blog-grid";
import { ArticleExplorer } from "@/components/sections/blog/article/article-explorer";
import { TopicGrid } from "@/components/sections/blog/article/topic-grid";
import { NewsletterBanner } from "@/components/sections/blog/newsletter-banner";
import { JsonLd } from "@/components/shared/json-ld";
import {
  absoluteUrl,
  articleListJsonLd,
  breadcrumbJsonLd,
  withBaseKeywords,
} from "@/lib/seo";

const title = "Blog";
const description =
  "In-depth guides on web development, Next.js, React, Node.js, databases, DevOps, cloud, performance, security and SEO — written by the ROVQIX engineering team.";

export async function generateMetadata(): Promise<Metadata> {
  const url = absoluteUrl("/blog");
  return {
    title,
    description,
    keywords: withBaseKeywords(
      "web development blog",
      "next.js guides",
      "technical seo blog",
      ...clusters.map((cluster) => cluster.name.toLowerCase())
    ),
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const categories = ["All", ...Array.from(new Set(posts.map((post) => post.category)))];

  return (
    <>
      <JsonLd
        data={articleListJsonLd(articles, {
          name: `${title} — ROVQIX`,
          description,
          path: "/blog",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />

      <PageHero
        eyebrow="Blog"
        title="Engineering notes on building the web properly."
        description="Guides on Next.js, React, backend architecture, databases, infrastructure, performance, security and search — from production work, not theory."
      />

      <TopicGrid />
      <ArticleExplorer articles={articles} />

      {posts.length > 0 && (
        <section aria-labelledby="studio-notes">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <h2 id="studio-notes" className="font-heading text-2xl font-medium tracking-tight">
              From the studio
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Shorter notes on craft, product and process.
            </p>
          </div>
          <div className="mt-8">
            <BlogGrid posts={posts} categories={categories} />
          </div>
        </section>
      )}

      <NewsletterBanner />
    </>
  );
}
