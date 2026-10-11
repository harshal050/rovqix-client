import type { ServiceType } from "../src/service-types";

export const realEstateAgent: ServiceType = {
  slug: "real-estate-agent",
  noun: "estate agency",
  plural: "Real estate agents",
  owners: "agents",
  parent: "real-estate-agent-website",
  priority: "local market knowledge and a valuation request",
  customerNeeds: ["your recent sales", "local area knowledge", "commission structure", "a free valuation"],
  hesitation: "not knowing whether you actually work their neighbourhood",
  pricingModel: "commission on sale",
  seasonal: ["mild"],
  tier: "starter",
};
