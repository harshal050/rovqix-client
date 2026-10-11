import Link from "../../shared/link";
import { ArrowUpRight } from "lucide-react";

import { getLandingPagesByGroup, landingPath } from "../../../lib/content/landing";
import { Reveal } from "../../shared/reveal";
import { SectionHeading } from "../../shared/section-heading";

/**
 * Bridges the /services overview into the individual service landing pages,
 * so every one of them is reachable from a top-level nav destination.
 */
export function ServiceLandingLinks() {
  const pages = getLandingPagesByGroup("services");

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Explore in detail"
        title="Every service, scoped and priced"
        description="What each engagement includes, how long it takes, what it costs, and the questions clients ask before committing."
      />
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page, index) => (
          <Reveal key={page.slug} delay={Math.min(index, 6) * 0.04}>
            <Link
              href={landingPath(page)}
              className="group gradient-border glass-panel flex h-full flex-col gap-2.5 rounded-2xl p-5"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="font-heading text-base font-medium tracking-tight">
                  {page.eyebrow}
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">{page.excerpt}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
