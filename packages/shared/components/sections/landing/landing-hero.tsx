import Link from "../../shared/link";
import { ArrowRight, MessageSquare } from "lucide-react";

import type { LandingPage } from "../../../lib/content/landing/types";
import { Breadcrumbs } from "../blog/article/breadcrumbs";
import { EyebrowBadge } from "../../shared/eyebrow-badge";
import { LightBeam } from "../../shared/light-beam";
import { Reveal } from "../../shared/reveal";
import { Button } from "../../ui/button";
import { siteConfig } from "../../../lib/constants/site";

export function LandingHero({
  page,
  breadcrumbs,
}: {
  page: LandingPage;
  breadcrumbs: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-14 sm:px-8 sm:pt-44">
      <LightBeam />
      <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-30" />
      <div className="mx-auto flex max-w-5xl flex-col gap-7">
        <Reveal>
          <Breadcrumbs items={breadcrumbs} />
        </Reveal>
        <Reveal delay={0.06}>
          <EyebrowBadge>{page.eyebrow}</EyebrowBadge>
        </Reveal>
        <Reveal delay={0.12}>
          <h1 className="font-heading max-w-4xl text-3xl leading-[1.1] font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
            {page.title}
          </h1>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/80">{page.answer}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">{page.intro}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-wrap items-center gap-3">
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="h-11 rounded-full px-5 text-base"
            >
              Start a conversation
              <ArrowRight aria-hidden data-icon="inline-end" />
            </Button>
            <Button
              render={<a href={siteConfig.whatsappHref} target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-11 rounded-full px-5"
            >
              <MessageSquare aria-hidden data-icon="inline-start" />
              WhatsApp us
            </Button>
            <span className="text-sm text-muted-foreground">
              or email{" "}
              <a href={siteConfig.emailHref} className="text-foreground underline-offset-4 hover:underline">
                {siteConfig.email}
              </a>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.36}>
          <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {page.proof.map((point) => (
              <div key={point.label} className="flex flex-col gap-1 bg-background p-5">
                <dt className="sr-only">{point.label}</dt>
                <dd className="font-heading text-xl font-medium tracking-tight text-foreground">
                  {point.metric}
                </dd>
                <p className="text-xs text-muted-foreground">{point.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
