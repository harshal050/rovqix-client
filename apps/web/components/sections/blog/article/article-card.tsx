import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Article } from "@rovqix/shared/lib/content/types";
import { getReadTime } from "@/lib/content/articles";
import { getCluster } from "@/lib/content/clusters";
import { Badge } from "@rovqix/shared/components/ui/badge";
import { formatArticleDate } from "@rovqix/shared/lib/content/format";

export function ArticleCard({ article }: { article: Article }) {
  const cluster = getCluster(article.cluster);

  return (
    <article className="group h-full">
      <Link href={`/blog/${article.slug}`} className="block h-full">
        <div className="gradient-border glass-panel relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
          <div className="flex items-center justify-between gap-3">
            <Badge variant="outline" className="rounded-full">
              {cluster.name}
            </Badge>
            <span className="text-xs text-muted-foreground">{getReadTime(article)}</span>
          </div>
          <h3 className="font-heading mt-4 text-lg leading-snug font-medium transition-colors group-hover:text-brand-blue">
            {article.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {article.excerpt}
          </p>
          <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
            <time dateTime={article.publishedAt} className="text-xs text-muted-foreground">
              {formatArticleDate(article.publishedAt)}
            </time>
            <ArrowUpRight
              aria-hidden
              className="size-4 text-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-blue"
            />
          </div>
        </div>
      </Link>
    </article>
  );
}
