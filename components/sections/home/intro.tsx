"use client";

import { Building2, Compass, Layers } from "lucide-react";
import { Reveal, RevealStagger, revealItemVariants } from "@/components/shared/reveal";
import { EyebrowBadge } from "@/components/shared/eyebrow-badge";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Compass,
    title: "Strategy-first",
    description: "Every build starts with a clear read on your users and business goals.",
  },
  {
    icon: Layers,
    title: "Systems, not pages",
    description: "We design reusable components and design systems, not one-off screens.",
  },
  {
    icon: Building2,
    title: "Built to scale",
    description: "Architecture that holds up as your product, team, and traffic grow.",
  },
];

export function Intro() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <EyebrowBadge>Who We Are</EyebrowBadge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading mt-6 text-3xl leading-tight font-medium tracking-tight text-balance sm:text-4xl md:text-5xl">
              We&apos;re a studio obsessed with the details most
              <span className="text-gradient-brand"> agencies skip.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              ROVQIX is a professional website development company building
              business websites, startup launches, SaaS platforms, and AI-native
              products. We pair award-level design with production-grade
              engineering — every project ships fast, performs flawlessly, and
              feels handcrafted.
            </p>
          </Reveal>
        </div>

        <RevealStagger className="flex flex-col gap-4">
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={revealItemVariants}
              className="glass-panel flex items-start gap-4 rounded-2xl p-5"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 text-brand-blue">
                <item.icon className="size-5" />
              </span>
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
