import type { ServiceType } from "../src/service-types";

export const counsellingPractice: ServiceType = {
  slug: "counselling-practice",
  noun: "therapy practice",
  plural: "Therapists and counsellors",
  owners: "therapists",
  parent: "counselling-practice-website",
  priority: "session fees and whether you are taking new clients",
  customerNeeds: ["session fees", "whether you take insurance", "your specialisms", "current availability"],
  hesitation: "not knowing the cost or whether you have space",
  pricingModel: "per session, with sliding scale where offered",
  seasonal: [],
  tier: "starter",
};
