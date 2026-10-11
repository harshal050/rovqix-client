import { getSiteSettings } from "@rovqix/shared/lib/api/settings";
import { SectionHeading } from "@rovqix/shared/components/shared/section-heading";
import { DynamicIcon } from "@rovqix/shared/components/shared/dynamic-icon";
import { Reveal } from "@rovqix/shared/components/shared/reveal";

export async function Values() {
  const settings = await getSiteSettings();

  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Core Values"
        title="What we won't compromise on."
        gradientWord="won't compromise on."
      />
      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {settings.coreValues.map((value, index) => (
          <Reveal key={value.title} delay={(index % 2) * 0.08}>
            <div className="glass-panel flex items-start gap-4 rounded-2xl p-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/15 to-brand-violet/15 text-brand-blue">
                <DynamicIcon name={value.icon} className="size-4.5" />
              </span>
              <div>
                <h3 className="font-medium">{value.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{value.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
