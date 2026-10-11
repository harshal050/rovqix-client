import type { ServiceType } from "../src/service-types";

export const seniorCare: ServiceType = {
  slug: "senior-care",
  noun: "home care agency",
  plural: "Home care agencies",
  owners: "home care providers",
  parent: "senior-care-website",
  priority: "caregiver vetting and hourly rates",
  customerNeeds: ["hourly rates and minimums", "how caregivers are screened", "levels of care offered", "how quickly you can start"],
  hesitation: "worry about who will be coming into a relative's home",
  pricingModel: "hourly, with minimum visit lengths",
  seasonal: [],
  tier: "starter",
};
