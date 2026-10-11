import type { ServiceType } from "../src/service-types";

export const daySpa: ServiceType = {
  slug: "day-spa",
  noun: "day spa",
  plural: "Day spas",
  owners: "spa owners",
  parent: "day-spa-website",
  priority: "a treatment menu with durations and gift cards",
  customerNeeds: ["treatment prices", "what to expect on a first visit", "gift card purchase", "package deals"],
  hesitation: "nervousness about what happens during a first treatment",
  pricingModel: "price by treatment and duration, plus packages",
  seasonal: [],
  tier: "starter",
};
