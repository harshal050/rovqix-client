import type { ServiceType } from "../src/service-types";

export const tanningSalon: ServiceType = {
  slug: "tanning-salon",
  noun: "tanning salon",
  plural: "Tanning salons",
  owners: "salon owners",
  parent: "tanning-salon-website",
  priority: "membership pricing and bed types",
  customerNeeds: ["membership and package prices", "bed types and levels", "spray tan options", "booking availability"],
  hesitation: "not knowing which level is appropriate for their skin",
  pricingModel: "monthly membership or session packages",
  seasonal: [],
  tier: "one-page",
};
