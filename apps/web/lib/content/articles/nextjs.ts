import type { Article } from "@rovqix/shared/lib/content/types";

export const nextjsArticles: Article[] = [
  {
    slug: "nextjs-app-router-vs-pages-router",
    title: "App Router vs Pages Router: which one should you build on in 2026?",
    seoTitle: "App Router vs Pages Router in Next.js (2026 Guide)",
    description:
      "A practical comparison of the Next.js App Router and Pages Router — rendering model, data fetching, migration cost and when staying on Pages is still the right call.",
    excerpt:
      "The two Next.js routers are not two syntaxes for the same thing. They are different rendering models, and that difference decides your data fetching, caching and hiring plan.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "app router vs pages router",
    secondaryKeywords: [
      "next.js app router",
      "next.js pages router",
      "next.js migration",
      "react server components",
      "next.js routing",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-28",
    updatedAt: "2026-08-04",
    answer:
      "Build new Next.js projects on the App Router: it is where server components, streaming, layouts and the current caching model live, and it is the router receiving new features. Keep an existing Pages Router app where it is unless you need those capabilities — the two routers can run side by side in the same project, so migration can be incremental rather than a rewrite.",
    takeaways: [
      "The App Router is the default for new projects and the only router getting new rendering features.",
      "Pages Router apps still work and are still supported — there is no forced migration deadline.",
      "Both routers can coexist in one codebase, so migrate route by route instead of all at once.",
      "The real cost of migration is unlearning client-first data fetching, not rewriting file paths.",
    ],
    sections: [
      {
        heading: "What is the difference between the App Router and the Pages Router?",
        answer:
          "The Pages Router renders React on the client with server-prepared props; the App Router renders React on the server by default and ships client JavaScript only where you ask for it.",
        body: [
          {
            type: "p",
            text: "In the Pages Router, every component in your tree is a client component. The server's job is to run getServerSideProps or getStaticProps, serialise the result into JSON, and hand it to React on the client for hydration. That model is predictable and easy to reason about, but it means the entire page component tree ships to the browser.",
          },
          {
            type: "p",
            text: "In the App Router, components are React Server Components unless you add the \"use client\" directive. Server components run only on the server, never ship their code to the browser, and can await data directly inside the component. Client components still exist — you need them for state, effects and event handlers — but they become leaves in the tree rather than the whole tree.",
          },
          {
            type: "table",
            head: ["Concern", "Pages Router", "App Router"],
            rows: [
              ["Default component type", "Client component", "Server component"],
              ["Data fetching", "getServerSideProps / getStaticProps", "await inside the component"],
              ["Shared UI", "_app.js and per-page wrappers", "Nested layout.tsx files"],
              ["Loading UI", "Manual state flags", "loading.tsx and Suspense streaming"],
              ["Error handling", "Custom _error page", "error.tsx per route segment"],
              ["Metadata", "next/head", "Metadata API / generateMetadata"],
            ],
            caption: "The routers differ in defaults, not just file locations.",
          },
        ],
      },
      {
        heading: "When is the Pages Router still the right choice?",
        answer:
          "Stay on the Pages Router when the app is stable, the team is productive, and nothing you need is App-Router-only.",
        body: [
          {
            type: "p",
            text: "Migration is not free. It costs review cycles, regression risk and a period where two mental models live in one codebase. If your application ships features on schedule and its performance profile is acceptable, the correct engineering decision is often to leave it alone.",
          },
          {
            type: "list",
            items: [
              "The app depends on libraries that assume a client-side React tree and have no server-safe path.",
              "You rely heavily on Pages-only APIs and a rewrite would touch every route at once.",
              "The team is small and currently mid-roadmap — a router migration is a quarter you are not shipping features.",
              "The site is largely static marketing content that already scores well on Core Web Vitals.",
            ],
          },
          {
            type: "callout",
            title: "The pragmatic middle path",
            text: "Add the app/ directory alongside pages/ and build only new routes there. Next.js resolves App Router routes first, so you can migrate high-value pages one at a time and leave the long tail until it is worth touching.",
          },
        ],
      },
      {
        heading: "What actually breaks when you migrate?",
        body: [
          {
            type: "p",
            text: "In our client migrations the file moves are the easy part. What consistently causes friction is code that assumed it was running in the browser: direct window access at module scope, context providers wrapping the entire app, and data libraries configured with client-only singletons.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Provider sprawl: wrapping the root layout in a client component undoes the benefit of server components. Push providers down to the smallest subtree that needs them.",
              "Dynamic APIs: params, searchParams, cookies() and headers() are asynchronous in current Next.js versions. Every route that reads them needs awaiting.",
              "Data libraries: client-side fetch caches (React Query, SWR) often duplicate work the server already did. Decide per route which layer owns the data.",
              "Third-party components: anything using hooks needs \"use client\" — sometimes via a thin wrapper you own.",
            ],
          },
          {
            type: "code",
            lang: "tsx",
            code: `// app/blog/[slug]/page.tsx — params is a Promise in current Next.js
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug); // runs on the server only
  return <Article post={post} />;
}`,
            caption: "Awaiting dynamic APIs is the most common migration fix.",
          },
        ],
      },
      {
        heading: "How does the App Router change your performance profile?",
        body: [
          {
            type: "p",
            text: "The headline win is bundle size. Moving data formatting, date libraries, markdown parsing and business logic into server components removes them from the client bundle entirely. On one client dashboard we cut first-load JavaScript from 412 KB to 178 KB purely by relocating logic, with no feature changes.",
          },
          {
            type: "p",
            text: "The second win is streaming. With loading.tsx and Suspense boundaries, the shell of the page reaches the browser while slow data is still resolving. That improves perceived performance and Largest Contentful Paint even when total response time is unchanged.",
          },
          {
            type: "p",
            text: "The risk is the inverse: a waterfall of sequential awaits in nested server components can be slower than one parallel client fetch. Fetch in parallel with Promise.all where requests are independent, and measure before assuming the server path is faster.",
          },
        ],
      },
      {
        heading: "How should a team decide?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "New project, no legacy constraints: App Router. There is no serious argument for starting on Pages today.",
              "Existing app, active roadmap, no blocking need: stay, and add new routes in app/.",
              "Existing app with performance problems traced to bundle size: migrate the heaviest routes first and measure.",
              "Existing app you plan to rebuild within a year anyway: do not migrate — fold it into the rebuild.",
            ],
          },
          {
            type: "quote",
            text: "Migrate a route when the migration pays for itself on that route. Not because the docs changed.",
            cite: "ROVQIX engineering principle",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Pages Router deprecated?",
        answer:
          "No. The Pages Router is still supported and still receives maintenance, but new rendering features are built for the App Router. Treat it as stable and frozen rather than dying.",
      },
      {
        question: "Can I use the App Router and Pages Router in the same project?",
        answer:
          "Yes. Next.js supports both directories in one application and resolves App Router routes first when paths collide. This is the recommended way to migrate incrementally.",
      },
      {
        question: "How long does a typical migration take?",
        answer:
          "For a 20–40 route application with normal complexity, plan two to four engineering weeks including QA. The variable is not route count but how much client-only logic is tangled into shared layouts.",
      },
      {
        question: "Does the App Router improve SEO?",
        answer:
          "Indirectly. Server-rendered HTML, the Metadata API and streaming all help crawlability and Core Web Vitals, but a well-built Pages Router site with SSR is also fully indexable. The router is not itself a ranking factor.",
      },
    ],
    references: [
      { label: "Next.js documentation — App Router", href: "https://nextjs.org/docs/app" },
      {
        label: "React documentation — Server Components",
        href: "https://react.dev/reference/rsc/server-components",
      },
      {
        label: "web.dev — Core Web Vitals",
        href: "https://web.dev/articles/vitals",
      },
    ],
    internalLinks: [
      { label: "Next.js server components explained", href: "/blog/nextjs-server-components-explained" },
      { label: "Choosing between SSR, SSG and ISR", href: "/blog/nextjs-ssr-ssg-isr-which-to-use" },
      { label: "Our web application development service", href: "/services#web-apps" },
      { label: "How we scope and run projects", href: "/process" },
    ],
    related: [
      "nextjs-server-components-explained",
      "nextjs-ssr-ssg-isr-which-to-use",
      "nextjs-caching-explained",
    ],
  },

  {
    slug: "nextjs-server-components-explained",
    title: "React Server Components explained for teams shipping real products",
    seoTitle: "React Server Components Explained (Practical Guide)",
    description:
      "What React Server Components actually do, where the server/client boundary belongs, and the patterns that keep a server-first Next.js app fast and maintainable.",
    excerpt:
      "Server components are not 'SSR with extra steps'. They change what code ships to the browser at all — and that changes how you structure a codebase.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "react server components",
    secondaryKeywords: [
      "server components vs client components",
      "use client directive",
      "next.js server components",
      "rsc payload",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-14",
    answer:
      "React Server Components render exclusively on the server and send a serialised description of the UI to the browser instead of component JavaScript. They can await data directly, cannot use state or effects, and reduce client bundle size because their code never reaches the browser.",
    takeaways: [
      "Server components ship no JavaScript to the client — only rendered output.",
      "\"use client\" marks a boundary, not a file: everything imported below it becomes client code.",
      "Server components can await data directly; client components cannot.",
      "Push the client boundary as far down the tree as possible to keep bundles small.",
    ],
    sections: [
      {
        heading: "What is a React Server Component?",
        answer:
          "A React Server Component is a component that runs only during rendering on the server and never ships its source code to the browser.",
        body: [
          {
            type: "p",
            text: "Rather than sending your component code plus data to the browser and rendering there, the server executes the component and streams a compact description of the resulting UI tree — the RSC payload — to React on the client. React uses that description to build the DOM and to reconcile with any client components in the tree.",
          },
          {
            type: "p",
            text: "The practical consequence: a server component can import a 300 KB markdown parser, a date library and your database client, and the browser downloads none of it. That is the entire point.",
          },
          {
            type: "table",
            head: ["Capability", "Server component", "Client component"],
            rows: [
              ["Async / await in the body", "Yes", "No"],
              ["useState, useEffect", "No", "Yes"],
              ["Event handlers (onClick)", "No", "Yes"],
              ["Direct database or filesystem access", "Yes", "No"],
              ["Ships JavaScript to browser", "No", "Yes"],
              ["Access to browser APIs", "No", "Yes"],
            ],
          },
        ],
      },
      {
        heading: "How does the \"use client\" boundary actually work?",
        body: [
          {
            type: "p",
            text: "\"use client\" at the top of a file marks an entry point into the client bundle. Every module that file imports — and everything those modules import — is compiled for the browser too. This is the single most misunderstood detail of the model.",
          },
          {
            type: "p",
            text: "The failure mode we see most often: a team puts \"use client\" in the root layout to make a theme provider work, and the entire application silently becomes a client application again. The App Router is still used, the performance benefit is gone.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// Wrong: the whole tree becomes client code
"use client";
export default function Layout({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

// Right: only the provider is a client component
import { ThemeProvider } from "./theme-provider"; // "use client" lives there
export default function Layout({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}`,
            caption: "children passed from a server parent stays server-rendered.",
          },
          {
            type: "callout",
            title: "The children escape hatch",
            text: "Server components can be passed as children or props into client components. The client component controls placement; the server component still renders on the server. This is how you keep interactive shells around server content.",
          },
        ],
      },
      {
        heading: "Where should the boundary go?",
        body: [
          {
            type: "p",
            text: "The rule we apply on every project: the client boundary belongs at the smallest interactive unit, not at the page or layout. A product page is a server component; the add-to-cart button inside it is a client component. A dashboard is a server component; the chart with a hover tooltip is a client component.",
          },
          {
            type: "list",
            items: [
              "Data display, formatting, layout, and content — server components.",
              "Anything with onClick, onChange, useState, useEffect, or a browser API — client components.",
              "Forms — usually a small client component wrapping a server action.",
              "Third-party widgets — a thin client wrapper you own, loaded dynamically where possible.",
            ],
          },
        ],
      },
      {
        heading: "What are the common mistakes?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Sequential awaits creating request waterfalls. Use Promise.all when requests do not depend on each other.",
              "Passing non-serialisable props (functions, class instances, Dates in some cases) across the boundary — these throw at render time.",
              "Fetching the same data in a parent and a child. Deduplicate with a shared cached function rather than prop drilling everywhere.",
              "Leaking secrets: a server component can read process.env safely, but the moment that value is passed as a prop into a client component it is in the browser payload.",
            ],
          },
          {
            type: "callout",
            title: "Guard your secrets structurally",
            text: "Keep server-only modules honest by importing the server-only package at the top. If a client component ever pulls that module in, the build fails instead of shipping your API key.",
          },
        ],
      },
      {
        heading: "When are server components the wrong tool?",
        body: [
          {
            type: "p",
            text: "Highly interactive surfaces — a canvas editor, a spreadsheet, a real-time collaborative document — are client applications with a server behind them. Forcing them into a server-first structure adds ceremony without benefit. Use server components for the shell, authentication and initial data, and let the interactive core be a client island.",
          },
          {
            type: "p",
            text: "Similarly, if your data changes on every keystroke, the round trip to a server component is worse than a client fetch. Server components optimise for content that is stable within a request, not for per-interaction updates.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are server components the same as server-side rendering?",
        answer:
          "No. SSR renders your components to HTML on the server but still ships the component JavaScript to the browser for hydration. Server components never ship that JavaScript at all. Most App Router apps use both together.",
      },
      {
        question: "Can a server component import a client component?",
        answer:
          "Yes, and that is the normal direction. A client component cannot import a server component directly, but it can receive one as children or as a prop.",
      },
      {
        question: "Do server components work outside Next.js?",
        answer:
          "They require a bundler and framework integration. Next.js and a small number of other frameworks implement the protocol; you cannot drop them into a plain Vite React app today.",
      },
      {
        question: "How do I debug what ended up in the client bundle?",
        answer:
          "Run a bundle analyser against your production build and look at the first-load JavaScript per route. Any unexpected library in there almost always traces back to a \"use client\" file importing it.",
      },
    ],
    references: [
      {
        label: "React documentation — Server Components",
        href: "https://react.dev/reference/rsc/server-components",
      },
      { label: "Next.js — Server and Client Components", href: "https://nextjs.org/docs/app/getting-started/server-and-client-components" },
      { label: "npm — server-only package", href: "https://www.npmjs.com/package/server-only" },
    ],
    internalLinks: [
      { label: "App Router vs Pages Router", href: "/blog/nextjs-app-router-vs-pages-router" },
      { label: "Next.js server actions guide", href: "/blog/nextjs-server-actions-guide" },
      { label: "Reducing JavaScript bundle size", href: "/blog/reduce-javascript-bundle-size" },
      { label: "Our SaaS platform development service", href: "/services#saas" },
    ],
    related: [
      "nextjs-app-router-vs-pages-router",
      "nextjs-server-actions-guide",
      "react-rerender-performance",
    ],
  },

  {
    slug: "nextjs-caching-explained",
    title: "Next.js caching explained: the four layers and how to control them",
    seoTitle: "Next.js Caching Explained: All 4 Layers",
    description:
      "Request memoisation, the data cache, the full route cache and the client router cache — what each layer does, how they interact, and how to invalidate them correctly.",
    excerpt:
      "Most 'Next.js is showing stale data' bugs are one of four caches doing exactly what it was told. Here is the mental model that makes them predictable.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "next.js caching",
    secondaryKeywords: [
      "next.js data cache",
      "revalidatePath",
      "revalidateTag",
      "incremental static regeneration",
      "next.js stale data",
    ],
    authorId: "harshal",
    publishedAt: "2026-06-30",
    updatedAt: "2026-07-22",
    answer:
      "Next.js has four distinct caches: request memoisation (per render), the data cache (persistent, server-side), the full route cache (rendered HTML and RSC payload), and the client router cache (in-memory, per session). Stale content is almost always one specific layer, and each is invalidated differently — revalidateTag and revalidatePath for the server caches, navigation and refresh for the client one.",
    takeaways: [
      "Four caches, four lifetimes — diagnose which one is serving stale data before changing code.",
      "revalidateTag is the precise tool; revalidatePath is the blunt one.",
      "Reading cookies or headers makes a route dynamic and skips the full route cache.",
      "The client router cache can show stale UI even after the server has revalidated.",
    ],
    sections: [
      {
        heading: "What are the four caching layers in Next.js?",
        answer:
          "They are request memoisation, the data cache, the full route cache and the client router cache — ordered from shortest to longest lived.",
        body: [
          {
            type: "table",
            head: ["Cache", "Scope", "Lifetime", "Cleared by"],
            rows: [
              ["Request memoisation", "One server render", "Single request", "Automatic"],
              ["Data cache", "Server, across requests and deploys", "Until revalidated", "revalidateTag / revalidateAge / revalidatePath"],
              ["Full route cache", "Server, per route", "Until revalidated or redeployed", "revalidatePath / new deploy"],
              ["Router cache", "Browser, per session", "Seconds to minutes", "router.refresh(), hard navigation"],
            ],
          },
          {
            type: "p",
            text: "They stack. A page can be served from the full route cache, whose HTML was produced using values from the data cache, which were themselves fetched once thanks to request memoisation — and the browser may not even ask the server because of the router cache.",
          },
        ],
      },
      {
        heading: "How do I stop a page from caching?",
        body: [
          {
            type: "p",
            text: "Opt out explicitly at the level you mean. Blanket opt-outs at the top of every file are the reason many Next.js apps perform no better than a plain server-rendered app.",
          },
          {
            type: "code",
            lang: "ts",
            code: `// Route segment: always render on request
export const dynamic = "force-dynamic";

// Route segment: rebuild at most every 60 seconds
export const revalidate = 60;

// Per fetch: never cache this one call
const res = await fetch(url, { cache: "no-store" });

// Per fetch: cache and tag it for targeted invalidation
const res = await fetch(url, { next: { revalidate: 300, tags: ["posts"] } });`,
          },
          {
            type: "callout",
            title: "Dynamic by accident",
            text: "Calling cookies(), headers(), or reading searchParams makes a route dynamic. If a page you expected to be static is rendering on every request, look for one of these buried in a shared component.",
          },
        ],
      },
      {
        heading: "When should I use revalidateTag versus revalidatePath?",
        answer:
          "Use revalidateTag when you know which data changed; use revalidatePath when you know which page changed.",
        body: [
          {
            type: "p",
            text: "Tags map to data. If an editor updates a blog post, revalidateTag('posts') invalidates every cached fetch tagged 'posts' — the listing page, the sitemap, the related-posts block — without you enumerating routes. That is exactly what you want in a content system with many pages built from the same source.",
          },
          {
            type: "p",
            text: "Paths map to routes. revalidatePath('/pricing') is right when a single known page changed and you do not want to think about tags. It is blunter: it discards the rendered output for that route regardless of which data changed.",
          },
          {
            type: "code",
            lang: "ts",
            code: `"use server";
import { revalidateTag } from "next/cache";

export async function publishPost(input: PostInput) {
  await db.post.create({ data: input });
  revalidateTag("posts"); // every page built from tagged post data refreshes
}`,
          },
        ],
      },
      {
        heading: "Why does the UI still show old data after revalidating?",
        body: [
          {
            type: "p",
            text: "Because the client router cache never heard about it. Next.js keeps the RSC payload of visited routes in memory so back-and-forward navigation feels instant. A server-side revalidation does not reach into that in-memory store.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "After a mutation from a client component, call router.refresh() to re-fetch the current route from the server.",
              "Server actions that call revalidatePath or revalidateTag refresh the router cache for the affected route automatically when invoked from a form action.",
              "For cross-tab or long-lived sessions, accept eventual consistency or push updates over a socket — caching is not a real-time transport.",
            ],
          },
        ],
      },
      {
        heading: "What is changing in the current caching model?",
        body: [
          {
            type: "p",
            text: "The direction of travel is explicit caching. Earlier versions cached fetch requests by default, which surprised people; current versions default to no caching for fetch and ask you to opt in. Next.js 16 continues this with an explicit 'use cache' directive that marks a function or component as cacheable, plus cache lifetime helpers, so caching becomes something you declare rather than something you discover.",
          },
          {
            type: "p",
            text: "The practical advice is version-independent: know which layer you are relying on, tag your data, and write an integration test that asserts a published change appears within your intended revalidation window.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why is my Next.js page showing stale data in production but not locally?",
        answer:
          "Development disables most caching. In production the full route cache and data cache are active, so a page that re-rendered on every local request may be served from cache for minutes. Reproduce with a production build locally before debugging further.",
      },
      {
        question: "Does ISR still exist in the App Router?",
        answer:
          "Yes, expressed through the revalidate segment option or per-fetch revalidate values. The behaviour — serve cached, rebuild in the background after the window — is the same idea as Incremental Static Regeneration in the Pages Router.",
      },
      {
        question: "How many tags can I attach to a fetch?",
        answer:
          "Multiple tags per fetch are supported and useful: tag a post fetch with both 'posts' and `post:${slug}` so you can invalidate one post or all of them.",
      },
      {
        question: "Does a new deployment clear the cache?",
        answer:
          "A deployment invalidates the full route cache because the build output changes. The data cache persistence depends on your hosting platform; on most managed platforms it is also reset per deployment.",
      },
    ],
    references: [
      { label: "Next.js — Caching", href: "https://nextjs.org/docs/app/guides/caching" },
      { label: "Next.js — revalidateTag API", href: "https://nextjs.org/docs/app/api-reference/functions/revalidateTag" },
      { label: "MDN — HTTP caching", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching" },
    ],
    internalLinks: [
      { label: "SSR, SSG or ISR — which to use", href: "/blog/nextjs-ssr-ssg-isr-which-to-use" },
      { label: "Redis caching patterns", href: "/blog/redis-caching-patterns" },
      { label: "Next.js deployment checklist", href: "/blog/nextjs-deployment-checklist" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "nextjs-ssr-ssg-isr-which-to-use",
      "redis-caching-patterns",
      "nextjs-deployment-checklist",
    ],
  },

  {
    slug: "nextjs-metadata-api-seo",
    title: "The Next.js Metadata API: a complete SEO setup that scales",
    seoTitle: "Next.js Metadata API: Complete SEO Setup",
    description:
      "How to use generateMetadata, canonical URLs, Open Graph images, robots directives and sitemaps in the App Router so every page ships correct SEO metadata automatically.",
    excerpt:
      "Hand-writing meta tags per page guarantees drift. Here is how we wire the Metadata API once so no page can ship without a canonical, an OG image and a description.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "next.js metadata api",
    secondaryKeywords: [
      "generateMetadata",
      "next.js canonical url",
      "next.js open graph image",
      "next.js sitemap",
      "next.js seo",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-06-16",
    answer:
      "The Next.js Metadata API generates head tags from exported objects or a generateMetadata function in each route segment. Define shared defaults in the root layout with metadataBase and a title template, then override per route — canonical URLs, Open Graph, Twitter cards and robots directives all flow from the same typed object.",
    takeaways: [
      "Set metadataBase once in the root layout so every relative URL resolves absolutely.",
      "Use a title template so page titles stay consistent without repeating the brand name.",
      "Generate Open Graph images with the file-based opengraph-image convention, not manual assets.",
      "Build metadata from a shared helper so a new page cannot ship without a canonical URL.",
    ],
    sections: [
      {
        heading: "How does the Metadata API work?",
        answer:
          "Each route segment can export a static metadata object or an async generateMetadata function; Next.js merges them from the root layout down to the page and renders the resulting head tags.",
        body: [
          {
            type: "p",
            text: "Merging is shallow per field. A child that defines openGraph replaces the parent's openGraph entirely rather than merging its keys, which is the source of most 'my OG image disappeared' reports. Compose deliberately with a helper instead of relying on inheritance for nested objects.",
          },
          {
            type: "code",
            lang: "ts",
            code: `// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://rovqix.in"),
  title: { default: "ROVQIX — Building Digital Products", template: "%s — ROVQIX" },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};`,
          },
        ],
      },
      {
        heading: "How do I set canonical URLs correctly?",
        body: [
          {
            type: "p",
            text: "Every indexable page needs a self-referencing canonical pointing at the exact URL you want ranked — one protocol, one host, no trailing-slash ambiguity, no tracking parameters. With metadataBase set, alternates.canonical accepts a path and Next.js resolves it to an absolute URL.",
          },
          {
            type: "list",
            items: [
              "Paginated listings: canonical to the page itself, not to page one.",
              "Filtered or sorted views: canonical to the unfiltered URL if the filtered version is not meant to rank.",
              "Duplicate content across locales: use alternates.languages with hreflang rather than a cross-locale canonical.",
              "Never canonicalise to a URL that redirects, 404s, or is blocked in robots.txt.",
            ],
          },
        ],
      },
      {
        heading: "How do I generate Open Graph images automatically?",
        body: [
          {
            type: "p",
            text: "Place an opengraph-image.tsx file in a route segment and export a component built with ImageResponse. Next.js renders it to a PNG at build or request time and injects the correct og:image tags with dimensions — no design handoff, no stale assets, and every new page gets a branded card for free.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// app/blog/[slug]/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return new ImageResponse(<Card title={post.title} />, size);
}`,
            caption: "1200×630 is the safe default for Open Graph and Twitter summary_large_image.",
          },
        ],
      },
      {
        heading: "How do sitemaps and robots.txt fit in?",
        body: [
          {
            type: "p",
            text: "Both are file conventions. app/sitemap.ts exports a function returning your URL entries, and app/robots.ts returns your crawl rules and sitemap location. Because they are code, they can read the same content source your pages read — which means a new article appears in the sitemap the moment it exists, with no manual step.",
          },
          {
            type: "code",
            lang: "ts",
            code: `// app/sitemap.ts
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  return [
    { url: "https://rovqix.in", lastModified: new Date(), priority: 1 },
    ...posts.map((post) => ({
      url: \`https://rovqix.in/blog/\${post.slug}\`,
      lastModified: new Date(post.updatedAt),
    })),
  ];
}`,
          },
          {
            type: "callout",
            title: "Sitemaps over 50,000 URLs",
            text: "Next.js supports generateSitemaps() to split large sitemaps into indexed chunks. Below 50,000 URLs and 50 MB uncompressed, a single sitemap is fine.",
          },
        ],
      },
      {
        heading: "How do you stop metadata drift across a growing site?",
        body: [
          {
            type: "p",
            text: "Centralise it. We build one typed helper that takes a content object and returns a complete Metadata result — title, description, keywords, canonical, robots, Open Graph and Twitter. Pages call the helper; nobody hand-writes tags. When we add a field, every page gets it in one commit.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "A shared buildMetadata() helper used by every route.",
              "A required description field on your content type so TypeScript blocks a page without one.",
              "A build-time check that every sitemap URL returns a self-referencing canonical.",
              "A crawl of the staging deployment before release to catch noindex left over from testing.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does generateMetadata block rendering?",
        answer:
          "It runs during rendering and its data requests are deduplicated with the page's own fetches, so requesting the same resource in both places costs one request. Streaming still works — metadata is resolved before the response head is flushed.",
      },
      {
        question: "Can I use next/head in the App Router?",
        answer:
          "No. next/head is a Pages Router API. In the App Router use the Metadata API, or render raw tags in a layout only for cases the API does not cover.",
      },
      {
        question: "What is metadataBase for?",
        answer:
          "It supplies the origin used to turn relative URLs in your metadata — canonicals, OG images — into absolute URLs. Without it, social crawlers receive relative paths they cannot resolve.",
      },
      {
        question: "How do I add JSON-LD structured data?",
        answer:
          "Render a script tag with type=\"application/ld+json\" inside the page component. The Metadata API does not cover structured data, and a small reusable JsonLd component keeps it consistent.",
      },
    ],
    references: [
      { label: "Next.js — Metadata API reference", href: "https://nextjs.org/docs/app/api-reference/functions/generate-metadata" },
      { label: "Google Search Central — canonicalization", href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" },
      { label: "Sitemaps.org protocol", href: "https://www.sitemaps.org/protocol.html" },
    ],
    internalLinks: [
      { label: "Technical SEO checklist for developers", href: "/blog/technical-seo-checklist-developers" },
      { label: "Structured data that actually helps", href: "/blog/structured-data-guide" },
      { label: "Canonical URLs explained", href: "/blog/canonical-urls-explained" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "technical-seo-checklist-developers",
      "structured-data-guide",
      "canonical-urls-explained",
    ],
  },

  {
    slug: "nextjs-ssr-ssg-isr-which-to-use",
    title: "SSR, SSG, ISR or CSR: choosing a rendering strategy per route",
    seoTitle: "SSR vs SSG vs ISR vs CSR: How to Choose",
    description:
      "A decision framework for Next.js rendering strategies — what each one costs, what it gives you, and how to pick per route instead of per project.",
    excerpt:
      "Rendering strategy is a per-route decision, not an architectural religion. A single Next.js app can and should use all four.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "ssr vs ssg vs isr",
    secondaryKeywords: [
      "next.js rendering strategies",
      "static site generation",
      "incremental static regeneration",
      "client side rendering",
    ],
    authorId: "harshal",
    publishedAt: "2026-06-02",
    answer:
      "Use static generation (SSG) for content that changes rarely, incremental static regeneration (ISR) for content that changes on a schedule, server-side rendering (SSR) for per-request personalised content, and client-side rendering (CSR) for data that only matters after interaction. Next.js lets you choose per route, so most real applications use several.",
    takeaways: [
      "Static is the fastest and cheapest option — default to it and justify moving away.",
      "ISR gives you static speed with a freshness window measured in seconds or minutes.",
      "SSR is for content that genuinely differs per user or per request.",
      "CSR is fine for data behind an interaction that search engines never need to see.",
    ],
    sections: [
      {
        heading: "What is the difference between SSR, SSG, ISR and CSR?",
        body: [
          {
            type: "table",
            head: ["Strategy", "HTML generated", "Freshness", "Best for"],
            rows: [
              ["SSG", "At build time", "Until next deploy", "Marketing pages, docs, blog posts"],
              ["ISR", "At build, rebuilt in background", "Revalidation window", "Catalogues, listings, content sites"],
              ["SSR", "Per request", "Always current", "Dashboards, personalised pages, auth-gated views"],
              ["CSR", "In the browser", "Always current", "Post-interaction data, editors, real-time UI"],
            ],
          },
          {
            type: "p",
            text: "The trade-off is always the same shape: the closer generation happens to the request, the fresher the content and the more you pay in latency and compute per visitor.",
          },
        ],
      },
      {
        heading: "When should you use static generation?",
        answer:
          "Whenever the page looks the same for every visitor and changes less often than you deploy.",
        body: [
          {
            type: "p",
            text: "Static pages are served from a CDN edge with no server work. Time to first byte is typically a few dozen milliseconds anywhere in the world, cost is near zero, and there is nothing to fall over under traffic spikes. For marketing sites, documentation and blogs, this should be the default.",
          },
          {
            type: "p",
            text: "The objection we hear is 'but our content changes'. Almost always it changes on the order of hours or days, which is what ISR is for — not a reason to render on every request.",
          },
        ],
      },
      {
        heading: "When is ISR the right middle ground?",
        body: [
          {
            type: "p",
            text: "ISR serves the cached page instantly and rebuilds it in the background once the revalidation window expires. Visitors always get a fast response; the content is at most N seconds old. For a product catalogue with 40,000 SKUs, ISR also means you do not rebuild 40,000 pages to change one price.",
          },
          {
            type: "list",
            items: [
              "Ecommerce category and product pages — 60 to 600 second windows are typical.",
              "News and blog listings where a few minutes of lag is invisible to users.",
              "Anything you would otherwise render server-side purely because 'the CMS might change'.",
            ],
          },
          {
            type: "callout",
            title: "Pair ISR with on-demand revalidation",
            text: "A time window is your safety net; a webhook from the CMS calling revalidateTag is the real mechanism. Together you get near-instant updates without giving up caching.",
          },
        ],
      },
      {
        heading: "When do you actually need SSR?",
        body: [
          {
            type: "p",
            text: "When the response depends on who is asking. Authenticated dashboards, account pages, region-priced pages, A/B-assigned variants and anything reading cookies or headers must render per request — there is no correct cached version to serve.",
          },
          {
            type: "p",
            text: "The cost is real: every visit runs your server and hits your database. Budget for it. Keep queries to a handful, cache the expensive shared parts at the data layer, and stream the page so the shell arrives before the slow region resolves.",
          },
        ],
      },
      {
        heading: "How do you decide per route?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Does the page differ per user? If yes — SSR (or a static shell plus a client island).",
              "Does it need to be indexed by search engines? If yes — never pure CSR.",
              "Does the content change more than once per deploy? If yes — ISR, otherwise SSG.",
              "Is the data only relevant after a click? If yes — fetch it client-side and keep it out of the initial payload.",
            ],
          },
          {
            type: "quote",
            text: "Static by default, dynamic by evidence. Every route that renders per request should be able to explain why.",
            cite: "ROVQIX architecture review checklist",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can one Next.js app mix all four strategies?",
        answer:
          "Yes, and it should. Rendering is configured per route segment, so your marketing pages can be static while your dashboard renders per request in the same deployment.",
      },
      {
        question: "Is SSR bad for SEO?",
        answer:
          "No — SSR produces full HTML and indexes fine. The risk is performance: slow server responses hurt Core Web Vitals, and that does affect rankings indirectly.",
      },
      {
        question: "What is partial prerendering?",
        answer:
          "It is a model where a static shell is served immediately while dynamic holes stream in within the same response, blending SSG and SSR in one route. It removes much of the either/or from this decision as it matures.",
      },
      {
        question: "How do I know which strategy a route ended up using?",
        answer:
          "The build output lists every route with its rendering mode. Check it in CI — a route that silently flipped from static to dynamic is a performance regression worth catching before deploy.",
      },
    ],
    references: [
      { label: "Next.js — Rendering", href: "https://nextjs.org/docs/app/getting-started/partial-prerendering" },
      { label: "Next.js — Incremental Static Regeneration", href: "https://nextjs.org/docs/app/guides/incremental-static-regeneration" },
      { label: "web.dev — Rendering on the web", href: "https://web.dev/articles/rendering-on-the-web" },
    ],
    internalLinks: [
      { label: "Next.js caching explained", href: "/blog/nextjs-caching-explained" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
      { label: "Next.js deployment checklist", href: "/blog/nextjs-deployment-checklist" },
      { label: "Our development process", href: "/process" },
    ],
    related: [
      "nextjs-caching-explained",
      "nextjs-app-router-vs-pages-router",
      "improve-largest-contentful-paint",
    ],
  },

  {
    slug: "nextjs-server-actions-guide",
    title: "Server actions in production: forms, validation and the security rules",
    seoTitle: "Next.js Server Actions: Production Guide",
    description:
      "How to build forms with Next.js server actions — progressive enhancement, validation, error states, rate limiting and the authorisation checks people forget.",
    excerpt:
      "A server action is a public HTTP endpoint with nicer syntax. Treat it like one and they are excellent; forget that and you have shipped an unauthenticated API.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "next.js server actions",
    secondaryKeywords: [
      "server actions form",
      "useActionState",
      "next.js form validation",
      "server action security",
    ],
    authorId: "harshal",
    publishedAt: "2026-05-19",
    answer:
      "Server actions are async functions marked with \"use server\" that run on the server and can be called directly from client components or used as a form action. They remove the need to hand-write API routes for mutations, but each one is a publicly reachable endpoint and must perform its own authentication, authorisation, validation and rate limiting.",
    takeaways: [
      "Every server action is a public endpoint — authorise inside the action, not in the UI.",
      "Validate input with a schema at the top of the action; never trust the client's shape.",
      "Use the form action attribute so submissions work before JavaScript loads.",
      "Return typed error state rather than throwing for expected validation failures.",
    ],
    sections: [
      {
        heading: "What is a server action?",
        answer:
          "A server action is an async server-side function that the client can invoke directly, with Next.js handling the network call, serialisation and revalidation for you.",
        body: [
          {
            type: "p",
            text: "Mark a function with \"use server\" — either at the top of a module or inside an async function — and Next.js compiles a reference the browser can call. Passing it to a form's action attribute means the form submits natively without JavaScript, then upgrades to a fetch-based submission once hydrated.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// app/contact/actions.ts
"use server";
import { z } from "zod";

const Schema = z.object({
  email: z.string().email(),
  message: z.string().min(20).max(5000),
});

export async function submitEnquiry(_prev: State, formData: FormData): Promise<State> {
  const parsed = Schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors };
  }
  await sendEnquiry(parsed.data);
  return { ok: true };
}`,
          },
        ],
      },
      {
        heading: "How do you handle validation and error states?",
        body: [
          {
            type: "p",
            text: "Return errors as data. Throwing inside an action surfaces the nearest error boundary, which is right for unexpected failures and wrong for 'this email address is invalid'. Model expected failures as a returned state object and render them next to the field.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `"use client";
import { useActionState } from "react";

export function EnquiryForm() {
  const [state, action, pending] = useActionState(submitEnquiry, { ok: false });
  return (
    <form action={action}>
      <input name="email" type="email" required aria-describedby="email-error" />
      {state.errors?.email && <p id="email-error">{state.errors.email[0]}</p>}
      <button disabled={pending}>{pending ? "Sending…" : "Send"}</button>
    </form>
  );
}`,
          },
          {
            type: "callout",
            title: "Validate on both sides, trust one",
            text: "Client-side validation is a UX affordance. Server-side validation is the security boundary. Share the schema so the rules cannot diverge, but never skip the server check because the client already ran it.",
          },
        ],
      },
      {
        heading: "What are the security rules for server actions?",
        answer:
          "Authenticate and authorise inside every action, validate all input, and rate limit anything a stranger can reach.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Check the session inside the action body. Hiding the button in the UI is not access control — the endpoint stays callable.",
              "Re-check ownership on every mutation: does this user own the record whose id was submitted?",
              "Parse input with a schema before touching it. FormData contents are attacker-controlled strings.",
              "Rate limit by IP and by account for anything unauthenticated — contact forms, signups, password resets.",
              "Never accept a price, role, or permission flag from the client. Look it up on the server.",
              "Keep secrets in the action module and import server-only so it can never be pulled into a client bundle.",
            ],
          },
          {
            type: "p",
            text: "Next.js protects the transport with origin checks and encrypted action ids, which mitigates classic CSRF. It does not and cannot know whether the current user is allowed to delete invoice 4821. That is your code's job.",
          },
        ],
      },
      {
        heading: "When should you still write an API route?",
        body: [
          {
            type: "list",
            items: [
              "Third parties need to call it — webhooks, mobile apps, partner integrations.",
              "You need fine-grained control over HTTP semantics: status codes, custom headers, streaming responses.",
              "The endpoint is called by something that is not your React app.",
              "You want a stable public contract that survives frontend refactors.",
            ],
          },
          {
            type: "p",
            text: "Server actions are an internal mutation mechanism for your own UI. Route handlers are your public API. Most production apps we build have both, and the boundary is obvious once you ask who the caller is.",
          },
        ],
      },
      {
        heading: "How do actions interact with caching?",
        body: [
          {
            type: "p",
            text: "After a successful mutation, call revalidateTag or revalidatePath inside the action so the server caches drop the stale entry, and Next.js refreshes the current route's client cache for form-driven submissions. For actions invoked programmatically from a client component, follow up with router.refresh() to update what the user is looking at.",
          },
          {
            type: "p",
            text: "For optimistic UI, useOptimistic gives you an immediate local update that reconciles when the action resolves — worth it for high-frequency interactions like toggling a like, unnecessary for a contact form.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do server actions work without JavaScript?",
        answer:
          "Yes, when passed to a form's action attribute. The browser performs a normal form POST and Next.js runs the action server-side, which is why progressive enhancement is a genuine benefit rather than a talking point.",
      },
      {
        question: "Can I call a server action from a client event handler?",
        answer:
          "Yes — import it and await it inside the handler. You lose the no-JavaScript fallback, so prefer the form action attribute for anything that is really a form.",
      },
      {
        question: "Are server actions slower than API routes?",
        answer:
          "No meaningful difference; both are a server round trip. Actions add automatic serialisation and revalidation handling, which usually removes code rather than adding latency.",
      },
      {
        question: "How do I rate limit a server action?",
        answer:
          "Read the client IP from headers() at the top of the action and check a counter in Redis or your database before doing any work. There is no built-in limiter, and unauthenticated actions need one.",
      },
    ],
    references: [
      { label: "Next.js — Server Actions and Mutations", href: "https://nextjs.org/docs/app/getting-started/updating-data" },
      { label: "React — useActionState", href: "https://react.dev/reference/react/useActionState" },
      { label: "OWASP — Input validation cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html" },
    ],
    internalLinks: [
      { label: "React Server Components explained", href: "/blog/nextjs-server-components-explained" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Rate limiting strategies for APIs", href: "/blog/api-rate-limiting-strategies" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "nextjs-server-components-explained",
      "web-application-security-checklist",
      "api-rate-limiting-strategies",
    ],
  },

  {
    slug: "nextjs-image-optimization",
    title: "next/image in practice: sizes, priority and the LCP mistakes to avoid",
    seoTitle: "Next.js Image Optimization: A Practical Guide",
    description:
      "How next/image works, what the sizes attribute really controls, when to use priority and fill, and the configuration mistakes that quietly ruin Largest Contentful Paint.",
    excerpt:
      "next/image solves format, sizing and lazy loading for you — and then hands you two props, sizes and priority, that decide whether your LCP is 1.2s or 4s.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "next.js image optimization",
    secondaryKeywords: [
      "next/image sizes",
      "next image priority",
      "responsive images",
      "avif webp",
      "largest contentful paint images",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-05",
    answer:
      "next/image automatically serves modern formats, generates responsive srcsets, lazy loads below-the-fold images and reserves layout space to prevent shift. Getting real benefit depends on two props: sizes, which tells the browser how wide the image will render, and priority, which should be set on the single LCP image and nothing else.",
    takeaways: [
      "Set priority on exactly one image — the largest one visible on load.",
      "A wrong sizes attribute makes the browser download an image several times larger than needed.",
      "Always give width and height (or fill with a sized parent) to prevent layout shift.",
      "AVIF is smaller than WebP but slower to encode; enable both and let content negotiation choose.",
    ],
    sections: [
      {
        heading: "What does next/image actually do for you?",
        body: [
          {
            type: "list",
            items: [
              "Converts to modern formats (WebP, AVIF) based on the Accept header.",
              "Generates a srcset of multiple widths so mobile devices do not download desktop images.",
              "Lazy loads anything below the fold by default.",
              "Reserves space from the width and height you supply, eliminating layout shift.",
              "Caches optimised variants so the transformation cost is paid once.",
            ],
          },
          {
            type: "p",
            text: "None of this requires configuration for local images imported from your project — Next.js reads their intrinsic dimensions at build time. Remote images need explicit dimensions and an allow-list entry in next.config.",
          },
        ],
      },
      {
        heading: "What does the sizes attribute control?",
        answer:
          "sizes tells the browser how wide the image will be at each breakpoint, so it can pick the right file from the srcset before layout is known.",
        body: [
          {
            type: "p",
            text: "This is the most commonly wrong prop in Next.js codebases. Without sizes, a responsive image defaults to 100vw — the browser assumes full viewport width and downloads the largest candidate. On a 2560px desktop, a thumbnail rendered at 300px can pull down a 2560px file.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// A card image in a 3-column grid at desktop, 2 at tablet, 1 at mobile
<Image
  src={cover}
  alt="Dashboard redesign case study cover"
  width={800}
  height={450}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>`,
            caption: "Match the media queries to the actual grid, not to a guess.",
          },
          {
            type: "callout",
            title: "How to verify it",
            text: "Open DevTools, hover the image's currentSrc in the Elements panel and compare the chosen width to the rendered CSS width. If the file is more than 2× the rendered size on a 1× screen, your sizes value is wrong.",
          },
        ],
      },
      {
        heading: "When should you use priority?",
        body: [
          {
            type: "p",
            text: "On the LCP element only — usually the hero image or the featured image of an article. priority disables lazy loading and adds a preload hint so the request starts during HTML parsing rather than after layout.",
          },
          {
            type: "p",
            text: "Setting priority on many images is actively harmful: preload hints compete for bandwidth and connections, delaying the one image that determines your LCP score. If a page has six priority images, none of them is prioritised.",
          },
          {
            type: "table",
            head: ["Image position", "Recommended props"],
            rows: [
              ["Hero / above the fold, largest", "priority, explicit sizes"],
              ["Above the fold, secondary", "loading=\"eager\", no priority"],
              ["Below the fold", "Default (lazy)"],
              ["Decorative background", "CSS background or alt=\"\" with lazy loading"],
            ],
          },
        ],
      },
      {
        heading: "How should alt text be written?",
        body: [
          {
            type: "p",
            text: "Alt text has two jobs: describing the image to screen reader users, and giving search engines context. Both are served by a plain description of what the image shows and why it is there — not a keyword list.",
          },
          {
            type: "list",
            items: [
              "Describe content and function: 'Checkout flow before and after the redesign, showing three steps reduced to one'.",
              "Skip 'image of' and 'photo of' — assistive technology already announces the role.",
              "Use alt=\"\" for purely decorative images so screen readers skip them.",
              "Keep it under roughly 125 characters; if you need more, use a caption.",
            ],
          },
        ],
      },
      {
        heading: "What configuration mistakes cause problems in production?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Unbounded remotePatterns turning your deployment into an open image proxy that anyone can bill you for.",
              "Using fill without a positioned, sized parent — the image collapses or overflows.",
              "Disabling optimisation globally to fix one broken image, losing format conversion everywhere.",
              "Serving 4000px source images from a CMS and relying on the optimiser to fix it — the origin transfer and transform cost is still yours.",
              "Forgetting quality tuning: quality 75 is usually indistinguishable from 90 and meaningfully smaller.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is next/image worth it for a small site?",
        answer:
          "Yes. Even on a five-page site, format conversion and correct dimensions typically cut image payload by 40–70%, and the automatic dimension reservation removes a whole class of layout-shift bugs.",
      },
      {
        question: "Should I use AVIF or WebP?",
        answer:
          "Enable both. AVIF is typically 20–30% smaller than WebP at similar quality but encodes slower; browsers that support it will request it, and others fall back to WebP.",
      },
      {
        question: "Why is my image causing layout shift?",
        answer:
          "Either width and height are missing, or CSS is overriding the aspect ratio. Give the component real intrinsic dimensions and let CSS scale it with width: 100%; height: auto.",
      },
      {
        question: "Can I use next/image with an external CDN?",
        answer:
          "Yes — configure a custom loader so the component builds URLs for your CDN's transformation API instead of using the built-in optimiser. You keep the responsive srcset behaviour and offload the processing.",
      },
    ],
    references: [
      { label: "Next.js — Image component", href: "https://nextjs.org/docs/app/api-reference/components/image" },
      { label: "web.dev — Optimize Largest Contentful Paint", href: "https://web.dev/articles/optimize-lcp" },
      { label: "MDN — Responsive images", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images" },
    ],
    internalLinks: [
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
      { label: "Fixing Cumulative Layout Shift", href: "/blog/fix-cumulative-layout-shift" },
      { label: "Image SEO best practices", href: "/blog/image-seo-best-practices" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "improve-largest-contentful-paint",
      "fix-cumulative-layout-shift",
      "image-seo-best-practices",
    ],
  },

  {
    slug: "nextjs-middleware-guide",
    title: "Next.js middleware: what belongs there and what definitely does not",
    seoTitle: "Next.js Middleware: What Belongs There",
    description:
      "Middleware runs before every matched request at the edge. Here is what it is good at — redirects, locale routing, auth gating — and the work you should keep out of it.",
    excerpt:
      "Middleware is the cheapest place to redirect a request and the most expensive place to make a database call. The matcher config is the whole game.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "next.js middleware",
    secondaryKeywords: [
      "middleware matcher",
      "edge middleware",
      "next.js redirects",
      "next.js auth middleware",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-21",
    answer:
      "Next.js middleware is a function that runs before a request is completed, typically at the edge, and can rewrite, redirect, or modify headers and cookies. Use it for cheap routing decisions — auth gating, locale detection, A/B bucketing, security headers — and keep database queries, heavy logic and full session validation out of it.",
    takeaways: [
      "Middleware runs on every matched request — the matcher config is a performance decision.",
      "Do cheap checks only: cookie presence, path shape, geo headers.",
      "Never treat middleware as your authorisation layer; verify again in the route.",
      "Rewrites keep the URL, redirects change it — pick deliberately for SEO.",
    ],
    sections: [
      {
        heading: "What is Next.js middleware and when does it run?",
        answer:
          "Middleware is a single function in middleware.ts that runs before routing resolves, on every request matching its matcher config.",
        body: [
          {
            type: "p",
            text: "Because it runs before the cache and before rendering, it is the right place to decide where a request should go. Because it runs on every matched request, anything slow in it becomes latency added to your whole site.",
          },
          {
            type: "code",
            lang: "ts",
            code: `// middleware.ts
import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("session")?.value;
  if (!token && request.nextUrl.pathname.startsWith("/app")) {
    const url = new URL("/login", request.url);
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*", "/account/:path*"],
};`,
            caption: "A cookie-presence check is cheap. Verifying the token against a database is not.",
          },
        ],
      },
      {
        heading: "What should you put in middleware?",
        body: [
          {
            type: "list",
            items: [
              "Redirect unauthenticated visitors away from private route prefixes based on cookie presence.",
              "Locale detection and rewriting from the Accept-Language header or a geo header.",
              "A/B test bucketing: read or set a cookie, rewrite to a variant path.",
              "Security headers and a per-request nonce for Content-Security-Policy.",
              "Legacy URL redirects during a migration, driven by a static map.",
              "Bot handling and simple blocklists.",
            ],
          },
        ],
      },
      {
        heading: "What should never go in middleware?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Database queries. Every page view now waits on your database before rendering starts.",
              "Full JWT verification with a remote JWKS fetch on every request — cache the key or verify in the route.",
              "Business logic that belongs in a server component or route handler.",
              "Large dependencies. The middleware bundle has tight size limits and edge runtimes lack many Node APIs.",
              "Anything that must be correct for security. Middleware can be bypassed by misconfiguration; enforce authorisation where the data is read.",
            ],
          },
          {
            type: "callout",
            title: "The 2025 lesson",
            text: "A widely-reported Next.js advisory involved a header that could cause middleware to be skipped entirely. The safe architecture assumes that can happen: middleware is a fast path for user experience, and the route handler or server component performs the real authorisation check.",
          },
        ],
      },
      {
        heading: "How do you get the matcher right?",
        answer:
          "Match the narrowest set of paths that need the logic, and always exclude static assets and image optimisation routes.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `export const config = {
  matcher: [
    // Everything except static files, images, and metadata routes
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\\\.(?:png|jpg|svg|webp)$).*)",
  ],
};`,
          },
          {
            type: "p",
            text: "A broad matcher that includes _next/static means middleware runs for every JavaScript chunk and font file your page loads. On a page with 30 assets that is 30 unnecessary middleware invocations per visit — measurable in both latency and platform cost.",
          },
        ],
      },
      {
        heading: "Rewrite or redirect?",
        body: [
          {
            type: "table",
            head: ["", "Rewrite", "Redirect"],
            rows: [
              ["URL in address bar", "Unchanged", "Changes"],
              ["HTTP status", "200", "307/308 (or 301/302)"],
              ["SEO effect", "Content served under the requested URL", "Signals the canonical location"],
              ["Use for", "Locale paths, A/B variants, proxying", "Moved pages, auth gating, canonical host"],
            ],
          },
          {
            type: "p",
            text: "For permanent URL changes during a site migration use a 308 (or 301) redirect so link equity transfers. Use a rewrite when two URLs should genuinely serve the same content and you do not want the visitor's URL to change.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does middleware run on static pages?",
        answer:
          "Yes, if the path matches. That is precisely why the matcher matters — middleware can add latency in front of a page that would otherwise be served straight from the CDN.",
      },
      {
        question: "Can middleware read the request body?",
        answer:
          "It is not designed for it, and doing so forces buffering that undermines the point of running early and cheaply. Handle body inspection in a route handler.",
      },
      {
        question: "Can I use Node.js APIs in middleware?",
        answer:
          "Historically middleware ran only on the edge runtime with a limited API surface. Recent Next.js versions allow opting into the Node.js runtime for middleware, but the performance guidance is unchanged: keep it small and fast.",
      },
      {
        question: "How many middleware files can I have?",
        answer:
          "One per project, at the root (or inside src/). Compose multiple concerns by calling separate functions from that single entry point.",
      },
    ],
    references: [
      { label: "Next.js — Middleware", href: "https://nextjs.org/docs/app/api-reference/file-conventions/middleware" },
      { label: "MDN — HTTP redirect status codes", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages" },
      { label: "OWASP — Authorization cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html" },
    ],
    internalLinks: [
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
      { label: "301 redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
      { label: "Security headers that matter", href: "/blog/security-headers-guide" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "authentication-patterns-web-apps",
      "security-headers-guide",
      "redirects-and-site-migrations",
    ],
  },

  {
    slug: "nextjs-deployment-checklist",
    title: "The Next.js production deployment checklist we run before every launch",
    seoTitle: "Next.js Production Deployment Checklist",
    description:
      "The pre-launch checklist we run on every Next.js project: environment config, caching, error handling, security headers, SEO verification and post-deploy monitoring.",
    excerpt:
      "Launch day problems are almost never novel. This is the list that catches them — the same one we run on every client deployment.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "next.js deployment checklist",
    secondaryKeywords: [
      "deploy next.js to production",
      "next.js production build",
      "pre-launch checklist",
      "next.js environment variables",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-07",
    updatedAt: "2026-07-01",
    answer:
      "Before a Next.js site goes live, verify environment variables and secrets separation, the build output's rendering modes, caching and revalidation behaviour, error and 404 handling, security headers, SEO metadata and sitemap, analytics and error tracking, and a rollback path. Run the checks against a production build, not the dev server.",
    takeaways: [
      "Test against a production build — dev server behaviour differs on caching and errors.",
      "Anything prefixed NEXT_PUBLIC_ is in the browser bundle. Audit that list before every launch.",
      "Check the build output table: an unexpectedly dynamic route is a launch-day cost surprise.",
      "Have a rollback tested before you need it, not during an incident.",
    ],
    sections: [
      {
        heading: "Environment and configuration",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Every required environment variable is present in the production environment and validated at startup — fail the build rather than serving a broken page.",
              "No secret is prefixed NEXT_PUBLIC_. Grep for it and read the list aloud; anything on it is public.",
              "The canonical host is decided (www or apex) and everything else 308-redirects to it.",
              "HTTPS is enforced, HSTS is set, and the certificate auto-renews.",
              "Production, staging and preview environments use separate databases and separate API keys.",
            ],
          },
          {
            type: "callout",
            title: "Validate env at boot",
            text: "Parse process.env through a schema in a single module imported by the app. A missing STRIPE_SECRET_KEY should stop the deploy, not surface as a 500 on the first checkout.",
          },
        ],
      },
      {
        heading: "Build and rendering",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "next build completes with no TypeScript or ESLint errors — never ship with ignoreBuildErrors enabled.",
              "Review the route table: confirm which routes are static, which are dynamic, and that nothing flipped unintentionally.",
              "First-load JavaScript is within budget for your key routes; investigate anything over ~200 KB.",
              "generateStaticParams covers the pages you expect to be prerendered.",
              "Revalidation windows are set intentionally, and on-demand revalidation webhooks are wired and tested.",
            ],
          },
        ],
      },
      {
        heading: "Errors, edge cases and resilience",
        body: [
          {
            type: "list",
            items: [
              "not-found.tsx returns a real 404 status and offers useful navigation, not a dead end.",
              "error.tsx exists at the segment level, with a reset action, and does not leak stack traces.",
              "Third-party API failures degrade gracefully — a down CMS should not take the marketing site with it.",
              "Forms handle network failure and duplicate submission.",
              "Loading states exist for every route that fetches — loading.tsx or explicit Suspense boundaries.",
            ],
          },
        ],
      },
      {
        heading: "SEO and metadata verification",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "metadataBase is set and every page has a self-referencing canonical.",
              "robots.txt allows crawling of production and the staging deployment is blocked or password-protected.",
              "sitemap.xml is generated, reachable, listed in robots.txt and contains only 200-status canonical URLs.",
              "Structured data validates in Google's Rich Results Test.",
              "Open Graph and Twitter cards render correctly in a link preview debugger.",
              "No stray noindex left over from the staging phase — this is the single most common launch mistake we see.",
            ],
          },
        ],
      },
      {
        heading: "Monitoring, analytics and rollback",
        body: [
          {
            type: "list",
            items: [
              "Error tracking is installed with source maps uploaded, and a test error was verified end to end.",
              "Real user monitoring reports Core Web Vitals from actual traffic, not just lab scores.",
              "Uptime monitoring hits a real page and an API health endpoint, with alerting to somewhere a human reads.",
              "Analytics is configured with consent handling appropriate to your jurisdiction.",
              "A rollback has been performed at least once on staging so the team knows the command under pressure.",
              "Database migrations are backwards compatible with the previous release for the duration of the deploy.",
            ],
          },
          {
            type: "quote",
            text: "The measure of a deployment process is not whether it succeeds. It is how quickly you can undo it.",
            cite: "ROVQIX engineering runbook",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I self-host Next.js or use a managed platform?",
        answer:
          "Managed platforms handle ISR, image optimisation and edge caching without work. Self-hosting via the standalone output or a container is well supported and cheaper at scale, but you own the CDN, cache invalidation and image pipeline. Choose based on whether you have the operational capacity.",
      },
      {
        question: "How do I test the production build locally?",
        answer:
          "Run next build followed by next start and browse the result. Caching, error boundaries and route rendering modes all behave differently from next dev.",
      },
      {
        question: "What is a sensible JavaScript budget?",
        answer:
          "Aim to keep first-load JavaScript under about 170 KB compressed on content routes. Application dashboards run higher, but the number should be a deliberate decision with a review threshold in CI.",
      },
      {
        question: "How do I stop staging from being indexed?",
        answer:
          "Password-protect it or return X-Robots-Tag: noindex from the staging environment only, driven by an environment variable — never by a code branch someone has to remember to revert.",
      },
    ],
    references: [
      { label: "Next.js — Deploying", href: "https://nextjs.org/docs/app/getting-started/deploying" },
      { label: "Google Search Central — Rich Results Test", href: "https://search.google.com/test/rich-results" },
      { label: "web.dev — Performance budgets", href: "https://web.dev/articles/performance-budgets-101" },
    ],
    internalLinks: [
      { label: "Zero downtime deployment strategies", href: "/blog/zero-downtime-deployments" },
      { label: "Next.js caching explained", href: "/blog/nextjs-caching-explained" },
      { label: "Technical SEO checklist for developers", href: "/blog/technical-seo-checklist-developers" },
      { label: "Maintenance and support services", href: "/services#maintenance" },
    ],
    related: [
      "zero-downtime-deployments",
      "nextjs-caching-explained",
      "technical-seo-checklist-developers",
    ],
  },

  {
    slug: "nextjs-vs-react-which-to-choose",
    title: "Next.js vs React: what you are actually choosing between",
    seoTitle: "Next.js vs React: Which Should You Use?",
    description:
      "Next.js is a framework built on React, not an alternative to it. Here is what the framework adds, when a plain React SPA is the better call, and how to decide.",
    excerpt:
      "The question is never 'React or Next.js'. It is 'do I want to own routing, rendering, bundling and SEO myself, or not'.",
    category: "Next.js",
    cluster: "nextjs",
    primaryKeyword: "next.js vs react",
    secondaryKeywords: [
      "react framework",
      "spa vs ssr",
      "vite react",
      "when to use next.js",
    ],
    authorId: "harshal",
    publishedAt: "2026-03-24",
    answer:
      "React is a UI library for building components; Next.js is a framework that adds routing, server rendering, data fetching conventions, bundling, image optimisation and deployment primitives on top of React. If your product needs to be indexed by search engines or served fast on first load, use Next.js. If it is an authenticated tool behind a login where SEO is irrelevant, a plain React SPA is a legitimate, simpler choice.",
    takeaways: [
      "You are not choosing between them — Next.js is React plus infrastructure decisions.",
      "SEO and first-load performance are the strongest arguments for Next.js.",
      "Internal tools behind auth often do fine as a Vite + React SPA.",
      "The cost of Next.js is conceptual surface area: rendering modes, caching, server/client boundaries.",
    ],
    sections: [
      {
        heading: "What does Next.js add to React?",
        body: [
          {
            type: "table",
            head: ["Concern", "Plain React (Vite)", "Next.js"],
            rows: [
              ["Routing", "Choose a router library", "File-system routing built in"],
              ["Server rendering", "Build it yourself", "Default for the App Router"],
              ["Data fetching", "Client libraries", "Server components, actions, caching layers"],
              ["SEO metadata", "Manual head management", "Metadata API"],
              ["Images", "Manual or third-party", "next/image optimisation"],
              ["Bundling", "Vite config you own", "Configured, with build output analysis"],
              ["API layer", "Separate backend", "Route handlers and server actions"],
            ],
          },
          {
            type: "p",
            text: "Everything in the right column is buildable in the left one. The question is whether you want those decisions to be yours to make and maintain.",
          },
        ],
      },
      {
        heading: "When is a plain React SPA the better choice?",
        answer:
          "When nothing on the page needs to be indexed and the first load happens once per working day.",
        body: [
          {
            type: "list",
            items: [
              "Internal admin tools and dashboards behind authentication.",
              "Heavily interactive canvas or editor applications where the server can offer nothing on first paint.",
              "Embedded widgets shipped into someone else's page.",
              "Teams with an existing, well-run backend API and no appetite for a second server runtime.",
            ],
          },
          {
            type: "p",
            text: "There is no prize for using more framework. A Vite React SPA with a mature router and a query library is a perfectly professional stack for these cases, and it has a much smaller conceptual surface for a small team to hold.",
          },
        ],
      },
      {
        heading: "When is Next.js clearly the right choice?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "The product has public pages that must rank — marketing sites, ecommerce, publishers, SaaS with a content strategy.",
              "First-load performance is a business metric, not just an engineering preference.",
              "You want one deployment for the frontend and its light backend needs.",
              "You need per-route rendering control: static marketing pages next to a per-request dashboard.",
              "You want the SEO plumbing — sitemaps, metadata, OG images, canonicals — to be code rather than a checklist.",
            ],
          },
        ],
      },
      {
        heading: "What does Next.js cost you?",
        body: [
          {
            type: "p",
            text: "Complexity you cannot opt out of. Your team has to understand the server/client boundary, four caching layers, and which route rendered how. New hires from an SPA background reliably need a few weeks before their instincts stop fighting the framework.",
          },
          {
            type: "p",
            text: "There is also platform gravity. Next.js runs anywhere, but the smoothest experience for ISR, image optimisation and edge routing is on hosting built for it. Self-hosting is entirely viable and increasingly well documented — just budget the infrastructure work honestly rather than discovering it after launch.",
          },
          {
            type: "callout",
            title: "How we decide with clients",
            text: "One question: will a stranger who has never heard of you ever load this page? If yes, Next.js. If no, the simplest thing the team can maintain wins.",
          },
        ],
      },
      {
        heading: "Does Next.js improve SEO by itself?",
        body: [
          {
            type: "p",
            text: "It removes the hardest technical obstacles — content is in the HTML, metadata is systematic, sitemaps are generated, Core Web Vitals start from a good baseline. It does not create demand, write content, or earn links. We have audited plenty of Next.js sites ranking for nothing at all.",
          },
          {
            type: "p",
            text: "Treat the framework as removing the reasons you could not rank, and the content strategy as the reason you do.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I migrate a React SPA to Next.js later?",
        answer:
          "Yes, and it is common. Components move over largely unchanged; the work is in routing, data fetching and deciding which parts become server components. Budget weeks, not days, for a substantial app.",
      },
      {
        question: "Is Next.js overkill for a five-page marketing site?",
        answer:
          "No — that is one of its best cases. Static generation, the Metadata API and next/image give you a fast, well-optimised site with very little code.",
      },
      {
        question: "What about Astro or Remix?",
        answer:
          "Astro is excellent for content-heavy sites with islands of interactivity. React Router (formerly Remix) is a strong choice for data-driven apps with a web-standards approach. Next.js has the largest ecosystem and hiring pool, which matters for long-lived client projects.",
      },
      {
        question: "Does Next.js lock me into one host?",
        answer:
          "No. It can run as a Node server, in a container, or as a static export depending on features used. Some capabilities need platform support to work well, so verify your feature set against your target host early.",
      },
    ],
    references: [
      { label: "Next.js documentation", href: "https://nextjs.org/docs" },
      { label: "React documentation — Start a new React project", href: "https://react.dev/learn/start-a-new-react-project" },
      { label: "web.dev — Rendering on the web", href: "https://web.dev/articles/rendering-on-the-web" },
    ],
    internalLinks: [
      { label: "App Router vs Pages Router", href: "/blog/nextjs-app-router-vs-pages-router" },
      { label: "How to choose a frontend architecture", href: "/blog/frontend-architecture-decisions" },
      { label: "Our services", href: "/services" },
      { label: "Pricing", href: "/pricing" },
    ],
    related: [
      "nextjs-app-router-vs-pages-router",
      "frontend-architecture-decisions",
      "nextjs-ssr-ssg-isr-which-to-use",
    ],
  },
];
