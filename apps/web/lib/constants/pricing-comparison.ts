export type ComparisonValue = boolean | string;

export const comparisonFeatures: {
  label: string;
  starter: ComparisonValue;
  growth: ComparisonValue;
  enterprise: ComparisonValue;
}[] = [
  { label: "Pages", starter: "Up to 5", growth: "Up to 12", enterprise: "Unlimited" },
  { label: "Custom responsive design", starter: true, growth: true, enterprise: true },
  { label: "Advanced motion & animation", starter: false, growth: true, enterprise: true },
  { label: "CMS-ready architecture", starter: false, growth: true, enterprise: true },
  { label: "Technical + on-page SEO", starter: "Basic", growth: "Advanced", enterprise: "Advanced" },
  { label: "Performance optimization", starter: false, growth: true, enterprise: true },
  { label: "Design system & documentation", starter: false, growth: false, enterprise: true },
  { label: "Web app / dashboard build", starter: false, growth: false, enterprise: true },
  { label: "Dedicated engineering pod", starter: false, growth: false, enterprise: true },
  { label: "Support window", starter: "30 days", growth: "90 days", enterprise: "SLA-backed" },
];
