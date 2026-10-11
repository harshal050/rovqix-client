import { cn } from "../../lib/utils";

export function LightBeam({
  className,
  variant = "diagonal",
}: {
  className?: string;
  variant?: "diagonal" | "center";
}) {
  if (variant === "center") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className
        )}
      >
        <div className="absolute top-1/2 left-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14),transparent_70%)] blur-3xl" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="animate-beam absolute top-[-20%] left-[10%] h-[140%] w-[26%] bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.16),transparent)] blur-[60px]" />
    </div>
  );
}
