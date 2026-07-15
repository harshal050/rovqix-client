import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getSiteSettings } from "@/lib/api/settings";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/reveal";
import { LightBeam } from "@/components/shared/light-beam";
import { MagneticButton } from "@/components/shared/magnetic-button";

export async function Cta() {
  const settings = await getSiteSettings();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-sm border border-border bg-black px-8 py-24 text-center sm:px-16 sm:py-32">
          <LightBeam />
          <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 opacity-30" />
          <div className="relative mx-auto max-w-3xl">
            <h2 className="text-display-sm text-balance text-white">{settings.cta.title}</h2>
            <p className="mt-6 text-lg text-white/50">{settings.cta.description}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <Button
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  size="lg"
                  className="h-12 rounded-full bg-white px-6 text-base text-black hover:bg-white/90"
                >
                  Start Your Project
                  <ArrowUpRight data-icon="inline-end" />
                </Button>
              </MagneticButton>
              <Button
                render={<Link href={settings.emailHref} />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 rounded-full border-white/20 bg-transparent px-6 text-base text-white hover:bg-white/10"
              >
                {settings.email}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
