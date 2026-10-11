import type { ServiceType } from "../src/service-types";

export const cafe: ServiceType = {
  slug: "cafe",
  noun: "café",
  plural: "Cafés",
  owners: "café owners",
  parent: "cafe-website",
  priority: "accurate hours and whether people can work there",
  customerNeeds: ["opening hours", "wifi and seating", "the menu", "parking"],
  hesitation: "not knowing whether it is a good place to sit and work",
  pricingModel: "per item, shown on the menu",
  seasonal: [],
  tier: "one-page",
};
