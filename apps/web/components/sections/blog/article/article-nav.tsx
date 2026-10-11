import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

import type { Article } from "@rovqix/shared/lib/content/types";

/** Previous / next within the same topic cluster — keeps crawl paths tight. */
export function ArticleNav({ previous, next }: { previous?: Article; next?: Article }) {
  if (!previous && !next) return null;

  return (
    <nav aria-label="More in this topic" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {previous ? (
        <Link
          href={`/blog/${previous.slug}`}
          rel="prev"
          className="group gradient-border glass-panel flex flex-col gap-2 rounded-2xl p-5"
        >
          <span className="inline-flex items-center gap-1.5 text-xs tracking-wide text-muted-foreground uppercase">
            <ArrowLeft aria-hidden className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            Previous article
          </span>
          <span className="font-heading text-sm font-medium transition-colors group-hover:text-brand-blue">
            {previous.title}
          </span>
        </Link>
      ) : (
        <span aria-hidden />
      )}
      {next && (
        <Link
          href={`/blog/${next.slug}`}
          rel="next"
          className="group gradient-border glass-panel flex flex-col items-end gap-2 rounded-2xl p-5 text-right sm:col-start-2"
        >
          <span className="inline-flex items-center gap-1.5 text-xs tracking-wide text-muted-foreground uppercase">
            Next article
            <ArrowRight aria-hidden className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <span className="font-heading text-sm font-medium transition-colors group-hover:text-brand-blue">
            {next.title}
          </span>
        </Link>
      )}
    </nav>
  );
}
