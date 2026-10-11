import type { ServiceType } from "../src/service-types";

export const poolService: ServiceType = {
  slug: "pool-service",
  noun: "pool service business",
  plural: "Pool service companies",
  owners: "pool technicians",
  parent: "pool-service-website",
  priority: "monthly plan pricing and what each visit covers",
  customerNeeds: ["monthly plan prices", "what each visit includes", "whether chemicals are included", "repair services"],
  hesitation: "not knowing whether chemicals are included in the quote",
  pricingModel: "monthly by pool size",
  seasonal: ["heat", "mild"],
  tier: "starter",
};
