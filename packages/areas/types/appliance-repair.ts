import type { ServiceType } from "../src/service-types";

export const applianceRepair: ServiceType = {
  slug: "appliance-repair",
  noun: "appliance repair business",
  plural: "Appliance repair companies",
  owners: "appliance technicians",
  parent: "appliance-repair-website",
  priority: "the brands you service and your diagnostic fee",
  customerNeeds: ["whether you fix their brand", "the callout cost", "repair or replace advice", "availability"],
  hesitation: "paying a callout fee only to be told it is not worth fixing",
  pricingModel: "a diagnostic fee plus parts and labour",
  seasonal: [],
  tier: "one-page",
};
