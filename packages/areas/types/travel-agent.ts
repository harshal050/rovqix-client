import type { ServiceType } from "../src/service-types";

export const travelAgent: ServiceType = {
  slug: "travel-agent",
  noun: "travel agency",
  plural: "Travel agents",
  owners: "travel advisors",
  parent: "travel-agent-website",
  priority: "your specialisms and how you charge",
  customerNeeds: ["destinations you specialise in", "planning fees", "why use an agent", "consultation booking"],
  hesitation: "not seeing why they should not just book online themselves",
  pricingModel: "planning fee or commission",
  seasonal: ["mild"],
  tier: "starter",
};
