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
  return staticProjects.map(normalizeStatic);
}

export async function getFeaturedProjects(limit = 6): Promise<ProjectItem[]> {
  const projects = await getProjects();
  return projects.slice(0, limit);
}

export async function getProjectBySlug(slug: string): Promise<ProjectItem | null> {
  const fallback = staticProjects.find((p) => p.slug === slug);
  if (!fallback) return null;
  return normalizeStatic(fallback);
}
