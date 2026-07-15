import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { ProjectItem } from "@/lib/api/projects";
import { BrowserMockup } from "@/components/shared/browser-mockup";
import { TiltCard } from "@/components/shared/tilt-card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block">
      <TiltCard maxTilt={4}>
        <BrowserMockup>
          {project.image ? (
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
          {!project.image && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-heading text-3xl font-semibold text-white/90 drop-shadow-sm">
                {project.name}
              </span>
            </div>
          )}
          <div className="absolute inset-0 flex items-end justify-between bg-black/0 p-5 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white">
              View Case Study
              <ArrowUpRight className="size-3.5" />
            </span>
          </div>
        </BrowserMockup>
      </TiltCard>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-brand-blue">{project.category}</p>
          <h3 className="font-heading mt-1 text-lg font-medium">{project.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="outline" className="rounded-full">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}
