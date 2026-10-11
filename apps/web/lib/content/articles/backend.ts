import type { Article } from "@rovqix/shared/lib/content/types";

export const backendArticles: Article[] = [
  {
    slug: "rest-api-design-principles",
    title: "REST API design: the decisions that make an API pleasant to use",
    seoTitle: "REST API Design Principles That Hold Up",
    description:
      "Resource naming, status codes, pagination, filtering, errors and idempotency — practical REST API design rules with the reasoning behind each.",
    excerpt:
      "An API is a product with developers as users. Most of what makes one good is consistency, not cleverness.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "rest api design",
    secondaryKeywords: [
      "api design best practices",
      "http status codes",
      "api pagination",
      "idempotency key",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-24",
    answer:
      "Good REST design means resource-oriented URLs with plural nouns, HTTP verbs used for their defined semantics, honest status codes, a single consistent error shape, cursor pagination for large collections, and idempotency keys on operations that create things. Consistency across endpoints matters more than any individual rule.",
    takeaways: [
      "URLs name resources; verbs live in the HTTP method, not the path.",
      "Return the status code that is true — do not wrap errors in a 200.",
      "Cursor pagination is correct for changing data; offset pagination silently skips rows.",
      "Idempotency keys turn a network retry from a duplicate charge into a no-op.",
    ],
    sections: [
      {
        heading: "How should resources and URLs be named?",
        body: [
          {
            type: "table",
            head: ["Intent", "Good", "Avoid"],
            rows: [
              ["List orders", "GET /orders", "GET /getAllOrders"],
              ["One order", "GET /orders/{id}", "GET /order?id=123"],
              ["Nested resource", "GET /orders/{id}/items", "GET /orderItems?order=123"],
              ["Action that is not CRUD", "POST /orders/{id}/refunds", "POST /refundOrder"],
              ["Filter", "GET /orders?status=open", "GET /openOrders"],
            ],
          },
          {
            type: "p",
            text: "Plural nouns, lowercase, hyphens between words, no file extensions, no verbs. When an operation genuinely is not CRUD — refunding, publishing, cancelling — model it as a sub-resource you create rather than inventing a verb path.",
          },
        ],
      },
      {
        heading: "Which status codes should you actually use?",
        answer:
          "A small, honest set: 200, 201, 204, 400, 401, 403, 404, 409, 422, 429 and 500.",
        body: [
          {
            type: "list",
            items: [
              "201 Created with a Location header for successful creation, not 200.",
              "204 No Content for a successful delete with nothing to return.",
              "401 means 'we do not know who you are'; 403 means 'we do, and you may not'.",
              "409 Conflict for state conflicts such as a duplicate email or a version mismatch.",
              "422 for semantically invalid input when the request itself was well-formed.",
              "429 with a Retry-After header when rate limited — clients can only back off correctly if you tell them how long.",
            ],
          },
          {
            type: "callout",
            title: "Never return 200 with an error body",
            text: "It breaks every HTTP-aware layer between you and the client: retries, caches, monitoring, load balancer health logic. If it failed, say so in the status line.",
          },
        ],
      },
      {
        heading: "What should an error response look like?",
        body: [
          {
            type: "code",
            lang: "json",
            code: `{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation failed",
  "status": 422,
  "detail": "One or more fields are invalid.",
  "instance": "/orders",
  "errors": [
    { "field": "email", "code": "invalid_format", "message": "Enter a valid email address." }
  ],
  "requestId": "req_01HQ8Z3F2K"
}`,
            caption: "RFC 9457 problem details, plus a machine-readable field list and a request id.",
          },
          {
            type: "p",
            text: "One shape for every error in the API. Clients write one handler; support can trace any report by request id; and machine-readable codes let the UI decide what to do without string-matching human text.",
          },
        ],
      },
      {
        heading: "How should you paginate and filter?",
        body: [
          {
            type: "p",
            text: "Offset pagination is simple and wrong for data that changes. If a row is inserted while a client is paging, page two silently repeats or skips records. Cursor pagination — an opaque token pointing at a stable sort position — avoids that and performs better at depth because the database does not count past rows.",
          },
          {
            type: "code",
            lang: "http",
            code: `GET /orders?status=open&limit=50&cursor=eyJpZCI6IjAxSFE4WiJ9

200 OK
{
  "data": [ ... ],
  "page": { "nextCursor": "eyJpZCI6IjAxSFE5QSJ9", "hasMore": true }
}`,
          },
          {
            type: "list",
            items: [
              "Cap limit server-side and document the maximum — an uncapped limit is a denial-of-service vector.",
              "Keep filter parameters flat and predictable: ?status=open&created_after=2026-01-01.",
              "Support sparse fieldsets on heavy resources so clients can ask for less.",
              "Return total counts only when cheap; on large tables an exact count is an expensive query.",
            ],
          },
        ],
      },
      {
        heading: "What makes an API safe to retry?",
        body: [
          {
            type: "p",
            text: "GET, PUT and DELETE are idempotent by definition. POST is not, which is why every payments API supports an Idempotency-Key header: the server stores the result against the key and returns the same response if the request is repeated.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Accept an Idempotency-Key header on all creating POST endpoints.",
              "Store key, request fingerprint and response for at least 24 hours.",
              "Return the stored response on replay; return 409 if the same key arrives with a different body.",
              "Document how long keys are retained so clients know their retry window.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I version my API in the URL or a header?",
        answer:
          "URL versioning (/v1/orders) is the pragmatic default: visible in logs, easy to route, trivially testable in a browser. Header versioning is cleaner in theory and harder in practice.",
      },
      {
        question: "Do I need HATEOAS to be RESTful?",
        answer:
          "Strictly yes, practically almost nobody implements it and clients almost never consume it. A well-documented, consistent resource API delivers the value; hypermedia links are optional.",
      },
      {
        question: "PUT or PATCH for updates?",
        answer:
          "PUT replaces the whole resource; PATCH applies a partial change. Most product APIs want PATCH. If you support PUT, be honest that omitted fields are cleared.",
      },
      {
        question: "How do I document an API without it going stale?",
        answer:
          "Generate the specification from the code or generate the code from the specification — never maintain both by hand. An OpenAPI document that is not derived from reality is worse than no document.",
      },
    ],
    references: [
      { label: "RFC 9457 — Problem Details for HTTP APIs", href: "https://www.rfc-editor.org/rfc/rfc9457.html" },
      { label: "MDN — HTTP response status codes", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status" },
      { label: "OpenAPI Specification", href: "https://spec.openapis.org/oas/latest.html" },
    ],
    internalLinks: [
      { label: "API versioning strategies", href: "/blog/api-versioning-strategies" },
      { label: "Rate limiting strategies for APIs", href: "/blog/api-rate-limiting-strategies" },
      { label: "GraphQL vs REST", href: "/blog/graphql-vs-rest" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: ["api-versioning-strategies", "api-rate-limiting-strategies", "graphql-vs-rest"],
  },

  {
    slug: "nodejs-event-loop-explained",
    title: "The Node.js event loop, explained through the bugs it causes",
    seoTitle: "Node.js Event Loop Explained (With Real Bugs)",
    description:
      "How the Node.js event loop actually schedules work, why one synchronous function can freeze an entire server, and how to find and fix blocking code.",
    excerpt:
      "Node is single-threaded for your code. Every millisecond you spend in a synchronous loop is a millisecond nobody else's request is being served.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "node.js event loop",
    secondaryKeywords: [
      "event loop phases",
      "blocking the event loop",
      "worker threads node",
      "node.js performance",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-10",
    answer:
      "The Node.js event loop runs your JavaScript on a single thread, processing callbacks in phases — timers, pending callbacks, poll, check, close — while I/O happens on a thread pool or the OS. Any synchronous work you do blocks every other request, which is why CPU-heavy operations belong in worker threads or a separate service.",
    takeaways: [
      "One thread runs all your JavaScript — a 500ms synchronous loop delays every concurrent request by up to 500ms.",
      "async does not mean parallel; it means yielding between I/O operations.",
      "JSON.parse on a large payload, bcrypt with high cost, and sync crypto are common blockers.",
      "Measure event loop lag in production; it is the earliest signal of a saturated server.",
    ],
    sections: [
      {
        heading: "What does the event loop actually do?",
        body: [
          {
            type: "p",
            text: "It repeatedly asks: is there work ready to run? The loop cycles through phases — timers (setTimeout callbacks whose time has come), pending I/O callbacks, poll (waiting for and processing new I/O), check (setImmediate), and close handlers. Between each callback it drains the microtask queue, where resolved promises live.",
          },
          {
            type: "p",
            text: "Your JavaScript runs on one thread throughout. Concurrency comes from the fact that waiting for a database or a file happens elsewhere — the OS or libuv's thread pool — and hands a callback back when it is done.",
          },
          {
            type: "table",
            head: ["Runs on", "Examples"],
            rows: [
              ["Main thread (blocking)", "Your code, JSON parsing, template rendering, regex, loops"],
              ["libuv thread pool", "File system, DNS lookups, some crypto and compression"],
              ["Kernel / OS", "Network sockets, timers"],
            ],
          },
        ],
      },
      {
        heading: "What does blocking look like in production?",
        answer:
          "Response times for every endpoint degrade at once, in proportion to the blocking work, even for endpoints that do nothing.",
        body: [
          {
            type: "p",
            text: "A report we debugged for a client: p50 latency was 40ms and p99 was 3.2 seconds across every route. The cause was one endpoint synchronously generating a PDF. While it ran, all other requests queued behind it — including the health check, which caused the orchestrator to restart healthy pods.",
          },
          {
            type: "list",
            items: [
              "Large JSON.parse or JSON.stringify — parsing a 10MB payload blocks for tens of milliseconds.",
              "Synchronous crypto: bcrypt with a high cost factor, or any *Sync method.",
              "Catastrophic backtracking in a regular expression run against user input.",
              "Image processing, PDF generation, CSV export in-process.",
              "Tight loops over large arrays: sorting 500,000 records to serve one request.",
            ],
          },
        ],
      },
      {
        heading: "How do you detect it?",
        body: [
          {
            type: "code",
            lang: "js",
            code: `import { monitorEventLoopDelay } from "node:perf_hooks";

const histogram = monitorEventLoopDelay({ resolution: 20 });
histogram.enable();

setInterval(() => {
  const p99ms = histogram.percentile(99) / 1e6;
  if (p99ms > 100) logger.warn({ p99ms }, "event loop lag high");
  histogram.reset();
}, 30_000);`,
            caption: "Event loop lag is the single most useful Node health metric. Alert on it.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Export event loop lag to your metrics system and alert above ~100ms at p99.",
              "Profile with --cpu-prof or a continuous profiler to find the offending function.",
              "Load test with concurrency, not sequential requests — blocking is invisible at concurrency 1.",
              "Watch for correlation: if all endpoints slow together, suspect the loop rather than a database.",
            ],
          },
        ],
      },
      {
        heading: "How do you fix blocking work?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Move it off the request path entirely: enqueue a job and return 202 with a status URL.",
              "Use worker threads for CPU-bound work that must stay in-process, with a bounded pool.",
              "Stream instead of buffering — parse and process large payloads incrementally.",
              "Use the async variants of every API. If a method name ends in Sync in a request handler, it is a bug.",
              "Cap input size. A request body limit is a performance control as much as a security one.",
            ],
          },
          {
            type: "callout",
            title: "Scale horizontally, but fix the code first",
            text: "Running more processes with the cluster module or more containers raises throughput. It does not fix a blocking handler — it just means fewer users hit each blocked process.",
          },
        ],
      },
      {
        heading: "Common misconceptions",
        body: [
          {
            type: "list",
            items: [
              "'async makes it parallel' — no. An async function still runs its synchronous body on the main thread.",
              "'Promise.all runs things in parallel' — it runs I/O concurrently; CPU work inside still serialises.",
              "'setTimeout(fn, 0) defers to later' — it defers to the next timers phase, still on the same thread.",
              "'Node is bad at CPU work' — it is fine at CPU work in a worker thread; it is bad at CPU work on the request thread.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many worker threads should I use?",
        answer:
          "Roughly the number of available CPU cores, minus one for the main thread. Beyond that they contend for CPU and add scheduling overhead without increasing throughput.",
      },
      {
        question: "Does the cluster module still matter?",
        answer:
          "Yes, when running Node directly on a multi-core machine. In a container orchestrator it is usually simpler to run one process per container and scale the container count instead.",
      },
      {
        question: "Is Bun or Deno immune to this?",
        answer:
          "No. Both use the same single-threaded JavaScript execution model. Their runtimes are faster at some operations, but a blocking loop blocks them too.",
      },
      {
        question: "What is a healthy event loop lag?",
        answer:
          "Under 10ms at p99 for a typical API is comfortable. Sustained values above 100ms mean requests are queueing and users are feeling it.",
      },
    ],
    references: [
      { label: "Node.js — The event loop", href: "https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick" },
      { label: "Node.js — Don't block the event loop", href: "https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop" },
      { label: "Node.js — Worker threads", href: "https://nodejs.org/api/worker_threads.html" },
    ],
    internalLinks: [
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
      { label: "Node.js error handling", href: "/blog/nodejs-error-handling" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: ["background-jobs-and-queues", "nodejs-error-handling", "observability-for-web-apps"],
  },

  {
    slug: "authentication-patterns-web-apps",
    title: "Authentication patterns: sessions, JWTs and what to use when",
    seoTitle: "Auth Patterns: Sessions vs JWT (Practical Guide)",
    description:
      "Server sessions, stateless JWTs, refresh token rotation and OAuth — the trade-offs, the revocation problem, and secure cookie configuration that works.",
    excerpt:
      "The sessions-versus-JWT argument is really an argument about revocation. Decide how fast you need to be able to log someone out.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "authentication patterns",
    secondaryKeywords: [
      "session vs jwt",
      "refresh token rotation",
      "httponly cookie auth",
      "oauth 2.1",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-26",
    answer:
      "Server-side sessions with an HttpOnly cookie are the safest default for typical web applications because revocation is immediate. Stateless JWTs suit distributed services that cannot share a session store, but they cannot be revoked before expiry — so keep access tokens short-lived and pair them with rotating refresh tokens.",
    takeaways: [
      "Store tokens in HttpOnly, Secure, SameSite cookies — never in localStorage.",
      "Sessions revoke instantly; JWTs stay valid until they expire.",
      "Access tokens should live minutes, not days; refresh tokens should rotate on use.",
      "Do not build your own password reset or MFA flow if you can adopt a maintained one.",
    ],
    sections: [
      {
        heading: "What is the real difference between sessions and JWTs?",
        answer:
          "A session id is a reference the server can invalidate at will; a JWT is a self-contained claim the server has already agreed to trust until it expires.",
        body: [
          {
            type: "table",
            head: ["", "Server session", "Stateless JWT"],
            rows: [
              ["Revocation", "Immediate — delete the record", "Not until expiry, without a blocklist"],
              ["Storage", "Session store (Redis, database)", "None server-side"],
              ["Scaling", "Needs a shared store", "Scales without shared state"],
              ["Payload size", "Small cookie", "Larger; grows with claims"],
              ["Best for", "Web apps, admin panels, anything with logout", "Service-to-service, short-lived access tokens"],
            ],
          },
          {
            type: "p",
            text: "The practical question: when an administrator disables an account, how long may that user keep working? If the answer is 'not at all', you need sessions or a token blocklist — which is a session store wearing a different hat.",
          },
        ],
      },
      {
        heading: "How should tokens be stored in the browser?",
        body: [
          {
            type: "p",
            text: "In cookies with the right flags. localStorage is readable by any JavaScript on the page, which means one successful XSS or one compromised npm dependency exfiltrates every logged-in session.",
          },
          {
            type: "code",
            lang: "ts",
            code: `cookies().set("session", token, {
  httpOnly: true,   // JavaScript cannot read it
  secure: true,     // HTTPS only
  sameSite: "lax",  // blocks most CSRF while allowing top-level navigation
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
});`,
          },
          {
            type: "list",
            items: [
              "SameSite=Lax is the right default; use Strict for high-risk admin surfaces.",
              "Set __Host- prefix on the cookie name where possible for origin binding.",
              "Never put roles or permissions in a client-readable cookie and trust them server-side.",
              "Rotate the session identifier on login to prevent session fixation.",
            ],
          },
        ],
      },
      {
        heading: "How does refresh token rotation work?",
        body: [
          {
            type: "p",
            text: "Issue a short-lived access token (5–15 minutes) and a longer-lived refresh token. Every time the refresh token is used, invalidate it and issue a new one. If an old refresh token is ever presented again, that means it was stolen and replayed — revoke the entire token family and force re-authentication.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Store refresh tokens hashed, server-side, with a family identifier.",
              "Detect reuse and revoke the family; log it as a security event.",
              "Bind tokens to a device or client id so one leak does not travel.",
              "Keep the refresh endpoint rate limited — it is a credential endpoint.",
            ],
          },
        ],
      },
      {
        heading: "What do people get wrong most often?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Trusting a JWT without verifying the signature and the algorithm — reject 'none' and pin the expected algorithm.",
              "Skipping the audience and issuer checks, so a token from another service is accepted.",
              "Hiding UI instead of enforcing permissions server-side. The endpoint is what matters.",
              "Rolling their own password hashing. Use bcrypt, scrypt or Argon2 with current parameters.",
              "Leaking account existence through different error messages on login and password reset.",
              "Forgetting to invalidate sessions on password change — the whole point of changing it.",
            ],
          },
          {
            type: "callout",
            title: "Buy before you build",
            text: "Authentication is a solved problem with expensive failure modes. A managed provider or a maintained library gives you MFA, device management, breach detection and audit logs that a bespoke implementation will never catch up with.",
          },
        ],
      },
      {
        heading: "When do you need OAuth or OIDC?",
        body: [
          {
            type: "p",
            text: "When a third party needs delegated access to your users' data, when you offer social login, or when an enterprise customer requires single sign-on. For your own first-party web app talking to your own API, OAuth adds machinery without adding security — a session cookie is simpler and safer.",
          },
          {
            type: "p",
            text: "If you do implement OAuth, follow the current OAuth 2.1 guidance: authorisation code flow with PKCE for all clients, no implicit flow, and exact redirect URI matching.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is JWT insecure?",
        answer:
          "No, but it is frequently misused. The format is fine; the problems come from storing tokens in localStorage, skipping verification steps, and expecting revocation the design does not provide.",
      },
      {
        question: "How long should a session last?",
        answer:
          "Balance risk against friction: 7–30 days with a sliding window suits consumer products, hours suit admin or financial tools. Always offer an explicit 'log out of all devices' action.",
      },
      {
        question: "Do I still need CSRF protection with SameSite cookies?",
        answer:
          "SameSite=Lax blocks the common cases, but defence in depth is cheap. Use a CSRF token for state-changing form posts, particularly if any endpoint accepts credentials cross-origin.",
      },
      {
        question: "Where should authorisation checks live?",
        answer:
          "Next to the data. Check permissions in the handler, action or query layer — never only in middleware or the UI, both of which can be bypassed.",
      },
    ],
    references: [
      { label: "OWASP — Session management cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" },
      { label: "OAuth 2.0 Security Best Current Practice", href: "https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics" },
      { label: "MDN — Set-Cookie", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie" },
    ],
    internalLinks: [
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Next.js middleware guide", href: "/blog/nextjs-middleware-guide" },
      { label: "Secrets management for teams", href: "/blog/secrets-management-guide" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "web-application-security-checklist",
      "secrets-management-guide",
      "nextjs-middleware-guide",
    ],
  },

  {
    slug: "api-rate-limiting-strategies",
    title: "Rate limiting: algorithms, keys and what to do when you hit the limit",
    seoTitle: "API Rate Limiting Strategies That Work",
    description:
      "Token bucket, sliding window and fixed window compared, how to choose a rate limit key, and how to communicate limits to clients correctly.",
    excerpt:
      "Rate limiting is not just abuse prevention. It is the mechanism that stops one client's bad afternoon from becoming everyone's outage.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "api rate limiting",
    secondaryKeywords: [
      "token bucket algorithm",
      "sliding window rate limit",
      "429 too many requests",
      "redis rate limiter",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-12",
    answer:
      "Rate limiting caps how many requests a client can make in a window. Token bucket is the best general-purpose algorithm because it allows short bursts while enforcing a sustained average; implement it in Redis so limits are shared across instances, key it by user or API key rather than IP where possible, and return 429 with Retry-After and rate limit headers.",
    takeaways: [
      "Fixed windows allow double the intended rate at the boundary — avoid them for strict limits.",
      "IP-based limiting punishes shared networks; prefer an authenticated identity as the key.",
      "In-memory limiters do not work across multiple instances.",
      "Always return Retry-After so well-behaved clients can back off correctly.",
    ],
    sections: [
      {
        heading: "Which algorithm should you use?",
        body: [
          {
            type: "table",
            head: ["Algorithm", "Burst behaviour", "Accuracy", "Cost"],
            rows: [
              ["Fixed window", "Allows 2× at boundaries", "Poor", "Cheapest"],
              ["Sliding window log", "Exact", "Best", "Memory per request"],
              ["Sliding window counter", "Smooth", "Good", "Low"],
              ["Token bucket", "Configurable burst", "Good", "Low"],
              ["Leaky bucket", "Smooths output", "Good", "Low"],
            ],
          },
          {
            type: "p",
            text: "Token bucket is the default we reach for. It has two intuitive parameters — bucket size (how big a burst you tolerate) and refill rate (the sustained limit) — which map directly to how product owners think about limits.",
          },
        ],
      },
      {
        heading: "What should you use as the rate limit key?",
        answer:
          "The most specific stable identity available: API key, then user id, then session, and IP address only as a last resort.",
        body: [
          {
            type: "list",
            items: [
              "IP addresses are shared by offices, universities, mobile carriers and NAT gateways. Limiting by IP throttles legitimate groups of users together.",
              "IPv6 clients can rotate addresses cheaply — limit by /64 prefix rather than exact address.",
              "For unauthenticated endpoints (signup, login, password reset), combine IP with the submitted identifier so one attacker cannot lock out a real account.",
              "Apply different limits per endpoint class: reads generous, writes tighter, expensive operations tightest.",
            ],
          },
          {
            type: "callout",
            title: "Get the client IP right",
            text: "Behind a proxy or CDN, the socket address is your load balancer. Read the platform's trusted client IP header and configure how many proxy hops to trust — otherwise an attacker can spoof X-Forwarded-For and bypass the limit entirely.",
          },
        ],
      },
      {
        heading: "How do you implement it across multiple instances?",
        body: [
          {
            type: "code",
            lang: "lua",
            code: `-- Atomic token bucket in Redis (called via EVAL)
local tokens = tonumber(redis.call("HGET", KEYS[1], "tokens") or ARGV[1])
local last   = tonumber(redis.call("HGET", KEYS[1], "ts") or ARGV[3])
local delta  = math.max(0, ARGV[3] - last)
tokens = math.min(ARGV[1], tokens + delta * ARGV[2])
if tokens < 1 then return {0, tokens} end
redis.call("HSET", KEYS[1], "tokens", tokens - 1, "ts", ARGV[3])
redis.call("EXPIRE", KEYS[1], 3600)
return {1, tokens - 1}`,
            caption: "A Lua script keeps read-modify-write atomic without a distributed lock.",
          },
          {
            type: "p",
            text: "The key requirement is atomicity. A naive GET-then-SET from multiple instances races, and under exactly the load you are trying to limit. Use a script, a Redis module built for this, or your platform's managed rate limiter.",
          },
        ],
      },
      {
        heading: "How should limits be communicated?",
        body: [
          {
            type: "code",
            lang: "http",
            code: `HTTP/1.1 429 Too Many Requests
RateLimit-Limit: 100
RateLimit-Remaining: 0
RateLimit-Reset: 37
Retry-After: 37
Content-Type: application/problem+json

{ "title": "Rate limit exceeded", "status": 429,
  "detail": "You have exceeded 100 requests per minute. Retry in 37 seconds." }`,
          },
          {
            type: "list",
            items: [
              "Send limit headers on every response, not only on rejection, so clients can self-pace.",
              "Retry-After in seconds is the field client libraries actually read.",
              "Document limits publicly. Undocumented limits generate support tickets, not better behaviour.",
              "Consider a soft warning threshold — notify at 80% rather than only blocking at 100%.",
            ],
          },
        ],
      },
      {
        heading: "What else belongs alongside rate limiting?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Request size limits — one 500MB body can hurt more than a thousand small requests.",
              "Timeouts on every outbound call, so a slow dependency does not hold your workers.",
              "Circuit breakers, so a failing dependency is skipped rather than retried into the ground.",
              "Concurrency limits per client for long-running operations like exports.",
              "Backpressure: return 503 with Retry-After when the queue is saturated rather than accepting work you cannot do.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should rate limiting live at the edge or in the application?",
        answer:
          "Both. Edge limits absorb volumetric abuse cheaply before it reaches your infrastructure; application limits understand user identity and per-endpoint cost. They solve different problems.",
      },
      {
        question: "What limit should I set?",
        answer:
          "Measure your legitimate p99 client behaviour and set the limit several times above it. Start in log-only mode to see who would have been blocked before you enforce.",
      },
      {
        question: "How do I rate limit a server action or form?",
        answer:
          "Key by IP plus the submitted identifier and check a Redis counter at the top of the handler before doing any work. Unauthenticated forms are the most abused endpoints on most sites.",
      },
      {
        question: "Should authenticated users bypass limits?",
        answer:
          "No — give them higher limits instead. Compromised accounts and buggy integrations both generate exactly the traffic you need protection from.",
      },
    ],
    references: [
      { label: "IETF — RateLimit header fields for HTTP", href: "https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/" },
      { label: "Redis — Rate limiting patterns", href: "https://redis.io/docs/latest/develop/use-cases/rate-limiting/" },
      { label: "MDN — 429 Too Many Requests", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429" },
    ],
    internalLinks: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "Redis caching patterns", href: "/blog/redis-caching-patterns" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "rest-api-design-principles",
      "redis-caching-patterns",
      "web-application-security-checklist",
    ],
  },

  {
    slug: "background-jobs-and-queues",
    title: "Background jobs and queues: getting work off the request path",
    seoTitle: "Background Jobs and Queues: A Practical Guide",
    description:
      "When to use a queue, how to design idempotent jobs, retry and backoff strategies, dead letter queues and the monitoring that keeps them honest.",
    excerpt:
      "Every request that sends an email, generates a file or calls a third party is a request that should have returned already.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "background jobs queue",
    secondaryKeywords: [
      "job queue design",
      "retry with backoff",
      "dead letter queue",
      "idempotent jobs",
    ],
    authorId: "harshal",
    publishedAt: "2026-05-29",
    answer:
      "Move any work that is slow, unreliable or not needed for the response into a background queue: emails, third-party API calls, report generation, image processing and webhooks. Jobs must be idempotent because they will be retried, need exponential backoff with jitter, and need a dead letter queue plus alerting so failures are visible rather than silent.",
    takeaways: [
      "If the user does not need the result to continue, it does not belong in the request.",
      "Assume every job runs at least twice — design for idempotency, not for luck.",
      "Retries without jitter synchronise and hammer the dependency that just failed.",
      "An unmonitored dead letter queue is a place where customer problems go to be forgotten.",
    ],
    sections: [
      {
        heading: "What belongs in a background job?",
        body: [
          {
            type: "list",
            items: [
              "Sending email, SMS and push notifications.",
              "Calling third-party APIs whose latency and uptime you do not control.",
              "Generating PDFs, exports, invoices and reports.",
              "Image and video processing, thumbnail generation.",
              "Search index updates and cache warming.",
              "Scheduled work: subscription renewals, digests, cleanup.",
              "Outbound webhooks to your own customers, with their own retry schedule.",
            ],
          },
          {
            type: "p",
            text: "The test: if this step fails, should the user's action fail? If a signup should still succeed when the welcome email provider is down, the email is a job.",
          },
        ],
      },
      {
        heading: "Why must jobs be idempotent?",
        answer:
          "Because every queue worth using guarantees at-least-once delivery, which means duplicates are normal operation, not an error condition.",
        body: [
          {
            type: "p",
            text: "A worker can process a job, crash before acknowledging, and have the job redelivered. Without idempotency that is a second charge, a second email, a second shipment. Exactly-once delivery is not something a distributed queue can offer you.",
          },
          {
            type: "code",
            lang: "ts",
            code: `async function handleChargeJob(job: { orderId: string; idempotencyKey: string }) {
  const existing = await db.charge.findUnique({ where: { key: job.idempotencyKey } });
  if (existing) return existing;              // already done — safe to re-run

  const charge = await payments.charge(job.orderId, { key: job.idempotencyKey });
  return db.charge.create({ data: { key: job.idempotencyKey, id: charge.id } });
}`,
          },
        ],
      },
      {
        heading: "How should retries be configured?",
        body: [
          {
            type: "table",
            head: ["Attempt", "Delay (base 2s, with jitter)"],
            rows: [
              ["1", "immediate"],
              ["2", "~2s"],
              ["3", "~4s"],
              ["4", "~8s"],
              ["5", "~16s"],
              ["6", "~32s, then dead letter"],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Use exponential backoff with random jitter so retries from many workers do not align into a thundering herd.",
              "Distinguish retryable from permanent failures. A 400 from a third party will fail identically forever — dead-letter it immediately.",
              "Cap total attempts and total elapsed time; a job retrying for three days is noise.",
              "Set a visibility timeout longer than the job's realistic worst-case duration, or the queue will redeliver work that is still running.",
            ],
          },
        ],
      },
      {
        heading: "What do you need to operate a queue?",
        body: [
          {
            type: "list",
            items: [
              "Queue depth and oldest-message age as dashboard metrics — depth alone hides a stuck consumer.",
              "An alert on dead letter queue size above zero, routed to a human.",
              "A replay mechanism to re-enqueue dead-lettered jobs after a fix, in a controlled batch.",
              "Per-job-type metrics: duration, failure rate, retry count.",
              "Structured logs that carry the job id and the originating request id so you can trace a user report end to end.",
              "A concurrency limit per job type so a backlog of image processing does not starve payment jobs.",
            ],
          },
          {
            type: "callout",
            title: "Separate the queues that matter",
            text: "Put critical jobs on their own queue with their own workers. A million queued analytics events should never delay a password reset email.",
          },
        ],
      },
      {
        heading: "Which queue technology should you pick?",
        body: [
          {
            type: "table",
            head: ["Option", "Best for", "Trade-off"],
            rows: [
              ["Redis-backed (BullMQ)", "Node apps already using Redis", "Durability depends on Redis persistence"],
              ["Postgres-backed (pg-boss, Graphile)", "Small teams, transactional enqueue", "Throughput limited by the database"],
              ["Managed (SQS, Cloud Tasks)", "Scale and durability without ops", "Vendor-specific semantics"],
              ["Kafka / streams", "High-volume event pipelines", "Operationally heavy for simple jobs"],
            ],
          },
          {
            type: "p",
            text: "For most product teams, enqueueing into the same database as the write that triggered it — inside the same transaction — removes an entire class of 'the row was created but the job never ran' bugs. That transactional outbox pattern is worth more than raw throughput at typical scale.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I just use setTimeout instead of a queue?",
        answer:
          "No. In-process timers are lost on deploy, crash or scale-down, and they do not retry. Anything that must happen needs durable storage.",
      },
      {
        question: "How do I show job progress to users?",
        answer:
          "Return a job id immediately, expose a status endpoint, and poll or push updates over a socket. Storing job state in a table you own gives you history and debuggability for free.",
      },
      {
        question: "What is a transactional outbox?",
        answer:
          "Writing the job row in the same database transaction as the business change, then having a separate process publish it. It guarantees the job exists if and only if the change committed.",
      },
      {
        question: "How long should jobs be retained after completion?",
        answer:
          "Long enough to debug — typically 7 to 30 days for completed jobs and longer for failures. Purge on a schedule or the table becomes your largest one.",
      },
    ],
    references: [
      { label: "AWS — Amazon SQS developer guide", href: "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html" },
      { label: "BullMQ documentation", href: "https://docs.bullmq.io/" },
      { label: "AWS Architecture — Transactional outbox pattern", href: "https://docs.aws.amazon.com/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html" },
    ],
    internalLinks: [
      { label: "Node.js event loop explained", href: "/blog/nodejs-event-loop-explained" },
      { label: "Designing reliable webhooks", href: "/blog/webhooks-design-guide" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: ["webhooks-design-guide", "nodejs-event-loop-explained", "observability-for-web-apps"],
  },

  {
    slug: "graphql-vs-rest",
    title: "GraphQL vs REST: an honest comparison after building both",
    seoTitle: "GraphQL vs REST: Which Should You Build?",
    description:
      "Where GraphQL genuinely wins, what it costs in caching, security and operations, and why REST remains the right default for most product APIs.",
    excerpt:
      "GraphQL solves a real problem for a specific shape of team. If you are not that team, it is a large bill for flexibility you will not use.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "graphql vs rest",
    secondaryKeywords: [
      "graphql n+1 problem",
      "api query language",
      "graphql caching",
      "when to use graphql",
    ],
    authorId: "harshal",
    publishedAt: "2026-05-15",
    answer:
      "GraphQL lets clients request exactly the fields they need from a typed schema through a single endpoint, which is valuable when many diverse clients consume one API. REST is simpler to cache, secure, monitor and operate, and remains the better default when one team owns both the API and its main client.",
    takeaways: [
      "GraphQL's win is client autonomy across many consumers, not raw performance.",
      "HTTP caching largely stops working with a single POST endpoint.",
      "Query depth and complexity limits are mandatory, not optional hardening.",
      "The N+1 problem is inherent to resolvers — you will need dataloaders on day one.",
    ],
    sections: [
      {
        heading: "What does GraphQL actually give you?",
        body: [
          {
            type: "list",
            items: [
              "One request instead of several: fetch a user, their orders and each order's items in one round trip.",
              "No over-fetching: a mobile client asks for three fields where the web client asks for thirty.",
              "A typed schema that generates client types and powers excellent tooling.",
              "Schema-level documentation and introspection that stays in sync with the implementation.",
              "Independent client evolution — a new client feature often needs no backend change.",
            ],
          },
          {
            type: "p",
            text: "That last point is the real argument. If five client teams queue behind one backend team for endpoint changes, GraphQL removes the queue. If one team owns everything, the queue does not exist and you have paid for a solution to it anyway.",
          },
        ],
      },
      {
        heading: "What does it cost?",
        body: [
          {
            type: "table",
            head: ["Concern", "REST", "GraphQL"],
            rows: [
              ["HTTP caching", "Works natively per URL", "Needs persisted queries or a client cache"],
              ["Monitoring", "Per-endpoint metrics", "One endpoint; needs per-operation instrumentation"],
              ["Rate limiting", "Per endpoint", "Must be cost-based on query complexity"],
              ["Authorisation", "Per endpoint", "Per field, across every resolver path"],
              ["Error handling", "HTTP status codes", "200 with an errors array"],
              ["N+1 queries", "Explicit in your code", "Emergent from resolver nesting"],
            ],
          },
          {
            type: "callout",
            title: "The security surface is different",
            text: "A public GraphQL endpoint without depth limiting, complexity scoring and introspection control is a denial-of-service invitation: one deeply nested recursive query can cost more than thousands of REST calls.",
          },
        ],
      },
      {
        heading: "What is the N+1 problem and how do you solve it?",
        answer:
          "Resolvers run per field per object, so fetching 50 posts and each post's author triggers 51 database queries unless requests are batched.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Without batching: one query per post author
const resolvers = {
  Post: { author: (post) => db.user.findUnique({ where: { id: post.authorId } }) },
};

// With DataLoader: one query for all authors in the tick
const userLoader = new DataLoader((ids) =>
  db.user.findMany({ where: { id: { in: ids } } }).then((rows) =>
    ids.map((id) => rows.find((r) => r.id === id) ?? null)
  )
);
const resolvers = { Post: { author: (post) => userLoader.load(post.authorId) } };`,
          },
          {
            type: "p",
            text: "DataLoader-style batching is not an optimisation you add later. Any non-trivial GraphQL schema needs it from the start, plus per-request loader instances so caching does not leak across users.",
          },
        ],
      },
      {
        heading: "When should you choose each?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Choose GraphQL when several independent client teams consume one API with genuinely different data needs.",
              "Choose GraphQL when aggregating many backend services behind one typed graph is the actual product requirement.",
              "Choose REST when one team owns the API and its primary client — the flexibility has no consumer.",
              "Choose REST when HTTP caching and CDN behaviour matter to your performance story.",
              "Choose REST for public APIs consumed by scripts, integrations and curl.",
            ],
          },
          {
            type: "p",
            text: "There is also a middle path that has quietly won a lot of ground: typed server functions or tRPC-style RPC within a single TypeScript codebase. You get end-to-end type safety without a schema layer, provided both ends ship together.",
          },
        ],
      },
      {
        heading: "Can you run both?",
        body: [
          {
            type: "p",
            text: "Yes, and plenty of mature systems do — REST for public, cacheable, integration-facing endpoints and GraphQL for a rich internal client. The cost is two surfaces to secure, document and monitor, so it should be a deliberate decision rather than an accumulation.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is GraphQL faster than REST?",
        answer:
          "Not inherently. It reduces round trips and over-fetching, which helps on high-latency mobile networks, but a badly written resolver tree can be far slower than a purpose-built REST endpoint.",
      },
      {
        question: "How do you cache GraphQL?",
        answer:
          "Through a normalised client cache, persisted queries served over GET so a CDN can cache them, and server-side caching at the data layer. Standard URL-based HTTP caching does not apply to a single POST endpoint.",
      },
      {
        question: "Should GraphQL errors use HTTP status codes?",
        answer:
          "GraphQL returns 200 with an errors array by default, which surprises monitoring tools. Use typed error results in the schema for expected failures and make sure your observability surfaces them.",
      },
      {
        question: "Is REST outdated?",
        answer:
          "No. It remains the most widely understood, most cacheable and most operationally simple approach, and it is the right default for the majority of product APIs.",
      },
    ],
    references: [
      { label: "GraphQL — Best practices", href: "https://graphql.org/learn/best-practices/" },
      { label: "OWASP — GraphQL cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/GraphQL_Cheat_Sheet.html" },
      { label: "DataLoader", href: "https://github.com/graphql/dataloader" },
    ],
    internalLinks: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "API versioning strategies", href: "/blog/api-versioning-strategies" },
      { label: "Database indexing explained", href: "/blog/postgresql-indexing-guide" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "rest-api-design-principles",
      "api-versioning-strategies",
      "postgresql-indexing-guide",
    ],
  },

  {
    slug: "nodejs-error-handling",
    title: "Error handling in Node.js that makes production debuggable",
    seoTitle: "Node.js Error Handling for Production",
    description:
      "Operational vs programmer errors, async error propagation, unhandled rejections, structured logging and what to do when a process reaches an unknown state.",
    excerpt:
      "The goal of error handling is not to prevent crashes. It is to make sure that when something fails, you can tell what, where and for whom.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "node.js error handling",
    secondaryKeywords: [
      "unhandled promise rejection",
      "operational errors",
      "structured logging node",
      "error monitoring",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-01",
    answer:
      "Separate operational errors — a timeout, a validation failure, a missing record — which you handle and recover from, from programmer errors like a null dereference, which should crash the process so a supervisor restarts it clean. Attach context to every error, log structurally with a request id, and never swallow an error into an empty catch block.",
    takeaways: [
      "Operational errors get handled; programmer errors should crash and restart.",
      "An empty catch block is where production incidents come from.",
      "Log objects, not strings — structured logs are searchable, sentences are not.",
      "A request id carried through every log line is the highest-value debugging investment you can make.",
    ],
    sections: [
      {
        heading: "What is the difference between operational and programmer errors?",
        body: [
          {
            type: "table",
            head: ["", "Operational", "Programmer"],
            rows: [
              ["Examples", "Timeout, 404, invalid input, disk full", "undefined is not a function, bad state"],
              ["Expected?", "Yes, in normal operation", "No — a bug"],
              ["Response", "Handle, retry, return an error", "Crash and restart"],
              ["User sees", "A meaningful message", "A generic 500"],
            ],
          },
          {
            type: "p",
            text: "Trying to recover from a programmer error means continuing with a process whose state you no longer understand. Restarting is not a failure of engineering; it is the only honest response to unknown state.",
          },
        ],
      },
      {
        heading: "How should errors carry context?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `class AppError extends Error {
  constructor(
    message: string,
    readonly code: string,
    readonly status: number,
    readonly context: Record<string, unknown> = {},
    options?: { cause?: unknown }
  ) {
    super(message, options);
    this.name = new.target.name;
  }
}

throw new AppError("Payment provider timed out", "payment_timeout", 502,
  { orderId, provider: "stripe", attempt: 2 }, { cause: err });`,
            caption: "The cause option preserves the original error's stack for the log.",
          },
          {
            type: "p",
            text: "A stack trace tells you where. Context tells you which order, which customer, which attempt — the difference between a five-minute fix and an afternoon of guessing.",
          },
        ],
      },
      {
        heading: "How do you handle async errors correctly?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Always await or return a promise. A floating promise's rejection becomes an unhandled rejection with no context.",
              "Register process handlers for unhandledRejection and uncaughtException — log, flush, then exit rather than continuing.",
              "In Express-style frameworks, wrap async handlers so rejections reach the error middleware.",
              "Use Promise.allSettled when partial failure is acceptable, and inspect every result.",
              "Set explicit timeouts on all outbound calls; a hung request produces no error at all.",
            ],
          },
          {
            type: "callout",
            title: "Exit on uncaught exceptions",
            text: "Log the error, flush your transports, then process.exit(1). Keeping a process alive after an uncaught exception leaves half-finished state and produces bugs that are impossible to reproduce.",
          },
        ],
      },
      {
        heading: "What should logs look like?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `logger.error({
  err,                       // serialised with stack and cause
  requestId: ctx.requestId,
  userId: ctx.userId,
  route: "POST /orders",
  durationMs: 1832,
}, "order creation failed");`,
          },
          {
            type: "list",
            items: [
              "One JSON object per line so log platforms can index fields.",
              "A request id generated at the edge and propagated through every layer, including background jobs.",
              "Levels used consistently: error means a human should look, warn means it is degraded, info is the audit trail.",
              "Never log secrets, tokens, full card numbers or personal data you would not want in a support ticket.",
              "Sample high-volume info logs; keep 100% of errors.",
            ],
          },
        ],
      },
      {
        heading: "What should the client receive?",
        body: [
          {
            type: "p",
            text: "A stable machine-readable code, a human-readable message that is safe to display, and the request id. Never a stack trace — it leaks file paths, dependency versions and sometimes queries.",
          },
          {
            type: "code",
            lang: "json",
            code: `{
  "error": {
    "code": "payment_timeout",
    "message": "We could not reach the payment provider. No charge was made.",
    "requestId": "req_01HQ8Z3F2K"
  }
}`,
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use try/catch everywhere?",
        answer:
          "No. Catch where you can do something useful — retry, fall back, add context and rethrow. Catching to log and continue usually turns one clear failure into three confusing ones downstream.",
      },
      {
        question: "How do I handle errors in background jobs?",
        answer:
          "Distinguish retryable from permanent, let the queue handle backoff for the former, and dead-letter the latter with full context. Carry the originating request id into the job payload.",
      },
      {
        question: "Is it acceptable for a container to crash on error?",
        answer:
          "For programmer errors, yes — that is what orchestrator restarts are for. What matters is that the crash is logged with enough detail and that restarts are alerted on, so a crash loop cannot hide.",
      },
      {
        question: "What is the cause option on Error?",
        answer:
          "A standard way to chain errors: new Error('msg', { cause: originalError }). It preserves the original stack so you can see the low-level failure behind a high-level message.",
      },
    ],
    references: [
      { label: "Node.js — Error handling guide", href: "https://nodejs.org/api/errors.html" },
      { label: "MDN — Error cause", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause" },
      { label: "OpenTelemetry — Logs", href: "https://opentelemetry.io/docs/concepts/signals/logs/" },
    ],
    internalLinks: [
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
      { label: "Node.js event loop explained", href: "/blog/nodejs-event-loop-explained" },
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "observability-for-web-apps",
      "nodejs-event-loop-explained",
      "background-jobs-and-queues",
    ],
  },

  {
    slug: "monolith-vs-microservices",
    title: "Monolith or microservices: the decision most teams get backwards",
    seoTitle: "Monolith vs Microservices: How to Decide",
    description:
      "What microservices actually cost, when the organisational argument for them becomes real, and how a modular monolith gets most of the benefit with far less operational burden.",
    excerpt:
      "Microservices solve an organisational problem with a distributed systems bill. If you do not have the organisational problem, you just have the bill.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "monolith vs microservices",
    secondaryKeywords: [
      "modular monolith",
      "service boundaries",
      "distributed systems complexity",
      "when to split services",
    ],
    authorId: "harshal",
    publishedAt: "2026-04-17",
    answer:
      "Start with a modular monolith. Microservices become worthwhile when multiple teams need to deploy independently, when parts of the system have genuinely different scaling or availability requirements, or when a component needs a different technology stack. Splitting before those conditions exist buys network calls, distributed transactions and deployment complexity in exchange for nothing.",
    takeaways: [
      "Microservices are primarily an answer to team coordination cost, not a performance technique.",
      "A modular monolith gives you clear boundaries without network failure modes.",
      "Every service boundary turns a function call into a call that can time out.",
      "Split along data ownership; if two services need the same table, the boundary is wrong.",
    ],
    sections: [
      {
        heading: "What do microservices actually cost?",
        body: [
          {
            type: "list",
            items: [
              "Network failure between every pair of services — timeouts, retries, partial failures.",
              "Distributed transactions replaced by sagas and eventual consistency your product must tolerate.",
              "Distributed tracing becomes mandatory just to answer 'why was this request slow'.",
              "Deployment coordination for changes that span services, plus version compatibility windows.",
              "Duplicated infrastructure: CI, monitoring, secrets, on-call runbooks, per service.",
              "Local development complexity — running eleven services to reproduce one bug.",
            ],
          },
          {
            type: "p",
            text: "None of these are insurmountable. All of them require engineering time that is not going into your product, and they scale with the number of services rather than the size of your codebase.",
          },
        ],
      },
      {
        heading: "What is a modular monolith?",
        answer:
          "One deployable application with strictly enforced internal module boundaries — separate domains, explicit interfaces, no reaching into another module's data.",
        body: [
          {
            type: "code",
            lang: "text",
            code: `src/
  modules/
    billing/     # owns billing tables; exposes a typed public API
      index.ts   # the only file other modules may import
      internal/
    catalog/
    identity/
  shared/        # genuinely cross-cutting: logging, config, errors`,
          },
          {
            type: "p",
            text: "Enforce it with lint rules that forbid deep imports across modules. The discipline is the same as microservices — clear ownership, explicit contracts — without the network in between. And when a module genuinely needs to become a service, the boundary already exists, which makes the extraction mechanical.",
          },
        ],
      },
      {
        heading: "When is splitting justified?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Multiple teams are blocking each other on deploys and the release train has become a scheduling problem.",
              "One component has wildly different scaling needs — a video transcoder next to a CRUD API.",
              "Availability isolation is a requirement: the checkout path must survive the analytics pipeline failing.",
              "A component needs a different runtime — a Python ML service alongside a Node API.",
              "Compliance requires physical or logical separation of certain data processing.",
            ],
          },
          {
            type: "callout",
            title: "Count the teams, not the endpoints",
            text: "The reliable predictor of microservice value is the number of independent teams needing to deploy on their own schedule. Below three or four, a monolith with good module boundaries almost always wins.",
          },
        ],
      },
      {
        heading: "How should boundaries be drawn?",
        body: [
          {
            type: "p",
            text: "Around data ownership. Each service owns its tables exclusively and exposes them only through its API. If two services read and write the same table, you have a distributed monolith — all the coupling of a monolith with all the failure modes of a distributed system.",
          },
          {
            type: "list",
            items: [
              "Model boundaries on business capabilities: billing, identity, catalogue, fulfilment.",
              "Prefer asynchronous events between services over synchronous chains — each synchronous hop multiplies failure probability.",
              "Accept eventual consistency deliberately and tell the product team where it applies.",
              "Never share a database schema across services 'temporarily'. That is where it ends up permanently.",
            ],
          },
        ],
      },
      {
        heading: "How do you migrate if you decide to split?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Establish module boundaries inside the monolith first and let them stabilise for a few months.",
              "Extract the module with the clearest boundary and the least chatty relationship with the rest.",
              "Use the strangler pattern: route traffic through a facade so the change is reversible.",
              "Migrate data ownership explicitly, including the backfill and the cutover plan.",
              "Measure afterwards: deployment frequency, lead time, incident rate. If none improved, stop splitting.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are microservices better for scaling?",
        answer:
          "Only for scaling components independently. A monolith scales horizontally very well — you run more copies. The advantage appears when one part needs ten times the resources of the rest.",
      },
      {
        question: "Can a startup use microservices?",
        answer:
          "It can, and it usually should not. With a small team, the operational overhead consumes the capacity that should be going into finding product-market fit.",
      },
      {
        question: "What is a distributed monolith?",
        answer:
          "Services that must be deployed together, share a database, or break when any one of them is down. It is the worst outcome of a premature split and unfortunately a common one.",
      },
      {
        question: "How do we handle transactions across services?",
        answer:
          "With sagas — a sequence of local transactions plus compensating actions on failure. It is significantly more complex than a database transaction, which is itself an argument for keeping related data in one service.",
      },
    ],
    references: [
      { label: "Martin Fowler — Monolith first", href: "https://martinfowler.com/bliki/MonolithFirst.html" },
      { label: "microservices.io — Pattern catalogue", href: "https://microservices.io/patterns/index.html" },
      { label: "AWS — Strangler fig pattern", href: "https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-decomposing-monoliths/strangler-fig.html" },
    ],
    internalLinks: [
      { label: "Server architecture basics", href: "/blog/server-architecture-basics" },
      { label: "Kubernetes: do you need it?", href: "/blog/do-you-need-kubernetes" },
      { label: "Frontend architecture decisions", href: "/blog/frontend-architecture-decisions" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "server-architecture-basics",
      "do-you-need-kubernetes",
      "frontend-architecture-decisions",
    ],
  },

  {
    slug: "webhooks-design-guide",
    title: "Designing webhooks your customers will not complain about",
    seoTitle: "Webhook Design: Delivery, Retries and Security",
    description:
      "How to design outbound webhooks — signing, retries, ordering, replay protection, dead letters and the debugging tools integrators expect.",
    excerpt:
      "Webhooks are an API you deliver to someone else's unreliable server. Design for their failures, not just your success.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "webhook design",
    secondaryKeywords: [
      "webhook signature verification",
      "webhook retries",
      "idempotent webhooks",
      "event delivery",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-03",
    answer:
      "A well-designed webhook system signs every payload with a timestamped HMAC, retries with exponential backoff for a defined window, guarantees at-least-once delivery with an event id consumers can deduplicate on, and gives integrators a delivery log they can inspect and replay themselves.",
    takeaways: [
      "Sign payloads with an HMAC over the timestamp and body; verify with constant-time comparison.",
      "Include a stable event id — consumers need it to deduplicate.",
      "Do not promise ordering you cannot deliver; include a sequence number instead.",
      "A self-service delivery log removes most of your webhook support burden.",
    ],
    sections: [
      {
        heading: "What should a webhook payload contain?",
        body: [
          {
            type: "code",
            lang: "json",
            code: `{
  "id": "evt_01HQ8Z3F2K7YQ",
  "type": "order.completed",
  "created": "2026-04-03T09:12:44Z",
  "apiVersion": "2026-01-15",
  "sequence": 4821,
  "data": { "orderId": "ord_123", "total": 4900, "currency": "INR" }
}`,
          },
          {
            type: "list",
            items: [
              "A unique event id so consumers can deduplicate retries.",
              "A namespaced event type so consumers can route without parsing the payload.",
              "A creation timestamp and an API version so payload changes are survivable.",
              "Enough data to act on, but for sensitive resources send identifiers and let the consumer fetch the current state.",
            ],
          },
        ],
      },
      {
        heading: "How should webhooks be secured?",
        answer:
          "Sign the timestamp and raw body with an HMAC secret, send it in a header, and require consumers to verify it in constant time within a short tolerance window.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Sender
const signed = \`\${timestamp}.\${rawBody}\`;
const signature = crypto.createHmac("sha256", secret).update(signed).digest("hex");
headers["X-Signature"] = \`t=\${timestamp},v1=\${signature}\`;

// Receiver
const expected = crypto.createHmac("sha256", secret).update(\`\${t}.\${rawBody}\`).digest();
const ok = crypto.timingSafeEqual(expected, Buffer.from(v1, "hex"));
if (!ok || Math.abs(Date.now() / 1000 - Number(t)) > 300) return res.status(400).end();`,
            caption: "The timestamp in the signed payload is what prevents replay attacks.",
          },
          {
            type: "list",
            items: [
              "Verify against the raw body, not the parsed and re-serialised JSON — key order changes break signatures.",
              "Support two active secrets so customers can rotate without downtime.",
              "Publish your outbound IP ranges for customers who allowlist.",
              "Never include credentials or full personal data in the payload.",
            ],
          },
        ],
      },
      {
        heading: "How should delivery and retries work?",
        body: [
          {
            type: "table",
            head: ["Response", "Action"],
            rows: [
              ["2xx", "Delivered, done"],
              ["408, 429, 5xx", "Retry with exponential backoff"],
              ["Other 4xx", "Do not retry — the endpoint rejected it permanently"],
              ["Timeout / connection error", "Retry"],
            ],
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Time out fast — 5 to 10 seconds. Consumers should acknowledge and process asynchronously.",
              "Retry with exponential backoff and jitter over a bounded window, typically 24 to 72 hours.",
              "Disable an endpoint automatically after sustained failure and notify the customer by email.",
              "Keep a delivery log with request, response and attempt history, visible in their dashboard.",
              "Provide a manual replay button. It converts a support ticket into a self-service action.",
            ],
          },
        ],
      },
      {
        heading: "What about ordering and duplicates?",
        body: [
          {
            type: "p",
            text: "Do not promise ordered delivery. Retries, parallel workers and network reordering all break it, and a guarantee you cannot keep is worse than none. Include a monotonically increasing sequence number or a resource version so consumers can discard events older than their current state.",
          },
          {
            type: "callout",
            title: "Tell consumers the contract explicitly",
            text: "'At-least-once delivery, no ordering guarantee, deduplicate on event id, ignore events with a sequence lower than the last one you processed.' Four sentences in your docs prevent most integration bugs.",
          },
        ],
      },
      {
        heading: "What do integrators need from you?",
        body: [
          {
            type: "list",
            items: [
              "A test event button that sends a real signed payload to their endpoint.",
              "Documented payload schemas per event type, with examples.",
              "A searchable delivery log with response bodies — the first thing anyone asks for when debugging.",
              "Per-endpoint event type subscriptions so they receive only what they use.",
              "A staging environment with the same signing behaviour as production.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should consumers process webhooks synchronously?",
        answer:
          "No. They should verify the signature, persist the event, return 200 immediately, and process from a queue. Processing inline causes timeouts and unnecessary retries on your side.",
      },
      {
        question: "How long should I retry for?",
        answer:
          "24 to 72 hours with exponential backoff covers most transient outages. Beyond that the event is usually stale; disable the endpoint and notify the customer instead.",
      },
      {
        question: "Webhooks or polling?",
        answer:
          "Webhooks for timeliness and efficiency, polling as a fallback for consumers who cannot host a public endpoint. Offering a list-events API alongside webhooks lets them reconcile after downtime.",
      },
      {
        question: "How do I handle a customer whose endpoint is always down?",
        answer:
          "Automatically disable after a threshold of consecutive failures, email the account owner, and keep events retrievable through your API so nothing is lost when they fix it.",
      },
    ],
    references: [
      { label: "Stripe — Webhooks documentation", href: "https://docs.stripe.com/webhooks" },
      { label: "IETF — HTTP Message Signatures (RFC 9421)", href: "https://www.rfc-editor.org/rfc/rfc9421.html" },
      { label: "OWASP — Server side request forgery prevention", href: "https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html" },
    ],
    internalLinks: [
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "background-jobs-and-queues",
      "rest-api-design-principles",
      "api-versioning-strategies",
    ],
  },

  {
    slug: "api-versioning-strategies",
    title: "API versioning: how to change an API without breaking your customers",
    seoTitle: "API Versioning Strategies Compared",
    description:
      "URL, header and date-based versioning compared, what counts as a breaking change, and how to deprecate a version without a support crisis.",
    excerpt:
      "The hard part of versioning is not the URL scheme. It is agreeing on what counts as breaking, and then actually retiring the old version.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "api versioning",
    secondaryKeywords: [
      "breaking changes api",
      "api deprecation policy",
      "url vs header versioning",
      "backwards compatibility",
    ],
    authorId: "harshal",
    publishedAt: "2026-03-20",
    answer:
      "Version an API when you must make a breaking change — removing or renaming a field, changing a type, tightening validation, or altering default behaviour. URL versioning is the pragmatic default; date-based versioning suits APIs that evolve continuously. Whatever you choose, publish a deprecation policy with dates and enforce it, or you will maintain every version forever.",
    takeaways: [
      "Adding an optional field is not breaking; removing or renaming one is.",
      "URL versioning is the most operationally practical for most teams.",
      "Version the smallest surface possible — per-resource beats a global bump.",
      "A deprecation policy without a shutdown date is a plan to support v1 indefinitely.",
    ],
    sections: [
      {
        heading: "What counts as a breaking change?",
        body: [
          {
            type: "table",
            head: ["Change", "Breaking?"],
            rows: [
              ["Adding an optional response field", "No"],
              ["Adding an optional request parameter", "No"],
              ["Removing or renaming a field", "Yes"],
              ["Changing a field's type or format", "Yes"],
              ["Making an optional parameter required", "Yes"],
              ["Tightening validation on existing input", "Yes"],
              ["Changing default sort order or pagination size", "Yes, in practice"],
              ["Adding a new enum value", "Usually — clients often switch exhaustively"],
            ],
          },
          {
            type: "callout",
            title: "The last row surprises people",
            text: "Adding a new status value to an enum breaks any client with an exhaustive switch. Document from day one that clients must tolerate unknown enum values, or treat additions as breaking.",
          },
        ],
      },
      {
        heading: "Which versioning scheme should you use?",
        body: [
          {
            type: "table",
            head: ["Scheme", "Example", "Pros", "Cons"],
            rows: [
              ["URL path", "/v2/orders", "Visible, cacheable, easy routing", "Duplicated routes; version in every link"],
              ["Header", "Accept: application/vnd.api.v2+json", "Clean URLs, content negotiation", "Invisible in logs, harder to test"],
              ["Query parameter", "/orders?version=2", "Simple", "Easy to forget; pollutes cache keys"],
              ["Date-based", "API-Version: 2026-01-15", "Fine-grained, per-account pinning", "Complex to implement internally"],
            ],
          },
          {
            type: "p",
            text: "URL versioning wins on operability: you can see the version in access logs, route it at the load balancer, and test it in a browser. Date-based versioning, as used by several large payment and communication APIs, is excellent for continuously evolving products but requires disciplined internal transformation layers.",
          },
        ],
      },
      {
        heading: "How do you avoid versioning at all?",
        answer:
          "Design for extension: additive changes, tolerant readers, and explicit opt-in for new behaviour.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Add, never remove. Deprecate a field in documentation and keep returning it until the version retires.",
              "Return objects rather than bare arrays or scalars so you can add fields later.",
              "Put new behaviour behind an opt-in parameter or header instead of changing defaults.",
              "Tell clients to ignore unknown fields, and validate that your own SDKs do.",
              "Never reuse a field name with different semantics — that is a breaking change disguised as a compatible one.",
            ],
          },
        ],
      },
      {
        heading: "How should deprecation work?",
        body: [
          {
            type: "code",
            lang: "http",
            code: `HTTP/1.1 200 OK
Deprecation: Sat, 15 Nov 2026 00:00:00 GMT
Sunset: Sun, 15 Feb 2027 00:00:00 GMT
Link: <https://docs.example.com/migrate/v2>; rel="deprecation"`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Announce with a fixed sunset date, at least 6 to 12 months out for a paid API.",
              "Send Deprecation and Sunset headers so machines and monitoring can see it, not just humans.",
              "Instrument usage per version per customer so you know exactly who is affected.",
              "Contact remaining users directly as the date approaches — the top 20 accounts are usually 90% of the traffic.",
              "Run brownouts: short, scheduled periods where the old version returns errors, well before the shutdown.",
            ],
          },
        ],
      },
      {
        heading: "How do you maintain multiple versions internally?",
        body: [
          {
            type: "p",
            text: "Do not fork your business logic. Keep one internal domain model and write thin transformation layers at the edge that convert requests and responses between the versioned shape and the internal one. Forked handlers diverge, and bugs get fixed in one version but not the other.",
          },
          {
            type: "p",
            text: "Test every supported version in CI with contract tests derived from the published specification. That is what makes 'we support v1 and v2' a statement rather than a hope.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many versions should I support at once?",
        answer:
          "Two — the current one and the previous one. Three or more multiplies testing and support cost, and usually means a deprecation deadline was allowed to slip.",
      },
      {
        question: "Should internal APIs be versioned?",
        answer:
          "If the client and server deploy together, no — use type-safe contracts and update both. If they deploy independently, treat the internal API like an external one.",
      },
      {
        question: "Is semantic versioning right for HTTP APIs?",
        answer:
          "Partly. Only the major version usually appears in the URL, since minor and patch changes should be backwards compatible by definition. Use semver in your SDKs where it fits naturally.",
      },
      {
        question: "What if I have to make an emergency breaking change?",
        answer:
          "Security fixes sometimes force it. Communicate immediately with the reason and timeline, provide a migration path, and give the largest affected customers direct support. Transparency is what preserves trust.",
      },
    ],
    references: [
      { label: "IETF — The Deprecation HTTP header field", href: "https://www.rfc-editor.org/rfc/rfc9745.html" },
      { label: "IETF — The Sunset HTTP header field", href: "https://www.rfc-editor.org/rfc/rfc8594.html" },
      { label: "OpenAPI Specification", href: "https://spec.openapis.org/oas/latest.html" },
    ],
    internalLinks: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "Designing reliable webhooks", href: "/blog/webhooks-design-guide" },
      { label: "GraphQL vs REST", href: "/blog/graphql-vs-rest" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: ["rest-api-design-principles", "webhooks-design-guide", "graphql-vs-rest"],
  },

  {
    slug: "server-architecture-basics",
    title: "Server architecture basics: what actually happens between DNS and your code",
    seoTitle: "Server Architecture Basics for Web Developers",
    description:
      "DNS, TLS, load balancers, reverse proxies, application servers, databases and caches — how a request flows through a production stack and where it breaks.",
    excerpt:
      "You cannot debug what you cannot picture. This is the map of a production request, layer by layer.",
    category: "Backend",
    cluster: "backend",
    primaryKeyword: "server architecture",
    secondaryKeywords: [
      "reverse proxy",
      "load balancer",
      "web server architecture",
      "request lifecycle",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-03-06",
    answer:
      "A production web request travels through DNS resolution, a TLS handshake, a CDN or load balancer, a reverse proxy, your application server, and then out to databases and caches. Each hop adds latency and a failure mode, and knowing the sequence is what turns 'the site is slow' into a specific, testable hypothesis.",
    takeaways: [
      "Most 'slow site' reports resolve to one hop — find it before changing code.",
      "A CDN in front of static assets is the cheapest performance win available.",
      "Connection pooling matters more than query speed once concurrency rises.",
      "Health checks should test the dependency path, not just that the process is alive.",
    ],
    sections: [
      {
        heading: "What happens between the click and your code?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "DNS resolution turns the hostname into an IP — cached, but a cold lookup can cost 20–120ms.",
              "TCP connection and TLS handshake — one to two round trips, less with TLS 1.3 and session resumption.",
              "The CDN edge answers if the resource is cached; otherwise it forwards to the origin, often over a warm connection.",
              "A load balancer selects a healthy instance.",
              "A reverse proxy terminates TLS, applies headers, compresses, and may serve static files directly.",
              "Your application server runs the handler.",
              "The handler queries a database or cache, each with its own connection and latency.",
              "The response travels back, is compressed and cached according to your headers.",
            ],
          },
          {
            type: "p",
            text: "Every one of those steps is measurable. Server-Timing headers let you attribute time to each phase and see it in the browser's network panel — the fastest way to stop guessing.",
          },
        ],
      },
      {
        heading: "What does each component do?",
        body: [
          {
            type: "table",
            head: ["Component", "Job", "Common failure"],
            rows: [
              ["CDN", "Cache and serve near the user", "Cache misses from bad cache headers"],
              ["Load balancer", "Distribute traffic, health check", "Removing all instances during a bad deploy"],
              ["Reverse proxy", "TLS, compression, static files, buffering", "Timeouts shorter than the app's slowest route"],
              ["App server", "Run your code", "Blocked event loop, exhausted workers"],
              ["Database", "Persist and query", "Connection limit exhaustion, missing indexes"],
              ["Cache", "Fast reads for hot data", "Stampede after eviction"],
            ],
          },
        ],
      },
      {
        heading: "Where do connections become the bottleneck?",
        answer:
          "At the database, almost always, because each application instance holds a pool and instances multiply.",
        body: [
          {
            type: "p",
            text: "Ten application containers with a pool of 20 connections each means 200 connections to a database configured for 100. Under autoscaling this fails at exactly the moment traffic is highest. A connection pooler in front of the database — PgBouncer or a managed equivalent — decouples application scaling from database connection limits.",
          },
          {
            type: "list",
            items: [
              "Size pools deliberately: (instances × pool size) must stay under the database limit with headroom.",
              "Serverless functions need a pooler or a data proxy; each invocation otherwise wants its own connection.",
              "Set connection and statement timeouts so one stuck query cannot hold a connection forever.",
              "Monitor pool wait time — requests queueing for a connection look identical to a slow database from the outside.",
            ],
          },
        ],
      },
      {
        heading: "How should health checks be designed?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Liveness: is the process alive? Keep it trivial.
app.get("/healthz", (_, res) => res.status(200).send("ok"));

// Readiness: can this instance serve traffic right now?
app.get("/readyz", async (_, res) => {
  const checks = await Promise.allSettled([db.ping(), cache.ping()]);
  const ok = checks.every((c) => c.status === "fulfilled");
  res.status(ok ? 200 : 503).json({ ok, checks: checks.map((c) => c.status) });
});`,
          },
          {
            type: "callout",
            title: "Do not make liveness depend on the database",
            text: "If a shared database blip fails every instance's liveness check, the orchestrator restarts your entire fleet at once and turns a brief degradation into a full outage.",
          },
        ],
      },
      {
        heading: "How do you decide what to scale?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Measure first: is the time in the network, the app, or the database? Distributed tracing answers this in minutes.",
              "Cache before scaling. A correct cache header on a static asset beats another server.",
              "Scale stateless application instances horizontally; it is the easy axis.",
              "Scale the database last and carefully — read replicas for read-heavy load, partitioning only when genuinely needed.",
              "Remove work: an N+1 query fixed is worth more than a doubled instance count.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a reverse proxy in front of Node?",
        answer:
          "On a managed platform it is already there. Self-hosting, yes — Nginx or Caddy handles TLS, compression, static files and slow-client buffering far better than an application process should.",
      },
      {
        question: "What is the difference between a load balancer and a reverse proxy?",
        answer:
          "A load balancer distributes traffic across instances; a reverse proxy sits in front of servers handling TLS, caching and routing. Most modern tools do both, which is why the terms get mixed.",
      },
      {
        question: "How many application instances do I need?",
        answer:
          "Derive it from measured throughput per instance and your p99 latency target under load, then add headroom for a failed instance and a deploy. Load test rather than guess.",
      },
      {
        question: "What are Server-Timing headers?",
        answer:
          "A standard way to report server-side phase durations to the browser, visible in DevTools. Adding db, cache and render timings makes backend latency debuggable from the client.",
      },
    ],
    references: [
      { label: "MDN — Server-Timing", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server-Timing" },
      { label: "PgBouncer documentation", href: "https://www.pgbouncer.org/features.html" },
      { label: "Google SRE Book — Load balancing", href: "https://sre.google/sre-book/load-balancing-frontend/" },
    ],
    internalLinks: [
      { label: "Monolith vs microservices", href: "/blog/monolith-vs-microservices" },
      { label: "PostgreSQL connection pooling", href: "/blog/postgresql-connection-pooling" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "monolith-vs-microservices",
      "postgresql-connection-pooling",
      "observability-for-web-apps",
    ],
  },
];
