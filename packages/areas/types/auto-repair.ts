import type { ServiceType } from "../src/service-types";

export const autoRepair: ServiceType = {
  slug: "auto-repair",
  noun: "auto repair shop",
  plural: "Auto repair shops",
  owners: "mechanics",
  parent: "auto-repair-shop-website",
  priority: "published prices for common jobs and your certifications",
  customerNeeds: ["prices for standard work", "your certifications", "warranty terms", "booking availability"],
  hesitation: "expecting to be overcharged or upsold",
  pricingModel: "a diagnostic fee plus per-job pricing",
  seasonal: [],
  tier: "starter",
};
