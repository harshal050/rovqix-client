import { getWorkflowPractices } from "@/lib/api/workflow";
import { SectionHeading } from "@/components/shared/section-heading";
import { DynamicIcon } from "@/components/shared/dynamic-icon";
import { Reveal } from "@/components/shared/reveal";

export async function Workflow() {
  const workflowPractices = await getWorkflowPractices();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 sm:px-8">
      <SectionHeading
        eyebrow="Development Workflow"
        title="Engineering practices you can actually trust."
        gradientWord="actually trust."
        description="The same rigor product teams at scale-ups rely on, applied to every ROVQIX engagement."
      />

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {workflowPractices.map((practice, index) => (
          <Reveal key={practice.title} delay={(index % 3) * 0.08}>
            <div className="flex gap-4">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border text-brand-blue">
                <DynamicIcon name={practice.icon} className="size-4.5" />
              </span>
              <div>
                <h3 className="font-medium">{practice.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {practice.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
