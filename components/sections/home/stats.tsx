import { getSiteSettings } from "@/lib/api/settings";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Reveal } from "@/components/shared/reveal";

export async function Stats() {
  const settings = await getSiteSettings();

  return (
    <section className="relative overflow-hidden py-24">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="gradient-border glass-panel grid grid-cols-2 gap-8 rounded-3xl p-10 sm:p-14 lg:grid-cols-4">
          {settings.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.08} className="text-center">
              <p className="text-gradient-brand font-heading text-4xl font-semibold sm:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
