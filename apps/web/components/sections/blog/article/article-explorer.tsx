"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";

import type { Article } from "@rovqix/shared/lib/content/types";
import { clusters } from "@/lib/content/clusters";
import { ArticleCard } from "@/components/sections/blog/article/article-card";
import { Input } from "@rovqix/shared/components/ui/input";
import { cn } from "@rovqix/shared/lib/utils";

/**
 * Filtering happens client-side over articles that are already in the
 * server-rendered HTML, so every article link stays crawlable regardless of
 * the active filter.
 */
export function ArticleExplorer({ articles }: { articles: Article[] }) {
  const [query, setQuery] = useState("");
  const [cluster, setCluster] = useState<string>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCluster = cluster === "all" || article.cluster === cluster;
      const matchesQuery =
        q.length === 0 ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.primaryKeyword.includes(q) ||
        article.secondaryKeywords.some((keyword) => keyword.includes(q));
      return matchesCluster && matchesQuery;
    });
  }, [articles, query, cluster]);

  return (
    <section
      id="all-articles"
      aria-labelledby="all-articles-heading"
      className="relative mx-auto max-w-6xl px-6 pb-28 sm:px-8"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="all-articles-heading" className="font-heading text-2xl font-medium tracking-tight">
            All articles
          </h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            {articles.length} in-depth guides on web development, infrastructure and search.
          </p>
        </div>
        <div className="relative w-full sm:w-72">
          <SearchIcon
            aria-hidden
            className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <label htmlFor="article-search" className="sr-only">
            Search articles
          </label>
          <Input
            id="article-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
            className="h-10 rounded-full pl-10"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2.5">
        <FilterChip active={cluster === "all"} onClick={() => setCluster("all")}>
          All topics
        </FilterChip>
        {clusters.map((item) => (
          <FilterChip
            key={item.id}
            active={cluster === item.id}
            onClick={() => setCluster(item.id)}
          >
            {item.name}
          </FilterChip>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted-foreground">
          No articles match your search. Try a broader term.
        </p>
      )}
    </section>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-foreground text-background"
          : "glass-panel text-muted-foreground hover:text-foreground"
      )}
    >
      {children}
    </button>
  );
}
