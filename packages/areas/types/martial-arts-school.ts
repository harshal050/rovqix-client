import type { ServiceType } from "../src/service-types";

export const martialArtsSchool: ServiceType = {
  slug: "martial-arts-school",
  noun: "martial arts school",
  plural: "Martial arts schools",
  owners: "instructors",
  parent: "martial-arts-school-website",
  priority: "class schedule and a free trial class",
  customerNeeds: ["class timetable", "membership pricing", "whether beginners fit in", "the free trial"],
  hesitation: "worry about being the least experienced person in the room",
  pricingModel: "monthly membership",
  seasonal: [],
  tier: "starter",
};
