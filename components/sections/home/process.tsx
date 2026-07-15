import { getProcessSteps } from "@/lib/api/process";
import { ProcessClient } from "@/components/sections/home/process-client";

export async function Process() {
  const steps = await getProcessSteps();
  return <ProcessClient steps={steps} />;
}
