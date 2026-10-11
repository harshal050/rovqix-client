import { ExternalLink } from "lucide-react";

import type { ArticleLink } from "@rovqix/shared/lib/content/types";

/** External authoritative sources — trust signal for both readers and crawlers. */
export function ArticleReferences({ references }: { references: ArticleLink[] }) {
  if (references.length === 0) return null;

  return (
    <section aria-labelledby="references" className="flex flex-col gap-4">
      <h2
        id="references"
        className="font-heading scroll-mt-28 text-xs font-medium tracking-widest text-muted-foreground uppercase"
      >
        Sources &amp; further reading
      </h2>
      <ul className="flex flex-col gap-2.5">
        {references.map((reference) => (
          <li key={reference.href}>
            <a
              href={reference.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-start gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink
                aria-hidden
                className="mt-0.5 size-3.5 shrink-0 text-muted-foreground/60 group-hover:text-brand-blue"
              />
              <span className="underline-offset-4 group-hover:underline">{reference.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
