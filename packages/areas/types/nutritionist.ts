import type { ServiceType } from "../src/service-types";

export const nutritionist: ServiceType = {
  slug: "nutritionist",
  noun: "nutrition practice",
  plural: "Nutritionists and dietitians",
  owners: "nutritionists",
  parent: "nutritionist-website",
  priority: "your credentials and package pricing",
  customerNeeds: ["your qualifications", "package prices", "whether insurance covers it", "virtual or in person"],
  hesitation: "not knowing whether you are properly qualified",
  pricingModel: "packages rather than single sessions",
  seasonal: [],
  tier: "starter",
};
