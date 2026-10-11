import type { Block } from "../../../../lib/content/types";
import { cn } from "../../../../lib/utils";

/**
 * Server-rendered block renderer. Everything here lands in the initial HTML —
 * no client JS gates the article body, so crawlers and AI answer engines can
 * read the full content without executing scripts.
 */
export function ArticleBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <ArticleBlock key={index} block={block} />
      ))}
    </>
  );
}

function ArticleBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-[1.0625rem] leading-[1.85] text-muted-foreground">{block.text}</p>
      );

    case "list": {
      const List = block.ordered ? "ol" : "ul";
      return (
        <List
          className={cn(
            "flex flex-col gap-3 pl-1 text-[1.0625rem] leading-[1.8] text-muted-foreground",
            block.ordered ? "[counter-reset:item]" : ""
          )}
        >
          {block.items.map((item, index) => (
            <li key={index} className="flex gap-3.5">
              {block.ordered ? (
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-border bg-background/60 text-xs font-medium text-foreground">
                  {index + 1}
                </span>
              ) : (
                <span
                  aria-hidden
                  className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-brand-blue/70"
                />
              )}
              <span>{item}</span>
            </li>
          ))}
        </List>
      );
    }

    case "table":
      return (
        <figure className="gradient-border glass-panel overflow-hidden rounded-2xl">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border">
                  {block.head.map((cell) => (
                    <th
                      key={cell}
                      scope="col"
                      className="px-5 py-3.5 font-heading text-xs font-medium tracking-wide text-foreground uppercase"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="border-b border-border/60 last:border-0 transition-colors hover:bg-foreground/[0.03]"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={cn(
                          "px-5 py-3.5 align-top leading-relaxed",
                          cellIndex === 0 ? "font-medium text-foreground" : "text-muted-foreground"
                        )}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "code":
      return (
        <figure className="gradient-border glass-panel overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b border-border px-5 py-2.5">
            <span className="font-mono text-[0.7rem] tracking-widest text-muted-foreground uppercase">
              {block.lang}
            </span>
            <div aria-hidden className="flex gap-1.5">
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="size-2 rounded-full bg-foreground/15" />
              <span className="size-2 rounded-full bg-foreground/15" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <pre className="px-5 py-4 text-[0.82rem] leading-[1.75]">
              <code className="font-mono text-foreground/85">{block.code}</code>
            </pre>
          </div>
          {block.caption && (
            <figcaption className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "callout":
      return (
        <aside className="relative overflow-hidden rounded-2xl border border-brand-blue/25 bg-brand-blue/[0.06] p-5 sm:p-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-10 size-40 rounded-full bg-brand-blue/10 blur-3xl"
          />
          <p className="font-heading text-sm font-medium tracking-tight text-foreground">
            {block.title}
          </p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{block.text}</p>
        </aside>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-brand-blue/50 pl-5 sm:pl-6">
          <p className="font-heading text-lg leading-relaxed text-foreground/90 text-balance italic">
            “{block.text}”
          </p>
          {block.cite && (
            <cite className="mt-2 block text-sm text-muted-foreground not-italic">
              — {block.cite}
            </cite>
          )}
        </blockquote>
      );
  }
}
