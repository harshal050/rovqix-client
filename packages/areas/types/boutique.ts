import type { ServiceType } from "../src/service-types";

export const boutique: ServiceType = {
  slug: "boutique",
  noun: "boutique",
  plural: "Boutiques",
  owners: "shop owners",
  parent: "boutique-retail-website",
  priority: "what you stock and accurate opening hours",
  customerNeeds: ["brands you carry", "opening hours", "what the shop looks like", "whether items can be held"],
  hesitation: "not knowing whether the trip is worth making",
  pricingModel: "per item, in store",
  seasonal: [],
  tier: "one-page",
};
