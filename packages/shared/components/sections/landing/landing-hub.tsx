import Link from "../../shared/link";
import { ArrowUpRight } from "lucide-react";

import type { LandingGroup } from "../../../lib/content/landing/types";
import { getLandingPagesByGroup, landingPath } from "../../../lib/content/landing";
import { getGroup } from "../../../lib/content/landing/groups";
import { Breadcrumbs } from "../blog/article/breadcrumbs";
import { JsonLd } from "../../shared/json-ld";
import { LandingCta } from "./landing-cta";
import { PageHero } from "../../shared/page-hero";
import { Reveal } from "../../shared/reveal";
import { breadcrumbJsonLd, landingListJsonLd } from "../../../lib/seo-base";

export function LandingHub({ group: groupId }: { group: LandingGroup }) {
  const group = getGroup(groupId);
  const pages = getLandingPagesByGroup(groupId);
  const path = `/${group.segment}`;

  return (
    <>
      <JsonLd
        data={landingListJsonLd(pages, {
          name: group.hubTitle,
          description: group.hubDescription,
          path,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: group.name, path },
        ])}
      />

      <PageHero
        eyebrow={group.name}
        title={group.hubHeading}
        description={group.hubDescription}
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: group.name, path },
          ]}
        />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, index) => (
            <Reveal key={page.slug} delay={Math.min(index, 6) * 0.04}>
              <Link
                href={landingPath(page)}
                className="group gradient-border glass-panel flex h-full flex-col gap-3 rounded-2xl p-6"
              >
                <span className="text-xs font-medium tracking-wide text-brand-blue uppercase">
                  {page.eyebrow}
                </span>
                <h2 className="font-heading text-base leading-snug font-medium tracking-tight text-balance">
                  {page.title}
                </h2>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {page.excerpt}
                </p>
                <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  Learn more
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <LandingCta eyebrow={group.name} />
    </>
  );
}
