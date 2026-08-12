import type { LandingGroup } from "@/lib/content/landing/types";

export type GroupConfig = {
  id: LandingGroup;
  /** URL segment: /services/…, /hire/…, /locations/…, /industries/… */
  segment: string;
  /** Hub page label and copy. */
  name: string;
  hubTitle: string;
  hubHeading: string;
  hubDescription: string;
};

export const landingGroups: GroupConfig[] = [
  {
    id: "services",
    segment: "services",
    name: "Services",
    hubTitle: "Web development services",
    hubHeading: "Every kind of digital product, one studio.",
    hubDescription:
      "Website development, Next.js and React engineering, SaaS platforms, ecommerce, custom software, design and ongoing maintenance — scoped to what your business actually needs.",
  },
  {
    id: "hire",
    segment: "hire",
    name: "Hire developers",
    hubTitle: "Hire developers",
    hubHeading: "Senior engineers, working in your timezone.",
    hubDescription:
      "Hire vetted Next.js, React, Node.js and full-stack developers, or a dedicated team, with overlapping hours for US, UK and Australian clients.",
  },
  {
    id: "locations",
    segment: "locations",
    name: "Where we work",
    hubTitle: "Where we work",
    hubHeading: "A studio built for remote client work.",
    hubDescription:
      "ROVQIX works with companies across the United States, United Kingdom, Canada, Australia and the UAE — remote-first, with overlapping hours and contracts in your currency.",
  },
  {
    id: "industries",
    segment: "industries",
    name: "Industries",
    hubTitle: "Industries we build for",
    hubHeading: "Domain context, not a generic template.",
    hubDescription:
      "SaaS, healthcare, fintech, real estate, ecommerce and agency partnerships — with the compliance, integration and conversion requirements each one brings.",
  },
];

const bySegment = new Map(landingGroups.map((group) => [group.segment, group]));
const byId = new Map(landingGroups.map((group) => [group.id, group]));

export function getGroup(id: LandingGroup): GroupConfig {
  const group = byId.get(id);
  if (!group) throw new Error(`Unknown landing group: ${id}`);
  return group;
}

export function getGroupBySegment(segment: string): GroupConfig | undefined {
  return bySegment.get(segment);
}
