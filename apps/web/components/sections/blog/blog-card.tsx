import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { BlogPostItem } from "@/lib/api/blog";
import { Badge } from "@rovqix/shared/components/ui/badge";

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ post }: { post: BlogPostItem }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="gradient-border glass-panel relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="outline" className="rounded-full">
            {post.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{post.readTime}</span>
        </div>
        <h3 className="font-heading mt-4 text-lg font-medium transition-colors group-hover:text-brand-blue">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
          <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
          <ArrowUpRight className="size-4 text-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-blue" />
        </div>
      </div>
    </Link>
  );
}
