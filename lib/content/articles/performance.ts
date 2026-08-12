import type { Article } from "@/lib/content/types";

export const performanceArticles: Article[] = [
  {
    slug: "core-web-vitals-explained",
    title: "Core Web Vitals explained: what each metric measures and how to move it",
    seoTitle: "Core Web Vitals Explained (LCP, INP, CLS)",
    description:
      "LCP, INP and CLS defined with their thresholds, what actually causes each to fail, and the order to fix them in for the biggest gain.",
    excerpt:
      "Three numbers, each measuring a different way a page can feel bad: slow to appear, slow to respond, and unstable while you use it.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "core web vitals",
    secondaryKeywords: [
      "lcp inp cls",
      "web vitals thresholds",
      "page experience",
      "field data vs lab data",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-04",
    answer:
      "Core Web Vitals are three user-centric metrics: Largest Contentful Paint (loading, good under 2.5s), Interaction to Next Paint (responsiveness, good under 200ms), and Cumulative Layout Shift (visual stability, good under 0.1). Google assesses them at the 75th percentile of real user visits, segmented by mobile and desktop.",
    takeaways: [
      "The assessment uses field data at the 75th percentile, not your Lighthouse score.",
      "LCP is usually a server response, resource priority or render-blocking problem.",
      "INP replaced FID and is a much harder bar — it measures every interaction, not the first.",
      "CLS is almost always images without dimensions, injected content, or late-loading fonts.",
    ],
    sections: [
      {
        heading: "What are the three metrics and their thresholds?",
        body: [
          {
            type: "table",
            head: ["Metric", "Measures", "Good", "Needs work", "Poor"],
            rows: [
              ["LCP", "Time until the largest element renders", "≤ 2.5s", "2.5–4.0s", "> 4.0s"],
              ["INP", "Latency of interactions to next paint", "≤ 200ms", "200–500ms", "> 500ms"],
              ["CLS", "Unexpected layout movement", "≤ 0.1", "0.1–0.25", "> 0.25"],
            ],
          },
          {
            type: "p",
            text: "To pass, 75% of visits must be in the good range, measured separately for mobile and desktop. That percentile is why an average that looks fine can still fail — the slowest quarter of your visitors is what counts.",
          },
        ],
      },
      {
        heading: "Why does field data differ from Lighthouse?",
        answer:
          "Lighthouse simulates one visit on a throttled connection from your machine; field data aggregates real visits across real devices and networks.",
        body: [
          {
            type: "list",
            items: [
              "Lab data is reproducible and good for debugging — it isolates one change at a time.",
              "Field data is the truth and what Google uses. It reflects mid-range phones, weak networks and cold caches.",
              "INP in particular is nearly meaningless in the lab, because it depends on what users actually click.",
              "Use the Chrome UX Report or your own RUM collection for field data; use Lighthouse to test a fix.",
            ],
          },
          {
            type: "callout",
            title: "A perfect Lighthouse score is not a pass",
            text: "We regularly see sites scoring 100 in the lab and failing Core Web Vitals in the field, usually because real users are on slower devices with a third-party tag manager the lab run did not load.",
          },
        ],
      },
      {
        heading: "What causes each metric to fail?",
        body: [
          {
            type: "table",
            head: ["Metric", "Most common causes"],
            rows: [
              ["LCP", "Slow server response, unoptimised hero image, render-blocking CSS/JS, missing preload, client-side rendering of the main content"],
              ["INP", "Long JavaScript tasks, expensive re-renders, heavy event handlers, third-party scripts occupying the main thread"],
              ["CLS", "Images and iframes without dimensions, ads and banners injected above content, fonts causing reflow, animating layout properties"],
            ],
          },
        ],
      },
      {
        heading: "In what order should you fix them?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Measure the field data first and find which metric fails, on which template, on which device class.",
              "Fix CLS first — it is usually the cheapest fix with the most visible improvement.",
              "Then LCP: server response time, then the LCP element's discovery and priority.",
              "Then INP: find the long tasks, break them up, and audit third-party scripts.",
              "Re-measure after 28 days, since field data is a rolling window and will not update instantly.",
            ],
          },
        ],
      },
      {
        heading: "Do Core Web Vitals affect rankings?",
        body: [
          {
            type: "p",
            text: "They are a confirmed but lightweight ranking signal. Content relevance dominates. The realistic framing: passing them will not lift a poor page above a better one, but failing them costs you against comparable competitors — and it costs conversions regardless of rankings.",
          },
          {
            type: "p",
            text: "The commercial argument is stronger than the SEO one. Faster pages convert better, and the correlation between load time and bounce rate is consistent across every dataset we have worked with.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What replaced First Input Delay?",
        answer:
          "Interaction to Next Paint became a Core Web Vital in March 2024. FID measured only the delay before the first interaction was processed; INP measures the full latency of interactions throughout the visit, which is much closer to how responsiveness actually feels.",
      },
      {
        question: "How long until improvements show up?",
        answer:
          "Field data uses a rolling 28-day window, so expect several weeks for a fix to be fully reflected. Your own RUM will show it immediately.",
      },
      {
        question: "Are Core Web Vitals measured per page or per site?",
        answer:
          "Per URL where there is enough traffic, otherwise grouped by similar pages. Search Console reports groups so you can fix a template rather than individual URLs.",
      },
      {
        question: "Do they apply to logged-in pages?",
        answer:
          "Field data collection requires users on Chrome with reporting enabled, and covers publicly reachable URLs. Authenticated pages usually will not appear in public datasets — measure them with your own RUM.",
      },
    ],
    references: [
      { label: "web.dev — Core Web Vitals", href: "https://web.dev/articles/vitals" },
      { label: "Google Search Central — Page experience", href: "https://developers.google.com/search/docs/appearance/page-experience" },
      { label: "Chrome UX Report", href: "https://developer.chrome.com/docs/crux" },
    ],
    internalLinks: [
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
      { label: "Improving Interaction to Next Paint", href: "/blog/improve-interaction-to-next-paint" },
      { label: "Fixing Cumulative Layout Shift", href: "/blog/fix-cumulative-layout-shift" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "improve-largest-contentful-paint",
      "improve-interaction-to-next-paint",
      "fix-cumulative-layout-shift",
    ],
  },

  {
    slug: "improve-largest-contentful-paint",
    title: "Improving Largest Contentful Paint: the four phases and where time goes",
    seoTitle: "How to Improve LCP: A Systematic Guide",
    description:
      "Break LCP into TTFB, resource load delay, resource load time and render delay, then fix the phase that dominates — with the techniques for each.",
    excerpt:
      "LCP is not one number, it is four phases. Optimising the wrong one is why so much performance work produces no measurable change.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "improve largest contentful paint",
    secondaryKeywords: [
      "lcp optimization",
      "time to first byte",
      "preload lcp image",
      "render blocking resources",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-07-21",
    answer:
      "Largest Contentful Paint breaks into four phases: time to first byte, resource load delay, resource load time and render delay. Measure which phase dominates before optimising — a slow TTFB needs caching or server work, a long load delay needs earlier discovery via preload, and a long render delay usually means render-blocking resources or client-side rendering.",
    takeaways: [
      "Find the dominant phase first; each has completely different fixes.",
      "Load delay is the most commonly ignored phase and often the largest.",
      "TTFB above 800ms means no front-end optimisation will get you under 2.5s comfortably.",
      "The LCP element should be discoverable in the initial HTML, not injected by JavaScript.",
    ],
    sections: [
      {
        heading: "What are the four phases of LCP?",
        body: [
          {
            type: "table",
            head: ["Phase", "What it is", "Typical target"],
            rows: [
              ["Time to first byte", "Server response arrives", "< 800ms"],
              ["Resource load delay", "Gap before the LCP resource starts loading", "< 10% of LCP"],
              ["Resource load time", "Downloading the LCP resource", "< 40% of LCP"],
              ["Render delay", "Gap between load finishing and painting", "< 10% of LCP"],
            ],
          },
          {
            type: "p",
            text: "The web-vitals JavaScript library reports these phases as attribution data. Collect it in your RUM and you will know within a day which phase to attack, instead of guessing from a Lighthouse waterfall.",
          },
        ],
      },
      {
        heading: "How do you reduce time to first byte?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Cache the HTML at the CDN edge where the page is not personalised — this often takes TTFB from 600ms to 40ms.",
              "Use static generation or ISR instead of rendering per request.",
              "Reduce database round trips; parallelise independent queries.",
              "Move the origin closer to users, or at least closer to the database.",
              "Stream the response so the browser can start parsing before the page is fully assembled.",
            ],
          },
          {
            type: "callout",
            title: "TTFB is the ceiling",
            text: "Every other optimisation happens after the first byte. If your server takes 1.5 seconds, the fastest possible LCP is 1.5 seconds plus everything else. Fix this before touching images.",
          },
        ],
      },
      {
        heading: "How do you eliminate resource load delay?",
        answer:
          "Make the LCP resource discoverable as early as possible, and give it the highest priority.",
        body: [
          {
            type: "code",
            lang: "html",
            code: `<!-- Preload the hero image so it starts loading during HTML parsing -->
<link rel="preload" as="image" href="/hero.avif"
      imagesrcset="/hero-800.avif 800w, /hero-1600.avif 1600w"
      imagesizes="100vw" fetchpriority="high">

<!-- Or, on the element itself -->
<img src="/hero.avif" fetchpriority="high" decoding="async"
     width="1600" height="900" alt="…">`,
          },
          {
            type: "list",
            items: [
              "Never lazy-load the LCP image — loading=\"lazy\" on a hero image is a guaranteed regression.",
              "Avoid CSS background images for the LCP element; the browser cannot discover them until CSS is parsed.",
              "Do not inject the hero via JavaScript; it delays discovery until the bundle executes.",
              "Preconnect to the origin serving the image if it is on another domain.",
            ],
          },
        ],
      },
      {
        heading: "How do you shorten resource load time?",
        body: [
          {
            type: "list",
            items: [
              "Serve AVIF or WebP — typically 30–60% smaller than JPEG at equivalent quality.",
              "Size correctly with a responsive srcset and an accurate sizes attribute.",
              "Compress deliberately: quality 75 is usually indistinguishable from 90.",
              "Serve from a CDN so bytes travel a short distance.",
              "For text-based LCP elements, this phase is font loading — see font optimisation.",
            ],
          },
        ],
      },
      {
        heading: "How do you cut render delay?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Remove render-blocking CSS: inline the critical styles and load the rest asynchronously.",
              "Defer non-essential JavaScript; nothing above the fold should wait on a bundle.",
              "Avoid client-side rendering for above-the-fold content — server-render it.",
              "Use font-display: swap or optional so text is not invisible while a font downloads.",
              "Break up long tasks during load so the main thread can paint.",
            ],
          },
          {
            type: "p",
            text: "A common pattern in single-page applications: the HTML arrives quickly, then nothing renders for two seconds while the bundle downloads, parses and hydrates. That entire gap is render delay, and the fix is architectural — server-render the initial view.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I find my LCP element?",
        answer:
          "In Chrome DevTools, the Performance panel marks the LCP node, and Lighthouse names it in the diagnostics. It is often a hero image, an h1, or the largest text block.",
      },
      {
        question: "Does preloading everything help?",
        answer:
          "No — preload hints compete with each other. Preload the one LCP resource plus critical fonts. Preloading ten things means prioritising nothing.",
      },
      {
        question: "Why did my LCP get worse after adding a carousel?",
        answer:
          "Carousels typically load multiple large images at once and often render the first slide via JavaScript. If a hero carousel is required, load only the first slide eagerly and lazy-load the rest.",
      },
      {
        question: "Is a good LCP possible with a slow API?",
        answer:
          "Yes, by not blocking on it. Server-render the shell with cached or static content and stream the slow region in with Suspense. LCP measures the largest visible element, not the completeness of the page.",
      },
    ],
    references: [
      { label: "web.dev — Optimize LCP", href: "https://web.dev/articles/optimize-lcp" },
      { label: "web.dev — Optimize TTFB", href: "https://web.dev/articles/optimize-ttfb" },
      { label: "MDN — fetchPriority", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#fetchpriority" },
    ],
    internalLinks: [
      { label: "Core Web Vitals explained", href: "/blog/core-web-vitals-explained" },
      { label: "next/image in practice", href: "/blog/nextjs-image-optimization" },
      { label: "Web font optimisation", href: "/blog/web-font-optimization" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "core-web-vitals-explained",
      "nextjs-image-optimization",
      "web-font-optimization",
    ],
  },

  {
    slug: "improve-interaction-to-next-paint",
    title: "Improving INP: finding the long tasks that make a page feel slow",
    seoTitle: "How to Improve INP (Interaction to Next Paint)",
    description:
      "What INP measures, how to break down input delay, processing time and presentation delay, and the techniques that reliably reduce each.",
    excerpt:
      "INP is the metric that exposes how much JavaScript you shipped. A page can load in a second and still feel broken when tapped.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "improve inp",
    secondaryKeywords: [
      "interaction to next paint",
      "long tasks javascript",
      "main thread blocking",
      "yield to main thread",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-07-07",
    answer:
      "Interaction to Next Paint measures the time from a user interaction to the next visual update, reporting roughly the worst interaction of a visit. It breaks into input delay (main thread busy), processing time (your event handler) and presentation delay (rendering). Improving it means shipping less JavaScript, breaking long tasks up, and yielding to the main thread.",
    takeaways: [
      "INP reports close to your worst interaction, not the average — one bad handler fails the page.",
      "Input delay means the main thread was busy before the user even touched anything.",
      "Yield with scheduler.yield() or setTimeout so the browser can paint between chunks.",
      "Third-party scripts are a leading cause and the least examined one.",
    ],
    sections: [
      {
        heading: "What are the three parts of an interaction?",
        body: [
          {
            type: "table",
            head: ["Phase", "What is happening", "Common cause of delay"],
            rows: [
              ["Input delay", "Waiting for the main thread to be free", "A long task already running"],
              ["Processing time", "Your event handlers execute", "Expensive work, large re-renders"],
              ["Presentation delay", "Browser computes style and paints", "Complex layout, huge DOM"],
            ],
          },
          {
            type: "p",
            text: "Attribution matters as much as it does for LCP. If input delay dominates, the fix is elsewhere on the page — a script blocking the thread. If processing dominates, the fix is in your handler.",
          },
        ],
      },
      {
        heading: "How do you find the problem interactions?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Collect INP attribution in production with the web-vitals library — it reports the element and the phase breakdown.",
              "In DevTools, record a Performance trace while performing the interaction and look for tasks over 50ms.",
              "Enable the Performance panel's interaction track to see the exact phases of each interaction.",
              "Check whether the problem is on first interaction (hydration still running) or throughout the session.",
              "Test on a mid-range Android device or with 4× CPU throttling. Desktop hardware hides INP problems completely.",
            ],
          },
          {
            type: "callout",
            title: "Test on real hardware",
            text: "A recent laptop executes JavaScript roughly an order of magnitude faster than the phone a large share of your users hold. INP problems are frequently invisible to the team that shipped them.",
          },
        ],
      },
      {
        heading: "How do you break up long tasks?",
        body: [
          {
            type: "code",
            lang: "js",
            code: `// Blocking: one long task, no paint until finished
function process(items) {
  for (const item of items) expensiveWork(item);
  render();
}

// Yielding: lets the browser paint between chunks
async function process(items) {
  for (const [i, item] of items.entries()) {
    expensiveWork(item);
    if (i % 50 === 0) await yieldToMain();
  }
  render();
}

const yieldToMain = () =>
  "scheduler" in window && "yield" in scheduler
    ? scheduler.yield()
    : new Promise((r) => setTimeout(r, 0));`,
          },
          {
            type: "list",
            items: [
              "Yield every 50ms of work at most, so the browser can respond to input.",
              "Use requestIdleCallback for genuinely non-urgent work.",
              "Move heavy computation to a web worker where it does not touch the main thread at all.",
              "Debounce expensive handlers on input events, but keep the visual feedback immediate.",
            ],
          },
        ],
      },
      {
        heading: "What are the React-specific fixes?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Reduce the render blast radius — state placed too high re-renders the world on every keystroke.",
              "Use useDeferredValue or startTransition to keep the input responsive while an expensive list updates.",
              "Virtualise long lists; rendering 2,000 rows is a presentation-delay problem you cannot optimise away.",
              "Split hydration: server-render static content and hydrate only the interactive islands.",
              "Watch for effects firing on every interaction and doing layout reads that force synchronous reflow.",
            ],
          },
        ],
      },
      {
        heading: "How much do third-party scripts cost?",
        body: [
          {
            type: "p",
            text: "In audits we run, third-party tags are frequently the largest single contributor to main-thread blocking — tag managers, chat widgets, session recording, A/B testing and ad scripts. Each one executes on your main thread and competes with your own code for the same 16 milliseconds per frame.",
          },
          {
            type: "list",
            items: [
              "Audit what is actually loaded. Tag managers accumulate tags nobody owns.",
              "Load non-critical scripts after interaction or on idle rather than at page load.",
              "Prefer server-side tagging where the vendor supports it.",
              "Remove anything nobody can name an owner for. That is usually two or three scripts.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a good INP?",
        answer:
          "200ms or less at the 75th percentile is good; above 500ms is poor. It is a harder target than the old FID threshold because it measures every interaction, not just the first.",
      },
      {
        question: "Why is my INP bad only on mobile?",
        answer:
          "Mobile CPUs are far slower. JavaScript that takes 20ms on a laptop can take 200ms on a mid-range phone, which turns an invisible cost into a failed metric.",
      },
      {
        question: "Does server-side rendering fix INP?",
        answer:
          "It helps initial load but not interaction cost — hydration itself can be a large blocking task. Reducing shipped JavaScript is what moves INP.",
      },
      {
        question: "Can CSS animations cause bad INP?",
        answer:
          "Animating layout properties like width, top or margin forces reflow on every frame. Animate transform and opacity instead; they can be handled by the compositor.",
      },
    ],
    references: [
      { label: "web.dev — Optimize INP", href: "https://web.dev/articles/optimize-inp" },
      { label: "web.dev — Optimize long tasks", href: "https://web.dev/articles/optimize-long-tasks" },
      { label: "MDN — Scheduler.yield()", href: "https://developer.mozilla.org/en-US/docs/Web/API/Scheduler/yield" },
    ],
    internalLinks: [
      { label: "Core Web Vitals explained", href: "/blog/core-web-vitals-explained" },
      { label: "Reducing JavaScript bundle size", href: "/blog/reduce-javascript-bundle-size" },
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "reduce-javascript-bundle-size",
      "third-party-scripts-performance",
      "react-rerender-performance",
    ],
  },

  {
    slug: "fix-cumulative-layout-shift",
    title: "Fixing Cumulative Layout Shift: reserve space for everything",
    seoTitle: "How to Fix Cumulative Layout Shift (CLS)",
    description:
      "The five causes of layout shift — images, ads, fonts, injected content and animations — and the CSS that prevents each of them.",
    excerpt:
      "CLS is the most fixable Core Web Vital. Almost every point of it comes from an element that did not tell the browser how big it would be.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "fix cumulative layout shift",
    secondaryKeywords: [
      "cls optimization",
      "aspect ratio css",
      "font swap layout shift",
      "layout stability",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-06-23",
    answer:
      "Cumulative Layout Shift measures unexpected movement of visible content. It is caused by images and embeds without dimensions, content injected above existing content, web fonts swapping to different metrics, and animating layout properties. Reserve space for every element whose size you know in advance and the score usually drops below 0.1 immediately.",
    takeaways: [
      "Always set width and height, or an aspect-ratio, on images, videos and iframes.",
      "Never inject banners or notices above content that is already visible.",
      "Font swaps shift text unless the fallback metrics are matched.",
      "Animate transform, never top, left, width or height.",
    ],
    sections: [
      {
        heading: "How is CLS calculated?",
        body: [
          {
            type: "p",
            text: "For each shift, the browser multiplies the impact fraction (how much of the viewport moved) by the distance fraction (how far it moved). CLS is the largest burst of shifts within a session window, not the sum of everything — so one bad shift on load matters more than many tiny ones.",
          },
          {
            type: "p",
            text: "Shifts within 500ms of a user interaction are excluded, which is why expanding an accordion does not count against you but a banner appearing on its own does.",
          },
        ],
      },
      {
        heading: "Cause 1: media without dimensions",
        body: [
          {
            type: "code",
            lang: "css",
            code: `/* Reserve space from intrinsic dimensions and scale responsively */
img, video {
  max-width: 100%;
  height: auto;      /* with width/height attributes set on the element */
}

/* For containers whose ratio is known but content loads later */
.embed {
  aspect-ratio: 16 / 9;
  width: 100%;
}`,
          },
          {
            type: "list",
            items: [
              "Set width and height attributes on every img element — browsers derive the aspect ratio from them.",
              "Use aspect-ratio for iframes, embeds and video players.",
              "Give skeletons the same dimensions as the real content they replace.",
              "Reserve space for anything conditional: badges, ratings, promotional strips.",
            ],
          },
        ],
      },
      {
        heading: "Cause 2 and 3: injected content and fonts",
        answer:
          "Anything appearing above existing content pushes it down, and a font swapping to different metrics reflows every line of text.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Reserve a fixed-height slot for cookie banners, announcement bars and ad units — even if empty.",
              "Prefer overlays and bottom-anchored positioning for notices so nothing is displaced.",
              "For fonts, use font-display: swap with size-adjust and the ascent/descent override descriptors so the fallback occupies the same space.",
              "Preload the fonts used above the fold so the swap happens early or not at all.",
              "Self-host fonts to avoid a third-party connection delaying the swap.",
            ],
          },
          {
            type: "code",
            lang: "css",
            code: `@font-face {
  font-family: "Fallback";
  src: local("Arial");
  size-adjust: 105%;
  ascent-override: 92%;
  descent-override: 24%;
}
body { font-family: "Inter", "Fallback", sans-serif; }`,
            caption: "Matching fallback metrics makes the font swap nearly invisible.",
          },
        ],
      },
      {
        heading: "Cause 4 and 5: animation and late-loading data",
        body: [
          {
            type: "list",
            items: [
              "Animate transform and opacity only — they are composited and do not trigger layout.",
              "Never animate width, height, top, left, margin or padding on anything above the fold.",
              "When data arrives and changes the size of a container, reserve the maximum expected height in advance.",
              "Use CSS containment on independent widgets so their internal changes cannot affect the page around them.",
            ],
          },
          {
            type: "callout",
            title: "Watch the skeleton mismatch",
            text: "A skeleton card 180px tall replaced by a real card 240px tall shifts everything below it. Build skeletons from the same components with the same spacing, not from approximate boxes.",
          },
        ],
      },
      {
        heading: "How do you find shifts in practice?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "DevTools Performance panel: record a load and look at the Layout Shift entries, which highlight the moved region.",
              "Enable 'Layout Shift Regions' in the Rendering panel to see shifts highlighted live as you browse.",
              "Collect CLS attribution in production — the web-vitals library reports the largest shifting element.",
              "Test with a slow network; many shifts only appear when resources arrive late.",
              "Test with content of varying length — long product names and missing images both cause shifts that a happy-path test misses.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does CLS only measure page load?",
        answer:
          "No. It measures shifts throughout the entire visit, including during scrolling and after interactions. Lazy-loaded content arriving as the user scrolls is a common late-session contributor.",
      },
      {
        question: "Do shifts after a click count?",
        answer:
          "Shifts within 500ms of a user interaction are excluded, because the user caused them and expects them. Anything outside that window counts.",
      },
      {
        question: "How do I handle ads without wrecking CLS?",
        answer:
          "Reserve the exact slot size with CSS before the ad loads, and use fixed-size units rather than allowing the container to grow. If sizes vary, reserve the most common size and accept minor shifts.",
      },
      {
        question: "Is a CLS of 0 realistic?",
        answer:
          "Yes for many content sites. The target is under 0.1, but a well-built page with reserved space for everything routinely reports zero.",
      },
    ],
    references: [
      { label: "web.dev — Optimize CLS", href: "https://web.dev/articles/optimize-cls" },
      { label: "MDN — aspect-ratio", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio" },
      { label: "web.dev — Best practices for fonts", href: "https://web.dev/articles/font-best-practices" },
    ],
    internalLinks: [
      { label: "Core Web Vitals explained", href: "/blog/core-web-vitals-explained" },
      { label: "Web font optimisation", href: "/blog/web-font-optimization" },
      { label: "Error boundaries and loading states", href: "/blog/react-error-boundaries-and-loading-states" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "core-web-vitals-explained",
      "web-font-optimization",
      "react-error-boundaries-and-loading-states",
    ],
  },

  {
    slug: "reduce-javascript-bundle-size",
    title: "Reducing JavaScript bundle size: find it, split it, delete it",
    seoTitle: "How to Reduce JavaScript Bundle Size",
    description:
      "Bundle analysis, code splitting, dependency replacement, tree shaking and the measurement discipline that stops bundles growing back.",
    excerpt:
      "Bundle size is the cost you pay on every visit, on every device. It is also the one performance metric that only ever grows unless someone owns it.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "reduce javascript bundle size",
    secondaryKeywords: [
      "code splitting",
      "tree shaking",
      "bundle analyzer",
      "dynamic import",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-09",
    answer:
      "Cut bundle size by analysing what is actually in the bundle, splitting rarely-used code behind dynamic imports, replacing heavy dependencies with lighter or native alternatives, moving logic to the server where the framework allows it, and enforcing a size budget in CI so regressions are caught at review time.",
    takeaways: [
      "Measure before optimising — the biggest contributor is rarely what people guess.",
      "One heavy dependency usually outweighs every micro-optimisation combined.",
      "Dynamic imports only help if the code was genuinely not needed on load.",
      "Without a CI budget, bundle size returns to its old value within two quarters.",
    ],
    sections: [
      {
        heading: "How do you find what is in the bundle?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Run a bundle analyser against a production build and look at the treemap per route.",
              "Read the framework's build output — Next.js prints first-load JavaScript per route.",
              "In DevTools, use the Coverage panel to see how much of the loaded JavaScript actually executes.",
              "Sort by size and investigate anything over about 30KB that you did not deliberately choose.",
              "Check for duplicate copies of the same library at different versions.",
            ],
          },
          {
            type: "callout",
            title: "Look for the accidental import",
            text: "The most common finding in our audits is a large library pulled in by a single utility function — a whole date library for one format call, or an icon package imported as a namespace instead of individually.",
          },
        ],
      },
      {
        heading: "Which dependencies are worth replacing?",
        body: [
          {
            type: "table",
            head: ["Heavy", "Lighter alternative", "Typical saving"],
            rows: [
              ["moment", "date-fns, dayjs, or Intl", "60–70 KB"],
              ["lodash (full)", "Per-method imports or native", "60+ KB"],
              ["Full icon packages", "Individual icon imports", "Varies, often large"],
              ["axios", "fetch", "~15 KB"],
              ["Full charting library", "Lazy-loaded or lighter library", "100 KB+"],
              ["Full UI kit", "Headless primitives + your own styles", "Varies"],
            ],
          },
          {
            type: "p",
            text: "Before adding any dependency, check its size and whether it tree-shakes. A five-second check at install time is worth more than a bundle-reduction project a year later.",
          },
        ],
      },
      {
        heading: "How should code splitting be applied?",
        body: [
          {
            type: "code",
            lang: "tsx",
            code: `// Load the editor only when the user opens it
const RichTextEditor = dynamic(() => import("@/components/rich-text-editor"), {
  loading: () => <EditorSkeleton />,
  ssr: false,
});

// Load a chart library only on the route that renders charts
const Chart = dynamic(() => import("@/components/chart"));`,
          },
          {
            type: "list",
            items: [
              "Split by route first — the framework usually does this for you; verify it did.",
              "Split heavy components behind an interaction: modals, editors, charts, maps, video players.",
              "Do not split tiny components; the extra request costs more than it saves.",
              "Prefetch the chunk on hover or intent so the user does not wait when they click.",
            ],
          },
        ],
      },
      {
        heading: "What else reduces shipped JavaScript?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Move logic to the server. With server components, formatting, parsing and data shaping never reach the browser at all.",
              "Use the platform: Intl for dates and numbers, fetch for requests, CSS for animation, native dialog and details elements.",
              "Import specific modules rather than namespaces, and verify the package supports tree shaking.",
              "Remove polyfills for browsers you no longer support — check your browserslist target.",
              "Delete dead code and unused feature flags; they are shipped whether or not they run.",
            ],
          },
        ],
      },
      {
        heading: "How do you stop it growing back?",
        body: [
          {
            type: "list",
            items: [
              "Set a size budget per route and fail CI when it is exceeded.",
              "Report the size delta as a comment on every pull request so the cost is visible at review.",
              "Require a note in the description when a pull request adds a new dependency.",
              "Review the biggest routes quarterly — treat bundle size like technical debt with an owner.",
            ],
          },
          {
            type: "p",
            text: "The number that matters is first-load JavaScript on your most-visited route, on mobile, compressed. Track that single figure over time and most of the discipline follows from it.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is a good bundle size?",
        answer:
          "Under about 170KB compressed for first-load JavaScript on content routes is a reasonable target. Application dashboards run higher, but the number should be deliberate rather than accidental.",
      },
      {
        question: "Does minification and compression fix this?",
        answer:
          "They reduce transfer size but not parse and execution cost, which is what hurts on slow devices. 200KB of compressed JavaScript still has to be parsed and run.",
      },
      {
        question: "Is tree shaking automatic?",
        answer:
          "Only for ES modules with no side effects. CommonJS packages, side-effectful imports and namespace imports all defeat it. Check the package's module format before assuming.",
      },
      {
        question: "Should I worry about the size of server-side code?",
        answer:
          "It does not affect the browser, but it affects cold start times in serverless environments. Keep function bundles lean for latency-sensitive endpoints.",
      },
    ],
    references: [
      { label: "web.dev — Reduce JavaScript payloads with code splitting", href: "https://web.dev/articles/reduce-javascript-payloads-with-code-splitting" },
      { label: "Bundlephobia", href: "https://bundlephobia.com/" },
      { label: "web.dev — Performance budgets", href: "https://web.dev/articles/performance-budgets-101" },
    ],
    internalLinks: [
      { label: "Improving Interaction to Next Paint", href: "/blog/improve-interaction-to-next-paint" },
      { label: "Performance budgets in practice", href: "/blog/performance-budgets" },
      { label: "React Server Components explained", href: "/blog/nextjs-server-components-explained" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "improve-interaction-to-next-paint",
      "performance-budgets",
      "nextjs-server-components-explained",
    ],
  },

  {
    slug: "web-font-optimization",
    title: "Web font optimisation: fast text without the flash",
    seoTitle: "Web Font Optimization: FOUT, FOIT and Metrics",
    description:
      "Font formats, subsetting, font-display strategies, preloading, self-hosting and fallback metric matching to eliminate font-related layout shift.",
    excerpt:
      "Fonts are usually the second-largest asset on a page and the most common cause of text that appears late, then jumps.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "web font optimization",
    secondaryKeywords: [
      "font-display swap",
      "font subsetting",
      "variable fonts",
      "self-host google fonts",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-26",
    answer:
      "Optimise web fonts by self-hosting WOFF2 files, subsetting to the characters you use, preloading only the fonts needed above the fold, choosing font-display: swap with matched fallback metrics, and using a variable font instead of multiple static weights where you need three or more.",
    takeaways: [
      "Self-host: third-party font hosting adds a connection and no longer shares caches across sites.",
      "WOFF2 only — every browser you support handles it.",
      "Preload the one or two fonts used above the fold, nothing more.",
      "Matched fallback metrics turn a visible jump into an invisible swap.",
    ],
    sections: [
      {
        heading: "How much do fonts actually cost?",
        body: [
          {
            type: "p",
            text: "A typical family with four weights in WOFF2 is 200–400KB. Subsetted to Latin characters and reduced to the weights actually used, the same family is often under 60KB. On a slow connection that difference is a second of invisible or unstyled text.",
          },
          {
            type: "list",
            items: [
              "Count the weights and styles you genuinely use — most designs use two or three, not eight.",
              "Subset to the character ranges your content needs.",
              "Consider a variable font when you need three or more weights: one file replaces several.",
              "Check whether a well-chosen system font stack would serve the design; it costs zero bytes.",
            ],
          },
        ],
      },
      {
        heading: "What does font-display control?",
        answer:
          "It controls what the browser shows while a font is loading — nothing, a fallback, or the fallback permanently.",
        body: [
          {
            type: "table",
            head: ["Value", "Behaviour", "Use for"],
            rows: [
              ["swap", "Fallback immediately, swap when loaded", "Body text — the usual choice"],
              ["optional", "Fallback; use the font only if nearly instant", "Best CLS; font may not appear on first visit"],
              ["fallback", "Short block, then fallback, brief swap window", "A compromise"],
              ["block", "Invisible text until loaded (up to 3s)", "Rarely justified"],
              ["auto", "Browser default, usually block-like", "Avoid — be explicit"],
            ],
          },
          {
            type: "p",
            text: "swap avoids invisible text but causes a reflow when the real font arrives. optional eliminates the shift entirely at the cost of sometimes not using your font on a first visit. Which is right depends on whether brand typography or layout stability matters more for that page.",
          },
        ],
      },
      {
        heading: "How do you eliminate the swap shift?",
        body: [
          {
            type: "code",
            lang: "css",
            code: `@font-face {
  font-family: "Inter";
  src: url("/fonts/inter-var.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-display: swap;
}

/* A fallback tuned to occupy the same space as Inter */
@font-face {
  font-family: "Inter Fallback";
  src: local("Arial");
  size-adjust: 107%;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}

:root { --font-sans: "Inter", "Inter Fallback", system-ui, sans-serif; }`,
          },
          {
            type: "p",
            text: "Framework font loaders automate this. next/font, for example, self-hosts the files, generates a metric-matched fallback and removes the external request in one step — which is why using it is almost always better than a manual @font-face block.",
          },
        ],
      },
      {
        heading: "What should you preload?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Only fonts used in above-the-fold text — typically one weight of your heading font and one of your body font.",
              "Use crossorigin on the preload link for fonts, even self-hosted ones, or the browser fetches them twice.",
              "Do not preload italic or bold variants unless they appear above the fold.",
              "If you preload more than two fonts, you are competing with your LCP image for bandwidth.",
            ],
          },
          {
            type: "code",
            lang: "html",
            code: `<link rel="preload" href="/fonts/inter-var.woff2" as="font"
      type="font/woff2" crossorigin>`,
          },
        ],
      },
      {
        heading: "Should you self-host?",
        body: [
          {
            type: "p",
            text: "Yes, in nearly all cases. Browser cache partitioning means a font fetched from a third-party CDN is no longer shared across sites, so the old argument for using a public font host has gone. Self-hosting removes a DNS lookup, a connection and a third-party dependency, and it avoids the privacy and regulatory questions that come with sending visitor IP addresses to another provider.",
          },
          {
            type: "callout",
            title: "One caveat: licensing",
            text: "Check the licence before self-hosting a commercial font. Open licences are straightforward; some foundry licences restrict self-hosting or cap page views.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need WOFF as well as WOFF2?",
        answer:
          "No. WOFF2 is supported by every browser in current use. Shipping WOFF and TTF fallbacks doubles your storage for no practical benefit.",
      },
      {
        question: "Are variable fonts always smaller?",
        answer:
          "Not for one or two weights — a single static weight is usually smaller. They win from around three weights onwards, and they enable fluid weight interpolation.",
      },
      {
        question: "How do I subset a font?",
        answer:
          "Tools like glyphhanger or pyftsubset generate a reduced file containing only the character ranges you need. For Latin-only content this typically removes the majority of the file.",
      },
      {
        question: "Is a system font stack a legitimate choice?",
        answer:
          "Absolutely. Zero bytes, no shift, and native rendering on every platform. Many well-known products use system fonts deliberately.",
      },
    ],
    references: [
      { label: "web.dev — Best practices for fonts", href: "https://web.dev/articles/font-best-practices" },
      { label: "MDN — font-display", href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display" },
      { label: "Next.js — Font optimization", href: "https://nextjs.org/docs/app/api-reference/components/font" },
    ],
    internalLinks: [
      { label: "Fixing Cumulative Layout Shift", href: "/blog/fix-cumulative-layout-shift" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
      { label: "Performance budgets in practice", href: "/blog/performance-budgets" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "fix-cumulative-layout-shift",
      "improve-largest-contentful-paint",
      "performance-budgets",
    ],
  },

  {
    slug: "modern-image-formats",
    title: "AVIF, WebP or JPEG: choosing image formats and compression settings",
    seoTitle: "AVIF vs WebP vs JPEG: Which to Use",
    description:
      "How modern image formats compare on size and quality, when each is appropriate, and how to build a responsive image pipeline that serves the right file.",
    excerpt:
      "Images are usually the largest thing on a page. Format and compression choices routinely cut that weight in half with no visible difference.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "avif vs webp",
    secondaryKeywords: [
      "modern image formats",
      "image compression quality",
      "responsive images srcset",
      "picture element",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-12",
    answer:
      "AVIF gives the smallest files at a given quality and is supported by all current major browsers, with WebP as a fast, universally-supported fallback and JPEG as the last resort. Serve them through content negotiation or a picture element, at multiple widths via srcset, with quality around 60–75 for photographs.",
    takeaways: [
      "AVIF is typically 20–40% smaller than WebP, which is 25–35% smaller than JPEG.",
      "Encoding AVIF is slow — do it at build time or through a CDN, not per request.",
      "SVG beats every raster format for logos, icons and diagrams.",
      "Serving the correct width matters more than the format choice.",
    ],
    sections: [
      {
        heading: "How do the formats compare?",
        body: [
          {
            type: "table",
            head: ["Format", "Best for", "Relative size", "Notes"],
            rows: [
              ["AVIF", "Photographs, complex images", "Smallest", "Slow to encode; excellent at low bitrates"],
              ["WebP", "General purpose", "Small", "Fast encode, universal support, supports transparency"],
              ["JPEG", "Fallback for photos", "Baseline", "No transparency"],
              ["PNG", "Screenshots with text, transparency", "Large for photos", "Lossless"],
              ["SVG", "Logos, icons, diagrams", "Tiny", "Scales infinitely; sanitise if user-supplied"],
            ],
          },
          {
            type: "p",
            text: "AVIF's advantage is largest on photographic content with gradients. On flat graphics with sharp edges, the difference narrows and PNG or SVG may be better than either.",
          },
        ],
      },
      {
        heading: "How do you serve the right format?",
        body: [
          {
            type: "code",
            lang: "html",
            code: `<picture>
  <source type="image/avif" srcset="/hero-800.avif 800w, /hero-1600.avif 1600w"
          sizes="(max-width: 768px) 100vw, 800px">
  <source type="image/webp" srcset="/hero-800.webp 800w, /hero-1600.webp 1600w"
          sizes="(max-width: 768px) 100vw, 800px">
  <img src="/hero-800.jpg" width="1600" height="900" alt="…"
       loading="lazy" decoding="async">
</picture>`,
          },
          {
            type: "p",
            text: "Frameworks and image CDNs do this for you through content negotiation on the Accept header, which is simpler and keeps the markup clean. Hand-writing picture elements is only worth it when you have no image pipeline at all.",
          },
        ],
      },
      {
        heading: "What quality settings should you use?",
        body: [
          {
            type: "list",
            items: [
              "Photographs: AVIF quality 50–65, WebP 70–80, JPEG 75–82. Higher rarely produces a visible difference.",
              "Images with text or fine detail: raise quality or use a lossless format — compression artefacts around text are very visible.",
              "Thumbnails: aggressive compression is fine; nobody inspects a 200px image closely.",
              "Always compare visually at the real display size, not zoomed in at 400%.",
            ],
          },
          {
            type: "callout",
            title: "Serve the right size first",
            text: "A 3000px image compressed brilliantly and displayed at 400px still wastes most of its bytes. Correct dimensions save more than format choice on almost every site we audit.",
          },
        ],
      },
      {
        heading: "What does a good pipeline look like?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Accept a high-quality original from the content team — do not ask them to optimise.",
              "Generate derivatives automatically: multiple widths, multiple formats, at build time or on first request.",
              "Cache derivatives so the transformation cost is paid once.",
              "Serve through a CDN with long cache lifetimes and content-hashed URLs.",
              "Set width and height on the element so no layout shift occurs.",
              "Lazy-load everything below the fold; eagerly load the LCP image with high priority.",
            ],
          },
        ],
      },
      {
        heading: "What about SVG and icons?",
        body: [
          {
            type: "list",
            items: [
              "Use SVG for anything vector: logos, icons, illustrations, diagrams. It scales and is usually smaller.",
              "Run SVGs through an optimiser to strip editor metadata — often 50% of the file.",
              "Inline critical SVGs to avoid a request; reference the rest via sprite or file.",
              "Never render user-uploaded SVG without sanitising it; SVG can contain scripts.",
              "Prefer per-icon imports over whole icon packages so tree shaking works.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is AVIF safe to use as the primary format?",
        answer:
          "Yes, with a WebP or JPEG fallback via content negotiation or a picture element. Support is broad across current browsers and the fallback path costs nothing.",
      },
      {
        question: "Why is AVIF encoding so slow?",
        answer:
          "It uses far more sophisticated compression than JPEG. Encode at build time or through a CDN with caching, never synchronously in a request handler.",
      },
      {
        question: "Should I use JPEG XL?",
        answer:
          "It is technically excellent but browser support has been inconsistent. Watch it, but do not build a pipeline around it as your primary format yet.",
      },
      {
        question: "How many widths should I generate?",
        answer:
          "Three to five typically covers real device widths — for example 400, 800, 1200 and 1600. More adds storage and build time for little benefit.",
      },
    ],
    references: [
      { label: "web.dev — Choose the right image format", href: "https://web.dev/articles/choose-the-right-image-format" },
      { label: "MDN — Responsive images", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Responsive_images" },
      { label: "Squoosh", href: "https://squoosh.app/" },
    ],
    internalLinks: [
      { label: "next/image in practice", href: "/blog/nextjs-image-optimization" },
      { label: "Image SEO best practices", href: "/blog/image-seo-best-practices" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "nextjs-image-optimization",
      "image-seo-best-practices",
      "improve-largest-contentful-paint",
    ],
  },

  {
    slug: "third-party-scripts-performance",
    title: "Third-party scripts: the performance cost nobody owns",
    seoTitle: "Third-Party Scripts and Web Performance",
    description:
      "How analytics, chat widgets, tag managers and ad scripts affect Core Web Vitals, how to audit them, and how to load the necessary ones responsibly.",
    excerpt:
      "Every third-party tag runs on your main thread, in your users' browsers, with your performance budget. Almost none of them have an owner.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "third party scripts performance",
    secondaryKeywords: [
      "tag manager performance",
      "script loading strategy",
      "async defer script",
      "server side tagging",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-04-28",
    answer:
      "Third-party scripts commonly account for the majority of main-thread blocking on a marketing site. Audit what is loaded, remove anything without a named owner and a purpose, load what remains with defer or after interaction, and move measurement server-side where the vendor supports it.",
    takeaways: [
      "Tag managers make it trivial to add scripts and nobody ever removes them.",
      "A chat widget can cost more main-thread time than your entire application.",
      "async and defer control download and execution timing, not cost.",
      "Facades — a lightweight placeholder loading the real widget on click — often remove the cost entirely.",
    ],
    sections: [
      {
        heading: "How much do they actually cost?",
        body: [
          {
            type: "table",
            head: ["Script type", "Typical transfer", "Main-thread impact"],
            rows: [
              ["Analytics", "20–50 KB", "Low to moderate"],
              ["Tag manager (plus tags)", "50–300 KB", "Depends entirely on contents"],
              ["Chat widget", "100–500 KB", "High, often loads on page load"],
              ["Session recording", "50–150 KB", "High — instruments every event"],
              ["A/B testing (synchronous)", "30–100 KB", "Blocks rendering by design"],
              ["Ad stack", "300 KB – 1 MB+", "Very high, plus layout shift"],
            ],
          },
          {
            type: "p",
            text: "The pattern in our audits is consistent: the site's own JavaScript is well optimised, and third-party tags account for most of the blocking time. Nobody notices because the tags were added by different people over two years.",
          },
        ],
      },
      {
        heading: "How do you audit them?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "In DevTools, filter the network panel by third-party domains and list what loads.",
              "Run a Lighthouse audit and read the third-party summary with blocking time per origin.",
              "For each script, identify the owner and the business question it answers.",
              "Remove anything without both. In practice this is usually two or three scripts per site.",
              "For what remains, ask whether it must load on page load or can wait for interaction.",
            ],
          },
          {
            type: "callout",
            title: "The unowned tag",
            text: "Ask the marketing and product teams which tags they actively use. On a recent audit, four of nine tags were for tools the company had stopped paying for.",
          },
        ],
      },
      {
        heading: "How should necessary scripts be loaded?",
        body: [
          {
            type: "table",
            head: ["Strategy", "When", "Use for"],
            rows: [
              ["Inline / blocking", "Immediately, blocks parsing", "Almost never"],
              ["async", "Downloads in parallel, runs on arrival", "Independent analytics"],
              ["defer", "Downloads in parallel, runs after parsing", "Most third-party scripts"],
              ["On idle", "After the page settles", "Non-critical measurement"],
              ["On interaction", "When the user acts", "Chat, video, maps, social embeds"],
            ],
          },
          {
            type: "code",
            lang: "tsx",
            code: `// Next.js: load after the page becomes interactive
<Script src="https://example.com/analytics.js" strategy="afterInteractive" />

// Load only when the browser is idle
<Script src="https://example.com/heatmap.js" strategy="lazyOnload" />`,
          },
        ],
      },
      {
        heading: "What is a facade and when should you use one?",
        body: [
          {
            type: "p",
            text: "A facade is a lightweight placeholder that looks like the widget and loads the real thing only when the user interacts. A chat bubble image that loads the chat SDK on click costs a few kilobytes instead of several hundred, and the vast majority of visitors never trigger it.",
          },
          {
            type: "list",
            items: [
              "Video embeds: a thumbnail plus a play button, loading the player on click.",
              "Chat widgets: a styled button that initialises the SDK on first click.",
              "Maps: a static map image that becomes interactive when clicked.",
              "Social embeds: a rendered quote loading the full widget only if the user engages.",
            ],
          },
        ],
      },
      {
        heading: "What about server-side tagging and consent?",
        body: [
          {
            type: "list",
            items: [
              "Server-side tagging moves collection off the client entirely, removing the main-thread cost and improving data quality against blockers.",
              "It requires infrastructure and does not remove your consent obligations.",
              "Load marketing and analytics tags only after consent, which for many visitors means never loading them at all.",
              "Reserve space for the consent banner so it does not shift the page — a very common CLS source.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does async make a script free?",
        answer:
          "No. It stops the download blocking HTML parsing, but the script still executes on the main thread and competes with your code. Cost is deferred, not removed.",
      },
      {
        question: "Should I self-host third-party scripts?",
        answer:
          "It removes a connection but breaks vendor updates and can violate terms of service. Generally not worth it except for stable, versioned libraries.",
      },
      {
        question: "How do I convince stakeholders to remove a tag?",
        answer:
          "Measure it. Show the blocking time attributable to the script and the conversion impact of the page being slower. A number is far more persuasive than a principle.",
      },
      {
        question: "Do consent banners hurt Core Web Vitals?",
        answer:
          "They can hurt CLS badly if they inject above content and push it down. Reserve the space or use an overlay that does not displace anything.",
      },
    ],
    references: [
      { label: "web.dev — Third-party JavaScript", href: "https://web.dev/articles/third-party-javascript" },
      { label: "web.dev — Third-party facades", href: "https://web.dev/articles/third-party-facades" },
      { label: "Next.js — Script component", href: "https://nextjs.org/docs/app/api-reference/components/script" },
    ],
    internalLinks: [
      { label: "Improving Interaction to Next Paint", href: "/blog/improve-interaction-to-next-paint" },
      { label: "Fixing Cumulative Layout Shift", href: "/blog/fix-cumulative-layout-shift" },
      { label: "Performance budgets in practice", href: "/blog/performance-budgets" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "improve-interaction-to-next-paint",
      "performance-budgets",
      "fix-cumulative-layout-shift",
    ],
  },

  {
    slug: "performance-budgets",
    title: "Performance budgets: making speed a constraint instead of a project",
    seoTitle: "Performance Budgets: How to Set and Enforce Them",
    description:
      "How to choose budget metrics, set realistic thresholds from competitor and field data, enforce them in CI, and handle the exceptions honestly.",
    excerpt:
      "Performance work that happens once decays within two quarters. A budget makes it a constraint every pull request has to respect.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "performance budget",
    secondaryKeywords: [
      "lighthouse ci",
      "bundle size budget",
      "performance regression",
      "web performance process",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-04-14",
    answer:
      "A performance budget is a set of enforced limits — bundle size, LCP, total page weight — that fail a build when exceeded. Choose two or three metrics that map to user experience, set thresholds slightly better than your current state, enforce them in CI on your key routes, and review them quarterly.",
    takeaways: [
      "Three metrics, enforced, beat twenty tracked on a dashboard nobody opens.",
      "Set the budget just below current performance so it holds the line, then ratchet down.",
      "Enforce on the routes that carry your traffic, not on every page.",
      "Exceptions are fine — undocumented exceptions are how budgets die.",
    ],
    sections: [
      {
        heading: "What should you budget?",
        body: [
          {
            type: "table",
            head: ["Metric", "Example budget", "Enforced where"],
            rows: [
              ["First-load JavaScript", "≤ 170 KB compressed", "CI, per route"],
              ["LCP (lab, throttled)", "≤ 2.5s", "Lighthouse CI"],
              ["Total page weight", "≤ 1 MB", "CI"],
              ["Third-party requests", "≤ 8", "CI or manual review"],
              ["CLS", "≤ 0.05", "Lighthouse CI"],
              ["TTFB (field)", "≤ 800ms at p75", "Monitoring alert"],
            ],
          },
          {
            type: "p",
            text: "Pick two or three to start. A budget that fails for six different reasons on the first pull request gets disabled by the end of the week.",
          },
        ],
      },
      {
        heading: "How do you set the numbers?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Measure your current state on your top three templates, on mobile, using field data where available.",
              "Measure two competitors the same way. Being 20% faster than the best of them is a defensible target.",
              "Set the initial budget at or slightly below your current performance, so it prevents regression rather than failing on day one.",
              "Agree a ratchet: tighten by a defined amount each quarter until you reach the target.",
              "Write down what the budget is protecting — conversion, rankings, or a contractual commitment.",
            ],
          },
          {
            type: "callout",
            title: "Budget the routes that matter",
            text: "Your home page, your top landing template and your highest-converting page. Enforcing a budget on the admin settings screen generates noise without value.",
          },
        ],
      },
      {
        heading: "How do you enforce it?",
        body: [
          {
            type: "code",
            lang: "yaml",
            code: `- name: Lighthouse CI
  run: lhci autorun
  env:
    LHCI_BUILD_CONTEXT__CURRENT_BRANCH: \${{ github.head_ref }}

# lighthouserc.json
# "assertions": {
#   "categories:performance": ["error", { "minScore": 0.9 }],
#   "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
#   "cumulative-layout-shift": ["error", { "maxNumericValue": 0.05 }],
#   "total-byte-weight": ["error", { "maxNumericValue": 1000000 }]
# }`,
          },
          {
            type: "list",
            items: [
              "Run against a preview deployment, not a local dev server.",
              "Run three times and take the median — single lab runs are noisy.",
              "Post the result as a pull request comment so the cost of a change is visible during review.",
              "Fail the check. A warning that never blocks anything is a dashboard, not a budget.",
            ],
          },
        ],
      },
      {
        heading: "How should exceptions work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Allow an override with an explicit label or annotation on the pull request.",
              "Require a reason and a named owner in the description.",
              "Raise the budget deliberately if the new baseline is genuinely justified — do not leave a permanently failing check.",
              "Review overrides monthly. A pattern of exceptions means the budget is wrong or the architecture is drifting.",
            ],
          },
        ],
      },
      {
        heading: "How do you keep it alive?",
        body: [
          {
            type: "list",
            items: [
              "Pair lab budgets with field monitoring — the lab catches regressions, the field tells you what users experience.",
              "Report the trend monthly alongside business metrics, not in an engineering-only channel.",
              "Give the budget an owner. Shared ownership of a constraint means nobody defends it.",
              "Celebrate improvements as visibly as you flag regressions.",
            ],
          },
          {
            type: "p",
            text: "The point of a budget is not the number. It is that performance becomes a thing considered at design and review time, rather than a project someone runs after a bad quarter.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What if we are already over budget?",
        answer:
          "Set the budget at the current value first so nothing gets worse, then ratchet down on a schedule. A budget you fail immediately teaches the team to ignore it.",
      },
      {
        question: "Should budgets differ per page type?",
        answer:
          "Yes. A marketing landing page and an interactive dashboard have legitimately different profiles. Same framework, different numbers.",
      },
      {
        question: "How do I handle lab noise in CI?",
        answer:
          "Run multiple times and use the median, run on consistent runner hardware, and set thresholds with a small tolerance. Flaky performance checks get disabled quickly.",
      },
      {
        question: "Does a Lighthouse score make a good budget?",
        answer:
          "It is a rough proxy. Budget the underlying metrics — LCP, CLS, bytes — because they are actionable and stable, whereas the composite score shifts when the scoring formula changes.",
      },
    ],
    references: [
      { label: "web.dev — Performance budgets 101", href: "https://web.dev/articles/performance-budgets-101" },
      { label: "Lighthouse CI", href: "https://github.com/GoogleChrome/lighthouse-ci" },
      { label: "web.dev — Incorporate performance budgets into your build", href: "https://web.dev/articles/incorporate-performance-budgets-into-your-build-tools" },
    ],
    internalLinks: [
      { label: "Reducing JavaScript bundle size", href: "/blog/reduce-javascript-bundle-size" },
      { label: "Lab data vs field data", href: "/blog/lighthouse-vs-field-data" },
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "reduce-javascript-bundle-size",
      "lighthouse-vs-field-data",
      "ci-cd-pipeline-design",
    ],
  },

  {
    slug: "lighthouse-vs-field-data",
    title: "Lab data vs field data: why your Lighthouse score lies to you",
    seoTitle: "Lighthouse vs Field Data: Which to Trust",
    description:
      "The difference between synthetic and real-user measurement, when each is appropriate, how to set up RUM, and how to reconcile contradictory numbers.",
    excerpt:
      "A perfect Lighthouse score and failing Core Web Vitals is not a contradiction. They measure different things, and only one of them is your users.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "lab data vs field data",
    secondaryKeywords: [
      "real user monitoring",
      "lighthouse score accuracy",
      "chrome ux report",
      "synthetic testing",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-03-31",
    answer:
      "Lab (synthetic) data comes from a controlled test on simulated hardware and network conditions — reproducible, good for debugging. Field data comes from real visits on real devices and is what Google uses for Core Web Vitals. When they disagree, the field data is what matters; use the lab to diagnose and verify fixes.",
    takeaways: [
      "Lab data is a controlled experiment; field data is reality.",
      "A single Lighthouse run varies enough that only medians of several runs mean anything.",
      "INP is essentially unmeasurable in the lab — it depends on real interactions.",
      "You need both: field data to know, lab data to debug.",
    ],
    sections: [
      {
        heading: "What is the difference?",
        body: [
          {
            type: "table",
            head: ["", "Lab (synthetic)", "Field (RUM)"],
            rows: [
              ["Source", "One scripted test run", "Real visits, aggregated"],
              ["Device", "Simulated throttling", "Whatever users own"],
              ["Network", "Simulated", "Real, variable"],
              ["Cache", "Cold by default", "Mixed cold and warm"],
              ["Interactions", "None or scripted", "Real user behaviour"],
              ["Reproducible", "Yes", "No"],
              ["Used by Google for ranking", "No", "Yes"],
            ],
          },
        ],
      },
      {
        heading: "Why do the numbers disagree?",
        answer:
          "Because the lab tests one idealised visit and the field measures every visit, including the slow ones.",
        body: [
          {
            type: "list",
            items: [
              "Device mix: your users' phones are slower than the simulated profile, or faster.",
              "Geography: a test from one location cannot represent a global audience.",
              "Consent-gated scripts do not load in a lab run but do for real users who accept.",
              "Logged-in experiences differ substantially from the public page the lab tested.",
              "Field data is a 28-day rolling window, so it lags recent fixes.",
              "The field figure is the 75th percentile — worse than the median by definition.",
            ],
          },
        ],
      },
      {
        heading: "How do you collect field data?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `import { onCLS, onINP, onLCP, onTTFB } from "web-vitals/attribution";

function report(metric) {
  navigator.sendBeacon("/api/vitals", JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    attribution: metric.attribution,   // which element, which phase
    path: location.pathname,
    connection: navigator.connection?.effectiveType,
  }));
}

onLCP(report); onINP(report); onCLS(report); onTTFB(report);`,
            caption: "The attribution build is the difference between knowing LCP is bad and knowing why.",
          },
          {
            type: "list",
            items: [
              "The Chrome UX Report gives you public field data with no instrumentation, aggregated monthly.",
              "Your own RUM gives per-route, per-device detail and updates immediately.",
              "Search Console shows how Google groups and assesses your URLs.",
              "Segment by device class and route — a site-wide average hides the template that is failing.",
            ],
          },
        ],
      },
      {
        heading: "How should you use each?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Use field data to decide what to work on — which metric, which template, which device class.",
              "Use lab data to reproduce the problem in a controlled environment and identify the cause.",
              "Use lab data in CI to prevent regressions, since it is reproducible.",
              "Return to field data to confirm the fix worked for real users, allowing several weeks.",
            ],
          },
          {
            type: "callout",
            title: "Never optimise for the score",
            text: "It is possible to raise a Lighthouse score with changes that make the real experience worse — deferring content users need, or removing functionality the test happens to penalise. Optimise for the field metrics; the score follows.",
          },
        ],
      },
      {
        heading: "What is a realistic testing setup?",
        body: [
          {
            type: "list",
            items: [
              "RUM on every page, collecting all Core Web Vitals with attribution.",
              "Lighthouse CI on your top three templates, median of three runs, blocking on regression.",
              "A monthly review of the Chrome UX Report trend against two competitors.",
              "Manual testing on a real mid-range Android device before major releases.",
              "An alert when a field metric crosses from good into needs-improvement.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why does my Lighthouse score change between runs?",
        answer:
          "Network variability, CPU contention on the machine running the test, and randomness in third-party responses. Run three or five times and take the median; a single run is not a measurement.",
      },
      {
        question: "How much traffic do I need for field data?",
        answer:
          "The Chrome UX Report needs enough visits to report a URL or group. Your own RUM works at any volume, which is one of the reasons to run it.",
      },
      {
        question: "Should I use PageSpeed Insights?",
        answer:
          "Yes — it shows both, with CrUX field data at the top and a Lighthouse lab run below. Read the field section first; that is the assessment.",
      },
      {
        question: "How long before improvements appear in field data?",
        answer:
          "The public dataset is a rolling 28-day window, so allow four to six weeks for a full reflection. Your own RUM shows the change the same day.",
      },
    ],
    references: [
      { label: "web.dev — Lab and field data", href: "https://web.dev/articles/lab-and-field-data-differences" },
      { label: "web-vitals JavaScript library", href: "https://github.com/GoogleChrome/web-vitals" },
      { label: "PageSpeed Insights", href: "https://pagespeed.web.dev/" },
    ],
    internalLinks: [
      { label: "Core Web Vitals explained", href: "/blog/core-web-vitals-explained" },
      { label: "Performance budgets in practice", href: "/blog/performance-budgets" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "core-web-vitals-explained",
      "performance-budgets",
      "observability-for-web-apps",
    ],
  },
];
