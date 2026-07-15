import { cn } from "@/lib/utils";

export function AuroraBackground({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
    >
      <div className="absolute top-[-10%] left-[10%] size-[520px] animate-blob rounded-full bg-brand-blue/30 blur-[120px]" />
      <div className="absolute top-[10%] right-[5%] size-[480px] animate-blob rounded-full bg-brand-violet/25 blur-[130px] [animation-delay:-6s]" />
      <div className="absolute bottom-[-15%] left-[30%] size-[560px] animate-blob rounded-full bg-brand-cyan/20 blur-[140px] [animation-delay:-11s]" />
    </div>
  );
}
