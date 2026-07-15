import { fetchPublicRaw } from "@/lib/api/client";
import { workflowPractices as staticWorkflow } from "@/lib/constants/workflow";

export type WorkflowPracticeItem = { title: string; description: string; icon: string };

export async function getWorkflowPractices(): Promise<WorkflowPracticeItem[]> {
  const items = await fetchPublicRaw<WorkflowPracticeItem[]>("/workflow");
  if (!items || items.length === 0) return staticWorkflow.map((w) => ({ ...w }));
  return items.map((item) => ({
    title: item.title,
    description: item.description,
    icon: item.icon,
  }));
}
