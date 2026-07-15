import Link from "next/link";
import { ArrowUpRight, CheckIcon } from "lucide-react";

import { getPricingPlans } from "@/lib/api/pricing";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export async function PricingPreview({
  showHeading = true,
  showCompareLink = true,
  ctaHref = "/pricing",
}: {
  showHeading?: boolean;
  showCompareLink?: boolean;
  ctaHref?: string;
}) {
  const pricingPlans = await getPricingPlans();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      {showHeading && (
        <SectionHeading
          eyebrow="Pricing"
          title="Transparent packages, no surprises."
          gradientWord="no surprises."
          description="Every engagement is scoped precisely to your goals — these tiers are a starting point."
        />
      )}

      <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Reveal key={plan.name} delay={index * 0.1}>
            <div
              className={cn(
                "gradient-border glass-panel relative flex h-full flex-col rounded-2xl p-7",
                plan.featured && "scale-100 shadow-[0_20px_60px_-20px_rgba(255,255,255,0.2)] lg:scale-105"
              )}
            >
              {plan.featured && (
                <Badge className="absolute -top-3 left-7 bg-gradient-to-r from-brand-blue to-brand-violet text-white">
                  Most Popular
                </Badge>
              )}
              <h3 className="font-heading text-lg font-medium">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-heading text-4xl font-semibold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">/ {plan.period}</span>
              </div>
              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-blue" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                render={<Link href={ctaHref} />}
                nativeButton={false}
                variant={plan.featured ? "default" : "outline"}
                size="lg"
                className="mt-8 rounded-full"
              >
                Get Started
              </Button>
            </div>
          </Reveal>
        ))}
      </div>

      {showCompareLink && (
        <Reveal delay={0.2} className="mt-12 flex justify-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Compare full plan details
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      )}
    </section>
  );
}
