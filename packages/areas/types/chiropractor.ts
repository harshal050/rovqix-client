import type { ServiceType } from "../src/service-types";

export const chiropractor: ServiceType = {
  slug: "chiropractor",
  noun: "chiropractic clinic",
  plural: "Chiropractors",
  owners: "chiropractors",
  parent: "chiropractor-website",
  priority: "the conditions you treat and a new patient offer",
  customerNeeds: ["whether you treat their problem", "insurance and cash rates", "what a first visit involves", "whether it hurts"],
  hesitation: "not knowing how many visits will be needed or what it costs",
  pricingModel: "per visit, with new patient offers and packages",
  seasonal: [],
  tier: "starter",
};
