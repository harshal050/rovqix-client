import type { ServiceType } from "../src/service-types";

export const veterinaryClinic: ServiceType = {
  slug: "veterinary-clinic",
  noun: "veterinary clinic",
  plural: "Veterinary clinics",
  owners: "veterinarians",
  parent: "veterinary-clinic-website",
  priority: "emergency information that is findable in seconds",
  customerNeeds: ["emergency contact", "consultation fees", "which animals you see", "how to register"],
  hesitation: "cost anxiety about treating a sick animal",
  pricingModel: "consultation fee plus treatment",
  seasonal: [],
  tier: "starter",
};
