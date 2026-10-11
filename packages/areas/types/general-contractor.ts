import type { ServiceType } from "../src/service-types";

export const generalContractor: ServiceType = {
  slug: "general-contractor",
  noun: "contracting business",
  plural: "General contractors",
  owners: "contractors",
  parent: "general-contractor-website",
  priority: "project galleries and typical budget ranges",
  customerNeeds: ["project photos", "typical costs", "your licence and insurance", "how long projects take"],
  hesitation: "fear of cost overruns and unfinished work",
  pricingModel: "quoted per project after a consultation",
  seasonal: ["snow"],
  tier: "starter",
};
