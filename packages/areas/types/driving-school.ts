import type { ServiceType } from "../src/service-types";

export const drivingSchool: ServiceType = {
  slug: "driving-school",
  noun: "driving school",
  plural: "Driving schools",
  owners: "driving instructors",
  parent: "driving-school-website",
  priority: "lesson pricing and pass rates",
  customerNeeds: ["lesson prices and packages", "instructor availability", "pass rates", "automatic or manual"],
  hesitation: "not knowing how many lessons they will actually need",
  pricingModel: "per lesson, with block booking discounts",
  seasonal: [],
  tier: "one-page",
};
