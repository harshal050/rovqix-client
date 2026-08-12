import type { Author, AuthorId } from "@/lib/content/types";
import { siteConfig } from "@/lib/constants/site";

export const authors: Record<AuthorId, Author> = {
  harshal: {
    id: "harshal",
    name: "Harshal Patel",
    role: "Founder & Lead Engineer, ROVQIX",
    bio: "Harshal leads engineering at ROVQIX, where he has shipped production Next.js, Node.js and PostgreSQL systems for startups, SaaS teams and ecommerce brands. He writes about the trade-offs behind architecture decisions rather than the framework of the week.",
    expertise: [
      "Next.js & React architecture",
      "Node.js APIs",
      "PostgreSQL & data modelling",
      "Web performance",
    ],
    url: `${siteConfig.url}/about`,
    sameAs: ["https://linkedin.com/in/rovqix-tech-448623412", "https://x.com/rovqix"],
    initials: "HP",
  },
  "rovqix-engineering": {
    id: "rovqix-engineering",
    name: "ROVQIX Engineering",
    role: "Engineering team, ROVQIX",
    bio: "The ROVQIX engineering team builds and maintains web platforms, APIs and infrastructure for clients across SaaS, ecommerce and enterprise. These notes come out of real production work — deploys, incidents, migrations and audits.",
    expertise: [
      "Cloud & DevOps",
      "Docker & Kubernetes",
      "CI/CD pipelines",
      "Application security",
    ],
    url: `${siteConfig.url}/about`,
    sameAs: ["https://linkedin.com/in/rovqix-tech-448623412"],
    initials: "RE",
  },
  "rovqix-growth": {
    id: "rovqix-growth",
    name: "ROVQIX Growth",
    role: "SEO & growth team, ROVQIX",
    bio: "The ROVQIX growth team handles technical SEO, Core Web Vitals and AI-search visibility for the sites we build. Recommendations here are the ones we apply to client projects and to rovqix.in itself.",
    expertise: ["Technical SEO", "Core Web Vitals", "Structured data", "AEO & GEO"],
    url: `${siteConfig.url}/about`,
    sameAs: ["https://x.com/rovqix"],
    initials: "RG",
  },
};

export function getAuthor(id: AuthorId): Author {
  return authors[id];
}
