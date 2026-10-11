import type { ServiceType } from "../src/service-types";

export const bikeShop: ServiceType = {
  slug: "bike-shop",
  noun: "bike shop",
  plural: "Bike shops",
  owners: "bike shop owners",
  parent: "bike-shop-website",
  priority: "brands stocked and service pricing",
  customerNeeds: ["brands you carry", "service and repair prices", "workshop turnaround", "fitting services"],
  hesitation: "not knowing whether you stock the brand they want",
  pricingModel: "per service tier, plus parts",
  seasonal: ["mild"],
  tier: "starter",
};
