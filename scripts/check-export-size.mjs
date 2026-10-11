/**
 * Runs after every app's `next build` (npm "postbuild"), with the export
 * directory as its argument. Cloudflare Pages rejects a deployment with more
 * than 20,000 files or any file over 25 MiB, so fail here with a clear message
 * instead of at upload time.
 *
 * An area subdomain over the limit has too many business types: move some to
 * another shard in packages/areas/shards/ (each type is ~1,100 files).
 */
import { readdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const OUT_DIR = resolve(process.argv[2] ?? "out");
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
  console.error(
    "✘ Too many files for one Cloudflare Pages site. For an area subdomain, move business types to another shard in packages/areas/shards/."
  );
}
if (oversized.length || files > MAX_FILES) process.exit(1);
