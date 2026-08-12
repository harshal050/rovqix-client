import type { Deliverable } from "@/lib/content/landing/types";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Reveal } from "@/components/shared/reveal";

export function DeliverablesGrid({
  items,
  heading,
}: {
  items: Deliverable[];
  heading: string;
}) {
  return (
    <section aria-labelledby="whats-included" className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
      <Reveal>
        <h2
          id="whats-included"
          className="font-heading max-w-2xl text-2xl font-medium tracking-tight text-balance sm:text-3xl"
        >
          {heading}
        </h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={Math.min(index, 6) * 0.04}>
            <div className="gradient-border glass-panel flex h-full flex-col gap-3 rounded-2xl p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <DynamicIcon name={item.icon} className="size-5" />
              </span>
              <h3 className="font-heading text-base font-medium tracking-tight">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
