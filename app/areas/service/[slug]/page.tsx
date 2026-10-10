import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { serviceTypes } from "@/lib/content/landing/service-area-types";
import { citiesByState, serviceAreaCities, serviceAreaSlug } from "@/lib/content/landing/service-areas";
import { Breadcrumbs } from "@/components/sections/blog/article/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { LandingCta } from "@/components/sections/landing/landing-cta";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { absoluteUrl, breadcrumbJsonLd, withBaseKeywords } from "@/lib/seo";

/**
 * Per-business-type city index. Sits between /areas and the generated pages so
 * that no single page has to link to all of them at once.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceTypes.map((service) => ({ slug: service.slug }));
}

function find(slug: string) {
  return serviceTypes.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = find(slug);
  if (!service) return {};

  const title = `${service.plural} Website Design by City | ROVQIX`;
  const description = `Website design for ${service.owners} across ${serviceAreaCities.length} cities. From $349, live in about a week, and you own it.`;
  const url = absoluteUrl(`/areas/service/${service.slug}`);

  return {
    title,
    description,
    keywords: withBaseKeywords(
      `${service.noun} website design`,
      `website for ${service.owners}`,
      `${service.noun} web design near me`
    ),
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url },
  };
}

export default async function ServiceAreaIndexPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = find(slug);
  if (!service) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Service areas", path: "/areas" },
    { name: service.plural, path: `/areas/service/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <PageHero
        eyebrow={service.plural}
        title={`${service.noun.charAt(0).toUpperCase()}${service.noun.slice(1)} website design by city`}
        description={`We build websites for ${service.owners} in the cities below and beyond. Above everything else, what this trade needs is ${service.priority}. Pick your city below, or read the full guide.`}
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <Breadcrumbs items={crumbs} />
      </div>

      <section className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <Reveal>
          <Link
            href={`/local/${service.parent}`}
            className="gradient-border glass-panel inline-flex flex-col gap-1 rounded-2xl p-5"
          >
            <span className="font-heading text-base font-medium tracking-tight">
              Full guide: {service.plural.toLowerCase()} websites
            </span>
            <span className="text-sm text-muted-foreground">
              What to include, what it costs, and the mistakes to avoid.
            </span>
          </Link>
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
                    <Link
                      href={`/areas/${serviceAreaSlug(service.slug, city.slug)}`}
                      className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                    >
                      {city.name}
                    </Link>
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
