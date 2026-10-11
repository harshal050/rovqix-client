import type { ServiceType } from "../src/service-types";

export const pestControl: ServiceType = {
  slug: "pest-control",
  noun: "pest control business",
  plural: "Pest control companies",
  owners: "pest control operators",
  parent: "pest-control-website",
  priority: "a page for each major pest and treatment safety information",
  customerNeeds: ["treatment for their specific pest", "safety around children and pets", "same-day availability", "plan pricing"],
  hesitation: "concern about chemical safety at home",
  pricingModel: "one-off treatments and quarterly protection plans",
  seasonal: ["heat", "humid"],
  tier: "starter",
};
