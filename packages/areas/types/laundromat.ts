import type { ServiceType } from "../src/service-types";

export const laundromat: ServiceType = {
  slug: "laundromat",
  noun: "laundromat",
  plural: "Laundromats",
  owners: "laundromat owners",
  parent: "laundromat-website",
  priority: "machine prices, sizes and opening hours",
  customerNeeds: ["machine prices", "whether large machines are available", "opening hours and last wash", "card or coin payment"],
  hesitation: "arriving to find no large machines free",
  pricingModel: "per load by machine size",
  seasonal: [],
  tier: "one-page",
};
