import type { ServiceType } from "../src/service-types";

export const eventPlanner: ServiceType = {
  slug: "event-planner",
  noun: "event planning business",
  plural: "Event planners",
  owners: "event planners",
  parent: "event-planner-website",
  priority: "portfolio and clear pricing structure",
  customerNeeds: ["previous events", "how you charge", "availability", "what you handle"],
  hesitation: "not knowing whether the fee is a percentage or a flat rate",
  pricingModel: "flat fee or percentage of budget",
  seasonal: ["mild"],
  tier: "starter",
};
