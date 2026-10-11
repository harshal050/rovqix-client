import type { ServiceType } from "../src/service-types";

export const tireShop: ServiceType = {
  slug: "tire-shop",
  noun: "tyre shop",
  plural: "Tyre shops",
  owners: "tyre fitters",
  parent: "tire-shop-website",
  priority: "tyre pricing by size and fitting cost",
  customerNeeds: ["tyre prices by size", "fitting cost", "brands stocked", "availability today"],
  hesitation: "not knowing the total once fitting and balancing are added",
  pricingModel: "per tyre plus fitting",
  seasonal: ["snow"],
  tier: "one-page",
};
