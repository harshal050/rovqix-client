/**
 * Runs after `next build` (npm "postbuild"). Cloudflare rejects a deployment
 * with more than 20,000 files or any file over 25 MiB, so fail here with a
 * clear message instead of at upload time.
 *
 * Over the file limit? Lower AREA_CITY_LIMIT in
 * lib/content/landing/service-areas.ts (each step removes ~920 files).
 */
import { readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT_DIR = "out";
const MAX_FILES = 20000;
const MAX_FILE_BYTES = 25 * 1024 * 1024;

let files = 0;
const oversized = [];

function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(path);
    } else {
      files += 1;
      if (statSync(path).size > MAX_FILE_BYTES) oversized.push(path);
    }
  }
}

walk(OUT_DIR);

console.log(`\nStatic export: ${files.toLocaleString()} files (Cloudflare limit ${MAX_FILES.toLocaleString()})`);

if (oversized.length) {
  console.error(`✘ Files over 25 MiB:\n  ${oversized.join("\n  ")}`);
}
if (files > MAX_FILES) {
  console.error("✘ Too many files for Cloudflare. Lower AREA_CITY_LIMIT in lib/content/landing/service-areas.ts.");
}
if (oversized.length || files > MAX_FILES) process.exit(1);
