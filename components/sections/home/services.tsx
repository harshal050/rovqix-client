import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

import { getServices } from "@/lib/api/services";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { TiltCard } from "@/components/shared/tilt-card";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-6",
];

export async function Services() {
  const allServices = await getServices();
  const featured = allServices.slice(0, 6);

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <SectionHeading
        eyebrow="What We Build"
        title="Every kind of digital product, one bar of craft."
        gradientWord="one bar of craft."
        description="From five-page business sites to full SaaS platforms — we bring the same obsessive attention to every engagement."
      />

      <div className="mt-16 grid grid-cols-1 gap-4 lg:grid-cols-6">
        {featured.map((service, index) => (
          <Reveal key={service.id} delay={(index % 3) * 0.08} className={spans[index]}>
            <TiltCard maxTilt={4} className="group h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col justify-between overflow-hidden rounded-sm border border-border bg-card p-7",
                  index === 0 && "min-h-[280px] justify-end"
                )}
              >
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 size-40 rounded-full bg-white/[0.03] blur-3xl transition-all duration-500 group-hover:bg-white/[0.06]"
                />
                {index !== 0 && (
                  <span className="relative flex size-10 items-center justify-center rounded-sm border border-border text-foreground">
                    <DynamicIcon name={service.icon} className="size-4.5" />
                  </span>
                )}
                <div className="relative mt-6">
                  <h3
                    className={cn(
                      "font-heading font-medium",
                      index === 0 ? "text-3xl" : "text-lg"
                    )}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-muted-foreground",
                      index === 0 ? "max-w-sm text-base" : "text-sm"
                    )}
                  >
                    {service.description}
                  </p>
                  <Link
                    href={`/services#${service.id}`}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-foreground/80 transition-colors group-hover:text-foreground"
                  >
                    Learn more
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-12 flex justify-center">
        <Button
          render={<Link href="/services" />}
          nativeButton={false}
          variant="outline"
          size="lg"
          className="rounded-full px-6"
        >
          View All Services
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </Reveal>
    </section>
  );
}
