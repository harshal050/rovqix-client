"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { SectionHeading } from "@rovqix/shared/components/shared/section-heading";
import { DynamicIcon } from "@rovqix/shared/components/shared/dynamic-icon";
import { Reveal } from "@rovqix/shared/components/shared/reveal";
import type { ProcessStepItem } from "@/lib/api/process";

export function ProcessClient({ steps }: { steps: ProcessStepItem[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-28 sm:px-8">
      <SectionHeading
        eyebrow="How We Work"
        title="A process built for clarity, not chaos."
        gradientWord="clarity, not chaos."
        description="Seven deliberate stages take every project from first conversation to a product that keeps improving."
      />

      <div ref={sectionRef} className="relative mt-20">
        <div className="absolute top-0 bottom-0 left-[19px] w-px bg-border sm:left-1/2 sm:-translate-x-1/2" />
        <motion.div
          style={{ scaleY: progress }}
          className="absolute top-0 bottom-0 left-[19px] w-px origin-top bg-gradient-to-b from-brand-blue via-brand-violet to-brand-cyan sm:left-1/2 sm:-translate-x-1/2"
        />

        <div className="flex flex-col gap-10 sm:gap-16">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.id}
                className={`relative flex items-start gap-6 sm:items-center sm:gap-0 ${
                  isEven ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                <div
                  className={`hidden flex-1 sm:block ${isEven ? "pr-12 text-right" : "pl-12 text-left"}`}
                >
                  <Reveal>
                    <StepContent step={step} />
                  </Reveal>
                </div>

                <div className="glass-panel relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full text-brand-blue sm:mx-6">
                  <DynamicIcon name={step.icon} className="size-4" />
                </div>

                <div className="flex-1 sm:hidden">
                  <Reveal>
                    <StepContent step={step} />
                  </Reveal>
                </div>
                <div className="hidden flex-1 sm:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function StepContent({
  step,
}: {
  step: { id: string; title: string; description: string };
}) {
  return (
    <div>
      <span className="font-heading text-xs font-medium text-brand-blue">
        Step {step.id}
      </span>
      <h3 className="font-heading mt-1 text-lg font-medium">{step.title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{step.description}</p>
    </div>
  );
}
