import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  reverse = false,
  speedClassName = "animate-marquee",
  className,
  pauseOnHover = true,
}: {
  children: ReactNode;
  reverse?: boolean;
  speedClassName?: string;
  className?: string;
  pauseOnHover?: boolean;
}) {
  return (
    <div
      className={cn(
        "group flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-12",
          reverse ? "animate-marquee-reverse" : speedClassName,
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-12",
          reverse ? "animate-marquee-reverse" : speedClassName,
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
