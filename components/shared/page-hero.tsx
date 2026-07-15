import { LightBeam } from "@/components/shared/light-beam";
import { EyebrowBadge } from "@/components/shared/eyebrow-badge";
import { Reveal } from "@/components/shared/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pt-44 pb-24 sm:px-8 sm:pt-52 sm:pb-32">
      <LightBeam />
      <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-30" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <Reveal>
          <EyebrowBadge>{eyebrow}</EyebrowBadge>
        </Reveal>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0.08}>
            <h1 className="text-display max-w-4xl text-balance">{title}</h1>
          </Reveal>
          {description && (
            <Reveal delay={0.18} className="lg:max-w-xs">
              <p className="text-lg text-muted-foreground lg:text-right">{description}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
