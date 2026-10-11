import type { ServiceType } from "../src/service-types";

export const cleaningService: ServiceType = {
  slug: "cleaning-service",
  noun: "cleaning business",
  plural: "Cleaning services",
  owners: "cleaning business owners",
  parent: "cleaning-service-website",
  priority: "an instant quote based on home size",
  customerNeeds: ["a price for their home size", "whether staff are vetted", "what is included", "availability"],
  hesitation: "letting a stranger into their home",
  pricingModel: "by home size, with a discount for recurring visits",
  seasonal: [],
  tier: "starter",
};
