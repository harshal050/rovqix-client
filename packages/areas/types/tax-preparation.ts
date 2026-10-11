import type { ServiceType } from "../src/service-types";

export const taxPreparation: ServiceType = {
  slug: "tax-preparation",
  noun: "tax preparation business",
  plural: "Tax preparers",
  owners: "tax preparers",
  parent: "tax-preparation-website",
  priority: "pricing by return type and current availability",
  customerNeeds: ["price by return type", "your credentials", "appointment availability", "what documents to bring"],
  hesitation: "not knowing the cost before committing",
  pricingModel: "per return, by complexity",
  seasonal: ["snow"],
  tier: "starter",
};
