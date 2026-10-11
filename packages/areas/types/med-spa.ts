import type { ServiceType } from "../src/service-types";

export const medSpa: ServiceType = {
  slug: "med-spa",
  noun: "med spa",
  plural: "Med spas",
  owners: "med spa owners",
  parent: "med-spa-website",
  priority: "treatment pricing and real before and after results",
  customerNeeds: ["treatment prices per unit", "before and after photos", "who performs treatments", "consultation booking"],
  hesitation: "uncertainty about who is actually performing the treatment",
  pricingModel: "per unit or per session, plus packages",
  seasonal: [],
  tier: "starter",
};
