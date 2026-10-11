/**
 * Runs after `next build` for an area subdomain.
 *
 * Next writes ~9 files per page: the HTML plus RSC payloads (`<page>.txt` and
 * `<page>/__next.*.txt`) that next/link fetches for client-side navigation.
 * The area sites never navigate client-side — every link is a plain <a>
 * (see packages/shared/components/shared/link.tsx and this app's pages) — and
 * the HTML already inlines the payload it hydrates from. Removing them takes
 * a subdomain from ~90,000 files to ~10,000, under Cloudflare's 20,000 limit.
 */
import { readdirSync, rmSync, rmdirSync } from "node:fs";
import { join, resolve } from "node:path";

const OUT_DIR = resolve(process.argv[2] ?? "out");
// Real text files that must stay.
const KEEP = new Set(["robots.txt"]);

let removed = 0;

function walk(dir, isRoot) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (isRoot && entry.name === "_next") continue;
      walk(path, false);
      if (readdirSync(path).length === 0) rmdirSync(path);
    } else if (entry.name.endsWith(".txt") && !(isRoot && KEEP.has(entry.name))) {
      rmSync(path);
      removed += 1;
    }
  }
}

walk(OUT_DIR, true);
console.log(`Removed ${removed.toLocaleString()} client navigation payloads from ${OUT_DIR}`);
