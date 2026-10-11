import type { ServiceType } from "../src/service-types";

export const electrician: ServiceType = {
  slug: "electrician",
  noun: "electrical business",
  plural: "Electricians",
  owners: "electricians",
  parent: "electrician-website",
  priority: "your licence details and service pages for high-value work",
  customerNeeds: ["your licence number", "whether you do their specific job", "service area", "quote process"],
  hesitation: "worry about unlicensed work and safety",
  pricingModel: "per job, quoted after assessment",
  seasonal: [],
  tier: "one-page",
};
