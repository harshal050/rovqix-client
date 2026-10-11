import type { Article } from "@rovqix/shared/lib/content/types";

export const cloudArticles: Article[] = [
  {
    slug: "aws-vs-vercel-deployment",
    title: "AWS vs Vercel: where should you actually deploy a Next.js app?",
    seoTitle: "AWS vs Vercel for Next.js: An Honest Comparison",
    description:
      "Cost, control, performance and operational burden compared for hosting Next.js on Vercel versus AWS — and the point at which the answer changes.",
    excerpt:
      "Vercel sells you time. AWS sells you control. The right answer depends on which of the two your team is short of.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "aws vs vercel",
    secondaryKeywords: [
      "next.js hosting",
      "self-host next.js",
      "vercel pricing",
      "deploy next.js aws",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-28",
    answer:
      "Vercel gives you zero-configuration Next.js hosting with previews, edge caching, image optimisation and ISR that work out of the box — ideal until platform cost or control requirements dominate. AWS costs less at high traffic and gives complete control, but you own the CDN, cache invalidation, image pipeline and deployment tooling that Vercel provides for free.",
    takeaways: [
      "Vercel's value is the hours you do not spend on infrastructure, not the servers.",
      "Self-hosting Next.js is fully supported; the work is in the surrounding platform.",
      "Costs cross over when bandwidth and function invocations dominate your bill.",
      "Preview deployments per pull request are worth more to most teams than the price difference.",
    ],
    sections: [
      {
        heading: "What do you get on each?",
        body: [
          {
            type: "table",
            head: ["Capability", "Vercel", "AWS (self-managed)"],
            rows: [
              ["Setup time", "Minutes", "Days to weeks"],
              ["Preview deployments", "Automatic per PR", "Build it yourself"],
              ["ISR / on-demand revalidation", "Native", "Needs shared cache + invalidation"],
              ["Image optimisation", "Built in", "Lambda/CloudFront or a third party"],
              ["Edge network", "Included", "CloudFront, configured by you"],
              ["Cost at low traffic", "Free to modest", "Low, plus your time"],
              ["Cost at high traffic", "Grows with bandwidth", "Usually lower per GB"],
              ["Control and compliance", "Platform-defined", "Complete"],
            ],
          },
        ],
      },
      {
        heading: "When is Vercel clearly right?",
        body: [
          {
            type: "list",
            items: [
              "Small teams with no dedicated infrastructure engineer.",
              "Marketing sites, content sites and SaaS front ends with normal traffic profiles.",
              "Teams who benefit daily from preview deployments in review.",
              "Projects where time to launch matters more than per-gigabyte cost.",
              "Anyone using the newest Next.js features, which land there first and best-supported.",
            ],
          },
          {
            type: "p",
            text: "For most of the client sites we build, the platform bill is a rounding error next to the engineering time saved. That calculation changes with scale, not with principle.",
          },
        ],
      },
      {
        heading: "When does AWS win?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "High bandwidth — video, large media, or millions of monthly visitors where per-GB pricing dominates.",
              "The rest of your stack is already on AWS and network egress between platforms is a real cost and latency factor.",
              "Compliance requires specific regions, data residency, or contractual control over the environment.",
              "You need long-running processes, WebSockets at scale, GPUs, or workloads the platform does not accommodate.",
              "You have a platform team already operating AWS well.",
            ],
          },
          {
            type: "callout",
            title: "Count the hidden work",
            text: "Self-hosting Next.js means owning: CloudFront behaviours and cache keys, ISR cache sharing across instances, image optimisation, build pipelines, preview environments, log aggregation and rollbacks. Each is solvable; together they are a quarter of engineering time.",
          },
        ],
      },
      {
        heading: "What does self-hosting actually involve?",
        body: [
          {
            type: "list",
            items: [
              "Build with output: \"standalone\" and package into a container image.",
              "Run on ECS Fargate, App Runner, or Kubernetes behind an application load balancer.",
              "Put CloudFront in front with cache behaviours matching Next.js conventions for static assets and RSC payloads.",
              "Provide a shared cache handler so ISR works across multiple instances rather than per-instance.",
              "Wire on-demand revalidation to CloudFront invalidations or a shared cache.",
              "Replace image optimisation with a Lambda function or an image CDN.",
              "Build preview environments in CI if reviewers rely on them.",
            ],
          },
          {
            type: "p",
            text: "None of this is exotic; Next.js documents self-hosting well and the community tooling is mature. Just cost it honestly as a project, not a configuration change.",
          },
        ],
      },
      {
        heading: "Is there a middle ground?",
        body: [
          {
            type: "p",
            text: "Yes, and it is where a lot of teams land. Keep the front end on Vercel for the developer experience, and run your APIs, workers, and databases on AWS where per-unit costs are lower and control matters. Watch cross-provider latency and egress, and keep the boundary at a small number of chatty-free calls.",
          },
          {
            type: "p",
            text: "Platforms like Railway, Render, Fly.io and Cloudflare sit between the two, offering container hosting with far less setup than raw AWS. For many mid-size projects they are the better answer than either extreme.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "At what traffic level does Vercel get expensive?",
        answer:
          "It depends far more on bandwidth and function execution than on page views. Model your own numbers against current pricing — teams serving large media hit it much earlier than content sites.",
      },
      {
        question: "Does Next.js work fully outside Vercel?",
        answer:
          "Yes. Self-hosting is officially supported and documented. Some capabilities need infrastructure you configure — shared ISR cache, image optimisation, edge routing — but nothing is locked away.",
      },
      {
        question: "What about Cloudflare?",
        answer:
          "Strong on bandwidth pricing and global edge, with improving Next.js support. Evaluate your specific feature usage carefully, since runtime differences affect what works.",
      },
      {
        question: "How do I avoid lock-in?",
        answer:
          "Containerise, keep configuration in environment variables, avoid platform-specific APIs in application code, and keep infrastructure defined as code. That keeps the migration a project rather than a rewrite.",
      },
    ],
    references: [
      { label: "Next.js — Self-hosting", href: "https://nextjs.org/docs/app/getting-started/deploying" },
      { label: "AWS — Amazon CloudFront documentation", href: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html" },
      { label: "Vercel — Pricing", href: "https://vercel.com/pricing" },
    ],
    internalLinks: [
      { label: "Choosing a hosting provider", href: "/blog/choosing-a-hosting-provider" },
      { label: "Cloud cost optimisation", href: "/blog/cloud-cost-optimization" },
      { label: "Next.js deployment checklist", href: "/blog/nextjs-deployment-checklist" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "choosing-a-hosting-provider",
      "cloud-cost-optimization",
      "nextjs-deployment-checklist",
    ],
  },

  {
    slug: "choosing-a-hosting-provider",
    title: "Choosing a hosting provider: a checklist that survives year two",
    seoTitle: "How to Choose a Web Hosting Provider",
    description:
      "The criteria that matter when picking hosting — regions, pricing model, support, exit cost, compliance and operational fit — beyond the launch-day comparison.",
    excerpt:
      "Every host looks fine on day one. The differences show up when traffic triples, a region goes down, or you need to leave.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "choosing a hosting provider",
    secondaryKeywords: [
      "web hosting comparison",
      "cloud provider selection",
      "hosting requirements",
      "vendor lock-in",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-14",
    answer:
      "Choose hosting on six criteria: proximity to your users, the workloads you actually run, the pricing model's behaviour at your growth curve, support quality when something breaks, compliance and data residency, and the cost of leaving. Feature checklists matter far less than these.",
    takeaways: [
      "Pick regions by where your users and your database are, not where headquarters is.",
      "Understand which pricing dimension grows fastest for your workload.",
      "Test support before you need it — response time during an outage is a product feature.",
      "Design for portability from the start; it costs little upfront and a lot retrofitted.",
    ],
    sections: [
      {
        heading: "What should you evaluate?",
        body: [
          {
            type: "table",
            head: ["Criterion", "Question to ask"],
            rows: [
              ["Regions", "Is there a region near the majority of users and near the database?"],
              ["Workload fit", "Does it run long processes, WebSockets, cron, background workers?"],
              ["Pricing model", "Which dimension grows fastest — bandwidth, compute, requests, storage?"],
              ["Support", "What is the response time on the plan you will actually buy?"],
              ["Compliance", "Data residency, certifications, DPA availability"],
              ["Exit cost", "Egress charges, proprietary services, migration effort"],
              ["Ecosystem", "Managed database, object storage, queues in the same network"],
            ],
          },
        ],
      },
      {
        heading: "Why do regions matter more than people expect?",
        answer:
          "Because every database round trip pays the latency between your application and your data, and that number is fixed by physics.",
        body: [
          {
            type: "p",
            text: "An application in Mumbai talking to a database in Virginia adds roughly 200ms per round trip. A page doing six sequential queries is 1.2 seconds of pure network time before any work happens. Co-locating application and database in the same region is the single largest latency decision most teams make, and it is often made accidentally.",
          },
          {
            type: "list",
            items: [
              "Put compute in the same region as the primary database.",
              "Serve static assets from a CDN edge close to users — that part does not need the origin.",
              "For a global audience, consider read replicas near users with writes to the primary region.",
              "Check where your third-party APIs live; a chatty integration across continents is a hidden tax.",
            ],
          },
        ],
      },
      {
        heading: "How do pricing models differ?",
        body: [
          {
            type: "list",
            items: [
              "Per-request or per-invocation: cheap while small, surprising at volume with chatty clients.",
              "Per-GB bandwidth: the usual driver of large bills for media-heavy sites.",
              "Fixed instance pricing: predictable, wasteful at low utilisation, cheap at high.",
              "Consumption-based databases: excellent for spiky workloads, expensive for constant load.",
              "Free tiers: useful for previews and side projects, never a production plan.",
            ],
          },
          {
            type: "callout",
            title: "Model 12 months, not today",
            text: "Take your current metrics, multiply by your growth assumption, and price it under each candidate. A provider that is cheapest at 10,000 visits is frequently the most expensive at a million.",
          },
        ],
      },
      {
        heading: "What about support and reliability?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Read the SLA — what is guaranteed, what is excluded, and what the credit is worth in practice.",
              "Check the public status page history, not the uptime marketing number.",
              "Open a pre-sales support ticket and time the response. That is your incident experience.",
              "Confirm whether support is included in your tier or an additional cost.",
              "Look for a community — a widely-used provider has answers to your problem already written.",
            ],
          },
        ],
      },
      {
        heading: "How do you avoid painful lock-in?",
        body: [
          {
            type: "list",
            items: [
              "Containerise the application so it can run anywhere that runs containers.",
              "Keep all configuration in environment variables.",
              "Use standard interfaces — S3-compatible storage, PostgreSQL, Redis — rather than proprietary equivalents where a standard exists.",
              "Define infrastructure as code, even if it targets one provider today.",
              "Keep data exportable and test an export periodically.",
              "Accept lock-in deliberately where the managed service is genuinely worth it, and write down that decision.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is shared hosting ever acceptable?",
        answer:
          "For a small static or WordPress site with low traffic, it can be fine. For anything running Node.js, background jobs or needing deploy automation, it will fight you constantly.",
      },
      {
        question: "Should I use the same provider for everything?",
        answer:
          "There are real benefits — one bill, one network, low internal latency, one IAM model. Split only when a specific service elsewhere is clearly better for a specific need.",
      },
      {
        question: "How important is a CDN?",
        answer:
          "Essential for any site with a geographically spread audience. Most providers include one; if yours does not, add Cloudflare or a similar service in front.",
      },
      {
        question: "What about hosting in India specifically?",
        answer:
          "All major providers have Indian regions (Mumbai, Hyderabad, Delhi). For an India-focused audience, hosting in-country cuts latency substantially and simplifies any data residency requirements.",
      },
    ],
    references: [
      { label: "AWS — Global infrastructure regions", href: "https://aws.amazon.com/about-aws/global-infrastructure/regions_az/" },
      { label: "Cloudflare — What is a CDN?", href: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" },
      { label: "Google Cloud — Choosing regions and zones", href: "https://cloud.google.com/compute/docs/regions-zones" },
    ],
    internalLinks: [
      { label: "AWS vs Vercel", href: "/blog/aws-vs-vercel-deployment" },
      { label: "CDNs explained", href: "/blog/cdn-explained" },
      { label: "Cloud cost optimisation", href: "/blog/cloud-cost-optimization" },
      { label: "Our pricing", href: "/pricing" },
    ],
    related: ["aws-vs-vercel-deployment", "cdn-explained", "cloud-cost-optimization"],
  },

  {
    slug: "cdn-explained",
    title: "CDNs explained: cache keys, headers and why your CDN is not caching",
    seoTitle: "CDN Explained: Caching Headers and Cache Keys",
    description:
      "How a CDN decides what to cache, what Cache-Control and Vary actually do, stale-while-revalidate, purging strategies and the causes of a low hit ratio.",
    excerpt:
      "Putting a CDN in front of a site does nothing by itself. The cache headers you send decide whether it helps or just adds a hop.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "cdn caching",
    secondaryKeywords: [
      "cache-control header",
      "stale-while-revalidate",
      "cdn cache key",
      "cache hit ratio",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-30",
    answer:
      "A CDN caches responses at edge locations close to users, keyed by URL plus whatever your Vary header and configuration include. What gets cached and for how long is controlled by Cache-Control; a low hit ratio is almost always caused by missing cache headers, cookies in the cache key, or an over-broad Vary.",
    takeaways: [
      "No Cache-Control header usually means no caching — the default is conservative.",
      "Cookies and Vary headers fragment the cache key and destroy hit ratios.",
      "immutable plus a content hash in the filename is the correct pattern for static assets.",
      "stale-while-revalidate serves instantly while refreshing in the background.",
    ],
    sections: [
      {
        heading: "How does a CDN decide what to cache?",
        body: [
          {
            type: "p",
            text: "It builds a cache key — normally the host plus the path plus the query string, extended by any headers you tell it to vary on — and looks for a stored response. On a miss it fetches from the origin, stores the response according to its caching headers, and serves it. Subsequent requests with the same key are served from the edge.",
          },
          {
            type: "list",
            items: [
              "Anything in the cache key that varies per user destroys sharing. A cookie in the key means a cache entry per visitor.",
              "Query parameters count: ?utm_source=x creates a separate entry unless you configure them to be ignored.",
              "Vary: User-Agent is close to per-device caching — almost always a mistake.",
              "Vary: Accept-Encoding is normal and fine.",
            ],
          },
        ],
      },
      {
        heading: "What should Cache-Control say?",
        answer:
          "Different things for static assets, HTML and personalised responses — one blanket policy cannot be right for all three.",
        body: [
          {
            type: "table",
            head: ["Content", "Header"],
            rows: [
              ["Hashed static assets", "public, max-age=31536000, immutable"],
              ["HTML that can be slightly stale", "public, max-age=0, s-maxage=60, stale-while-revalidate=300"],
              ["Personalised HTML", "private, no-store"],
              ["API responses (public)", "public, max-age=30, stale-while-revalidate=60"],
              ["API responses (per-user)", "private, no-store"],
            ],
          },
          {
            type: "p",
            text: "s-maxage applies to shared caches like a CDN, while max-age applies to the browser. Setting max-age=0 with s-maxage=60 means the browser revalidates but the CDN serves cached content for a minute — usually exactly what you want for HTML.",
          },
        ],
      },
      {
        heading: "What does stale-while-revalidate do?",
        body: [
          {
            type: "p",
            text: "It lets the cache serve a stale response immediately while fetching a fresh one in the background. The user never waits for the origin, and the next visitor gets the updated version. It is the closest thing to a free performance win in HTTP caching.",
          },
          {
            type: "code",
            lang: "http",
            code: `Cache-Control: public, s-maxage=60, stale-while-revalidate=600

# 0–60s      : fresh, served from edge
# 60–660s    : stale served instantly, refreshed in background
# after 660s : request waits for the origin`,
          },
          {
            type: "callout",
            title: "Pair it with stale-if-error",
            text: "stale-if-error lets the CDN keep serving cached content when the origin returns errors. It turns a backend outage into a slightly stale site rather than a down one.",
          },
        ],
      },
      {
        heading: "Why is my hit ratio low?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "No Cache-Control header at all — the most common cause by a wide margin.",
              "Set-Cookie on responses that should be cacheable; most CDNs refuse to cache those by default.",
              "Query strings from analytics parameters creating unique keys — configure them to be stripped.",
              "Vary on a header with high variability, such as User-Agent or Accept-Language without normalisation.",
              "Short TTLs on content that changes hourly at most.",
              "Purging on every deploy for content that did not change.",
            ],
          },
          {
            type: "p",
            text: "Measure the hit ratio per content type, not overall. A 95% ratio driven by images can hide 0% on HTML, which is where the latency actually matters.",
          },
        ],
      },
      {
        heading: "How should purging work?",
        body: [
          {
            type: "list",
            items: [
              "Prefer content hashing over purging for static assets — a new filename needs no invalidation.",
              "Use tag or surrogate-key based purging so one content change clears exactly the affected pages.",
              "Avoid purging everything on deploy; it causes an origin stampede at the worst moment.",
              "Purge as part of your publish flow, not as a manual step someone remembers.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I cache HTML on a CDN?",
        answer:
          "Yes, for pages that are the same for everyone. Use a short s-maxage with stale-while-revalidate, and mark personalised pages private so they are never shared.",
      },
      {
        question: "What is the difference between no-cache and no-store?",
        answer:
          "no-cache allows storage but requires revalidation before use. no-store forbids storing the response at all — use it for genuinely sensitive content.",
      },
      {
        question: "Does a CDN help a site with users in one city?",
        answer:
          "Less than for a global audience, but it still absorbs traffic spikes, terminates TLS closer to users and shields the origin. Usually still worth it.",
      },
      {
        question: "How do I cache an API?",
        answer:
          "Cache public GET endpoints with a short TTL and use ETags for conditional requests. Never cache authenticated responses at a shared cache without extreme care around the cache key.",
      },
    ],
    references: [
      { label: "MDN — Cache-Control", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control" },
      { label: "web.dev — HTTP caching", href: "https://web.dev/articles/http-cache" },
      { label: "RFC 5861 — stale-while-revalidate", href: "https://www.rfc-editor.org/rfc/rfc5861.html" },
    ],
    internalLinks: [
      { label: "Next.js caching explained", href: "/blog/nextjs-caching-explained" },
      { label: "Improving Largest Contentful Paint", href: "/blog/improve-largest-contentful-paint" },
      { label: "Choosing a hosting provider", href: "/blog/choosing-a-hosting-provider" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "nextjs-caching-explained",
      "improve-largest-contentful-paint",
      "choosing-a-hosting-provider",
    ],
  },

  {
    slug: "serverless-vs-servers",
    title: "Serverless or servers: cold starts, cost curves and connection limits",
    seoTitle: "Serverless vs Servers: How to Choose",
    description:
      "What serverless is genuinely good at, where always-on servers win, and the three practical constraints — cold starts, execution limits and database connections.",
    excerpt:
      "Serverless is excellent for spiky, stateless, short work. The trouble starts when your workload is none of those things.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "serverless vs servers",
    secondaryKeywords: [
      "cold start latency",
      "lambda vs container",
      "serverless cost",
      "serverless database connections",
    ],
    authorId: "harshal",
    publishedAt: "2026-06-16",
    answer:
      "Serverless functions scale to zero and bill per invocation, which suits spiky, stateless, short-lived work. Always-on servers or containers are better for sustained traffic, long-running processes, WebSockets and workloads with heavy database connection needs. Most production systems end up using both.",
    takeaways: [
      "Serverless wins on spiky and low-volume workloads; servers win on sustained load.",
      "Cold starts matter most for user-facing requests on infrequently-used endpoints.",
      "Every concurrent function invocation wants its own database connection — plan for a pooler.",
      "Cost crossover happens earlier than most teams expect at steady traffic.",
    ],
    sections: [
      {
        heading: "What is each genuinely good at?",
        body: [
          {
            type: "table",
            head: ["Workload", "Better fit", "Why"],
            rows: [
              ["Spiky, unpredictable traffic", "Serverless", "Scales instantly, pays nothing at idle"],
              ["Steady high traffic", "Servers", "Cheaper per request at sustained load"],
              ["Scheduled jobs", "Serverless", "No idle cost between runs"],
              ["WebSockets / long connections", "Servers", "Functions are request-scoped"],
              ["Long processing (> 15 min)", "Servers / batch", "Execution time limits"],
              ["Latency-critical endpoints", "Servers", "No cold start variance"],
              ["Event processing", "Serverless", "Native integration with queues and events"],
            ],
          },
        ],
      },
      {
        heading: "How bad are cold starts really?",
        answer:
          "Tens to hundreds of milliseconds for a small runtime, and worse for large bundles or VPC-attached functions — but only on the first request to a new instance.",
        body: [
          {
            type: "list",
            items: [
              "Bundle size dominates: shipping the whole SDK instead of the one client you use is the usual cause.",
              "Language runtime matters — JavaScript and Python start faster than JVM-based runtimes.",
              "Attaching to a VPC historically added significant latency; modern networking has reduced but not eliminated it.",
              "Provisioned concurrency removes cold starts at the cost of paying for idle capacity — at which point compare with a server.",
              "For a high-traffic endpoint, instances stay warm and cold starts are a rounding error.",
            ],
          },
        ],
      },
      {
        heading: "What about database connections?",
        body: [
          {
            type: "p",
            text: "This is the constraint that surprises teams in production. Each concurrent function invocation opens its own database connection, and a traffic spike that scales to 500 concurrent functions tries to open 500 connections to a database configured for 100.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Use a connection pooler — RDS Proxy, PgBouncer, or your provider's equivalent.",
              "Or use an HTTP-based database driver that avoids persistent connections entirely.",
              "Keep connections outside the handler so warm invocations reuse them.",
              "Set a maximum concurrency limit on the function as a backstop.",
            ],
          },
          {
            type: "callout",
            title: "The failure is non-obvious",
            text: "Connection exhaustion presents as intermittent timeouts under load, not as a clear error. It is worth designing for before launch rather than diagnosing during a traffic spike.",
          },
        ],
      },
      {
        heading: "Where does the cost curve cross?",
        body: [
          {
            type: "p",
            text: "Serverless pricing is roughly linear with usage; server pricing is a step function you pay whether or not it is busy. The crossover is where sustained utilisation makes a reserved instance cheaper than paying per request.",
          },
          {
            type: "list",
            items: [
              "Low traffic or long idle periods: serverless is dramatically cheaper, often effectively free.",
              "Steady, predictable traffic through the day: a small always-on instance usually wins.",
              "Very spiky patterns — a daily peak an order of magnitude above baseline: serverless absorbs it without over-provisioning.",
              "Model your own numbers. Rules of thumb are unreliable because pricing dimensions differ per provider.",
            ],
          },
        ],
      },
      {
        heading: "What does a sensible hybrid look like?",
        body: [
          {
            type: "p",
            text: "A typical production architecture we build: the main API on always-on containers behind a load balancer, image processing and report generation on serverless functions triggered by a queue, scheduled jobs on serverless cron, and a WebSocket service on containers. Each workload runs where its shape fits.",
          },
          {
            type: "p",
            text: "The unifying discipline is that everything is stateless, configured by environment variables and observable through the same pipeline — which is what makes moving a workload between the two a deployment change rather than a rewrite.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are serverless functions slower?",
        answer:
          "Warm invocations perform comparably to a container. Cold starts add latency on the first request to a new instance, which matters for infrequently-called user-facing endpoints and rarely for high-traffic ones.",
      },
      {
        question: "Can I run a whole web app serverless?",
        answer:
          "Yes — many Next.js deployments do exactly that. Watch execution limits, connection handling and response streaming, and confirm your framework features work in the target runtime.",
      },
      {
        question: "What about edge functions?",
        answer:
          "They run closer to users with very fast cold starts, but in a restricted runtime without full Node APIs and usually with tighter CPU limits. Excellent for routing, auth checks and personalisation; not for heavy work.",
      },
      {
        question: "Is serverless harder to debug?",
        answer:
          "Somewhat — no persistent process to attach to and distributed execution by default. Good structured logging, tracing and local emulation close most of the gap.",
      },
    ],
    references: [
      { label: "AWS Lambda — Best practices", href: "https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html" },
      { label: "AWS — RDS Proxy", href: "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html" },
      { label: "Google Cloud — Cloud Run", href: "https://cloud.google.com/run/docs" },
    ],
    internalLinks: [
      { label: "PostgreSQL connection pooling", href: "/blog/postgresql-connection-pooling" },
      { label: "Cloud cost optimisation", href: "/blog/cloud-cost-optimization" },
      { label: "Server architecture basics", href: "/blog/server-architecture-basics" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "postgresql-connection-pooling",
      "cloud-cost-optimization",
      "server-architecture-basics",
    ],
  },

  {
    slug: "cloud-cost-optimization",
    title: "Cloud cost optimisation: where the money actually goes",
    seoTitle: "Cloud Cost Optimization: Practical Wins",
    description:
      "The usual suspects in a cloud bill — idle compute, egress, over-provisioned databases, logs and storage tiers — and the changes that reduce them without risk.",
    excerpt:
      "Most cloud bills have 30% of obvious waste in them. Finding it takes an afternoon; the hard part is having the conversation about what to turn off.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "cloud cost optimization",
    secondaryKeywords: [
      "reduce aws bill",
      "cloud waste",
      "data egress cost",
      "rightsizing instances",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-02",
    answer:
      "Cloud spend is usually dominated by a handful of items: over-provisioned always-on compute, data transfer out, oversized managed databases, log and metric retention, and forgotten resources. Start by attributing cost with tags, then rightsize, delete the unused, move storage to appropriate tiers, and commit to reserved capacity only for genuinely steady workloads.",
    takeaways: [
      "Tag everything by environment and service or you cannot attribute a single rupee.",
      "Egress is the line item teams consistently underestimate.",
      "Rightsizing beats reserved pricing — do not commit to the wrong instance for three years.",
      "Non-production environments running 24/7 are often 20–30% of a bill.",
    ],
    sections: [
      {
        heading: "Where does the money usually go?",
        body: [
          {
            type: "table",
            head: ["Category", "Typical share", "Common waste"],
            rows: [
              ["Compute", "40–60%", "Over-provisioned, idle at night, dev environments always on"],
              ["Data transfer", "10–25%", "Cross-region chatter, un-cached assets, cross-AZ traffic"],
              ["Managed databases", "10–25%", "Sized for a peak that happens twice a year"],
              ["Storage", "5–15%", "Old snapshots, no lifecycle rules, wrong tier"],
              ["Observability", "5–15%", "Debug logs retained for a year, high-cardinality metrics"],
            ],
          },
          {
            type: "p",
            text: "Before optimising anything, tag resources by environment, service and owner, and enable cost allocation. Optimising an unattributed bill is guesswork.",
          },
        ],
      },
      {
        heading: "What are the quick wins?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Shut down non-production environments outside working hours — often a 60–70% saving on those resources.",
              "Delete unattached volumes, old snapshots, idle load balancers and unused static IPs.",
              "Rightsize instances against actual utilisation over 30 days, not against the launch guess.",
              "Add lifecycle rules moving old objects to infrequent-access or archive tiers.",
              "Cut log retention on debug-level logs and sample high-volume traces.",
              "Put a CDN in front of anything serving bytes repeatedly from the origin.",
            ],
          },
          {
            type: "callout",
            title: "Set a budget alert first",
            text: "Before any optimisation work, configure a budget alert at a threshold that would concern you. The most expensive cloud incidents are the ones nobody noticed for six weeks.",
          },
        ],
      },
      {
        heading: "Why is egress so expensive?",
        body: [
          {
            type: "p",
            text: "Providers charge little to receive data and meaningfully more to send it out. Bills grow from patterns nobody costed: images served from the origin instead of a CDN, a service in one region querying a database in another, backups replicated across regions, or chatty microservices crossing availability zones.",
          },
          {
            type: "list",
            items: [
              "Serve static assets and media through a CDN — cheaper per GB and faster.",
              "Keep services and their databases in the same region and, where possible, the same zone.",
              "Compress API responses; egress is billed on bytes, not requests.",
              "Use private endpoints for internal traffic rather than routing over the public internet.",
              "Check backup and replication traffic — it is invisible until it appears on the invoice.",
            ],
          },
        ],
      },
      {
        heading: "When should you commit to reserved capacity?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Only after rightsizing. Committing to an oversized instance locks in the waste.",
              "Only for genuinely steady baseline load — commit to the floor, run the peak on demand.",
              "Prefer flexible commitment models over instance-specific ones where available.",
              "Start with one-year terms unless the workload is provably stable.",
              "Review coverage quarterly; unused commitments are worse than no commitment.",
            ],
          },
        ],
      },
      {
        heading: "How do you keep it from creeping back?",
        body: [
          {
            type: "list",
            items: [
              "Monthly cost review with the actual engineering team, not only finance.",
              "Anomaly detection alerting on unexpected daily increases.",
              "Cost estimates in infrastructure pull requests so the impact is visible at review time.",
              "Mandatory tagging enforced by policy — untagged resources get flagged or blocked.",
              "An owner for every environment, responsible for whether it still needs to exist.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is the cheapest option always right?",
        answer:
          "No. Engineering time is usually more expensive than infrastructure. A managed service costing more but saving days of work per month is often the cheaper decision overall.",
      },
      {
        question: "Should I use spot instances?",
        answer:
          "For interruptible workloads — batch processing, CI runners, stateless workers with graceful shutdown — yes, the savings are large. Not for anything that must not be interrupted.",
      },
      {
        question: "How much can a typical team save?",
        answer:
          "In our audits, 20–40% without changing architecture, mostly from rightsizing, non-production schedules, storage lifecycle rules and log retention.",
      },
      {
        question: "What is FinOps?",
        answer:
          "The practice of making cloud cost a shared engineering concern with visibility, accountability and regular review — rather than a bill finance receives after the fact.",
      },
    ],
    references: [
      { label: "AWS — Cost optimization pillar", href: "https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html" },
      { label: "FinOps Foundation", href: "https://www.finops.org/introduction/what-is-finops/" },
      { label: "Google Cloud — Cost optimization", href: "https://cloud.google.com/architecture/framework/cost-optimization" },
    ],
    internalLinks: [
      { label: "Serverless vs servers", href: "/blog/serverless-vs-servers" },
      { label: "CDNs explained", href: "/blog/cdn-explained" },
      { label: "Choosing a hosting provider", href: "/blog/choosing-a-hosting-provider" },
      { label: "Our pricing", href: "/pricing" },
    ],
    related: ["serverless-vs-servers", "cdn-explained", "choosing-a-hosting-provider"],
  },

  {
    slug: "dns-and-domains-explained",
    title: "DNS explained for developers: records, TTLs and launch-day mistakes",
    seoTitle: "DNS Explained: Records, TTL and Migrations",
    description:
      "A, AAAA, CNAME, ALIAS, MX, TXT and CAA records explained, how TTL affects propagation, and the DNS mistakes that cause launch-day outages.",
    excerpt:
      "DNS is the layer everyone touches twice a year and nobody remembers. It is also the fastest way to take a site offline for 24 hours.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "dns explained",
    secondaryKeywords: [
      "dns record types",
      "dns ttl propagation",
      "cname apex domain",
      "dns migration",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-19",
    answer:
      "DNS translates domain names into addresses using record types: A and AAAA point to IP addresses, CNAME aliases one name to another, ALIAS or ANAME solves the apex-domain CNAME restriction, MX routes email, and TXT carries verification and email authentication records. TTL controls how long resolvers cache an answer, which is why you lower it before a migration.",
    takeaways: [
      "You cannot put a CNAME on an apex domain — use ALIAS, ANAME or a provider flattening feature.",
      "Lower TTLs to 300 seconds at least 48 hours before a migration.",
      "Changing nameservers replaces every record — copy them all first.",
      "A missing CAA record lets any certificate authority issue for your domain.",
    ],
    sections: [
      {
        heading: "What do the record types do?",
        body: [
          {
            type: "table",
            head: ["Record", "Purpose", "Example value"],
            rows: [
              ["A", "Name to IPv4 address", "203.0.113.10"],
              ["AAAA", "Name to IPv6 address", "2001:db8::1"],
              ["CNAME", "Alias to another name", "cname.vercel-dns.com"],
              ["ALIAS / ANAME", "CNAME-like behaviour at the apex", "Provider-specific"],
              ["MX", "Mail servers", "10 mx1.example-mail.com"],
              ["TXT", "Verification, SPF, DKIM, DMARC", "v=spf1 include:… -all"],
              ["NS", "Delegates the zone", "ns1.provider.com"],
              ["CAA", "Which CAs may issue certificates", "0 issue \"letsencrypt.org\""],
            ],
          },
        ],
      },
      {
        heading: "Why can't you CNAME an apex domain?",
        answer:
          "Because the DNS specification forbids a CNAME coexisting with other records at the same name, and the apex must carry NS and SOA records.",
        body: [
          {
            type: "p",
            text: "This is why example.com behaves differently from www.example.com. Providers solve it with ALIAS or ANAME records, or CNAME flattening — all of which resolve the target and serve A records at the apex. If your DNS host does not offer one of these, the workaround is a redirect from the apex to www.",
          },
          {
            type: "callout",
            title: "Pick a canonical host and stick to it",
            text: "Decide apex or www, redirect the other with a 308, and use the chosen one consistently in canonical tags, your sitemap and Search Console. Serving both without a redirect splits your SEO signals.",
          },
        ],
      },
      {
        heading: "How does TTL affect a migration?",
        body: [
          {
            type: "p",
            text: "TTL is how long resolvers cache a record. A TTL of 86400 means some users continue reaching the old server for a full day after you change it. Nothing you do at the registrar shortens an answer already cached elsewhere.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "48 hours before the migration, lower the TTL on the records you will change to 300 seconds.",
              "Wait for the old TTL to fully expire so resolvers pick up the short value.",
              "Make the change; most resolvers follow within five minutes.",
              "Verify from several networks and public resolvers before declaring it done.",
              "Raise the TTL back to 3600 or higher once stable.",
              "Keep the old server running for at least 24 hours — some resolvers ignore TTLs.",
            ],
          },
        ],
      },
      {
        heading: "What are the classic launch-day mistakes?",
        body: [
          {
            type: "list",
            items: [
              "Changing nameservers without copying every existing record — email stops, because MX and TXT records did not come along.",
              "Forgetting SPF, DKIM and DMARC after a mail provider change, sending everything to spam.",
              "Not lowering TTLs beforehand, then waiting a day for the change to take effect.",
              "Certificate issued for www but not the apex, or vice versa.",
              "No CAA record, so any certificate authority in the world can issue for your domain.",
              "Registrar auto-renew disabled — domains expire on the day nobody is watching.",
            ],
          },
        ],
      },
      {
        heading: "What should you check after a change?",
        body: [
          {
            type: "code",
            lang: "bash",
            code: `dig example.com A +short
dig www.example.com CNAME +short
dig example.com MX +short
dig example.com TXT +short
dig @8.8.8.8 example.com A +short      # a public resolver's view
curl -I https://example.com            # status, redirects, headers`,
          },
          {
            type: "list",
            items: [
              "Both apex and www resolve and redirect the way you intended.",
              "HTTPS works on every hostname, with a valid certificate covering all of them.",
              "Email still delivers — send a test in both directions.",
              "Search Console and analytics point at the canonical host.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does DNS propagation take?",
        answer:
          "It is not propagation — it is cache expiry. With a 300 second TTL set well in advance, most users see the change within minutes; stragglers with non-compliant resolvers can take a day.",
      },
      {
        question: "Should I use my registrar's DNS?",
        answer:
          "A dedicated DNS provider usually offers better performance, an API, ALIAS records and DNSSEC. Separating registrar and DNS also limits the impact of a single account compromise.",
      },
      {
        question: "What is DNSSEC and do I need it?",
        answer:
          "It cryptographically signs DNS responses to prevent spoofing. Worth enabling for anything handling money or sensitive data; be careful, as a misconfiguration makes your domain unresolvable.",
      },
      {
        question: "How do I set up email authentication?",
        answer:
          "SPF lists who may send for your domain, DKIM signs messages, and DMARC tells receivers what to do when checks fail. All three are TXT records, and all three are required for reliable delivery today.",
      },
    ],
    references: [
      { label: "Cloudflare — DNS records explained", href: "https://www.cloudflare.com/learning/dns/dns-records/" },
      { label: "MDN — What is a domain name?", href: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name" },
      { label: "DMARC.org — Overview", href: "https://dmarc.org/overview/" },
    ],
    internalLinks: [
      { label: "HTTPS and TLS certificates", href: "/blog/https-tls-certificates" },
      { label: "301 redirects and site migrations", href: "/blog/redirects-and-site-migrations" },
      { label: "Next.js deployment checklist", href: "/blog/nextjs-deployment-checklist" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "https-tls-certificates",
      "redirects-and-site-migrations",
      "nextjs-deployment-checklist",
    ],
  },

  {
    slug: "https-tls-certificates",
    title: "HTTPS and TLS certificates: what to configure and what to forget about",
    seoTitle: "HTTPS and TLS Certificates: A Practical Guide",
    description:
      "How TLS certificates work, automated issuance and renewal, HSTS, mixed content, and the certificate problems that take sites down.",
    excerpt:
      "Certificates are free and automatic now. The remaining failures are almost all renewal automation that silently stopped working.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "https tls certificates",
    secondaryKeywords: [
      "lets encrypt renewal",
      "hsts header",
      "mixed content",
      "ssl certificate expired",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-05",
    answer:
      "HTTPS encrypts traffic using a TLS certificate that proves domain ownership. Certificates are issued free and automatically by ACME providers such as Let's Encrypt, typically valid for 90 days and renewed by automation. The practical work is ensuring renewal actually runs, redirecting HTTP to HTTPS, enabling HSTS, and eliminating mixed content.",
    takeaways: [
      "Certificate expiry outages are automation failures, not certificate failures — monitor renewal.",
      "Redirect all HTTP to HTTPS and then enable HSTS so browsers never try HTTP again.",
      "One insecure subresource downgrades the whole page's security state.",
      "Certificate lifetimes are shortening industry-wide; manual renewal is no longer viable.",
    ],
    sections: [
      {
        heading: "How does a TLS certificate work?",
        body: [
          {
            type: "p",
            text: "A certificate binds your domain name to a public key and is signed by a certificate authority the browser trusts. During the handshake, the server proves it holds the matching private key, the two sides agree on session keys, and everything after that is encrypted. TLS 1.3 completes this in a single round trip, and resumed sessions can skip even that.",
          },
          {
            type: "table",
            head: ["Type", "Validates", "Use"],
            rows: [
              ["DV (domain validated)", "Control of the domain", "Almost everything; free and automatic"],
              ["OV (organisation validated)", "Domain plus company identity", "Corporate policy requirements"],
              ["EV (extended validation)", "Extensive company verification", "Rare; browsers no longer show special UI"],
              ["Wildcard", "*.example.com", "Many subdomains under one certificate"],
            ],
          },
          {
            type: "p",
            text: "For the overwhelming majority of sites, a free DV certificate provides identical encryption to a paid one. Paid certificates buy warranties and organisational validation, not stronger cryptography.",
          },
        ],
      },
      {
        heading: "What should you configure?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Redirect every HTTP request to HTTPS with a 308 or 301.",
              "Enable HSTS so browsers refuse to connect over HTTP after the first visit.",
              "Support TLS 1.2 and 1.3 only; disable older protocols entirely.",
              "Enable OCSP stapling where your server supports it to speed up the handshake.",
              "Add a CAA record restricting which authorities may issue for your domain.",
              "Serve the full certificate chain — a missing intermediate breaks some clients while working in your browser.",
            ],
          },
          {
            type: "code",
            lang: "http",
            code: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`,
            caption: "Start with a short max-age, confirm everything works over HTTPS, then raise it.",
          },
          {
            type: "callout",
            title: "HSTS is hard to undo",
            text: "Once a browser has seen the header it will refuse plain HTTP for the whole max-age period. Add includeSubDomains only when you are certain every subdomain has a valid certificate, and treat preload submission as permanent.",
          },
        ],
      },
      {
        heading: "What is mixed content?",
        body: [
          {
            type: "p",
            text: "An HTTPS page loading an HTTP subresource. Browsers block active mixed content — scripts, stylesheets, iframes — outright, and flag or upgrade passive content like images. The result is broken functionality that only appears in production.",
          },
          {
            type: "list",
            items: [
              "Use protocol-relative or absolute HTTPS URLs everywhere; never hardcode http://.",
              "Check third-party embeds, analytics snippets and older CMS content for HTTP URLs.",
              "Add upgrade-insecure-requests to your Content-Security-Policy as a safety net.",
              "Use the CSP report-only mode to find offenders before enforcing.",
            ],
          },
        ],
      },
      {
        heading: "Why do certificates still cause outages?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Renewal automation broke months ago and nobody noticed until expiry day.",
              "The ACME HTTP challenge is blocked by a redirect rule added later.",
              "A new subdomain was added but not included in the certificate.",
              "An internal service uses a certificate nobody automated because 'it is internal'.",
              "The renewal succeeded but the service was never reloaded to pick up the new file.",
            ],
          },
          {
            type: "p",
            text: "Monitor certificate expiry externally, alert at 21 days remaining, and test the renewal path — a dry run in staging is worth more than trusting that a cron job from two years ago still works.",
          },
        ],
      },
      {
        heading: "What is changing?",
        body: [
          {
            type: "p",
            text: "Maximum certificate lifetimes are being reduced substantially across the industry, moving towards renewal measured in weeks rather than months. The practical implication is unambiguous: any process that requires a human to renew a certificate needs to be replaced with automation now, not when it next expires.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to pay for an SSL certificate?",
        answer:
          "No. Free DV certificates from ACME providers give identical encryption. Pay only if you specifically need organisation validation or a vendor warranty.",
      },
      {
        question: "Does HTTPS affect SEO?",
        answer:
          "Yes — it is a confirmed, if lightweight, ranking signal, and browsers mark HTTP pages as not secure, which affects trust and conversion far more than the ranking factor does.",
      },
      {
        question: "What is a wildcard certificate?",
        answer:
          "One covering all subdomains at a single level. Convenient, but a compromise exposes every subdomain, and it requires DNS-based validation to issue.",
      },
      {
        question: "Does HTTPS slow down my site?",
        answer:
          "Negligibly, and it is a prerequisite for HTTP/2 and HTTP/3, which are meaningfully faster. Net effect on a modern stack is positive.",
      },
    ],
    references: [
      { label: "Let's Encrypt — How it works", href: "https://letsencrypt.org/how-it-works/" },
      { label: "MDN — Strict-Transport-Security", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security" },
      { label: "Mozilla — SSL configuration generator", href: "https://ssl-config.mozilla.org/" },
    ],
    internalLinks: [
      { label: "Security headers that matter", href: "/blog/security-headers-guide" },
      { label: "DNS explained for developers", href: "/blog/dns-and-domains-explained" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "security-headers-guide",
      "dns-and-domains-explained",
      "web-application-security-checklist",
    ],
  },

  {
    slug: "object-storage-and-file-uploads",
    title: "File uploads done properly: presigned URLs, validation and delivery",
    seoTitle: "File Uploads: Presigned URLs and Object Storage",
    description:
      "Why uploads should bypass your server, how presigned URLs work, validating untrusted files, and serving user content safely and cheaply.",
    excerpt:
      "Routing uploads through your application server is the default and the wrong one. Presigned URLs remove the bottleneck and most of the risk.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "file uploads presigned url",
    secondaryKeywords: [
      "s3 presigned upload",
      "object storage",
      "file upload validation",
      "serving user content",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-21",
    answer:
      "Uploads should go directly from the browser to object storage using a short-lived presigned URL generated by your server, with the content type and size constrained in the signature. Your server records metadata, validates the file asynchronously, and serves it back through a CDN from a bucket that is never publicly writable.",
    takeaways: [
      "Presigned uploads keep large files off your application servers entirely.",
      "Constrain content type and maximum size in the signature, not just in the UI.",
      "Never trust the client-supplied filename or MIME type.",
      "Serve user content from a separate domain to contain the impact of a malicious file.",
    ],
    sections: [
      {
        heading: "Why not upload through your server?",
        body: [
          {
            type: "list",
            items: [
              "Large uploads occupy a request handler for the duration, reducing concurrency.",
              "Memory pressure from buffering, or complexity from streaming to disk.",
              "Platform request size and duration limits — serverless functions in particular.",
              "Double bandwidth cost: in to your server, out to storage.",
              "Slow clients hold connections open for minutes at a time.",
            ],
          },
          {
            type: "p",
            text: "A presigned URL moves the transfer to a service built for it. Your server does two small things: authorise the upload and record what happened.",
          },
        ],
      },
      {
        heading: "How does a presigned upload work?",
        answer:
          "Your server signs a time-limited, constrained URL; the browser PUTs the file directly to storage; your server is notified and records the metadata.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Server: authorise and sign
const key = \`uploads/\${userId}/\${crypto.randomUUID()}.jpg\`;
const url = await getSignedUrl(s3, new PutObjectCommand({
  Bucket: "user-content",
  Key: key,
  ContentType: "image/jpeg",
  ContentLength: size,          // bind the exact size
}), { expiresIn: 300 });

// Client: upload directly, then tell the server
await fetch(url, { method: "PUT", body: file, headers: { "Content-Type": file.type } });
await fetch("/api/uploads/complete", { method: "POST", body: JSON.stringify({ key }) });`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Check authorisation and quota before signing — the signature is the permission.",
              "Generate the key yourself; never use the client's filename in the path.",
              "Set a short expiry, typically 5 to 15 minutes.",
              "Constrain content type and size in the signed request so a client cannot substitute a 5GB video.",
              "Confirm the object exists and matches expectations before marking it usable.",
            ],
          },
        ],
      },
      {
        heading: "How do you validate untrusted files?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Verify the actual file type by inspecting magic bytes, not the extension or the declared MIME type.",
              "Enforce a size limit at the storage layer, not only in JavaScript.",
              "Re-encode images through a processing library; this strips embedded payloads and EXIF metadata.",
              "Scan for malware if users can download each other's files.",
              "Reject SVG unless you sanitise it — SVG can contain executable script.",
              "Store the original in a quarantine prefix and move it only after validation passes.",
            ],
          },
          {
            type: "callout",
            title: "The classic SVG mistake",
            text: "An SVG uploaded as a profile picture and served from your main domain can execute JavaScript in your origin. Either convert SVGs to raster on upload, or serve all user content from a separate domain.",
          },
        ],
      },
      {
        heading: "How should user content be served?",
        body: [
          {
            type: "list",
            items: [
              "From a CDN in front of the bucket — never directly from the origin bucket.",
              "From a separate domain (usercontent.example.com) so a malicious file cannot touch your session cookies.",
              "With Content-Disposition: attachment for anything not meant to render inline.",
              "With a correct, server-determined Content-Type, not the client's claim.",
              "Behind signed URLs if the content is private, with expiry appropriate to the use case.",
              "With long cache lifetimes and immutable keys, since object keys never change.",
            ],
          },
        ],
      },
      {
        heading: "What about large files and resumability?",
        body: [
          {
            type: "p",
            text: "Above roughly 100MB, use multipart uploads: the client uploads chunks in parallel and can resume after a failure without restarting. Most storage SDKs handle the chunking; you sign the part URLs.",
          },
          {
            type: "list",
            items: [
              "Set a lifecycle rule to abort incomplete multipart uploads after a few days — they are billed storage otherwise.",
              "Show real progress from the upload events; a fake progress bar on a 2GB file destroys trust.",
              "Process large media asynchronously via a queue and notify the user on completion.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use presigned URLs with providers other than AWS?",
        answer:
          "Yes — Cloudflare R2, Google Cloud Storage, Backblaze B2 and most S3-compatible services support equivalent signing, often with the same SDK.",
      },
      {
        question: "How do I limit upload size with a presigned PUT?",
        answer:
          "Bind ContentLength in the signature, or use a presigned POST policy with a content-length-range condition. Client-side checks alone are trivially bypassed.",
      },
      {
        question: "Should uploaded files be public or private?",
        answer:
          "Default to private with signed delivery URLs. Make content public only when it genuinely is, and never leave the bucket itself publicly writable under any circumstances.",
      },
      {
        question: "How do I generate thumbnails?",
        answer:
          "Trigger a background job or a storage event on upload, generate derivatives, and store them under predictable keys. Doing it in the request path makes uploads slow and fragile.",
      },
    ],
    references: [
      { label: "AWS — Presigned URLs", href: "https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-presigned-url.html" },
      { label: "OWASP — File upload cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/File_Upload_Cheat_Sheet.html" },
      { label: "Cloudflare R2 documentation", href: "https://developers.cloudflare.com/r2/" },
    ],
    internalLinks: [
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
      { label: "Image SEO best practices", href: "/blog/image-seo-best-practices" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "web-application-security-checklist",
      "background-jobs-and-queues",
      "cdn-explained",
    ],
  },

  {
    slug: "multi-region-architecture",
    title: "Multi-region architecture: what it actually solves and what it costs",
    seoTitle: "Multi-Region Architecture: Is It Worth It?",
    description:
      "Read replicas, active-passive failover and active-active compared, plus data consistency, failover testing and the cheaper alternatives to full multi-region.",
    excerpt:
      "Most teams asking for multi-region want lower latency for distant users. That is usually a CDN problem, not an architecture problem.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "multi-region architecture",
    secondaryKeywords: [
      "active active vs active passive",
      "read replicas latency",
      "disaster recovery region",
      "global application architecture",
    ],
    authorId: "harshal",
    publishedAt: "2026-04-07",
    answer:
      "Multi-region architecture serves two distinct goals: lower latency for geographically distributed users, and survival of a regional outage. Latency is often solved more cheaply with a CDN and edge caching; true multi-region resilience requires data replication, failover automation and regular testing, and adds substantial complexity to writes.",
    takeaways: [
      "Separate the two goals — latency and availability need different solutions.",
      "A CDN plus read replicas solves most latency complaints at a fraction of the cost.",
      "Active-active writes mean conflict resolution; be sure you need it.",
      "An untested failover is a hypothesis, not a disaster recovery plan.",
    ],
    sections: [
      {
        heading: "What problem are you actually solving?",
        body: [
          {
            type: "table",
            head: ["Goal", "Cheapest sufficient solution"],
            rows: [
              ["Static assets slow globally", "CDN — solved"],
              ["Pages slow globally", "Edge caching of HTML, static generation"],
              ["Reads slow globally", "Regional read replicas"],
              ["Writes slow globally", "Multi-region writes — genuinely hard"],
              ["Survive a region outage", "Active-passive with tested failover"],
              ["Survive with zero downtime", "Active-active — most expensive"],
            ],
          },
          {
            type: "p",
            text: "Work down that list and stop at the first row that solves your actual complaint. In most audits, the requirement stated as 'we need multi-region' is satisfied by the first two rows.",
          },
        ],
      },
      {
        heading: "What are the architecture patterns?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Single region plus CDN: one write region, cached content globally. Simplest and adequate for most products.",
              "Read replicas: writes to the primary region, reads served locally. Watch replication lag and read-your-own-writes.",
              "Active-passive: a warm standby region with replicated data, promoted on failure. Reasonable RTO, manageable complexity.",
              "Active-active: all regions accept writes. Requires conflict resolution and careful data partitioning.",
            ],
          },
          {
            type: "callout",
            title: "The read-your-own-writes problem",
            text: "A user in Singapore writes to the primary in Virginia, then reads from the Singapore replica before replication catches up — and their change appears to have vanished. Route reads to the primary for a short window after a write, or read from the primary for that session.",
          },
        ],
      },
      {
        heading: "What does failover actually require?",
        body: [
          {
            type: "list",
            items: [
              "Health checks that detect a regional failure without false positives from a transient blip.",
              "A traffic routing mechanism — DNS with low TTLs, or a global load balancer — that can shift users.",
              "Database promotion, automated or with a documented and rehearsed manual procedure.",
              "Session and cache state available in the target region.",
              "A decision on data loss: how much replication lag is acceptable at cutover, and who authorises it.",
              "A rehearsal at least twice a year, in production, on purpose.",
            ],
          },
          {
            type: "p",
            text: "The failover that has never been tested is the one that fails. Schedule a game day, shift traffic deliberately, and measure how long it took and what broke.",
          },
        ],
      },
      {
        heading: "What does it cost?",
        body: [
          {
            type: "list",
            items: [
              "Roughly double the infrastructure for the standby, even when idle.",
              "Cross-region data transfer charges, continuously, for replication.",
              "Higher write latency if writes must be acknowledged in multiple regions.",
              "Substantially more operational complexity: deployments, migrations and secrets across regions.",
              "Engineering time for the failover tooling and the drills to keep it working.",
            ],
          },
        ],
      },
      {
        heading: "When is it genuinely justified?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A contractual availability commitment that a single region cannot meet.",
              "Regulatory data residency requiring processing within specific jurisdictions.",
              "Revenue per hour of downtime materially exceeding the ongoing cost.",
              "A genuinely global user base where write latency, not read latency, is the complaint.",
              "You have the operational maturity to run and test it — otherwise the added complexity reduces reliability rather than improving it.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is multi-AZ the same as multi-region?",
        answer:
          "No. Multiple availability zones within one region protect against a data centre failure and are usually cheap and easy — enable that first. Multi-region protects against an entire region failing and is far more complex.",
      },
      {
        question: "Can I run a database in multiple regions?",
        answer:
          "Read replicas, easily. Multi-region writes require either a distributed SQL database designed for it or careful partitioning by region, with real trade-offs in latency and consistency.",
      },
      {
        question: "Do edge functions solve this?",
        answer:
          "They reduce latency for logic that does not need your primary data. If the request must read your database, the round trip to the data region still dominates.",
      },
      {
        question: "How often should failover be tested?",
        answer:
          "At least twice a year, in production, as a planned exercise. Anything less and configuration drift will have quietly broken it since the last test.",
      },
    ],
    references: [
      { label: "AWS — Multi-Region fundamentals", href: "https://docs.aws.amazon.com/whitepapers/latest/aws-multi-region-fundamentals/aws-multi-region-fundamentals.html" },
      { label: "Google Cloud — Disaster recovery planning", href: "https://cloud.google.com/architecture/dr-scenarios-planning-guide" },
      { label: "AWS — Disaster recovery strategies", href: "https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html" },
    ],
    internalLinks: [
      { label: "Database backup and recovery", href: "/blog/database-backup-and-recovery" },
      { label: "CDNs explained", href: "/blog/cdn-explained" },
      { label: "Server architecture basics", href: "/blog/server-architecture-basics" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: ["database-backup-and-recovery", "cdn-explained", "server-architecture-basics"],
  },

  {
    slug: "secrets-management-guide",
    title: "Secrets management: where credentials should live and how they should rotate",
    seoTitle: "Secrets Management for Development Teams",
    description:
      "Environment variables versus secret managers, per-environment separation, rotation, detecting committed secrets and handling a leak.",
    excerpt:
      "The question is not whether a secret will leak. It is whether you will know, and how long it takes to make the leaked one useless.",
    category: "Cloud",
    cluster: "cloud",
    primaryKeyword: "secrets management",
    secondaryKeywords: [
      "environment variables secrets",
      "secret rotation",
      "committed api key",
      "vault secret manager",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-03-24",
    answer:
      "Secrets belong in a dedicated secret manager, injected into the runtime environment at deploy time, separated per environment, and rotated on a schedule. Never commit them, never bake them into container images, and run automated scanning so a committed credential is detected in minutes rather than discovered in an incident.",
    takeaways: [
      "Different credentials per environment, always — a staging leak must not touch production.",
      "Rotation is only real if it is automated and rehearsed.",
      "Anything prefixed NEXT_PUBLIC_ or equivalent is public. Audit that list.",
      "A committed secret is compromised even after the commit is removed.",
    ],
    sections: [
      {
        heading: "Where should secrets actually live?",
        body: [
          {
            type: "table",
            head: ["Location", "Verdict"],
            rows: [
              ["Committed .env file", "Never"],
              ["Local .env, gitignored", "Fine for development only"],
              ["CI/CD secret store", "Good for deploy-time credentials"],
              ["Platform environment variables", "Good for most applications"],
              ["Dedicated secret manager", "Best — versioning, audit log, rotation, fine-grained access"],
              ["Container image layers", "Never — persists in image history"],
            ],
          },
          {
            type: "p",
            text: "The practical target for most teams: a secret manager as the source of truth, synced into the platform's environment variables at deploy time, with the application reading plain environment variables and knowing nothing about the manager.",
          },
        ],
      },
      {
        heading: "How should environments be separated?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Distinct credentials per environment for every service — database, payment provider, email, storage.",
              "Test-mode keys in development and staging, wherever the provider offers them.",
              "Production secrets accessible only to the production deploy role and a small break-glass group.",
              "No developer holding a long-lived production credential on a laptop.",
              "Access to production secrets logged and reviewed.",
            ],
          },
          {
            type: "callout",
            title: "Audit your public prefix",
            text: "Anything with a NEXT_PUBLIC_ or VITE_ prefix is compiled into the browser bundle. Run a grep before every launch and confirm every entry on that list is intended to be public.",
          },
        ],
      },
      {
        heading: "How do you handle rotation?",
        body: [
          {
            type: "p",
            text: "Rotation limits how long a leaked credential is useful. It only works if the application can tolerate two valid secrets during the changeover — otherwise rotation means downtime, and a rotation that means downtime never happens.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Support two active credentials simultaneously wherever the provider allows it.",
              "Issue the new secret, deploy, verify, then revoke the old one.",
              "Automate on a schedule: 30 to 90 days for most credentials, immediately on any suspicion.",
              "Prefer short-lived, automatically-issued credentials — workload identity federation instead of static keys.",
              "Rotate immediately when someone with access leaves the team.",
            ],
          },
        ],
      },
      {
        heading: "How do you detect leaks?",
        body: [
          {
            type: "list",
            items: [
              "Pre-commit hooks scanning staged changes for credential patterns.",
              "Repository-level secret scanning with push protection enabled.",
              "CI scanning of the full history, not just the diff.",
              "Provider-side alerts — many services notify you when a key appears publicly.",
              "Periodic review of which credentials exist and whether each is still needed.",
            ],
          },
        ],
      },
      {
        heading: "What do you do when a secret leaks?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Revoke first. Rotating before revoking leaves the old credential valid.",
              "Issue a replacement and deploy.",
              "Review access logs for use of the compromised credential — this determines whether you have an incident or a near miss.",
              "Remove it from history if feasible, but treat it as compromised regardless. Assume it was scraped within minutes.",
              "Notify anyone whose data may have been exposed, per your obligations.",
              "Write the postmortem: how it got committed, why scanning did not catch it, what changes.",
            ],
          },
          {
            type: "p",
            text: "Removing a secret from git history does not un-leak it. Public repositories are scraped continuously by automated tooling, often within seconds of a push.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are environment variables secure enough?",
        answer:
          "They are acceptable when injected at runtime from a secure store. The weaknesses are no versioning, no audit trail, no rotation support, and exposure through crash dumps or debug endpoints that print the environment.",
      },
      {
        question: "How do developers get secrets locally?",
        answer:
          "Through a CLI that pulls development-tier secrets from the manager into a local session. Sharing .env files over chat is how credentials end up in places nobody can inventory.",
      },
      {
        question: "Should I encrypt secrets in the repository?",
        answer:
          "Tools like SOPS or git-crypt make it workable, and are a reasonable step up from plaintext. A managed secret service is still better for rotation and access control.",
      },
      {
        question: "How often should secrets rotate?",
        answer:
          "Every 30 to 90 days for static credentials, immediately on suspicion or personnel change. Better still, use short-lived credentials so rotation is continuous and automatic.",
      },
    ],
    references: [
      { label: "OWASP — Secrets management cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html" },
      { label: "GitHub — Secret scanning", href: "https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning" },
      { label: "HashiCorp Vault documentation", href: "https://developer.hashicorp.com/vault/docs" },
    ],
    internalLinks: [
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Container security basics", href: "/blog/container-security-basics" },
      { label: "Infrastructure as code basics", href: "/blog/infrastructure-as-code-basics" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "web-application-security-checklist",
      "container-security-basics",
      "infrastructure-as-code-basics",
    ],
  },
];
