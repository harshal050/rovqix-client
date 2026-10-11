import { notFound } from "next/navigation";
import type { Metadata } from "next";

import {
  areaCities,
  areaSlug,
  areaTrackUrl,
  citiesByState,
  getCurrentShard,
  shardName,
  shardOrigin,
  trackSlug,
} from "@rovqix/areas";
import { Breadcrumbs } from "@rovqix/shared/components/sections/blog/article/breadcrumbs";
import { LandingCta } from "@rovqix/shared/components/sections/landing/landing-cta";
import { JsonLd } from "@rovqix/shared/components/shared/json-ld";
import { PageHero } from "@rovqix/shared/components/shared/page-hero";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import { breadcrumbJsonLd, withBaseKeywords } from "@rovqix/shared/lib/seo-base";

/**
 * City index for one track (business type x page variant). Sits between the
 * subdomain home and the generated pages so no page links to all of them.
 */

const shard = getCurrentShard();

export function generateStaticParams() {
  return shard.tracks.map((track) => ({ track: trackSlug(track) }));
}

function find(slug: string) {
  return shard.tracks.find((track) => trackSlug(track) === slug);
}

type Params = { params: Promise<{ track: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const track = find((await params).track);
  if (!track) return {};
  const { service, variant } = track;
  const title = `${service.plural} ${variant.label} by City | ROVQIX`;
  const description = `${variant.label} for ${service.owners} in ${areaCities.length.toLocaleString()} cities. From $349, live in about a week, and you own it.`;
  const url = areaTrackUrl(shard, track);
  return {
    title,
    description,
    keywords: withBaseKeywords(`${service.noun} ${variant.label.toLowerCase()}`, `website for ${service.owners}`),
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
  };
}

export default async function TrackCityIndexPage({ params }: Params) {
  const track = find((await params).track);
  if (!track) notFound();
  const { service, variant } = track;

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service areas", path: "/areas" },
    { name: shardName(shard), path: shardOrigin(shard) },
    { name: `${service.plural} · ${variant.label}`, path: areaTrackUrl(shard, track) },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow={service.plural}
        title={`${variant.label} for ${service.plural.toLowerCase()}, by city`}
        description={`What this trade needs most is ${service.priority}. Pick your city below, or read the full guide.`}
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <Reveal>
          <a
            href={`https://rovqix.in/local/${service.parent}`}
            className="gradient-border glass-panel inline-flex flex-col gap-1 rounded-2xl p-5"
          >
            <span className="font-heading text-base font-medium tracking-tight">
              Full guide: {service.plural.toLowerCase()} websites
            </span>
            <span className="text-sm text-muted-foreground">
              What to include, what it costs, and the mistakes to avoid.
            </span>
          </a>
        </Reveal>
      </section>

      <section aria-labelledby="cities" className="mx-auto max-w-6xl px-6 pb-12 sm:px-8">
        <Reveal>
          <h2 id="cities" className="font-heading text-2xl font-medium tracking-tight">
            Choose your city
          </h2>
        </Reveal>

        <div className="mt-8 columns-1 gap-8 sm:columns-2 lg:columns-3">
          {citiesByState.map((group) => (
            <div key={group.state} className="mb-8 break-inside-avoid">
              <h3 className="font-heading text-sm font-medium tracking-tight text-foreground">
                {group.state}
              </h3>
              <ul className="mt-2 flex flex-col gap-1.5">
                {group.cities.map((city) => (
                  <li key={city.slug}>
                    <a
                      href={`/${areaSlug(service.slug, variant.slug, city.slug)}`}
                      className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {city.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <LandingCta eyebrow={service.plural} />
    </>
  );
}
