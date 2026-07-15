import { CheckIcon, MinusIcon } from "lucide-react";

import { comparisonFeatures } from "@/lib/constants/pricing-comparison";
import { getPricingPlans } from "@/lib/api/pricing";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

function Cell({ value }: { value: boolean | string }) {
  if (typeof value === "boolean") {
    return value ? (
      <CheckIcon className="mx-auto size-4 text-brand-blue" />
    ) : (
      <MinusIcon className="mx-auto size-4 text-muted-foreground/40" />
    );
  }
  return <span className="text-sm">{value}</span>;
}

export async function ComparisonTable() {
  const allPlans = await getPricingPlans();
  // This matrix's rows are fixed to a 3-tier shape (starter/growth/enterprise),
  // so only the first 3 plans are shown here regardless of how many exist.
  const pricingPlans = allPlans.slice(0, 3);

  return (
    <section className="relative mx-auto max-w-5xl px-6 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Compare Plans"
        title="Every detail, side by side."
        gradientWord="side by side."
      />

      <Reveal delay={0.1}>
        <div className="glass-panel gradient-border mt-14 overflow-x-auto rounded-2xl">
          <table className="w-full min-w-[560px] text-center">
            <thead>
              <tr className="border-b border-border">
                <th className="p-5 text-left text-sm font-medium text-muted-foreground">
                  Feature
                </th>
                {pricingPlans.map((plan) => (
                  <th key={plan.name} className="p-5 text-sm font-medium">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((feature) => (
                <tr key={feature.label} className="border-b border-border last:border-0">
                  <td className="p-5 text-left text-sm text-muted-foreground">
                    {feature.label}
                  </td>
                  <td className="p-5">
                    <Cell value={feature.starter} />
                  </td>
                  <td className="p-5">
                    <Cell value={feature.growth} />
                  </td>
                  <td className="p-5">
                    <Cell value={feature.enterprise} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
