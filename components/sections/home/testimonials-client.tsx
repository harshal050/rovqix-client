"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { TestimonialItem } from "@/lib/api/testimonials";

export function TestimonialsClient({ testimonials }: { testimonials: TestimonialItem[] }) {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5500);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Client Love"
        title="Don't just take our word for it."
        gradientWord="our word for it."
      />

      <Reveal delay={0.15} className="mt-14">
        <Carousel setApi={setApi} opts={{ loop: true, align: "center" }}>
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="sm:basis-1/2 lg:basis-1/3">
                <div className="gradient-border glass-panel flex h-full flex-col rounded-2xl p-6">
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-4 fill-brand-cyan text-brand-cyan" />
                    ))}
                  </div>
                  <p className="mt-4 flex-1 text-sm text-foreground/90">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                    <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-violet text-xs font-medium text-white">
                      {testimonial.initials}
                    </span>
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-center gap-3">
            <CarouselPrevious className="static translate-x-0 translate-y-0" />
            <CarouselNext className="static translate-x-0 translate-y-0" />
          </div>
        </Carousel>
      </Reveal>
    </section>
  );
}
