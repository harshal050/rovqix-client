# @rovqix/areas

Generates the area pages and decides which subdomain each one lives on.

```
src/
  generator.ts          page template, city ordering, URLs, Shard/Track types
  variants.ts           the 14 page variants (web design, website cost, SEO, …)
  cities*.ts            1,107 cities, used by every subdomain
  service-type-list.ts  every business type, in publishing order
  index.ts              registry: imports every shard manifest
types/<type>.ts         one business type's data (copy, customer needs, pricing model…)
validate.ts             builds and checks all 1.58M pages in memory: npm run validate
```

Each business type is one site: `<type>-websites.rovqix.in`, with 14 variants × 1,107 cities = 15,498 pages (about 15,550 files; Cloudflare allows 20,000). URLs look like `<type>-websites.rovqix.in/{type}-{variant}-{city}`.

## Rules

- **Append only** in `variants.ts` and `service-type-list.ts`. Slugs are part of every URL.
- Adding a 15th variant still fits (16,605 pages). A 17th would not: `npm run validate` fails if a site would exceed 20,000 files.

## Add a business type

1. Add `types/<slug>.ts` and append it to `src/service-type-list.ts`.
2. `npm run create:area-apps && npm install` creates `apps/<slug>-websites`.
3. `npm run validate -w @rovqix/areas`, then `npm run cf:setup -- --apply` for its Cloudflare project.

## Kill switch

Set `SERVICE_AREA_PAGES_ENABLED = false` in `src/generator.ts` to remove every area page from the subdomains and the sitemap on the next deploy. Use it if Search Console shows indexing or quality problems.

## Measured build

plumber-websites (15,498 pages) on an 11-core machine: 15,554 files in 2 min 45 s. web01 (16,605 pages, an earlier layout) peaked at about 14.6 GB of disk plus about 1.1 GB of `node_modules`. Cloudflare's builders are slower, so expect roughly 10–15 minutes against the 20-minute limit. Cloudflare documents 20 GB of build disk for Workers Builds but gives no figure for Pages. If a subdomain times out or fails with *no space left on device*, drop a variant for that site.
