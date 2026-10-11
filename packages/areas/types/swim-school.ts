import type { ServiceType } from "../src/service-types";

export const swimSchool: ServiceType = {
  slug: "swim-school",
  noun: "swim school",
  plural: "Swim schools",
  owners: "swim school owners",
  parent: "swim-school-website",
  priority: "class levels and instructor to student ratios",
  customerNeeds: ["class levels by age", "instructor ratios", "term dates and enrolment", "safety and supervision"],
  hesitation: "anxiety about safety and supervision in the water",
  pricingModel: "per term or per class block",
  seasonal: [],
  tier: "starter",
};
