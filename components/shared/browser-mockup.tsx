import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrowserMockup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-sm border border-white/10 bg-[#0a0a0a] shadow-2xl shadow-black/60",
        className
      )}
    >
      <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.03] px-3.5 py-2.5">
        <span className="size-2.5 rounded-full bg-white/70" />
        <span className="size-2.5 rounded-full bg-white/40" />
        <span className="size-2.5 rounded-full bg-white/20" />
      </div>
      <div className="relative aspect-[16/10] w-full">{children}</div>
    </div>
  );
}
