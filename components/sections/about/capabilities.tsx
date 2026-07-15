import { getSiteSettings } from "@/lib/api/settings";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal } from "@/components/shared/reveal";

export async function Capabilities() {
  const settings = await getSiteSettings();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <SectionHeading
        eyebrow="How We're Organized"
        title="A small senior team, not an account-manager maze."
        gradientWord="not an account-manager maze."
        description="No juniors learning on your project, no layers of handoff. You work directly with the people building your product."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {settings.capabilities.map((capability, index) => (
          <Reveal key={capability.title} delay={index * 0.1}>
            <GlassCard className="h-full text-center" hover={false}>
              <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue/15 to-brand-violet/15 text-brand-blue">
                <DynamicIcon name={capability.icon} className="size-5" />
              </span>
              <h3 className="font-heading mt-5 text-lg font-medium">{capability.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{capability.description}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
