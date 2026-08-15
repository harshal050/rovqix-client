import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { serviceTypes } from "@/lib/content/landing/service-area-types";
import { citiesByState, serviceAreaCities } from "@/lib/content/landing/service-areas";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { LandingCta } from "@/components/sections/landing/landing-cta";

/**
 * The /areas hub.
 *
 * IMPORTANT: this must never render one card per service-area page. There are
 * tens of thousands of them, and doing so produced a 65MB page that failed the
 * Vercel ISR size limit. It renders a two-level directory instead:
 *
 *   /areas                     -> business types + state list  (this page)
 *   /areas/service/{slug}      -> every city for that business type
 *   /areas/{service}-web-design-{city} -> the actual page
 *
 * Every generated page stays reachable by crawlers in two clicks, and no page
 * in the chain carries more than a few hundred links.
 */
export function AreasDirectory() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Websites for local businesses, city by city."
        description={`Starter websites for ${serviceTypes.length} kinds of local business across ${serviceAreaCities.length} US cities — from $349, live in about a week.`}
      />

      <section aria-labelledby="business-types" className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <Reveal>
          <h2 id="business-types" className="font-heading text-2xl font-medium tracking-tight">
            Browse by business type
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Pick your trade to see the cities we cover, or read the full guide for that kind of
            business.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceTypes.map((service, index) => (
            <Reveal key={service.slug} delay={Math.min(index, 8) * 0.02}>
              <div className="gradient-border glass-panel flex items-center justify-between gap-3 rounded-xl p-4">
                <Link
                  href={`/areas/service/${service.slug}`}
                  className="font-heading text-sm font-medium tracking-tight hover:underline"
                >
                  {service.plural}
                </Link>
                <Link
                  href={`/local/${service.parent}`}
                  className="shrink-0 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Guide
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="by-state" className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <Reveal>
          <h2 id="by-state" className="font-heading text-2xl font-medium tracking-tight">
            Cities we cover
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {serviceAreaCities.length} cities across {citiesByState.length} states. We work remotely
            with businesses anywhere in the US, so this is a starting point rather than a limit.
          </p>
        </Reveal>

        <div className="mt-8 columns-1 gap-8 sm:columns-2 lg:columns-3">
          {citiesByState.map((group) => (
            <div key={group.state} className="mb-8 break-inside-avoid">
              <h3 className="font-heading text-sm font-medium tracking-tight text-foreground">
                {group.state}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {group.cities.map((city) => city.name).join(", ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12 sm:px-8">
        <Reveal>
          <Link
            href="/local"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            See all local business website guides
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </Reveal>
      </section>

      <LandingCta eyebrow="Service areas" />
    </>
  );
}
