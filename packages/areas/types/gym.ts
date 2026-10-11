import type { ServiceType } from "../src/service-types";

export const gym: ServiceType = {
  slug: "gym",
  noun: "gym",
  plural: "Gyms",
  owners: "gym owners",
  parent: "gym-and-fitness-studio-website",
  priority: "the class timetable and membership pricing",
  customerNeeds: ["membership prices", "the class schedule", "whether beginners fit in", "a free trial"],
  hesitation: "worrying everyone there will be fitter than them",
  pricingModel: "monthly membership tiers",
  seasonal: ["snow"],
  tier: "starter",
};
