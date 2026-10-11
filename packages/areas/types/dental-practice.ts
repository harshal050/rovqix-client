import type { ServiceType } from "../src/service-types";

export const dentalPractice: ServiceType = {
  slug: "dental-practice",
  noun: "dental practice",
  plural: "Dental practices",
  owners: "dentists",
  parent: "dental-practice-website",
  priority: "which insurance plans you accept",
  customerNeeds: ["accepted insurance", "new patient information", "appointment availability", "treatment costs"],
  hesitation: "fear of an unexpected bill, and dental anxiety",
  pricingModel: "per procedure, with insurance affecting the final cost",
  seasonal: [],
  tier: "starter",
};
