import Link from "next/link";
import { ChevronRight } from "lucide-react";

/**
 * Visible breadcrumb trail. Pairs with breadcrumbJsonLd() on the page so the
 * markup and the structured data always describe the same path.
 */
export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 && (
                <ChevronRight aria-hidden className="size-3.5 shrink-0 text-muted-foreground/50" />
              )}
              {isLast ? (
                <span aria-current="page" className="line-clamp-1 text-foreground/70">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors hover:text-foreground">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
