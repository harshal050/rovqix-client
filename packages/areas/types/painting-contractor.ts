import type { ServiceType } from "../src/service-types";

export const paintingContractor: ServiceType = {
  slug: "painting-contractor",
  noun: "painting business",
  plural: "Painting contractors",
  owners: "painters",
  parent: "painting-contractor-website",
  priority: "before and after galleries and photo-based quoting",
  customerNeeds: ["previous work photos", "rough pricing", "whether prep is included", "how long it takes"],
  hesitation: "worry about poor preparation and mess",
  pricingModel: "per room or per square foot",
  seasonal: ["mild", "snow"],
  tier: "starter",
};
