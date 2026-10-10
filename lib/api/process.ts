import { processSteps } from "@/lib/constants/process";

export type ProcessStepItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export async function getProcessSteps(): Promise<ProcessStepItem[]> {
  return processSteps.map((s) => ({ ...s }));
}
