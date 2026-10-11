import type { ServiceType } from "../src/service-types";

export const yogaStudio: ServiceType = {
  slug: "yoga-studio",
  noun: "yoga studio",
  plural: "Yoga studios",
  owners: "studio owners",
  parent: "yoga-studio-website",
  priority: "the live class schedule and beginner-friendly class descriptions",
  customerNeeds: ["the timetable", "which class suits a beginner", "class pack prices", "what to bring"],
  hesitation: "not knowing which style of class is appropriate for them",
  pricingModel: "drop-in, class packs and memberships",
  seasonal: [],
  tier: "starter",
};
