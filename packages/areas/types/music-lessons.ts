import type { ServiceType } from "../src/service-types";

export const musicLessons: ServiceType = {
  slug: "music-lessons",
  noun: "music lesson business",
  plural: "Music teachers",
  owners: "music teachers",
  parent: "music-lessons-website",
  priority: "lesson pricing and instruments taught",
  customerNeeds: ["lesson prices", "instruments taught", "whether you travel or they come to you", "trial lesson"],
  hesitation: "not knowing if the teacher suits their child's age or level",
  pricingModel: "per lesson or per term block",
  seasonal: [],
  tier: "one-page",
};
