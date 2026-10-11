"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2.2,
  className,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <span ref={ref} className={className}>
      {inView ? (
        <CountUp end={value} duration={duration} suffix={suffix} />
      ) : (
        `0${suffix}`
      )}
    </span>
  );
}
