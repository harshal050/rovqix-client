import type { ServiceType } from "../src/service-types";

export const fencingContractor: ServiceType = {
  slug: "fencing-contractor",
  noun: "fencing business",
  plural: "Fencing contractors",
  owners: "fencing installers",
  parent: "fencing-contractor-website",
  priority: "per-linear-foot pricing and permit guidance",
  customerNeeds: ["price per linear foot", "materials and styles", "permit requirements", "property line advice"],
  hesitation: "uncertainty about permits and property boundaries",
  pricingModel: "per linear foot, installed",
  seasonal: ["mild", "snow"],
  tier: "starter",
};
