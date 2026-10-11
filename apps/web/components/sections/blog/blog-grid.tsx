"use client";

import { useMemo, useState } from "react";
import { SearchIcon } from "lucide-react";

import type { BlogPostItem } from "@/lib/api/blog";
import { BlogCard } from "@/components/sections/blog/blog-card";
import { Input } from "@rovqix/shared/components/ui/input";
import { cn } from "@rovqix/shared/lib/utils";

export function BlogGrid({
  posts,
  categories,
}: {
  posts: BlogPostItem[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const matchesQuery =
        query.trim().length === 0 ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, category]);

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28 sm:px-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                category === cat
                  ? "bg-foreground text-background"
                  : "glass-panel text-muted-foreground hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <SearchIcon className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search articles"
            className="h-10 rounded-full pl-10"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-muted-foreground">
          No articles match your search.
        </p>
      )}
    </section>
  );
}
