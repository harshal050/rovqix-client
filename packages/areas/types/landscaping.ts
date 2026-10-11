import type { ServiceType } from "../src/service-types";

export const landscaping: ServiceType = {
  slug: "landscaping",
  noun: "landscaping business",
  plural: "Landscapers",
  owners: "landscapers",
  parent: "landscaping-company-website",
  priority: "a before and after gallery and recurring plan pricing",
  customerNeeds: ["monthly maintenance pricing", "project photos", "service area", "seasonal services"],
  hesitation: "not knowing what regular maintenance actually costs",
  pricingModel: "monthly recurring plans plus quoted project work",
  seasonal: ["snow", "heat", "mild"],
  tier: "starter",
};
