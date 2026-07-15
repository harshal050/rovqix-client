import { getSiteSettings } from "@/lib/api/settings";
import { getClientLogos } from "@/lib/api/clients";
import { HeroClient } from "@/components/sections/home/hero-client";

export async function Hero() {
  const [settings, clientLogos] = await Promise.all([getSiteSettings(), getClientLogos()]);

  return (
    <HeroClient
      eyebrow={settings.hero.eyebrow}
      line1={settings.hero.line1}
      line2={settings.hero.line2}
      line3={settings.hero.line3}
      subtext={settings.hero.subtext}
      statLabel={settings.hero.statLabel}
      statValue={settings.hero.statValue}
      statSuffix={settings.hero.statSuffix}
      statCaption={settings.hero.statCaption}
      clientLogos={clientLogos}
    />
  );
}
