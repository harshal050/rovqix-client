import { Compass, Telescope } from "lucide-react";
import { getSiteSettings } from "@rovqix/shared/lib/api/settings";
import { GlassCard } from "@rovqix/shared/components/shared/glass-card";
import { Reveal } from "@rovqix/shared/components/shared/reveal";

export async function MissionVision() {
  const settings = await getSiteSettings();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal>
          <GlassCard className="h-full">
            <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-violet/15 text-brand-blue">
              <Compass className="size-5" />
            </span>
            <h2 className="font-heading mt-5 text-2xl font-medium">{settings.mission.title}</h2>
            <p className="mt-3 text-muted-foreground">{settings.mission.text}</p>
          </GlassCard>
        </Reveal>
        <Reveal delay={0.1}>
          <GlassCard className="h-full">
            <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-violet/15 to-brand-cyan/15 text-brand-violet">
              <Telescope className="size-5" />
            </span>
            <h2 className="font-heading mt-5 text-2xl font-medium">{settings.vision.title}</h2>
            <p className="mt-3 text-muted-foreground">{settings.vision.text}</p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
