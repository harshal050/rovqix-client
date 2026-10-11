import type { ServiceType } from "../src/service-types";

export const acupunctureClinic: ServiceType = {
  slug: "acupuncture-clinic",
  noun: "acupuncture clinic",
  plural: "Acupuncture clinics",
  owners: "acupuncturists",
  parent: "acupuncture-clinic-website",
  priority: "session pricing and what a first visit involves",
  customerNeeds: ["session prices", "conditions people come for", "whether it hurts", "insurance coverage"],
  hesitation: "nervousness about needles and not knowing what happens",
  pricingModel: "per session, with package pricing",
  seasonal: [],
  tier: "starter",
};
