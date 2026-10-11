import type { ServiceType } from "../src/service-types";

export const towingCompany: ServiceType = {
  slug: "towing-company",
  noun: "towing business",
  plural: "Towing companies",
  owners: "tow operators",
  parent: "towing-company-website",
  priority: "one-tap calling and response time",
  customerNeeds: ["immediate availability", "callout pricing", "service area", "response time"],
  hesitation: "not knowing the price before the truck arrives",
  pricingModel: "callout plus per mile",
  seasonal: ["snow"],
  tier: "one-page",
};
