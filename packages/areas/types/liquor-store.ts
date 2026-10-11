import type { ServiceType } from "../src/service-types";

export const liquorStore: ServiceType = {
  slug: "liquor-store",
  noun: "bottle shop",
  plural: "Liquor stores",
  owners: "store owners",
  parent: "liquor-store-website",
  priority: "range, specialisms and opening hours",
  customerNeeds: ["what you specialise in", "opening hours", "special orders", "tastings and events"],
  hesitation: "not knowing whether you carry what they want",
  pricingModel: "per bottle",
  seasonal: [],
  tier: "one-page",
};
