import type { Article } from "@/lib/content/types";

export const seoArticles: Article[] = [
  {
    slug: "technical-seo-checklist-developers",
    title: "The technical SEO checklist for developers",
    seoTitle: "Technical SEO Checklist for Developers",
    description:
      "Crawling, indexing, canonicals, sitemaps, structured data, performance and rendering — the technical SEO work that belongs to engineering, not marketing.",
    excerpt:
      "Technical SEO is mostly engineering work: correct status codes, canonical URLs, crawlable HTML and fast pages. None of it requires a keyword tool.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "technical seo checklist",
    secondaryKeywords: [
      "seo for developers",
      "crawling and indexing",
      "site audit checklist",
      "search console setup",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-08",
    answer:
      "Technical SEO ensures search engines can crawl, render, understand and index your pages. The developer-owned essentials are: a correct robots.txt, an accurate XML sitemap, self-referencing canonicals, clean status codes and redirects, server-rendered content, semantic headings, structured data, and Core Web Vitals within thresholds.",
    takeaways: [
      "Crawlable, indexable and fast are prerequisites — they do not create rankings by themselves.",
      "A stray noindex from staging is the single most common launch-day SEO failure.",
      "Every indexable page needs one self-referencing canonical.",
      "Verify what Googlebot sees, not what your browser renders.",
    ],
    sections: [
      {
        heading: "Crawling and indexing",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "robots.txt allows crawling of production and does not block CSS or JavaScript.",
              "No stray noindex meta tags or X-Robots-Tag headers left over from staging.",
              "One canonical host — apex or www, HTTP redirecting to HTTPS with a 301 or 308.",
              "An XML sitemap containing only canonical, indexable, 200-status URLs, referenced from robots.txt.",
              "Staging and preview environments blocked or password protected.",
              "Pagination handled with crawlable links, not JavaScript-only infinite scroll.",
              "Faceted navigation controlled so filter combinations do not generate infinite crawl paths.",
            ],
          },
          {
            type: "callout",
            title: "Test robots.txt before you deploy it",
            text: "A single Disallow: / shipped to production can deindex a site within days. Treat robots.txt as production configuration with the same review as code.",
          },
        ],
      },
      {
        heading: "URLs, canonicals and redirects",
        body: [
          {
            type: "list",
            items: [
              "Descriptive, lowercase, hyphenated URLs without session ids or tracking parameters.",
              "A self-referencing canonical on every indexable page, absolute, with the correct protocol and host.",
              "Consistent trailing-slash behaviour, enforced by redirect.",
              "Permanent moves use 301 or 308 — never a 302 for a permanent change.",
              "No redirect chains; point every old URL directly at the final destination.",
              "404 for genuinely missing pages, 410 for permanently removed ones, and never a soft 404 returning 200.",
            ],
          },
        ],
      },
      {
        heading: "Content structure and rendering",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "One h1 per page, with a logical h2 and h3 hierarchy and no skipped levels.",
              "Main content present in the server-rendered HTML, not injected by client-side JavaScript.",
              "Unique title and meta description on every page.",
              "Descriptive alt text on meaningful images.",
              "Internal links as real anchor elements with href attributes — not click handlers on divs.",
              "Structured data for the page type, validating without errors.",
              "Semantic landmarks: header, nav, main, article, footer.",
            ],
          },
          {
            type: "p",
            text: "Verify with the URL Inspection tool in Search Console. It shows the rendered HTML Google actually sees, which is the only version that matters.",
          },
        ],
      },
      {
        heading: "Performance and mobile",
        body: [
          {
            type: "list",
            items: [
              "Core Web Vitals passing at the 75th percentile on mobile, which is the indexing baseline.",
              "Responsive design with a correct viewport meta tag.",
              "Tap targets adequately sized and text readable without zoom.",
              "The same content served to mobile and desktop — mobile-first indexing uses the mobile version.",
              "Images in modern formats with correct dimensions and lazy loading below the fold.",
            ],
          },
        ],
      },
      {
        heading: "Monitoring and verification",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Search Console verified, sitemap submitted, coverage report reviewed monthly.",
              "Bing Webmaster Tools set up as well — it also feeds several AI search products.",
              "An alert on a drop in indexed pages or a spike in crawl errors.",
              "A quarterly crawl with a site auditing tool to catch drift.",
              "A pre-release check in CI asserting no noindex, a valid canonical, and a reachable sitemap.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long until technical fixes show results?",
        answer:
          "Crawling and indexing changes can appear within days; ranking effects typically take weeks to months. Core Web Vitals field data uses a 28-day window, so allow a month before judging.",
      },
      {
        question: "Does site speed affect rankings?",
        answer:
          "Yes, as a lightweight signal via Core Web Vitals. The larger commercial effect is on conversion and engagement, which is a better argument for the work.",
      },
      {
        question: "Should every page be in the sitemap?",
        answer:
          "Every canonical, indexable page you want ranked. Exclude noindex pages, non-canonical duplicates, redirects and error pages — a sitemap full of non-200 URLs wastes crawl budget and trust.",
      },
      {
        question: "Is technical SEO enough to rank?",
        answer:
          "No. It removes the obstacles to ranking. Content quality, relevance and authority determine whether you actually do.",
      },
    ],
    references: [
      { label: "Google Search Central — SEO starter guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google — Search Console", href: "https://search.google.com/search-console/about" },
      { label: "Google Search Central — Crawling and indexing", href: "https://developers.google.com/search/docs/crawling-indexing" },
    ],
    internalLinks: [
      { label: "Canonical URLs explained", href: "/blog/canonical-urls-explained" },
      { label: "XML sitemaps guide", href: "/blog/xml-sitemaps-guide" },
      { label: "JavaScript SEO and rendering", href: "/blog/javascript-seo-rendering" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "canonical-urls-explained",
      "xml-sitemaps-guide",
      "javascript-seo-rendering",
    ],
  },

  {
    slug: "canonical-urls-explained",
    title: "Canonical URLs: how to consolidate duplicate content correctly",
    seoTitle: "Canonical URLs Explained (with Examples)",
    description:
      "What rel=canonical does, how Google treats it as a hint, the common mistakes, and how to handle pagination, parameters and cross-domain duplicates.",
    excerpt:
      "A canonical tag is a suggestion, not an instruction. Getting it consistently right across a site is what makes the suggestion credible.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "canonical url",
    secondaryKeywords: [
      "rel canonical",
      "duplicate content seo",
      "canonical vs redirect",
      "pagination canonical",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-07-25",
    answer:
      "A canonical URL tells search engines which version of duplicate or near-duplicate content should be indexed and receive ranking signals. Declared with rel=canonical or an HTTP header, it is treated as a strong hint rather than a directive, so consistency across sitemaps, internal links and redirects matters as much as the tag itself.",
    takeaways: [
      "Every indexable page should have a self-referencing canonical.",
      "Canonical is a hint — conflicting signals cause Google to choose its own.",
      "Never canonicalise to a URL that redirects, 404s or is blocked in robots.txt.",
      "Use redirects for pages that genuinely moved; canonicals for pages that all still exist.",
    ],
    sections: [
      {
        heading: "What does a canonical tag actually do?",
        body: [
          {
            type: "code",
            lang: "html",
            code: `<!-- Self-referencing canonical on the page you want indexed -->
<link rel="canonical" href="https://rovqix.in/blog/canonical-urls-explained">`,
          },
          {
            type: "p",
            text: "It consolidates duplicate versions into one indexed URL and passes ranking signals to it. Google weighs it alongside internal links, sitemap entries, redirects and hreflang — if those disagree with your tag, it may pick a different canonical and report the discrepancy in Search Console.",
          },
        ],
      },
      {
        heading: "When do you need one?",
        body: [
          {
            type: "table",
            head: ["Situation", "Canonical target"],
            rows: [
              ["Same page reachable with and without parameters", "The clean URL"],
              ["Product in multiple categories", "One primary product URL"],
              ["Print or AMP variant", "The main version"],
              ["HTTP and HTTPS, www and apex", "Redirect instead; canonical as backup"],
              ["Syndicated content on another domain", "Your original URL, set on their copy"],
              ["Paginated series", "Each page canonical to itself"],
            ],
          },
          {
            type: "callout",
            title: "Pagination: canonical to self",
            text: "Do not canonicalise page 2 to page 1. Google has stated that pages beyond the first should self-canonicalise; pointing them at page one can cause their content to go unindexed.",
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
              "Every page canonicalising to the home page — usually a template bug, and it deindexes the site.",
              "Relative URLs without a base — always use absolute URLs.",
              "Canonicalising to a URL that redirects, which forces Google to guess.",
              "Canonical pointing at a page blocked by robots.txt, so the target cannot be read.",
              "Multiple conflicting canonical tags on one page — the second one is ignored or the whole signal is.",
              "Combining noindex with a canonical, which sends contradictory instructions.",
              "Protocol or host mismatch: canonical on http:// while the page is served over https://.",
            ],
          },
        ],
      },
      {
        heading: "Canonical or redirect?",
        body: [
          {
            type: "table",
            head: ["", "Canonical", "301 redirect"],
            rows: [
              ["Both URLs remain accessible", "Yes", "No"],
              ["Users can reach either version", "Yes", "No"],
              ["Signal strength", "Hint", "Directive"],
              ["Use for", "Parameters, variants, syndication", "Moved or merged pages"],
            ],
          },
          {
            type: "p",
            text: "If a user has no reason to see the duplicate, redirect. If both versions serve a purpose — a filtered view, a print page, a category path — keep them and canonicalise.",
          },
        ],
      },
      {
        heading: "How do you implement them systematically?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Next.js: derive the canonical from the route, never hand-write it
export async function generateMetadata({ params }): Promise<Metadata> {
  const { slug } = await params;
  return {
    alternates: { canonical: \`https://rovqix.in/blog/\${slug}\` },
  };
}`,
          },
          {
            type: "list",
            items: [
              "Generate canonicals from a single helper so no page can ship without one.",
              "Strip tracking parameters when constructing the canonical URL.",
              "Assert in CI that every sitemap URL returns a self-referencing canonical.",
              "Review the Search Console pages report for 'Alternate page with proper canonical' and for user-declared versus Google-selected mismatches.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does Google always respect the canonical tag?",
        answer:
          "No. It is one signal among several. If internal links, the sitemap and redirects point elsewhere, Google may select a different canonical and tell you so in Search Console.",
      },
      {
        question: "Can I canonicalise across domains?",
        answer:
          "Yes, and it is the correct approach for syndicated content — the republishing site sets a canonical to your original. Whether they will is a commercial question.",
      },
      {
        question: "Do canonical tags pass link equity?",
        answer:
          "Signals are consolidated to the canonical URL in a way broadly comparable to a 301 redirect, though it is a hint rather than a guarantee.",
      },
      {
        question: "What about parameters for filters and sorting?",
        answer:
          "Canonicalise filtered views to the unfiltered URL when the filtered version should not rank. If a filtered view targets genuine demand, give it a self-canonical and unique content instead.",
      },
    ],
    references: [
      { label: "Google — Consolidate duplicate URLs", href: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" },
      { label: "Google — Canonicalization troubleshooting", href: "https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting" },
      { label: "Google — Pagination best practices", href: "https://developers.google.com/search/docs/specialty/ecommerce/pagination-and-incremental-page-loading" },
    ],
    internalLinks: [
      { label: "Technical SEO checklist for developers", href: "/blog/technical-seo-checklist-developers" },
      { label: "301 redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
      { label: "The Next.js Metadata API", href: "/blog/nextjs-metadata-api-seo" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "technical-seo-checklist-developers",
      "redirects-and-site-migrations",
      "nextjs-metadata-api-seo",
    ],
  },

  {
    slug: "structured-data-guide",
    title: "Structured data that actually earns rich results",
    seoTitle: "Structured Data Guide: JSON-LD That Works",
    description:
      "Which schema types produce rich results, how to implement JSON-LD correctly, validation, and the policies that get markup ignored or penalised.",
    excerpt:
      "Structured data does not improve rankings directly. It changes how your result looks and how machines understand your page, which is worth more than it sounds.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "structured data json-ld",
    secondaryKeywords: [
      "schema markup",
      "rich results",
      "faqpage schema",
      "breadcrumb structured data",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-07-11",
    answer:
      "Structured data is machine-readable markup, best implemented as JSON-LD in the page head or body, that describes what a page is about. It powers rich results such as breadcrumbs, review stars, product details and article cards, and it helps search and AI systems identify entities on your site.",
    takeaways: [
      "JSON-LD is the recommended format — separate from the visible markup and easy to generate.",
      "Markup must match visible content; describing things that are not on the page is a policy violation.",
      "Not every schema type produces a rich result, but they still aid machine understanding.",
      "Generate structured data from your data model so it cannot drift from the page.",
    ],
    sections: [
      {
        heading: "Which types are worth implementing?",
        body: [
          {
            type: "table",
            head: ["Type", "Use on", "Rich result"],
            rows: [
              ["Organization", "Site-wide", "Knowledge panel signals"],
              ["BreadcrumbList", "Every deep page", "Breadcrumb trail in results"],
              ["Article / BlogPosting", "Editorial content", "Article treatment, dates"],
              ["Product + Offer", "Product pages", "Price, availability, reviews"],
              ["FAQPage", "Genuine FAQ content", "Limited eligibility today"],
              ["LocalBusiness", "Location pages", "Map and business details"],
              ["JobPosting", "Job listings", "Job search integration"],
              ["HowTo, Recipe, Event, Course", "Matching content", "Type-specific rich results"],
            ],
          },
          {
            type: "callout",
            title: "FAQ rich results narrowed",
            text: "Google restricted FAQ rich result eligibility to a small set of authoritative sites. Keep FAQPage markup anyway — it still helps machines parse your answers, and AI systems read it — but do not build a content strategy around the visual result.",
          },
        ],
      },
      {
        heading: "How should JSON-LD be implemented?",
        body: [
          {
            type: "code",
            lang: "tsx",
            code: `// Generate from the same data the page renders — no drift possible
export function ArticleJsonLd({ article }: { article: Article }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: { "@type": "Person", name: article.author.name, url: article.author.url },
    publisher: { "@type": "Organization", name: "ROVQIX", url: "https://rovqix.in" },
    mainEntityOfPage: { "@type": "WebPage", "@id": article.url },
    image: article.image,
  };
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}`,
          },
          {
            type: "list",
            items: [
              "JSON-LD over microdata or RDFa — easier to generate, validate and maintain.",
              "Server-render it; do not inject it with client-side JavaScript.",
              "Use @id to connect entities across pages so the graph is coherent.",
              "One script block per entity type is fine, or combine into a @graph array.",
            ],
          },
        ],
      },
      {
        heading: "What are the rules you must follow?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "The markup must describe content visible on the page. Marking up reviews that are not shown is a violation.",
              "No markup for content behind a login or an interaction the user has not taken.",
              "No fabricated ratings, prices or availability.",
              "Include all required properties for the type, or you get no rich result at all.",
              "Keep dates in ISO 8601 with a timezone offset.",
              "Do not mark up a page as a type it is not — a category page is not a Product.",
            ],
          },
        ],
      },
      {
        heading: "How do you validate it?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Google's Rich Results Test for eligibility and required-property errors.",
              "Schema.org's validator for general syntax and vocabulary correctness.",
              "Search Console's enhancement reports for issues at scale across the live site.",
              "A CI check that parses the JSON-LD on key templates and asserts required fields exist.",
              "Re-test after any template change — structured data breaks silently.",
            ],
          },
        ],
      },
      {
        heading: "Does it help with AI search?",
        body: [
          {
            type: "p",
            text: "It helps machines identify entities, relationships and facts without inferring them from prose. Whether a given AI system consumes your JSON-LD directly is not always documented, but explicit, unambiguous data about your organisation, authors, products and articles reduces the chance of being misunderstood or misattributed.",
          },
          {
            type: "p",
            text: "Treat it as part of making your content machine-legible, alongside clean headings and self-contained answers. That framing survives changes in which specific rich results are available.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does structured data improve rankings?",
        answer:
          "Not directly. It affects how your result is displayed and how well machines understand the page. Better display improves click-through, which has commercial value regardless of ranking.",
      },
      {
        question: "Which format should I use?",
        answer:
          "JSON-LD. Google recommends it, and keeping the data separate from the visible markup makes it far easier to generate and test.",
      },
      {
        question: "Can incorrect structured data hurt me?",
        answer:
          "Markup that does not match visible content can trigger a manual action removing rich results. Errors in required properties simply make you ineligible rather than penalised.",
      },
      {
        question: "How much structured data is too much?",
        answer:
          "There is no penalty for volume, but only mark up what genuinely applies. Adding types that do not describe the page adds noise rather than signal.",
      },
    ],
    references: [
      { label: "Google — Structured data general guidelines", href: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies" },
      { label: "Schema.org", href: "https://schema.org/" },
      { label: "Google — Rich Results Test", href: "https://search.google.com/test/rich-results" },
    ],
    internalLinks: [
      { label: "The Next.js Metadata API", href: "/blog/nextjs-metadata-api-seo" },
      { label: "Entity SEO and the knowledge graph", href: "/blog/entity-seo-knowledge-graph" },
      { label: "Technical SEO checklist for developers", href: "/blog/technical-seo-checklist-developers" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "nextjs-metadata-api-seo",
      "entity-seo-knowledge-graph",
      "technical-seo-checklist-developers",
    ],
  },

  {
    slug: "semantic-html-seo",
    title: "Semantic HTML and SEO: why element choice still matters",
    seoTitle: "Semantic HTML for SEO and Accessibility",
    description:
      "How heading hierarchy, landmarks, lists, tables and link text affect how search engines and AI systems parse a page — and how to get them right.",
    excerpt:
      "A div can be styled to look like anything. It cannot be understood as anything, which is the whole problem.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "semantic html seo",
    secondaryKeywords: [
      "heading hierarchy seo",
      "html landmarks",
      "anchor text best practices",
      "accessible html seo",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-06-27",
    answer:
      "Semantic HTML uses elements for their meaning — headings for structure, nav and main for landmarks, lists for lists, tables for tabular data — so that machines can determine what each part of a page is. It improves accessibility and gives search engines and AI systems reliable structural signals rather than requiring them to infer from styling.",
    takeaways: [
      "One h1, no skipped levels — headings are a document outline, not font sizes.",
      "Real anchor elements with href are what create crawlable links.",
      "Lists and tables let machines extract structured facts from prose.",
      "Semantic markup serves accessibility and machine readability with the same work.",
    ],
    sections: [
      {
        heading: "Why does element choice matter to a search engine?",
        body: [
          {
            type: "p",
            text: "Search engines parse the DOM to determine structure: what the page is about, how it is organised, what the sub-topics are, and which parts are navigation versus content. CSS classes carry no meaning. A page built entirely from divs forces every consumer to guess.",
          },
          {
            type: "p",
            text: "This matters more now than five years ago, because AI answer engines extract passages rather than whole pages. A well-structured section under a clear heading is extractable; the same text inside nested unlabelled containers is much less so.",
          },
        ],
      },
      {
        heading: "How should headings be structured?",
        body: [
          {
            type: "code",
            lang: "html",
            code: `<h1>Next.js caching explained</h1>
  <h2>What are the four caching layers?</h2>
  <h2>How do I stop a page from caching?</h2>
    <h3>Route segment configuration</h3>
    <h3>Per-fetch options</h3>
  <h2>Frequently asked questions</h2>`,
          },
          {
            type: "list",
            items: [
              "Exactly one h1, matching the page's primary topic.",
              "Never skip a level — h2 to h4 breaks the outline for screen readers and parsers alike.",
              "Phrase headings as the questions people ask; they become extractable answer targets.",
              "Do not choose a heading level for its font size. Style with CSS.",
              "Avoid headings inside navigation and footers competing with content headings.",
            ],
          },
        ],
      },
      {
        heading: "Which elements carry meaning?",
        body: [
          {
            type: "table",
            head: ["Use", "Instead of", "Because"],
            rows: [
              ["<nav>", "<div class=\"nav\">", "Identifies navigation for parsers and assistive tech"],
              ["<main>", "<div id=\"content\">", "Marks the primary content region"],
              ["<article>", "<div class=\"post\">", "A self-contained, syndicatable unit"],
              ["<button>", "<div onClick>", "Keyboard and screen reader support built in"],
              ["<a href>", "<span onClick>", "Only real links are crawlable"],
              ["<table>", "Divs with grid CSS", "Tabular data is extractable as data"],
              ["<time datetime>", "Plain text date", "Unambiguous machine-readable date"],
              ["<ul>/<ol>", "Divs with bullets", "Lists are extracted as lists"],
            ],
          },
        ],
      },
      {
        heading: "What makes good link text?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Describe the destination: 'read our PostgreSQL indexing guide', not 'click here'.",
              "Keep anchor text natural — over-optimised exact-match links across a site look manipulative.",
              "Vary anchor text pointing at the same page rather than repeating one phrase.",
              "Ensure the link makes sense out of context; screen reader users can list links in isolation.",
              "Use real hrefs even in single-page applications so links are crawlable and openable in a new tab.",
            ],
          },
          {
            type: "callout",
            title: "The div-with-onClick problem",
            text: "A clickable div is invisible to crawlers, unreachable by keyboard, and unannounced by screen readers. It fails SEO and accessibility with a single decision.",
          },
        ],
      },
      {
        heading: "How do you audit for this?",
        body: [
          {
            type: "list",
            items: [
              "Use a heading outline extension to view the document outline and check for skipped levels or multiple h1s.",
              "Disable CSS and read the page — the structure should still make sense.",
              "Tab through the page: everything interactive should be reachable and visibly focused.",
              "Run an accessibility checker; most semantic problems surface as accessibility failures.",
              "Grep for onClick on non-interactive elements.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can a page have more than one h1?",
        answer:
          "HTML5 permits it and search engines handle it, but a single h1 gives the clearest signal about the page's topic and is simpler to reason about.",
      },
      {
        question: "Do heading keywords matter for ranking?",
        answer:
          "Headings describe section topics, which helps relevance and passage extraction. Stuffing keywords into every heading does not help and reads badly to humans.",
      },
      {
        question: "Does semantic HTML help with AI search?",
        answer:
          "Yes. Clear headings, lists and tables make content easier to extract as discrete, self-contained answers, which is exactly what AI answer systems select.",
      },
      {
        question: "Are ARIA roles a substitute for semantic elements?",
        answer:
          "No. Native elements come with behaviour and semantics; ARIA only adds semantics. Use ARIA when no native element expresses the pattern, not instead of one that does.",
      },
    ],
    references: [
      { label: "MDN — HTML elements reference", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element" },
      { label: "Google — Heading and structure guidance", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "W3C WAI — Page structure", href: "https://www.w3.org/WAI/tutorials/page-structure/" },
    ],
    internalLinks: [
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
      { label: "Content structure for AI search", href: "/blog/content-structure-for-ai-search" },
      { label: "Internal linking strategy", href: "/blog/internal-linking-strategy" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "react-accessibility-guide",
      "content-structure-for-ai-search",
      "internal-linking-strategy",
    ],
  },

  {
    slug: "xml-sitemaps-guide",
    title: "XML sitemaps: what to include, what to leave out, and why",
    seoTitle: "XML Sitemaps Guide for Large and Small Sites",
    description:
      "How search engines use sitemaps, which URLs belong in them, lastmod accuracy, sitemap index files and diagnosing coverage problems.",
    excerpt:
      "A sitemap is a list of the URLs you are confident about. Padding it with redirects and noindex pages teaches Google to ignore it.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "xml sitemap",
    secondaryKeywords: [
      "sitemap best practices",
      "sitemap index file",
      "lastmod sitemap",
      "sitemap submission",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-06-13",
    answer:
      "An XML sitemap lists the canonical URLs you want indexed, helping search engines discover pages that internal linking might not surface quickly. Include only 200-status, indexable, self-canonical URLs, keep lastmod accurate, split into a sitemap index beyond 50,000 URLs or 50MB, and reference it from robots.txt.",
    takeaways: [
      "A sitemap aids discovery; it does not guarantee indexing.",
      "Only canonical, indexable, 200-status URLs belong in it.",
      "Accurate lastmod values are used; invented ones cause the field to be distrusted.",
      "Generate it from your content source so it is never manually maintained.",
    ],
    sections: [
      {
        heading: "What should be in a sitemap?",
        body: [
          {
            type: "table",
            head: ["URL type", "Include?"],
            rows: [
              ["Canonical, indexable pages", "Yes"],
              ["Pages with noindex", "No"],
              ["Non-canonical duplicates", "No"],
              ["Redirecting URLs", "No"],
              ["404 or 410 pages", "No"],
              ["Paginated pages beyond the first", "Optional; generally yes if indexable"],
              ["Pages blocked in robots.txt", "No"],
              ["Login and account pages", "No"],
            ],
          },
          {
            type: "callout",
            title: "Cleanliness is a signal",
            text: "A sitemap where a large share of URLs redirect or 404 reduces how much a crawler trusts the file. Treat it as a curated index of your best URLs.",
          },
        ],
      },
      {
        heading: "How should it be generated?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// app/sitemap.ts — generated from the same source the pages use
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();
  return [
    { url: "https://rovqix.in", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://rovqix.in/services", lastModified: new Date(), priority: 0.9 },
    ...articles.map((a) => ({
      url: \`https://rovqix.in/blog/\${a.slug}\`,
      lastModified: new Date(a.updatedAt ?? a.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}`,
          },
          {
            type: "p",
            text: "Because it is generated from the content source, publishing an article adds it to the sitemap automatically. Manual sitemap maintenance always drifts, and drift is what makes sitemaps unreliable.",
          },
        ],
      },
      {
        heading: "What about lastmod, priority and changefreq?",
        body: [
          {
            type: "list",
            items: [
              "lastmod is used, and it should reflect a genuine content change — not the build timestamp. Setting every URL to today on each deploy makes the field meaningless.",
              "priority is largely ignored by Google. Include it or not; it will not change much.",
              "changefreq is also largely ignored. Actual observed change frequency is what matters.",
              "The real value of the file is the URL list plus honest lastmod values.",
            ],
          },
        ],
      },
      {
        heading: "How do you handle large sites?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Split at 50,000 URLs or 50MB uncompressed per file, whichever comes first.",
              "Use a sitemap index file referencing the individual sitemaps.",
              "Segment by content type — products, categories, articles — so coverage reports are diagnosable per segment.",
              "Reference the index from robots.txt and submit it in Search Console.",
              "Gzip large sitemaps; both the limit and the transfer benefit.",
            ],
          },
          {
            type: "code",
            lang: "text",
            code: `# robots.txt
User-agent: *
Allow: /

Sitemap: https://rovqix.in/sitemap.xml`,
          },
        ],
      },
      {
        heading: "How do you diagnose coverage problems?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "In Search Console, compare submitted URLs against indexed URLs per sitemap.",
              "Read the exclusion reasons: 'Discovered – currently not indexed' usually means quality or crawl budget; 'Crawled – currently not indexed' usually means quality.",
              "Check that excluded URLs are not blocked, noindexed or canonicalised elsewhere.",
              "Use segmented sitemaps to isolate which content type is underperforming.",
              "Remember that a sitemap requests discovery — indexing remains the search engine's decision.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do small sites need a sitemap?",
        answer:
          "Under a few hundred well-linked pages, discovery usually happens through internal links anyway. It costs nothing to have one, and it makes Search Console reporting clearer.",
      },
      {
        question: "How often should a sitemap update?",
        answer:
          "Automatically, whenever content changes. Generating it at build or request time from the content source means it is always current.",
      },
      {
        question: "Should I include image or video sitemaps?",
        answer:
          "For media-heavy sites where image or video search is a meaningful traffic source, yes. For a typical business site, image markup on the page is sufficient.",
      },
      {
        question: "Does submitting a sitemap speed up indexing?",
        answer:
          "It speeds up discovery, particularly for new or poorly-linked pages. It does not guarantee or accelerate the decision to index.",
      },
    ],
    references: [
      { label: "Google — Build and submit a sitemap", href: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap" },
      { label: "Sitemaps.org protocol", href: "https://www.sitemaps.org/protocol.html" },
      { label: "Next.js — sitemap.xml", href: "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap" },
    ],
    internalLinks: [
      { label: "Crawl budget and indexing", href: "/blog/crawl-budget-and-indexing" },
      { label: "Technical SEO checklist for developers", href: "/blog/technical-seo-checklist-developers" },
      { label: "The Next.js Metadata API", href: "/blog/nextjs-metadata-api-seo" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "crawl-budget-and-indexing",
      "technical-seo-checklist-developers",
      "nextjs-metadata-api-seo",
    ],
  },

  {
    slug: "redirects-and-site-migrations",
    title: "Redirects and site migrations without losing your rankings",
    seoTitle: "301 Redirects and Site Migration Checklist",
    description:
      "Redirect types compared, how to build a migration mapping, the launch-day sequence, and what to monitor in the weeks after a move.",
    excerpt:
      "Migrations lose traffic for one reason more than any other: a redirect map that was built quickly and never checked.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "301 redirects site migration",
    secondaryKeywords: [
      "redirect mapping",
      "website migration checklist",
      "301 vs 302",
      "seo migration traffic loss",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-05-30",
    answer:
      "Use 301 or 308 for permanent moves, mapping every old URL to its closest equivalent one-to-one. Avoid redirect chains, keep the mapping under version control, launch with the redirects already tested, and monitor Search Console coverage, rankings and 404s daily for the first month.",
    takeaways: [
      "Map every old URL individually; bulk-redirecting to the home page loses the signals.",
      "301 and 308 are permanent; 302 and 307 are temporary and consolidate nothing.",
      "Redirect chains dilute signals and slow crawling — always point at the final URL.",
      "Expect a temporary dip; a permanent one means the mapping was wrong.",
    ],
    sections: [
      {
        heading: "Which redirect status should you use?",
        body: [
          {
            type: "table",
            head: ["Status", "Meaning", "Method preserved", "Use for"],
            rows: [
              ["301", "Moved permanently", "May change to GET", "Permanent URL changes"],
              ["308", "Permanent redirect", "Yes", "Permanent, preserving POST"],
              ["302", "Found (temporary)", "May change to GET", "Genuinely temporary moves"],
              ["307", "Temporary redirect", "Yes", "Temporary, preserving method"],
              ["Meta refresh / JS", "Client-side", "—", "Avoid for SEO"],
            ],
          },
          {
            type: "p",
            text: "For SEO purposes 301 and 308 are treated equivalently as permanent. Use a server-side redirect; meta refresh and JavaScript redirects are slower, less reliable and weaker signals.",
          },
        ],
      },
      {
        heading: "How do you build the mapping?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Crawl the existing site to enumerate every URL that returns 200.",
              "Export the URLs with organic traffic or backlinks from analytics and Search Console.",
              "Map each old URL to its closest new equivalent — same intent, same topic.",
              "Where no equivalent exists, map to the most relevant category page, not the home page.",
              "For genuinely removed content with no successor, return 410 rather than redirecting.",
              "Store the mapping in version control and test it in staging before launch.",
            ],
          },
          {
            type: "callout",
            title: "One-to-one or nothing",
            text: "Redirecting hundreds of URLs to the home page is treated as a soft 404 and loses the accumulated signals. It is the single most common cause of a migration losing traffic permanently.",
          },
        ],
      },
      {
        heading: "What does launch day look like?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Lower DNS TTLs 48 hours in advance if the host is changing.",
              "Verify redirects on staging with an automated test over the full mapping.",
              "Launch during a low-traffic window with the team available.",
              "Immediately crawl the old URL list and confirm each returns a single 301 to a 200 page.",
              "Submit the new sitemap in Search Console; keep the old property verified.",
              "Use the Change of Address tool if the domain changed.",
              "Check that robots.txt, canonicals and analytics are correct on the new site.",
            ],
          },
        ],
      },
      {
        heading: "What do you monitor afterwards?",
        body: [
          {
            type: "list",
            items: [
              "404 errors in server logs daily for the first two weeks — real users find the URLs you missed.",
              "Search Console coverage: indexed pages on the new site should rise as the old ones fall.",
              "Rankings for your top 20 terms, tracked daily at first.",
              "Organic traffic by landing page, comparing to the equivalent old URL.",
              "Crawl stats — a spike then a decline is normal as the new URLs are processed.",
            ],
          },
          {
            type: "p",
            text: "A dip of 10 to 20% for a few weeks is normal on a well-executed migration. A drop that has not recovered after six to eight weeks means something in the mapping, the redirects or the new site's technical setup is wrong.",
          },
        ],
      },
      {
        heading: "How long should redirects stay in place?",
        body: [
          {
            type: "p",
            text: "Google has indicated that a year is generally sufficient for signal consolidation, but old links keep sending real people. Our practice is to keep permanent redirects indefinitely unless they become a maintenance burden — they cost almost nothing and removing them breaks external links you do not control.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How much traffic will a migration cost?",
        answer:
          "A well-executed migration typically sees a 10–20% dip recovering within four to eight weeks. A poorly-mapped one can lose half its traffic and never fully recover.",
      },
      {
        question: "Should I redirect or keep both URLs?",
        answer:
          "If the old URL should no longer exist, redirect. If both serve a purpose, keep them and use a canonical to indicate which should rank.",
      },
      {
        question: "Do redirect chains matter?",
        answer:
          "Yes. Each hop adds latency and risks signal loss, and crawlers give up after a few. Always point the original URL directly at the final destination.",
      },
      {
        question: "What about changing from HTTP to HTTPS?",
        answer:
          "Redirect every HTTP URL to its HTTPS equivalent with a 301, update internal links and canonicals to HTTPS, and add the HTTPS property in Search Console.",
      },
    ],
    references: [
      { label: "Google — Redirects and Google Search", href: "https://developers.google.com/search/docs/crawling-indexing/301-redirects" },
      { label: "Google — Site moves with URL changes", href: "https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" },
      { label: "MDN — HTTP redirections", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections" },
    ],
    internalLinks: [
      { label: "Canonical URLs explained", href: "/blog/canonical-urls-explained" },
      { label: "DNS explained for developers", href: "/blog/dns-and-domains-explained" },
      { label: "Technical SEO checklist for developers", href: "/blog/technical-seo-checklist-developers" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "canonical-urls-explained",
      "dns-and-domains-explained",
      "technical-seo-checklist-developers",
    ],
  },

  {
    slug: "crawl-budget-and-indexing",
    title: "Crawl budget and indexing: why your pages are not in the index",
    seoTitle: "Crawl Budget and Indexing Explained",
    description:
      "How crawling and indexing actually work, what crawl budget means in practice, the Search Console exclusion reasons, and how to fix each one.",
    excerpt:
      "'Discovered – currently not indexed' is Google saying your page is not worth the crawl. That is a content problem wearing a technical costume.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "crawl budget",
    secondaryKeywords: [
      "discovered currently not indexed",
      "google indexing issues",
      "crawl rate",
      "index coverage report",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-05-16",
    answer:
      "Crawl budget is how many URLs a search engine will fetch from your site in a given period, determined by crawl capacity (what your server can handle) and crawl demand (how much the content is worth re-fetching). It matters mainly for sites with tens of thousands of URLs; for smaller sites, non-indexing is almost always a quality or duplication issue rather than a budget one.",
    takeaways: [
      "Crawl budget is rarely the problem below about 10,000 URLs.",
      "'Discovered – currently not indexed' usually means low perceived value.",
      "Faceted navigation is the most common source of wasted crawling.",
      "A fast server increases crawl rate; a slow one causes Google to back off.",
    ],
    sections: [
      {
        heading: "How does crawling and indexing work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Discovery — a URL is found through links, sitemaps or redirects.",
              "Crawling — the URL is fetched, subject to crawl budget and robots rules.",
              "Rendering — JavaScript is executed, possibly in a later queue.",
              "Indexing — the content is analysed and stored, if judged worth storing.",
              "Serving — the page becomes eligible to appear for queries.",
            ],
          },
          {
            type: "p",
            text: "A page can fail at any stage, and Search Console reports different exclusion reasons for each. Diagnosing the stage is the whole job — the fix for a crawl problem and an indexing problem have nothing in common.",
          },
        ],
      },
      {
        heading: "What do the exclusion reasons mean?",
        body: [
          {
            type: "table",
            head: ["Status", "Meaning", "Typical fix"],
            rows: [
              ["Discovered – currently not indexed", "Known but not crawled yet", "Improve internal linking and page value"],
              ["Crawled – currently not indexed", "Fetched but judged not worth indexing", "Improve content depth and uniqueness"],
              ["Duplicate, Google chose different canonical", "Seen as a duplicate", "Consolidate or differentiate the page"],
              ["Soft 404", "Returns 200 but looks empty", "Return a real 404, or add content"],
              ["Blocked by robots.txt", "Crawling disallowed", "Fix the robots rule"],
              ["Excluded by noindex", "Explicitly excluded", "Remove the tag if unintentional"],
              ["Alternate page with proper canonical", "Working as intended", "None"],
            ],
          },
          {
            type: "callout",
            title: "The two 'not indexed' statuses are different",
            text: "'Discovered' means Google has not spent a crawl on it — a prioritisation signal. 'Crawled' means it looked and decided not to index — a quality signal. The second is the harder problem.",
          },
        ],
      },
      {
        heading: "What wastes crawl budget?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Faceted navigation generating thousands of filter combinations, each a unique URL.",
              "Internal search result pages, which should generally be noindexed and disallowed.",
              "Session ids, tracking parameters and sort orders creating duplicate URLs.",
              "Long redirect chains consuming multiple fetches per destination.",
              "Soft 404s returning 200 for empty pages.",
              "Infinite calendars and paginated archives with no end.",
              "A slow server, which causes Google to reduce crawl rate to avoid overloading it.",
            ],
          },
        ],
      },
      {
        heading: "How do you improve indexing?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Link internally from pages that already have authority — orphaned pages rarely get crawled.",
              "Make each page substantially different from your others; thin variations get consolidated.",
              "Keep the sitemap clean and current so discovery is efficient.",
              "Improve server response time; crawl rate follows capacity.",
              "Remove or consolidate low-value pages. Fewer good pages beat many thin ones.",
              "Use the URL Inspection tool to request indexing for genuinely important new pages.",
            ],
          },
          {
            type: "p",
            text: "For sites of a few hundred to a few thousand pages, the honest answer to 'how do I get indexed' is usually to make fewer, better pages and link to them properly. Technical fixes only help when there is a technical obstruction.",
          },
        ],
      },
      {
        heading: "How do you read crawl stats?",
        body: [
          {
            type: "list",
            items: [
              "Total crawl requests over time — a sustained decline warrants investigation.",
              "Average response time — rising times cause Google to crawl less.",
              "Response codes — a large share of 404s or 301s means wasted budget.",
              "By file type — heavy crawling of images or scripts may indicate poor caching headers.",
              "By purpose — refresh versus discovery tells you whether new content is being found.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many pages do I need before crawl budget matters?",
        answer:
          "Google has indicated it is generally a concern above roughly 10,000 URLs, or for sites with rapidly changing content. Below that, indexing problems are almost always about value and duplication.",
      },
      {
        question: "Does noindex save crawl budget?",
        answer:
          "Not directly — the page must still be crawled to see the tag. To prevent crawling entirely, disallow in robots.txt, but note that disallowed pages can still be indexed without content if they are linked externally.",
      },
      {
        question: "How long should indexing take?",
        answer:
          "New pages on an established, well-linked site are often indexed within days. A new site with few links can take weeks. Persistent non-indexing after a month indicates a value or duplication problem.",
      },
      {
        question: "Should I use the indexing API?",
        answer:
          "Google's Indexing API is officially limited to job postings and livestream content. For everything else, use sitemaps and URL Inspection requests.",
      },
    ],
    references: [
      { label: "Google — Large site owner's guide to crawl budget", href: "https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget" },
      { label: "Google — Page indexing report", href: "https://support.google.com/webmasters/answer/7440203" },
      { label: "Google — Crawl stats report", href: "https://support.google.com/webmasters/answer/9679690" },
    ],
    internalLinks: [
      { label: "XML sitemaps guide", href: "/blog/xml-sitemaps-guide" },
      { label: "Internal linking strategy", href: "/blog/internal-linking-strategy" },
      { label: "JavaScript SEO and rendering", href: "/blog/javascript-seo-rendering" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "xml-sitemaps-guide",
      "internal-linking-strategy",
      "javascript-seo-rendering",
    ],
  },

  {
    slug: "image-seo-best-practices",
    title: "Image SEO: filenames, alt text, structured data and image search",
    seoTitle: "Image SEO Best Practices That Still Matter",
    description:
      "How search engines understand images, what alt text should say, filename and context signals, image sitemaps, and optimising for image search traffic.",
    excerpt:
      "Search engines still cannot see your images. Everything they know comes from the filename, the alt text and the words around it.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "image seo",
    secondaryKeywords: [
      "alt text best practices",
      "image sitemap",
      "google image search optimization",
      "image filename seo",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-05-02",
    answer:
      "Image SEO means giving search engines the context they cannot extract from pixels: a descriptive filename, accurate alt text, relevant surrounding content, correct dimensions and format, and structured data where applicable. Image search can be a meaningful traffic source for product, recipe and visual content.",
    takeaways: [
      "Alt text is for describing the image, not for keyword placement.",
      "Descriptive filenames are a real, if modest, signal — and they help your own team.",
      "Surrounding text and captions provide most of the context.",
      "Fast, correctly-sized images matter more than any tag on them.",
    ],
    sections: [
      {
        heading: "How do search engines understand images?",
        body: [
          {
            type: "list",
            items: [
              "Alt text — the primary textual description.",
              "Filename — a modest signal, and free to get right.",
              "Surrounding content and the nearest heading.",
              "Captions, which are read by users and machines alike.",
              "Structured data on the page containing the image.",
              "Image sitemaps for discovery of images loaded dynamically.",
            ],
          },
          {
            type: "p",
            text: "Machine vision has improved substantially, but the textual signals remain what determines which query an image is considered relevant to. They also remain the only thing a screen reader user receives.",
          },
        ],
      },
      {
        heading: "How should alt text be written?",
        body: [
          {
            type: "code",
            lang: "html",
            code: `<!-- Poor: keyword stuffing -->
<img src="img1.jpg" alt="web development company website design agency india best">

<!-- Poor: no information -->
<img src="img1.jpg" alt="image">

<!-- Good: describes the image and its purpose -->
<img src="saas-dashboard-redesign-before-after.webp"
     alt="SaaS dashboard before and after redesign, reducing the onboarding flow from five steps to two">

<!-- Decorative: intentionally empty so screen readers skip it -->
<img src="divider.svg" alt="">`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Describe what is in the image and why it is on the page.",
              "Keep it under roughly 125 characters; use a caption for more.",
              "Skip 'image of' and 'picture of' — the role is already announced.",
              "Empty alt for decorative images, never a missing alt attribute.",
              "For a linked image with no text, the alt text describes the destination.",
              "Include keywords only where they genuinely describe the image.",
            ],
          },
        ],
      },
      {
        heading: "What about filenames and delivery?",
        body: [
          {
            type: "list",
            items: [
              "Descriptive, hyphenated, lowercase: postgresql-index-scan-diagram.webp, not IMG_4821.JPG.",
              "Serve modern formats with a fallback, at correctly-sized dimensions.",
              "Set width and height so no layout shift occurs.",
              "Lazy-load below the fold; load the LCP image eagerly with high priority.",
              "Serve from a CDN with long cache lifetimes.",
              "Keep image URLs stable — changing them loses accumulated image search signals.",
            ],
          },
          {
            type: "callout",
            title: "Speed is the biggest image SEO factor",
            text: "Images are usually the heaviest part of a page. Getting format and dimensions right improves Core Web Vitals, which affects the whole page — a larger effect than any alt text change.",
          },
        ],
      },
      {
        heading: "When is image search worth targeting?",
        body: [
          {
            type: "table",
            head: ["Sector", "Image search value"],
            rows: [
              ["Ecommerce and fashion", "High — visual discovery drives purchases"],
              ["Recipes and food", "High"],
              ["Travel and property", "High"],
              ["Design and portfolio", "Moderate to high"],
              ["B2B SaaS", "Low, except for diagrams and comparisons"],
              ["Professional services", "Low"],
            ],
          },
          {
            type: "p",
            text: "For sectors where it matters, add an image sitemap, use structured data with image properties, and make sure each image sits on a page with relevant content. For B2B, the return on deliberate image search optimisation is usually low — spend the effort on original diagrams instead, which earn links and citations.",
          },
        ],
      },
      {
        heading: "What about original diagrams?",
        body: [
          {
            type: "p",
            text: "Original diagrams and charts are the highest-value images most technical sites can produce. They earn links from people who reference them, they get cited by AI systems that describe them, and they demonstrate the expertise that generic stock photography actively undermines.",
          },
          {
            type: "list",
            items: [
              "Include your domain in the corner of diagrams so attribution survives reuse.",
              "Provide a text description in the body, not only in the alt attribute.",
              "Use SVG where possible — smaller, sharper, and the text inside is machine-readable.",
              "Give each diagram a real caption explaining what it shows.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does alt text affect rankings?",
        answer:
          "It affects image search relevance and contributes modestly to page context. Its primary purpose is accessibility, and writing it well serves both.",
      },
      {
        question: "Should every image have alt text?",
        answer:
          "Every image needs an alt attribute. Meaningful images get a description; purely decorative ones get alt=\"\" so assistive technology skips them.",
      },
      {
        question: "Do I need an image sitemap?",
        answer:
          "Only if images are a significant traffic source or are loaded in ways crawlers might miss. For most sites, images referenced in the HTML are discovered normally.",
      },
      {
        question: "Does using stock photography hurt SEO?",
        answer:
          "Not directly, but widely-reused stock images add no unique value and no differentiation. Original images and diagrams are far more likely to earn links and citations.",
      },
    ],
    references: [
      { label: "Google — Image SEO best practices", href: "https://developers.google.com/search/docs/appearance/google-images" },
      { label: "W3C WAI — Alt text decision tree", href: "https://www.w3.org/WAI/tutorials/images/decision-tree/" },
      { label: "Google — Image sitemaps", href: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps" },
    ],
    internalLinks: [
      { label: "AVIF, WebP or JPEG", href: "/blog/modern-image-formats" },
      { label: "next/image in practice", href: "/blog/nextjs-image-optimization" },
      { label: "Semantic HTML and SEO", href: "/blog/semantic-html-seo" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "modern-image-formats",
      "nextjs-image-optimization",
      "semantic-html-seo",
    ],
  },

  {
    slug: "internal-linking-strategy",
    title: "Internal linking: the topic cluster model and how to actually build one",
    seoTitle: "Internal Linking Strategy and Topic Clusters",
    description:
      "How internal links distribute authority and establish topical relationships, how to structure a cluster, anchor text guidance and finding orphaned pages.",
    excerpt:
      "Internal linking is the one ranking factor you fully control. Most sites still link almost entirely from the navigation.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "internal linking strategy",
    secondaryKeywords: [
      "topic clusters",
      "pillar page",
      "anchor text seo",
      "orphan pages",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-04-18",
    answer:
      "Internal links help search engines discover pages, understand relationships between topics, and distribute authority. The topic cluster model organises this: a pillar page covering a broad topic, linked bidirectionally with cluster pages covering specific sub-topics, all funnelling toward a relevant conversion page.",
    takeaways: [
      "Links from body content carry more weight than navigation links repeated site-wide.",
      "Bidirectional pillar and cluster links define the topic to a search engine.",
      "Descriptive anchor text tells the engine what the destination is about.",
      "Orphaned pages — reachable only from the sitemap — rarely get crawled or ranked.",
    ],
    sections: [
      {
        heading: "What does a topic cluster look like?",
        body: [
          {
            type: "code",
            lang: "text",
            code: `Pillar:   /blog/technical-seo-checklist-developers
             ↕ ↕ ↕
Cluster:  /blog/canonical-urls-explained
          /blog/xml-sitemaps-guide
          /blog/crawl-budget-and-indexing
          /blog/javascript-seo-rendering
             ↓
Service:  /services#seo`,
          },
          {
            type: "list",
            items: [
              "The pillar covers the topic broadly and links to every cluster page.",
              "Each cluster page covers one sub-topic deeply and links back to the pillar.",
              "Cluster pages link to each other where genuinely relevant, not exhaustively.",
              "The whole cluster funnels toward the relevant service or product page.",
            ],
          },
          {
            type: "p",
            text: "The structure is not a trick. It reflects how a knowledgeable person would organise the subject, which is why it works — and why clusters built without real depth in each page do not.",
          },
        ],
      },
      {
        heading: "How should anchor text be written?",
        body: [
          {
            type: "table",
            head: ["Anchor", "Verdict"],
            rows: [
              ["\"click here\"", "No signal at all"],
              ["\"this guide\"", "Weak"],
              ["\"our PostgreSQL indexing guide\"", "Good — descriptive and natural"],
              ["\"postgresql indexing\" repeated 40×", "Over-optimised; looks manipulative"],
              ["Full sentence as the link", "Dilutes the signal"],
            ],
          },
          {
            type: "list",
            items: [
              "Describe the destination in three to six words.",
              "Vary phrasing across links to the same page.",
              "Link from within body content where the reference is genuinely useful.",
              "Do not link the same phrase to different destinations across the site.",
            ],
          },
        ],
      },
      {
        heading: "Where should links come from?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Body content — the highest-value placement, because it is contextual and unique per page.",
              "Related content blocks at the end of articles, which also help readers.",
              "Breadcrumbs, which reinforce hierarchy for both users and crawlers.",
              "Navigation, which is necessary but repeated site-wide and therefore lower signal.",
              "Footer links, useful for key pages but weak as a topical signal.",
            ],
          },
          {
            type: "callout",
            title: "Link from your strongest pages",
            text: "Identify the pages with the most external links or organic traffic and add contextual links from them to the pages you want to lift. This is the highest-leverage internal linking action available to most sites.",
          },
        ],
      },
      {
        heading: "How do you find and fix orphans?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Crawl the site and compare the crawled URL set against your sitemap — the difference includes orphans.",
              "Cross-reference with analytics: pages receiving traffic but with no internal links are priority fixes.",
              "For each orphan, find two or three contextually relevant pages and add real body links.",
              "Add a related-content block generated from topic metadata so new pages are linked automatically.",
              "Re-run the check quarterly; orphans accumulate as content is added.",
            ],
          },
          {
            type: "p",
            text: "The systematic fix is architectural: derive related links from your content model — cluster, tags, explicit relations — so that publishing a page automatically links it into the graph. Manual linking always decays.",
          },
        ],
      },
      {
        heading: "How many internal links per page?",
        body: [
          {
            type: "p",
            text: "There is no fixed limit. The practical guidance is that every link should be useful to a reader at that point in the text. Three to eight contextual body links on a long article, plus breadcrumbs and a related block, is a reasonable shape. A page with sixty links spreads its signal thinly and reads like a directory.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do nofollow internal links help sculpt authority?",
        answer:
          "No. Link sculpting with nofollow has not worked for many years — the signal is discarded rather than redistributed. Use it only for genuinely untrusted user-generated links.",
      },
      {
        question: "Should every page link to every other?",
        answer:
          "No. Links should reflect genuine relevance. Exhaustive cross-linking dilutes the signal and provides no value to readers.",
      },
      {
        question: "How quickly do internal linking changes take effect?",
        answer:
          "Once the linking pages are re-crawled, typically days to a few weeks. It is one of the faster-acting SEO changes because it requires no external cooperation.",
      },
      {
        question: "Do links in navigation count?",
        answer:
          "Yes, but they are repeated on every page, which makes them a weaker topical signal than a contextual link inside relevant body content.",
      },
    ],
    references: [
      { label: "Google — Links best practices", href: "https://developers.google.com/search/docs/crawling-indexing/links-crawlable" },
      { label: "Google — SEO starter guide", href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" },
      { label: "Google — Qualify outbound links", href: "https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links" },
    ],
    internalLinks: [
      { label: "Topical authority and content clusters", href: "/blog/topical-authority-clusters" },
      { label: "Crawl budget and indexing", href: "/blog/crawl-budget-and-indexing" },
      { label: "Semantic HTML and SEO", href: "/blog/semantic-html-seo" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "topical-authority-clusters",
      "crawl-budget-and-indexing",
      "semantic-html-seo",
    ],
  },

  {
    slug: "javascript-seo-rendering",
    title: "JavaScript SEO: what crawlers see when your content is client-rendered",
    seoTitle: "JavaScript SEO: Rendering and Indexing",
    description:
      "How Googlebot renders JavaScript, the two-wave indexing model, what breaks with client-side rendering, and how to verify what crawlers actually receive.",
    excerpt:
      "Google renders JavaScript. It renders it late, inconsistently, and other crawlers often do not render it at all.",
    category: "SEO",
    cluster: "seo",
    primaryKeyword: "javascript seo",
    secondaryKeywords: [
      "client side rendering seo",
      "googlebot rendering",
      "dynamic rendering",
      "prerendering",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-04-04",
    answer:
      "Googlebot executes JavaScript, but rendering happens in a separate, later queue with no guaranteed timing. Content that only exists after client-side rendering may be indexed slowly or incompletely, and most other crawlers — including several AI systems — do not execute JavaScript at all. Server-render anything that needs to be found.",
    takeaways: [
      "Rendering is deferred; server-rendered HTML is indexed immediately.",
      "Non-Google crawlers, including many AI agents, largely do not run JavaScript.",
      "Content behind a click or a scroll event is generally not indexed.",
      "Test with the URL Inspection tool, not with your browser's view-source.",
    ],
    sections: [
      {
        heading: "How does Googlebot handle JavaScript?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Crawl — the HTML is fetched.",
              "Initial indexing — whatever is in the raw HTML is processed.",
              "Render queue — the page waits for rendering resources to be available.",
              "Render — JavaScript executes in a headless browser.",
              "Final indexing — content produced by rendering is added.",
            ],
          },
          {
            type: "p",
            text: "The queue delay is not published and varies. For a news site or an ecommerce catalogue where freshness matters, waiting for the render queue is a real disadvantage. For a stable page it matters less — but there is no upside to relying on it either.",
          },
        ],
      },
      {
        heading: "What breaks with client-side rendering?",
        body: [
          {
            type: "list",
            items: [
              "Metadata set after load: titles and descriptions injected by JavaScript may be missed or used late.",
              "Links created by click handlers rather than anchor elements — never crawled.",
              "Content revealed only on interaction: tabs, accordions loaded on demand, 'read more' fetches.",
              "Infinite scroll with no paginated URLs — only the first batch is ever seen.",
              "Anything requiring a service the renderer cannot reach, such as a geolocation or consent gate.",
              "Structured data injected client-side, which is inconsistently picked up.",
            ],
          },
          {
            type: "callout",
            title: "The AI crawler consideration",
            text: "Several AI training and answer crawlers fetch raw HTML without executing JavaScript. If your content only exists after hydration, those systems see an empty shell — which increasingly matters for visibility beyond traditional search.",
          },
        ],
      },
      {
        heading: "What should you server-render?",
        body: [
          {
            type: "table",
            head: ["Content", "Render where"],
            rows: [
              ["Main body content", "Server — always"],
              ["Title, description, canonical", "Server — always"],
              ["Structured data", "Server"],
              ["Navigation and internal links", "Server"],
              ["Product price and availability", "Server"],
              ["Personalised recommendations", "Client is fine"],
              ["Interactive widgets", "Client is fine"],
              ["Comments", "Server for the first page, client for more"],
            ],
          },
        ],
      },
      {
        heading: "How do you verify what crawlers see?",
        body: [
          {
            type: "code",
            lang: "bash",
            code: `# What the crawler receives before any JavaScript runs
curl -s https://rovqix.in/blog/example | grep -o "<h1>.*</h1>"

# Compare against the rendered DOM in the browser
# If the h1 is missing from curl output, it is client-rendered`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Use Search Console's URL Inspection and view the rendered HTML Google captured.",
              "Fetch with curl to see the raw HTML — this is what non-rendering crawlers get.",
              "Disable JavaScript in the browser and reload; whatever remains is guaranteed to be seen.",
              "Check the Rich Results Test, which also shows rendered output.",
              "Add a CI assertion that key content appears in the server response for your main templates.",
            ],
          },
        ],
      },
      {
        heading: "What if you cannot server-render?",
        body: [
          {
            type: "list",
            items: [
              "Prerendering: generate static HTML at build time for the routes that need to rank.",
              "A prerendering service that serves crawlers a rendered snapshot — acceptable when the content is identical for users.",
              "Hybrid: server-render the content that must be indexed, hydrate the interactive parts.",
              "At minimum, ensure titles, descriptions, canonical tags and primary links are in the initial HTML.",
            ],
          },
          {
            type: "p",
            text: "Serving crawlers materially different content from users is cloaking and is against guidelines. Serving the same content, rendered differently, is not — the distinction is whether the content differs.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can Google index a React SPA?",
        answer:
          "Usually yes, eventually. The delay and inconsistency are the problem, along with other crawlers that do not render at all. Server-rendering removes the uncertainty entirely.",
      },
      {
        question: "Is dynamic rendering still recommended?",
        answer:
          "Google now describes it as a workaround rather than a recommendation. Server-side rendering or static generation is the durable solution.",
      },
      {
        question: "Does hydration affect SEO?",
        answer:
          "Not for indexing, since the server HTML is already complete. It affects Core Web Vitals — particularly INP — which is a separate but real concern.",
      },
      {
        question: "How do I handle infinite scroll?",
        answer:
          "Provide real paginated URLs that render server-side, and layer infinite scroll on top for users. Crawlers follow the links; users get the smooth experience.",
      },
    ],
    references: [
      { label: "Google — JavaScript SEO basics", href: "https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" },
      { label: "Google — Fix search-related JavaScript problems", href: "https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript" },
      { label: "Google — Dynamic rendering", href: "https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering" },
    ],
    internalLinks: [
      { label: "SSR, SSG or ISR — which to use", href: "/blog/nextjs-ssr-ssg-isr-which-to-use" },
      { label: "Crawl budget and indexing", href: "/blog/crawl-budget-and-indexing" },
      { label: "Content structure for AI search", href: "/blog/content-structure-for-ai-search" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "nextjs-ssr-ssg-isr-which-to-use",
      "crawl-budget-and-indexing",
      "content-structure-for-ai-search",
    ],
  },
];
