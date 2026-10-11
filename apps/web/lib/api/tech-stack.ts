import { techStack } from "@/lib/constants/tech-stack";

export async function getTechStack(): Promise<string[]> {
  return [...techStack];
}
