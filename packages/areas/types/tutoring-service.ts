import type { ServiceType } from "../src/service-types";

export const tutoringService: ServiceType = {
  slug: "tutoring-service",
  noun: "tutoring business",
  plural: "Tutors",
  owners: "tutors",
  parent: "tutoring-service-website",
  priority: "subjects, levels and hourly pricing",
  customerNeeds: ["subjects and levels covered", "hourly rates", "in person or online", "exam board experience"],
  hesitation: "not knowing whether the tutor covers their exact syllabus",
  pricingModel: "hourly, with package discounts",
  seasonal: [],
  tier: "starter",
};
