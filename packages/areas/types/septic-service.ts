import type { ServiceType } from "../src/service-types";

export const septicService: ServiceType = {
  slug: "septic-service",
  noun: "septic service business",
  plural: "Septic companies",
  owners: "septic operators",
  parent: "septic-service-website",
  priority: "pumping prices and emergency availability",
  customerNeeds: ["pumping price by tank size", "emergency availability", "inspection for property sales", "warning signs"],
  hesitation: "not knowing how often the tank should be pumped",
  pricingModel: "by tank size",
  seasonal: [],
  tier: "one-page",
};
