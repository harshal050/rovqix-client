import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { areaCities, areaTrackUrl, citiesByState, findTrack, shards, variants } from "@rovqix/areas";
import { PageHero } from "@rovqix/shared/components/shared/page-hero";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import { LandingCta } from "@rovqix/shared/components/sections/landing/landing-cta";

/**
 * The /areas hub on the main site.
 *
 * The area pages live on one subdomain per trade (plumber-websites.rovqix.in,
 * …) because there are far more of them than one Cloudflare Pages site can hold. This page
 * links to every business type x variant city index there, so every
 * generated page stays two clicks from rovqix.in:
 *
 *   rovqix.in/areas                                  -> every type and variant (this page)
 *   {type}-websites.rovqix.in/service/{type}-{variant}       -> every city for it
 *   {type}-websites.rovqix.in/{type}-{variant}-{city}        -> the page
 */
export function AreasDirectory() {
  return (
    <>
      <PageHero
        eyebrow="Service areas"
        title="Websites for local businesses, city by city."
        description={`Design, SEO, booking, hosting and more for ${shards.length} kinds of local business across ${areaCities.length.toLocaleString()} cities — from $349, live in about a week.`}
      />

      <section aria-labelledby="business-types" className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <Reveal>
          <h2 id="business-types" className="font-heading text-2xl font-medium tracking-tight">
            Browse by business type
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Pick your trade and what you need, then choose your city.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shards.map(({ tracks: [{ service }] }) => (
            <div key={service.slug} className="gradient-border glass-panel rounded-xl p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-heading text-base font-medium tracking-tight">{service.plural}</h3>
                <Link
                  href={`/local/${service.parent}`}
                  className="shrink-0 text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                >
                  Guide
                </Link>
              </div>
              <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                {variants.map((variant) => {
                  const found = findTrack(service.slug, variant.slug);
                  if (!found) return null;
                  return (
                    <li key={variant.slug}>
                      <a
                        href={areaTrackUrl(found.shard, found.track)}
                        className="text-xs text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                      >
                        {variant.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="by-state" className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <Reveal>
          <h2 id="by-state" className="font-heading text-2xl font-medium tracking-tight">
            Where we cover
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            {areaCities.length.toLocaleString()} cities across {citiesByState.length} states and
            countries, on {shards.length} sites. We work remotely with businesses anywhere, so this
            is a starting point rather than a limit.
          </p>
        </Reveal>
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
