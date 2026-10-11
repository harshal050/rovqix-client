import type { ServiceType } from "../src/service-types";

export const personalTrainer: ServiceType = {
  slug: "personal-trainer",
  noun: "personal training business",
  plural: "Personal trainers",
  owners: "personal trainers",
  parent: "personal-trainer-website",
  priority: "packages, credentials and a consultation booking",
  customerNeeds: ["session prices", "your specialism", "real client results", "where you train"],
  hesitation: "not knowing whether the trainer works with people like them",
  pricingModel: "session blocks or monthly coaching",
  seasonal: [],
  tier: "starter",
};
