import { workflowPractices } from "@/lib/constants/workflow";

export type WorkflowPracticeItem = { title: string; description: string; icon: string };

export async function getWorkflowPractices(): Promise<WorkflowPracticeItem[]> {
  return workflowPractices.map((w) => ({ ...w }));
}
