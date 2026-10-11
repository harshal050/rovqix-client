import Link from "../../shared/link";
import { Check } from "lucide-react";

import type { PricingTier } from "../../../lib/content/landing/types";
import { Reveal } from "../../shared/reveal";
import { Button } from "../../ui/button";
import { cn } from "../../../lib/utils";

export function PricingTiers({ tiers, label }: { tiers: PricingTier[]; label: string }) {
  return (
    <section aria-labelledby="pricing" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <Reveal>
        <h2 id="pricing" className="font-heading text-2xl font-medium tracking-tight sm:text-3xl">
          {label}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Indicative ranges in USD. Every engagement is quoted to a written scope before work starts,
          so the number you approve is the number you pay.
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <Reveal key={tier.name} delay={index * 0.06}>
            <div
              className={cn(
                "flex h-full flex-col gap-5 rounded-2xl border p-7",
                tier.featured
                  ? "gradient-border glass-panel border-transparent shadow-lg"
                  : "border-border bg-background"
              )}
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-heading text-lg font-medium tracking-tight">{tier.name}</h3>
                  {tier.featured && (
                    <span className="rounded-full bg-brand-blue/10 px-2.5 py-1 text-[11px] font-medium text-brand-blue">
                      Most chosen
                    </span>
                  )}
                </div>
                <p className="font-heading mt-2 text-2xl font-medium tracking-tight text-foreground">
                  {tier.range}
                </p>
                <p className="text-sm text-muted-foreground">{tier.timeline}</p>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-medium text-foreground">Best for:</span> {tier.bestFor}
              </p>

              <ul className="flex flex-1 flex-col gap-2.5 border-t border-border pt-5">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                variant={tier.featured ? "default" : "outline"}
                className="w-full rounded-full"
              >
                Get a quote
              </Button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
