import type { ServiceType } from "../src/service-types";

export const danceStudio: ServiceType = {
  slug: "dance-studio",
  noun: "dance studio",
  plural: "Dance studios",
  owners: "studio owners",
  parent: "dance-studio-website",
  priority: "the class timetable and term pricing",
  customerNeeds: ["class timetable by age and level", "term fees", "recital and costume costs", "trial classes"],
  hesitation: "unclear total cost once recitals and costumes are added",
  pricingModel: "per term, with additional recital costs",
  seasonal: [],
  tier: "starter",
};
