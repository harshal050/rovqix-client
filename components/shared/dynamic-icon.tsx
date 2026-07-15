import { iconMap } from "@/lib/icons";
import { cn } from "@/lib/utils";

export function DynamicIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={cn("size-5", className)} />;
}
