# ROVQIX

The public marketing site. Built with Next.js, TypeScript, Tailwind, and Framer Motion.

## Dynamic content

Every piece of repeatable content — services, portfolio projects (with live-site links and cover photos), pricing plans, testimonials, FAQ, blog posts, tech stack, AI technologies, categories, "why choose us," client logos, job postings — plus site-wide copy (hero, company info, stats, about-page mission/vision/timeline) is fetched at request time from a **separate** admin app: [`../rovqix-admin`](../rovqix-admin).

The `/careers` page lists open roles from the admin and posts applications (with an optional resume upload) straight to it — no code changes needed to open or close a role.

That app is its own independent repo with its own database and its own deployment — this site talks to it only over its public HTTP API (`lib/api/*.ts`), never a shared database or shared code.

**If the admin isn't configured or isn't reachable, the site still works.** Every fetcher in `lib/api/` falls back to the static copy in `lib/constants/` on any failure, so this site never breaks because of the admin being down, unset, or not yet deployed.

### Running with live dynamic content

1. Stand up `../rovqix-admin` (see its README) and seed it.
2. Copy `.env.example` to `.env.local` here and set:
   ```
   NEXT_PUBLIC_ADMIN_API_URL=http://localhost:3010
   ```
   (the admin's `dev`/`start` scripts are pinned to port 3010 for exactly this reason — or set this to wherever the admin is deployed in production)
3. `npm run dev` — content now comes from the admin, and editing it there reflects here within about a minute (cached with a 60s revalidation window).

### Running without the admin

Just don't set `NEXT_PUBLIC_ADMIN_API_URL`. Everything renders from the static fallback data in `lib/constants/`, same as before this was made dynamic.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

Deploy as its own project (Vercel, or any Node host), separately from `rovqix-admin`. Set `NEXT_PUBLIC_ADMIN_API_URL` to wherever the admin is deployed, and set `siteConfig.url` in `lib/constants/site.ts` to the site's real production URL (it's used as the base for the sitemap, canonical URLs, and JSON-LD).

## SEO

- Every page sets its own `title`/`description`/`keywords`; keywords for blog posts, portfolio case studies, service listings, and job postings are generated automatically from their live content (`lib/seo.ts`) so new admin content is searchable without any code changes.
- Structured data (JSON-LD): sitewide `Organization`, `BlogPosting` + `BreadcrumbList` on blog posts, `BreadcrumbList` on case studies, an `ItemList` of `Service` on the services page, `FAQPage` wherever the FAQ accordion appears, and `JobPosting` for every open role on `/careers`.
- Open Graph images are generated dynamically per route (`app/opengraph-image.tsx`, `app/blog/[slug]/opengraph-image.tsx`) — no manual image exports needed for new blog posts.
- `app/sitemap.ts` and `app/robots.ts` stay in sync with live admin content automatically.
