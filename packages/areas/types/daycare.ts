import type { ServiceType } from "../src/service-types";

export const daycare: ServiceType = {
  slug: "daycare",
  noun: "daycare",
  plural: "Daycares and nurseries",
  owners: "daycare owners",
  parent: "daycare-website",
  priority: "licensing, ratios and current availability",
  customerNeeds: ["licensing and ratios", "fees per week", "current waitlist", "daily routine"],
  hesitation: "trusting someone else with a young child",
  pricingModel: "weekly or monthly fees",
  seasonal: [],
  tier: "starter",
};
