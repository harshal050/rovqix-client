"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

export function GlassCard({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "gradient-border glass-panel relative overflow-hidden rounded-2xl p-6 sm:p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
