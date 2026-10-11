import type { ServiceType } from "../src/service-types";

export const physicalTherapy: ServiceType = {
  slug: "physical-therapy",
  noun: "physical therapy clinic",
  plural: "Physical therapy clinics",
  owners: "physical therapists",
  parent: "physical-therapy-website",
  priority: "whether a doctor's referral is needed",
  customerNeeds: ["whether they need a referral", "insurance accepted", "your specialisms", "appointment availability"],
  hesitation: "not knowing whether they can book without a referral",
  pricingModel: "per visit, with insurance affecting the cost",
  seasonal: [],
  tier: "starter",
};
