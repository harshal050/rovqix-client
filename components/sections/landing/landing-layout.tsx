import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { LandingPage } from "@/lib/content/landing/types";
import { getRelatedLandingPages, landingPath } from "@/lib/content/landing";
import { getGroup } from "@/lib/content/landing/groups";
import { headingId } from "@/lib/content/articles";

import { ArticleBlocks } from "@/components/sections/blog/article/article-blocks";
import { ArticleFaqSection } from "@/components/sections/blog/article/article-faq";
import { JsonLd } from "@/components/shared/json-ld";
import { Reveal } from "@/components/shared/reveal";
import { DeliverablesGrid } from "@/components/sections/landing/deliverables-grid";
import { LandingCta } from "@/components/sections/landing/landing-cta";
import { LandingHero } from "@/components/sections/landing/landing-hero";
import { PricingTiers } from "@/components/sections/landing/pricing-tiers";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  landingBreadcrumbs,
  serviceJsonLd,
} from "@/lib/seo";

/**
 * One template for every commercial landing page. Adding a page means adding a
 * data entry in lib/content/landing — never a new layout.
 */
export function LandingLayout({ page }: { page: LandingPage }) {
  const group = getGroup(page.group);
  const breadcrumbs = landingBreadcrumbs(page);
  const related = getRelatedLandingPages(page);

  return (
    <>
      <JsonLd data={serviceJsonLd(page)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      {page.faqs.length > 0 && <JsonLd data={faqPageJsonLd(page.faqs)} />}

      <LandingHero page={page} breadcrumbs={breadcrumbs} />

      <DeliverablesGrid items={page.deliverables} heading="What's included" />

      <div className="mx-auto flex max-w-3xl flex-col gap-14 px-6 py-10 sm:px-8">
        {page.sections.map((section) => (
          <Reveal key={section.heading}>
            <section aria-labelledby={headingId(section.heading)} className="flex flex-col gap-5">
              <h2
                id={headingId(section.heading)}
                className="font-heading scroll-mt-28 text-2xl font-medium tracking-tight text-balance sm:text-3xl"
              >
                {section.heading}
              </h2>
              {section.answer && (
                <p className="border-l-2 border-brand-blue/60 pl-4 text-[1.0625rem] leading-[1.8] font-medium text-foreground">
                  {section.answer}
                </p>
              )}
              <ArticleBlocks blocks={section.body} />
            </section>
          </Reveal>
        ))}

        {page.faqs.length > 0 && (
          <Reveal>
            <ArticleFaqSection faqs={page.faqs} />
          </Reveal>
        )}
      </div>

      {page.pricing && page.pricing.length > 0 && (
        <PricingTiers tiers={page.pricing} label="What it costs" />
      )}

      {(related.length > 0 || (page.readMore?.length ?? 0) > 0) && (
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
            {related.length > 0 && (
              <div>
                <h2 className="font-heading text-xl font-medium tracking-tight">
                  Related {group.name.toLowerCase()}
                </h2>
                <ul className="mt-6 flex flex-col gap-3">
                  {related.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={landingPath(item)}
                        className="group gradient-border glass-panel flex items-start justify-between gap-4 rounded-2xl p-5 transition-colors"
                      >
                        <span className="flex flex-col gap-1.5">
                          <span className="font-heading text-base font-medium tracking-tight">
                            {item.title}
                          </span>
                          <span className="text-sm leading-relaxed text-muted-foreground">
                            {item.excerpt}
                          </span>
                        </span>
                        <ArrowUpRight
                          aria-hidden
                          className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {page.readMore && page.readMore.length > 0 && (
              <div>
                <h2 className="font-heading text-xl font-medium tracking-tight">
                  Background reading
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  How we think about this work, in more depth.
                </p>
                <ul className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                  {page.readMore.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-start gap-2 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
                      >
                        <ArrowUpRight
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-brand-blue/70"
                        />
                        <span className="underline-offset-4 group-hover:underline">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      <LandingCta eyebrow={page.eyebrow} />
    </>
  );
}
