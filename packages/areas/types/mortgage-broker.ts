import type { ServiceType } from "../src/service-types";

export const mortgageBroker: ServiceType = {
  slug: "mortgage-broker",
  noun: "mortgage brokerage",
  plural: "Mortgage brokers",
  owners: "mortgage brokers",
  parent: "mortgage-broker-website",
  priority: "calculators and a clear explanation of the process",
  customerNeeds: ["payment calculators", "loan types available", "the application process", "your licensing"],
  hesitation: "confusion about the process and what it will cost",
  pricingModel: "commission or fee, disclosed upfront",
  seasonal: [],
  tier: "starter",
};
