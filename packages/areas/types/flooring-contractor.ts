import type { ServiceType } from "../src/service-types";

export const flooringContractor: ServiceType = {
  slug: "flooring-contractor",
  noun: "flooring business",
  plural: "Flooring contractors",
  owners: "flooring installers",
  parent: "flooring-contractor-website",
  priority: "per-square-foot pricing by material",
  customerNeeds: ["price per square foot", "materials available", "whether removal is included", "installation timeline"],
  hesitation: "not knowing what is included beyond the material",
  pricingModel: "per square foot, installed",
  seasonal: [],
  tier: "starter",
};
