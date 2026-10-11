import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function EyebrowBadge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase",
        className
      )}
    >
      <span className="h-px w-6 bg-foreground/40" />
      {children}
    </span>
  );
}
