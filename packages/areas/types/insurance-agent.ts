import type { ServiceType } from "../src/service-types";

export const insuranceAgent: ServiceType = {
  slug: "insurance-agent",
  noun: "insurance agency",
  plural: "Insurance agents",
  owners: "insurance agents",
  parent: "insurance-agent-website",
  priority: "lines of coverage and carriers represented",
  customerNeeds: ["types of cover offered", "carriers you represent", "how to get a quote", "your licence"],
  hesitation: "assuming a local agent costs more than buying direct",
  pricingModel: "commission based, quotes free",
  seasonal: [],
  tier: "starter",
};
