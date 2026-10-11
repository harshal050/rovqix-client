import type { ClusterId } from "@rovqix/shared/lib/content/types";

export type Cluster = {
  id: ClusterId;
  /** URL segment under /blog/topics/. */
  slug: string;
  name: string;
  title: string;
  description: string;
  /** Service page this cluster funnels into. */
  service: { label: string; href: string };
};

export const clusters: Cluster[] = [
  {
    id: "nextjs",
    slug: "nextjs",
    name: "Next.js",
    title: "Next.js guides: App Router, rendering and deployment",
    description:
      "Practical Next.js guides on the App Router, server components, rendering strategies, caching, metadata and production deployment.",
    service: { label: "Next.js development services", href: "/services#saas" },
  },
  {
    id: "react",
    slug: "react",
    name: "React",
    title: "React guides: components, state and rendering performance",
    description:
      "React articles on component architecture, hooks, state management, re-render performance and accessibility in production applications.",
    service: { label: "Web application development", href: "/services#web-apps" },
  },
  {
    id: "backend",
    slug: "backend",
    name: "Backend & APIs",
    title: "Node.js, backend architecture and API design guides",
    description:
      "Backend engineering guides covering Node.js runtime behaviour, REST and GraphQL API design, authentication, queues and background jobs.",
    service: { label: "Custom software development", href: "/services#custom-software" },
  },
  {
    id: "databases",
    slug: "databases",
    name: "Databases",
    title: "PostgreSQL, MongoDB and Redis engineering guides",
    description:
      "Database guides on PostgreSQL indexing and query planning, MongoDB schema design, Redis caching patterns, migrations and backups.",
    service: { label: "Custom software development", href: "/services#custom-software" },
  },
  {
    id: "devops",
    slug: "devops",
    name: "DevOps",
    title: "Docker, Kubernetes and CI/CD guides",
    description:
      "DevOps guides on containerising applications with Docker, running workloads on Kubernetes, building CI/CD pipelines and observability.",
    service: { label: "Maintenance & support", href: "/services#maintenance" },
  },
  {
    id: "cloud",
    slug: "cloud",
    name: "Cloud & Deployment",
    title: "AWS, Vercel and server architecture guides",
    description:
      "Cloud and deployment guides comparing AWS and Vercel, sizing servers, planning architecture, controlling cost and handling zero-downtime releases.",
    service: { label: "Enterprise websites", href: "/services#enterprise" },
  },
  {
    id: "performance",
    slug: "web-performance",
    name: "Performance",
    title: "Web performance and Core Web Vitals guides",
    description:
      "Web performance guides on Core Web Vitals, LCP, INP, CLS, image and font optimisation, bundle size and rendering cost.",
    service: { label: "Performance optimisation", href: "/services#performance" },
  },
  {
    id: "security",
    slug: "web-security",
    name: "Security",
    title: "Web application security guides",
    description:
      "Application security guides on authentication, session handling, XSS and CSRF defence, secrets management, headers and dependency risk.",
    service: { label: "Enterprise websites", href: "/services#enterprise" },
  },
  {
    id: "seo",
    slug: "technical-seo",
    name: "Technical SEO",
    title: "Technical SEO guides for developers",
    description:
      "Technical SEO guides on crawling, indexing, canonicals, sitemaps, structured data, internal linking and rendering for search engines.",
    service: { label: "SEO services", href: "/services#seo" },
  },
  {
    id: "ai-seo",
    slug: "ai-seo",
    name: "AI SEO",
    title: "AI SEO, AEO and GEO guides",
    description:
      "Guides on optimising for AI search: answer engine optimisation, generative engine optimisation, citations in AI Overviews and LLM crawlers.",
    service: { label: "SEO services", href: "/services#seo" },
  },
  {
    id: "small-business",
    slug: "small-business",
    name: "Small business",
    title: "Small business website guides: plain-English answers",
    description:
      "Practical guides for shop owners, trades and local businesses — what a website costs, why you are not on Google, hosting, reviews, photos and choosing who to hire.",
    service: { label: "Local business websites", href: "/local" },
  },
];

const clusterById = new Map(clusters.map((cluster) => [cluster.id, cluster]));
const clusterBySlug = new Map(clusters.map((cluster) => [cluster.slug, cluster]));

export function getCluster(id: ClusterId): Cluster {
  const cluster = clusterById.get(id);
  if (!cluster) throw new Error(`Unknown cluster: ${id}`);
  return cluster;
}

export function getClusterBySlug(slug: string): Cluster | undefined {
  return clusterBySlug.get(slug);
}
