import type { Metadata } from "next";

import { areaCities, areaTrackUrl, getCurrentShard, shardName, shardOrigin, shardServices } from "@rovqix/areas";
import { Breadcrumbs } from "@rovqix/shared/components/sections/blog/article/breadcrumbs";
import { LandingCta } from "@rovqix/shared/components/sections/landing/landing-cta";
import { JsonLd } from "@rovqix/shared/components/shared/json-ld";
import { PageHero } from "@rovqix/shared/components/shared/page-hero";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import { breadcrumbJsonLd, withBaseKeywords } from "@rovqix/shared/lib/seo-base";

const shard = getCurrentShard();
const name = shardName(shard);
const groups = shardServices(shard);
const cityCount = areaCities.length.toLocaleString();

export const metadata: Metadata = {
  title: `${name} Websites by City | ROVQIX`,
  description: `Websites, SEO and care for ${name.toLowerCase()} across ${cityCount} cities. From $349, live in about a week, and you own it.`,
  keywords: withBaseKeywords(...groups.map(({ service }) => `${service.noun} website design`)),
  alternates: { canonical: shardOrigin(shard) },
};

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Service areas", path: "/areas" },
  { name, path: shardOrigin(shard) },
];

/** Subdomain home: the business types and page variants published here. */
export default function ShardHomePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow="Service areas"
        title={`Websites for ${name.toLowerCase()}.`}
        description={`Design, SEO, booking, hosting and more — for ${cityCount} cities. From $349, live in about a week. Pick a topic to find your city.`}
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Breadcrumbs items={crumbs} />
      </div>

      {groups.map(({ service, tracks }) => (
        <section key={service.slug} className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
          <Reveal>
            <h2 className="font-heading text-2xl font-medium tracking-tight">{service.plural}</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track, index) => (
              <Reveal key={track.variant.slug} delay={Math.min(index, 8) * 0.03}>
                <a
                  href={areaTrackUrl(shard, track).slice(shardOrigin(shard).length)}
                  className="gradient-border glass-panel flex flex-col gap-1 rounded-xl p-5 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="font-heading text-base font-medium tracking-tight">
                    {track.variant.label}
                  </span>
                  <span className="text-sm text-muted-foreground">{cityCount} cities</span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      <LandingCta eyebrow={name} />
    </>
  );
}
