import { getWhyChooseUs } from "@/lib/api/why-choose-us";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal } from "@/components/shared/reveal";

export async function WhyChooseUs() {
  const whyChooseUs = await getWhyChooseUs();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Why ROVQIX"
        title="Agency polish. Product-team discipline."
        gradientWord="Product-team discipline."
        description="We operate less like a vendor and more like an embedded product partner."
      />

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08}>
            <GlassCard className="h-full">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-violet/15 text-brand-blue">
                <DynamicIcon name={item.icon} />
              </span>
              <h3 className="mt-5 font-medium">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-gradient-brand font-heading text-2xl font-semibold">
                  {item.stat}
                </p>
                <p className="text-xs text-muted-foreground">{item.statLabel}</p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
