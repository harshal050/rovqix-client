import type { ServiceType } from "../src/service-types";

export const optometrist: ServiceType = {
  slug: "optometrist",
  noun: "optometry practice",
  plural: "Optometrists",
  owners: "optometrists",
  parent: "optometrist-website",
  priority: "eye exam pricing and insurance accepted",
  customerNeeds: ["exam cost", "insurance and vision plans", "frame and lens range", "appointment availability"],
  hesitation: "uncertainty about what an exam plus glasses will total",
  pricingModel: "exam fee plus frames and lenses",
  seasonal: [],
  tier: "starter",
};
