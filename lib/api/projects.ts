import { fetchPublicRaw } from "@/lib/api/client";
import { featuredProjects as staticProjects } from "@/lib/constants/projects";

export type ProjectItem = {
  slug: string;
  name: string;
  category: string;
  description: string;
  summary: string;
  gradient: string;
  tags: string[];
  client: string;
  year: string;
  services: string[];
  results: { label: string; value: string }[];
  liveUrl: string;
  image: string;
};

type ApiProject = {
  slug: string;
  name: string;
  category: string;
  description: string;
  summary: string;
  tags: string[];
  client: string;
  year: string;
  services: string[];
  results: { label: string; value: string }[];
  liveUrl?: string;
  image?: string;
};

const GRADIENTS = [
  "from-[#3a3a3a] to-[#0a0a0a]",
  "from-[#454545] to-[#111111]",
  "from-[#2e2e2e] to-[#050505]",
  "from-[#4d4d4d] to-[#161616]",
  "from-[#383838] to-[#0d0d0d]",
  "from-[#404040] to-[#0a0a0a]",
  "from-[#2a2a2a] to-[#000000]",
  "from-[#525252] to-[#1a1a1a]",
];

function gradientForSlug(slug: string): string {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return GRADIENTS[hash % GRADIENTS.length];
}

function normalize(item: ApiProject): ProjectItem {
  return {
    slug: item.slug,
    name: item.name,
    category: item.category,
    description: item.description,
    summary: item.summary,
    gradient: gradientForSlug(item.slug),
    tags: item.tags,
    client: item.client,
    year: item.year,
    services: item.services,
    results: item.results,
    liveUrl: item.liveUrl ?? "",
    image: item.image ?? "",
  };
}

function normalizeStatic(project: (typeof staticProjects)[number]): ProjectItem {
  return {
    ...project,
    tags: [...project.tags],
    services: [...project.services],
    results: project.results.map((r) => ({ ...r })),
    liveUrl: "",
    image: "",
  };
}

export async function getProjects(): Promise<ProjectItem[]> {
  const items = await fetchPublicRaw<ApiProject[]>("/projects");
  if (!items || items.length === 0) return staticProjects.map(normalizeStatic);
  return items.map(normalize);
}

export async function getFeaturedProjects(limit = 6): Promise<ProjectItem[]> {
  const projects = await getProjects();
  return projects.slice(0, limit);
}

export async function getProjectBySlug(slug: string): Promise<ProjectItem | null> {
  const item = await fetchPublicRaw<ApiProject>(`/projects/${slug}`);
  if (item) return normalize(item);

  const fallback = staticProjects.find((p) => p.slug === slug);
  if (!fallback) return null;
  return normalizeStatic(fallback);
}
