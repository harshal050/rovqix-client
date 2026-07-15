import { getTechStack } from "@/lib/api/tech-stack";
import { SectionHeading } from "@/components/shared/section-heading";
import { Marquee } from "@/components/shared/marquee";

export async function TechStack() {
  const techStack = await getTechStack();
  const rowOne = techStack.slice(0, 6);
  const rowTwo = techStack.slice(6);

  return (
    <section className="relative overflow-hidden py-28">
      <SectionHeading
        eyebrow="Tech Stack"
        title="Modern tools. Battle-tested results."
        gradientWord="Battle-tested results."
        description="We build exclusively with technology proven to scale — nothing experimental, nothing fragile."
        className="mx-auto max-w-6xl px-6 sm:px-8"
      />

      <div className="mt-14 flex flex-col gap-4">
        <Marquee>
          {rowOne.map((tech) => (
            <TechPill key={tech} name={tech} />
          ))}
        </Marquee>
        <Marquee reverse>
          {rowTwo.map((tech) => (
            <TechPill key={tech} name={tech} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TechPill({ name }: { name: string }) {
  return (
    <span className="glass-panel flex shrink-0 items-center rounded-full px-6 py-2.5 font-heading text-sm font-medium text-muted-foreground">
      {name}
    </span>
  );
}
