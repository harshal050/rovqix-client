import type { ServiceType } from "../src/service-types";

export const carWash: ServiceType = {
  slug: "car-wash",
  noun: "car wash",
  plural: "Car washes",
  owners: "car wash operators",
  parent: "car-wash-website",
  priority: "package pricing and opening hours",
  customerNeeds: ["wash package prices", "opening hours", "membership options", "whether it is touchless"],
  hesitation: "not knowing whether the wash will scratch their paint",
  pricingModel: "per wash, with monthly memberships",
  seasonal: ["snow", "heat"],
  tier: "one-page",
};
