"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { revealItemVariants } from "@rovqix/shared/components/shared/reveal";

export function CategoryChip({ children }: { children: ReactNode }) {
  return (
    <motion.span
      variants={revealItemVariants}
      whileHover={{ scale: 1.05, y: -2 }}
      className="glass-panel flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors hover:text-brand-blue"
    >
      {children}
    </motion.span>
  );
}
