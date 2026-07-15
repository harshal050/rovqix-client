import { getAiTechnologies } from "@/lib/api/ai-tech";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { GlassCard } from "@/components/shared/glass-card";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

export async function AiTechnologies() {
  const aiTechnologies = await getAiTechnologies();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <SectionHeading
        eyebrow="AI-Native Interfaces"
        title="Interfaces ready for the AI layer."
        gradientWord="the AI layer."
        description="We design the front-end experiences that make voice, conversational, and generative AI feel effortless."
      />

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {aiTechnologies.map((tech, index) => (
          <Reveal key={tech.name} delay={index * 0.1}>
            <GlassCard className="group h-full">
              <div className="flex items-start justify-between gap-4">
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg",
                    tech.gradient
                  )}
                >
                  <DynamicIcon name={tech.icon} className="size-5" />
                </span>
                <span className="glass-panel rounded-full px-3 py-1 text-xs font-medium text-muted-foreground">
                  {tech.category}
                </span>
              </div>
              <h3 className="font-heading mt-5 text-xl font-medium">{tech.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tech.description}</p>
              <div
                aria-hidden
                className={cn(
                  "absolute -bottom-16 -left-16 size-48 rounded-full bg-gradient-to-br opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40",
                  tech.gradient
                )}
              />
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
