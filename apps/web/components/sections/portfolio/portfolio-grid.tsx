"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import type { ProjectItem } from "@/lib/api/projects";
import { ProjectCard } from "@/components/sections/portfolio/project-card";
import { cn } from "@rovqix/shared/lib/utils";

export function PortfolioGrid({ projects }: { projects: ProjectItem[] }) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-28 sm:px-8">
      <div className="flex flex-wrap justify-center gap-2.5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              active === category
                ? "bg-foreground text-background"
                : "glass-panel text-muted-foreground hover:text-foreground"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
