import type { ServiceType } from "../src/service-types";

export const photographerStudio: ServiceType = {
  slug: "photographer-studio",
  noun: "photography studio",
  plural: "Photography studios",
  owners: "photographers",
  parent: "photographer-website",
  priority: "portfolio and session pricing",
  customerNeeds: ["your portfolio", "session prices", "availability", "what is delivered"],
  hesitation: "not knowing whether your style suits them",
  pricingModel: "per session, by package",
  seasonal: ["mild"],
  tier: "starter",
};
