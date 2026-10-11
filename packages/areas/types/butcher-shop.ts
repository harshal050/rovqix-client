import type { ServiceType } from "../src/service-types";

export const butcherShop: ServiceType = {
  slug: "butcher-shop",
  noun: "butcher shop",
  plural: "Butchers",
  owners: "butchers",
  parent: "butcher-shop-website",
  priority: "sourcing and custom order options",
  customerNeeds: ["where the meat comes from", "cuts available", "custom and holiday orders", "opening hours"],
  hesitation: "not knowing whether the quality justifies the price",
  pricingModel: "per pound or per cut",
  seasonal: [],
  tier: "starter",
};
