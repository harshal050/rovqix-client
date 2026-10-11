import type { ServiceType } from "../src/service-types";

export const medicalPractice: ServiceType = {
  slug: "medical-practice",
  noun: "medical practice",
  plural: "Medical practices",
  owners: "physicians",
  parent: "medical-practice-website",
  priority: "which insurance you accept and how to register",
  customerNeeds: ["accepted insurance", "new patient registration", "appointment availability", "which doctors are taking patients"],
  hesitation: "not knowing whether you accept their insurance",
  pricingModel: "per visit, with insurance determining the cost",
  seasonal: [],
  tier: "starter",
};
