import type { ServiceType } from "../src/service-types";

export const selfStorage: ServiceType = {
  slug: "self-storage",
  noun: "self storage facility",
  plural: "Self storage facilities",
  owners: "storage operators",
  parent: "self-storage-website",
  priority: "unit sizes with monthly prices and availability",
  customerNeeds: ["unit sizes and monthly prices", "current availability", "access hours", "security arrangements"],
  hesitation: "not knowing what size unit they actually need",
  pricingModel: "monthly per unit size",
  seasonal: [],
  tier: "starter",
};
