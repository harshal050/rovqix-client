import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Article } from "@/lib/content/types";
import { ArticleCard } from "@/components/sections/blog/article/article-card";
import { getCluster } from "@/lib/content/clusters";

export function RelatedArticles({
  articles,
  cluster,
}: {
  articles: Article[];
  cluster: Article["cluster"];
}) {
  if (articles.length === 0) return null;
  const topic = getCluster(cluster);

  return (
    <section aria-labelledby="related" className="flex flex-col gap-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2
          id="related"
          className="font-heading scroll-mt-28 text-2xl font-medium tracking-tight sm:text-3xl"
        >
          Related articles
        </h2>
        <Link
          href={`/blog/topics/${topic.slug}`}
          className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All {topic.name} articles
          <ArrowRight
            aria-hidden
            className="size-3.5 transition-transform group-hover:translate-x-0.5"
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
