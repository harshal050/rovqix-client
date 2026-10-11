import type { ServiceType } from "../src/service-types";

export const handyman: ServiceType = {
  slug: "handyman",
  noun: "handyman business",
  plural: "Handymen",
  owners: "handymen",
  parent: "handyman-website",
  priority: "your minimum charge and what you do not take on",
  customerNeeds: ["your minimum job size", "what jobs you do", "service area", "whether you are insured"],
  hesitation: "not knowing whether their small job is worth your time",
  pricingModel: "hourly with a minimum, or per job",
  seasonal: [],
  tier: "one-page",
};
