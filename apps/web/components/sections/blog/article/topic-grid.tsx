import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { clusters } from "@/lib/content/clusters";
import { getArticlesByCluster } from "@/lib/content/articles";
import { Reveal } from "@rovqix/shared/components/shared/reveal";

/** Topic hubs — the crawlable entry point into each content cluster. */
export function TopicGrid() {
  return (
    <section aria-labelledby="topics" className="mx-auto max-w-6xl px-6 pb-20 sm:px-8">
      <Reveal>
        <h2 id="topics" className="font-heading text-2xl font-medium tracking-tight">
          Browse by topic
        </h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clusters.map((cluster, index) => {
          const count = getArticlesByCluster(cluster.id).length;
          return (
            <Reveal key={cluster.id} delay={Math.min(index, 6) * 0.04}>
              <Link href={`/blog/topics/${cluster.slug}`} className="group block h-full">
                <div className="gradient-border glass-panel flex h-full flex-col rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading text-base font-medium transition-colors group-hover:text-brand-blue">
                      {cluster.name}
                    </h3>
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 shrink-0 text-foreground/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cluster.description}
                  </p>
                  <span className="mt-4 text-xs text-muted-foreground">
                    {count} {count === 1 ? "article" : "articles"}
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
