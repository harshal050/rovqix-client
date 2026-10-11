"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayIcon } from "lucide-react";

import { Button } from "@rovqix/shared/components/ui/button";
import { LightBeam } from "@rovqix/shared/components/shared/light-beam";
import { ParticleField } from "@rovqix/shared/components/shared/particle-field";
import { EyebrowBadge } from "@rovqix/shared/components/shared/eyebrow-badge";
import { MagneticButton } from "@rovqix/shared/components/shared/magnetic-button";
import { HeroCanvas } from "@/components/three/hero-canvas";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import { AnimatedCounter } from "@rovqix/shared/components/shared/animated-counter";

export function HeroClient({
  eyebrow,
  line1,
  line2,
  line3,
  subtext,
  statLabel,
  statValue,
  statSuffix,
  statCaption,
  clientLogos,
}: {
  eyebrow: string;
  line1: string;
  line2: string;
  line3: string;
  subtext: string;
  statLabel: string;
  statValue: number;
  statSuffix: string;
  statCaption: string;
  clientLogos: string[];
}) {
  const headline: { text: string; dim?: boolean }[] = [
    { text: line1, dim: true },
    { text: line2 },
    { text: line3, dim: true },
  ];

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-16 sm:pt-36">
      <LightBeam />
      <div className="bg-grid bg-radial-fade pointer-events-none absolute inset-0 -z-10 opacity-30" />
      <ParticleField count={40} />

      <div className="bg-radial-fade absolute top-1/2 right-[6%] hidden size-[440px] -translate-y-1/2 lg:block xl:right-[10%]">
        <HeroCanvas className="h-full w-full" />
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col items-start px-6 sm:px-8">
        <Reveal>
          <EyebrowBadge>{eyebrow}</EyebrowBadge>
        </Reveal>

        <h1 className="relative mt-8 max-w-5xl text-balance text-display">
          {headline.map((line, i) => (
            <span key={`${line.text}-${i}`} className="block overflow-hidden">
              <motion.span
                className={`inline-block ${line.dim ? "text-dim" : "text-foreground"}`}
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.9,
                  delay: 0.15 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line.text}
              </motion.span>
            </span>
          ))}
        </h1>

        <Reveal delay={0.5}>
          <p className="mt-8 max-w-lg text-lg text-muted-foreground">{subtext}</p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                size="lg"
                className="h-12 rounded-full px-6 text-base"
              >
                Start Your Project
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </MagneticButton>
            <MagneticButton strength={0.25}>
              <Button
                render={<Link href="/portfolio" />}
                nativeButton={false}
                variant="outline"
                size="lg"
                className="h-12 rounded-full px-6 text-base"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-foreground/10">
                  <PlayIcon className="size-3 fill-current" />
                </span>
                View Our Work
              </Button>
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.75} className="mt-20 w-full">
          <div className="flex flex-col gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
              Trusted by ambitious teams
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {clientLogos.slice(0, 5).map((logo) => (
                <span
                  key={logo}
                  className="font-heading text-sm font-medium text-muted-foreground/60 sm:text-base"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        className="glass-panel absolute top-36 right-8 hidden w-52 rounded-sm p-5 sm:right-12 lg:block"
      >
        <p className="text-xs text-muted-foreground">{statLabel}</p>
        <p className="font-heading mt-2 text-3xl font-light">
          <AnimatedCounter value={statValue} suffix={statSuffix} />
        </p>
        <div className="mt-4 h-px w-full bg-border" />
        <p className="mt-3 text-[11px] tracking-wide text-muted-foreground uppercase">
          {statCaption}
        </p>
      </motion.div>
    </section>
  );
}
