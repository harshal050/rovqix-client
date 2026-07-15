"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./hero-scene").then((mod) => mod.HeroScene), {
  ssr: false,
  loading: () => null,
});

export function HeroCanvas({ className }: { className?: string }) {
  return (
    <div className={className}>
      <HeroScene />
    </div>
  );
}
