import type { ServiceType } from "../src/service-types";

export const hvacCompany: ServiceType = {
  slug: "hvac-company",
  noun: "HVAC business",
  plural: "HVAC companies",
  owners: "HVAC contractors",
  parent: "hvac-company-website",
  priority: "emergency availability and maintenance plan signup",
  customerNeeds: ["emergency response time", "maintenance plan pricing", "financing for replacements", "brands you service"],
  hesitation: "the cost of a full system replacement",
  pricingModel: "service calls, maintenance plans and quoted installations",
  seasonal: ["heat", "snow", "humid"],
  tier: "starter",
};
