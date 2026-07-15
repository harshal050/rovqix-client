import { fetchPublicRaw } from "@/lib/api/client";

export type CareerItem = {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
};

type ApiCareer = {
  _id: string;
  title: string;
  department?: string;
  location?: string;
  type?: string;
  description: string;
  requirements?: string[];
  responsibilities?: string[];
};

function normalize(item: ApiCareer): CareerItem {
  return {
    _id: item._id,
    title: item.title,
    department: item.department ?? "",
    location: item.location ?? "Remote",
    type: item.type ?? "Full-time",
    description: item.description,
    requirements: item.requirements ?? [],
    responsibilities: item.responsibilities ?? [],
  };
}

export async function getCareers(): Promise<CareerItem[]> {
  const items = await fetchPublicRaw<ApiCareer[]>("/careers");
  if (!items) return [];
  return items.map(normalize);
}
