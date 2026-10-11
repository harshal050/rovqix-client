import type { ServiceType } from "../src/service-types";

export const itSupport: ServiceType = {
  slug: "it-support",
  noun: "IT support business",
  plural: "IT support companies",
  owners: "IT providers",
  parent: "it-support-website",
  priority: "per-user pricing and response time commitments",
  customerNeeds: ["per-user monthly pricing", "response times", "what is included", "onboarding process"],
  hesitation: "having been let down by a previous provider",
  pricingModel: "monthly per user",
  seasonal: [],
  tier: "starter",
};
