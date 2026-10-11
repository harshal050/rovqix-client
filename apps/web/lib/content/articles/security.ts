import type { Article } from "@rovqix/shared/lib/content/types";

export const securityArticles: Article[] = [
  {
    slug: "web-application-security-checklist",
    title: "The web application security checklist we run before every launch",
    seoTitle: "Web Application Security Checklist (2026)",
    description:
      "A practical pre-launch security checklist covering authentication, authorisation, input validation, headers, dependencies, secrets and logging.",
    excerpt:
      "Not a compliance document. This is the list we actually work through before a client site handles its first real user.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "web application security checklist",
    secondaryKeywords: [
      "security review checklist",
      "owasp checklist",
      "pre-launch security",
      "application hardening",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-08-01",
    answer:
      "Before launch, verify: authentication and session handling, authorisation enforced at the data layer, input validation on every endpoint, output encoding, security headers, dependency and secret hygiene, rate limiting, secure file uploads, error handling that does not leak internals, and logging that would let you investigate an incident.",
    takeaways: [
      "Authorisation bugs are the most common serious finding — check ownership on every mutation.",
      "Hiding UI is not access control; the endpoint remains reachable.",
      "Most breaches start with a known vulnerability or a leaked credential, not a novel exploit.",
      "If you cannot reconstruct who did what from your logs, you cannot investigate an incident.",
    ],
    sections: [
      {
        heading: "Authentication and session management",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Passwords hashed with bcrypt, scrypt or Argon2 at current parameters — never a raw hash function.",
              "Session tokens in HttpOnly, Secure, SameSite cookies, never in localStorage.",
              "Session id rotated on login and invalidated on password change and logout.",
              "Rate limiting and lockout on login, password reset and any credential endpoint.",
              "Identical responses whether or not an account exists, on login and reset.",
              "Multi-factor authentication available, and required for administrative accounts.",
              "Password reset tokens single-use, short-lived and stored hashed.",
            ],
          },
        ],
      },
      {
        heading: "Authorisation — the one most teams get wrong",
        answer:
          "Every request must be checked against the current user's permissions at the point the data is accessed, not in the UI or in middleware alone.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Vulnerable: any authenticated user can read any invoice
const invoice = await db.invoice.findUnique({ where: { id } });

// Correct: ownership is part of the query
const invoice = await db.invoice.findFirst({
  where: { id, organisationId: session.organisationId },
});
if (!invoice) notFound();   // do not reveal that it exists`,
          },
          {
            type: "list",
            items: [
              "Check ownership on every read and every mutation, including nested resources.",
              "Never accept a role, price, permission or tenant id from the client.",
              "Test with two accounts: can user A reach user B's records by changing an id?",
              "Return 404 rather than 403 where the existence of a record is itself sensitive.",
              "Apply the same checks to API routes, server actions and background jobs.",
            ],
          },
        ],
      },
      {
        heading: "Input, output and injection",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Validate every input against a schema on the server. Client validation is UX only.",
              "Use parameterised queries or an ORM — never string-concatenate SQL.",
              "Escape output by context. React escapes by default; dangerouslySetInnerHTML does not.",
              "Sanitise any HTML you must render, with an allow-list library, on the server.",
              "Validate and constrain redirects to an allow-list — open redirects enable phishing.",
              "Validate outbound URLs against SSRF: block internal ranges and cloud metadata endpoints.",
              "Verify file uploads by content, not extension, and re-encode images.",
            ],
          },
        ],
      },
      {
        heading: "Transport, headers and configuration",
        body: [
          {
            type: "list",
            items: [
              "HTTPS everywhere with HSTS, HTTP redirected permanently.",
              "Content-Security-Policy, X-Content-Type-Options, Referrer-Policy and a restrictive Permissions-Policy.",
              "CORS restricted to known origins — never a wildcard with credentials.",
              "Debug modes, verbose errors and source maps disabled in production.",
              "Admin interfaces not exposed on a guessable path without authentication.",
              "Default credentials changed everywhere, including databases and admin tools.",
            ],
          },
        ],
      },
      {
        heading: "Dependencies, secrets and monitoring",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Automated dependency scanning with a policy for how quickly criticals get patched.",
              "Lockfiles committed; builds reproducible.",
              "Secrets in a manager, injected at runtime, rotated on a schedule, never committed.",
              "Secret scanning with push protection on the repository.",
              "Audit logging of authentication events, permission changes and administrative actions.",
              "Alerting on repeated authentication failures and unusual access patterns.",
              "A documented process for reporting and handling a vulnerability disclosure.",
            ],
          },
          {
            type: "callout",
            title: "Test the checklist, do not read it",
            text: "Every item above should be verified by attempting the attack, not by confirming the code looks right. Create two accounts and try to reach each other's data. That single exercise finds more real issues than any static review.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How often should we run a security review?",
        answer:
          "Before launch, after any significant change to authentication or authorisation, and at least annually. Dependency scanning should run continuously in CI.",
      },
      {
        question: "Do small sites need this?",
        answer:
          "Attacks are automated and indiscriminate. A small site with a contact form and a login is scanned by bots within hours of going live; nobody has to target you specifically.",
      },
      {
        question: "Should we hire a penetration tester?",
        answer:
          "If you handle payments, personal data at scale, or have enterprise customers asking, yes. Fix the checklist items first so the engagement finds real issues rather than obvious ones.",
      },
      {
        question: "What is the single highest-value item here?",
        answer:
          "Authorisation checks at the data layer. Broken access control is consistently the most prevalent serious vulnerability class in real applications.",
      },
    ],
    references: [
      { label: "OWASP Top 10", href: "https://owasp.org/www-project-top-ten/" },
      { label: "OWASP — Application Security Verification Standard", href: "https://owasp.org/www-project-application-security-verification-standard/" },
      { label: "OWASP Cheat Sheet Series", href: "https://cheatsheetseries.owasp.org/" },
    ],
    internalLinks: [
      { label: "OWASP Top 10 explained", href: "/blog/owasp-top-10-explained" },
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
      { label: "Security headers that matter", href: "/blog/security-headers-guide" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "owasp-top-10-explained",
      "authentication-patterns-web-apps",
      "security-headers-guide",
    ],
  },

  {
    slug: "owasp-top-10-explained",
    title: "The OWASP Top 10, explained with the code that causes each one",
    seoTitle: "OWASP Top 10 Explained for Developers",
    description:
      "Each OWASP Top 10 category with a concrete example of the vulnerable pattern, the fix, and how to test for it in your own application.",
    excerpt:
      "The Top 10 is a list of categories, not bugs. Here is what each one looks like in a real codebase.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "owasp top 10",
    secondaryKeywords: [
      "broken access control",
      "injection vulnerability",
      "insecure design",
      "security misconfiguration",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-07-18",
    answer:
      "The OWASP Top 10 categorises the most critical web application security risks. Broken access control leads the list, followed by cryptographic failures, injection, insecure design, security misconfiguration, vulnerable components, authentication failures, integrity failures, logging failures and server-side request forgery.",
    takeaways: [
      "Broken access control is number one because it is both common and directly exploitable.",
      "Most categories are design problems, not missing library calls.",
      "Vulnerable dependencies are the easiest category to fix and the most neglected.",
      "Logging failures do not cause breaches; they make them unnoticed and uninvestigable.",
    ],
    sections: [
      {
        heading: "Access control and cryptographic failures",
        body: [
          {
            type: "p",
            text: "Broken access control means a user can act outside their permissions — reading another tenant's data by changing an id, calling an admin endpoint directly, or elevating their own role. The fix is always the same: enforce authorisation server-side, at the point of data access, based on the session rather than on anything the client sent.",
          },
          {
            type: "p",
            text: "Cryptographic failures mean sensitive data is exposed through weak or absent protection: passwords stored with a fast hash, personal data transmitted over HTTP, tokens in URLs, or home-grown encryption. Use TLS everywhere, a modern password hash, and vetted libraries — never invent a scheme.",
          },
        ],
      },
      {
        heading: "Injection and insecure design",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Injection: user input becomes part of the query
const rows = await db.query(\`SELECT * FROM users WHERE email = '\${email}'\`);

// Fixed: parameterised
const rows = await db.query("SELECT * FROM users WHERE email = $1", [email]);`,
          },
          {
            type: "p",
            text: "Injection covers SQL, NoSQL, command and template injection — anywhere untrusted input is interpreted rather than treated as data. Insecure design is different in kind: a flaw in the intended behaviour, such as a password reset that reveals whether an account exists, or a checkout that trusts a price from the client. No amount of input validation fixes a design that was wrong.",
          },
        ],
      },
      {
        heading: "Misconfiguration and vulnerable components",
        body: [
          {
            type: "list",
            items: [
              "Default credentials left in place on a database, admin panel or monitoring tool.",
              "Verbose error pages exposing stack traces, queries and file paths.",
              "Cloud storage buckets readable or writable by the public.",
              "Unnecessary features and endpoints enabled by default.",
              "Dependencies with known critical vulnerabilities, unpatched for months.",
              "Container images built from a base that has not been rebuilt in a year.",
            ],
          },
          {
            type: "callout",
            title: "The boring category is the dangerous one",
            text: "Most incidents we have investigated traced to an unpatched dependency or a misconfiguration, not a clever exploit. Automated scanning plus a patch policy addresses more real risk than any single code change.",
          },
        ],
      },
      {
        heading: "Authentication, integrity and logging",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Authentication failures: credential stuffing without rate limiting, weak reset flows, sessions that never expire, no MFA on admin accounts.",
              "Integrity failures: installing unverified packages, auto-updating from untrusted sources, deserialising untrusted data, CI pipelines that can be modified by anyone.",
              "Logging failures: no audit trail of authentication and permission changes, no alerting on repeated failures, logs without enough context to reconstruct events.",
            ],
          },
          {
            type: "p",
            text: "Logging is the category teams skip because it prevents nothing. It is what determines whether you discover an intrusion in an hour or in the breach notification you receive from someone else.",
          },
        ],
      },
      {
        heading: "Server-side request forgery",
        body: [
          {
            type: "p",
            text: "SSRF happens when your server fetches a URL supplied by a user — an avatar import, a webhook test, a link preview. An attacker points it at internal services or the cloud metadata endpoint and reads credentials your server can reach but they cannot.",
          },
          {
            type: "list",
            items: [
              "Allow-list permitted hosts rather than trying to block bad ones.",
              "Resolve the hostname and reject private, loopback and link-local addresses — including after redirects.",
              "Disable redirect following, or re-validate the target at every hop.",
              "Require IMDSv2 or equivalent on cloud instances so metadata cannot be read by a simple GET.",
              "Make outbound fetches from a network segment with no access to internal services.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is the Top 10 a complete security standard?",
        answer:
          "No — it is an awareness document of the most critical categories. For a comprehensive standard, use the OWASP Application Security Verification Standard, which is structured for actual verification.",
      },
      {
        question: "Which category should we address first?",
        answer:
          "Broken access control, then dependency management. Together they account for a large share of real-world exploitation and both are testable in an afternoon.",
      },
      {
        question: "Do frameworks protect us automatically?",
        answer:
          "Partially. Modern frameworks escape output, parameterise queries through their ORM and set some headers. None of them can decide whether the current user is allowed to see a record — that is always your code.",
      },
      {
        question: "How do we test for these?",
        answer:
          "Manual testing with two accounts for access control, automated dependency and secret scanning in CI, a security header check, and periodic penetration testing if your risk profile warrants it.",
      },
    ],
    references: [
      { label: "OWASP Top 10", href: "https://owasp.org/www-project-top-ten/" },
      { label: "OWASP — SSRF prevention cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html" },
      { label: "OWASP ASVS", href: "https://owasp.org/www-project-application-security-verification-standard/" },
    ],
    internalLinks: [
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Preventing XSS", href: "/blog/xss-prevention-guide" },
      { label: "Preventing SQL injection", href: "/blog/sql-injection-prevention" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "web-application-security-checklist",
      "xss-prevention-guide",
      "sql-injection-prevention",
    ],
  },

  {
    slug: "xss-prevention-guide",
    title: "Preventing XSS in modern JavaScript applications",
    seoTitle: "XSS Prevention Guide for React and Next.js",
    description:
      "The three types of cross-site scripting, why React is not automatically safe, safe HTML rendering, and using CSP as a second line of defence.",
    excerpt:
      "React escapes text by default, which handles most XSS. The remaining cases are the ones people write deliberately.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "xss prevention",
    secondaryKeywords: [
      "cross site scripting react",
      "dangerouslySetInnerHTML",
      "dompurify",
      "content security policy xss",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-07-04",
    answer:
      "Cross-site scripting occurs when untrusted input is executed as code in a user's browser. React escapes interpolated text automatically, so the real risks are dangerouslySetInnerHTML, unvalidated href and src attributes, injected script or style content, and DOM manipulation outside React. Sanitise HTML with a vetted library and add a Content-Security-Policy as defence in depth.",
    takeaways: [
      "React escapes text, not attributes you construct or HTML you inject deliberately.",
      "javascript: URLs in an href are executable — validate the protocol.",
      "Sanitise on the server or at render time, never only on input.",
      "A strict CSP turns many XSS bugs into blocked console errors.",
    ],
    sections: [
      {
        heading: "What are the three types of XSS?",
        body: [
          {
            type: "table",
            head: ["Type", "How it works", "Example"],
            rows: [
              ["Stored", "Malicious input saved and served to others", "A script in a profile bio"],
              ["Reflected", "Input echoed back in the response", "A search term rendered unescaped"],
              ["DOM-based", "Client-side code writes untrusted data into the DOM", "location.hash into innerHTML"],
            ],
          },
          {
            type: "p",
            text: "Stored XSS is the most damaging because it affects every visitor to the page. DOM-based XSS is the easiest to miss because the payload may never reach the server, so server-side filtering never sees it.",
          },
        ],
      },
      {
        heading: "Where is React actually vulnerable?",
        body: [
          {
            type: "code",
            lang: "tsx",
            code: `// Safe: React escapes interpolated values
<p>{userInput}</p>

// Unsafe: raw HTML injection
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// Unsafe: javascript: URLs execute on click
<a href={userProvidedUrl}>Visit</a>

// Safe: validate the protocol first
const safeUrl = /^https?:\\/\\//.test(url) ? url : "#";`,
          },
          {
            type: "list",
            items: [
              "dangerouslySetInnerHTML — the main one, and the name is a fair warning.",
              "href, src, action and formAction built from user input — javascript: and data: URLs are executable.",
              "Spreading unvalidated props onto an element, which can inject event handlers.",
              "Direct DOM manipulation in refs or effects with innerHTML.",
              "Server-rendered JSON embedded in a script tag without escaping the closing tag sequence.",
            ],
          },
        ],
      },
      {
        heading: "How should you render user HTML safely?",
        answer:
          "Sanitise with a maintained allow-list library at render time, ideally on the server.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `import DOMPurify from "isomorphic-dompurify";

const clean = DOMPurify.sanitize(userHtml, {
  ALLOWED_TAGS: ["p", "b", "i", "em", "strong", "a", "ul", "ol", "li", "code"],
  ALLOWED_ATTR: ["href", "title"],
  ALLOWED_URI_REGEXP: /^https?:/i,
});`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Use an allow-list, never a block-list. Attackers have more encodings than you have filters.",
              "Sanitise at render, not only at input — data can arrive through imports, APIs or migrations.",
              "Prefer markdown with HTML disabled over accepting raw HTML at all.",
              "Never sanitise with a regular expression. This has never worked.",
            ],
          },
        ],
      },
      {
        heading: "How does CSP help?",
        body: [
          {
            type: "p",
            text: "A Content-Security-Policy tells the browser which sources may execute. With a strict nonce-based policy, an injected inline script has no valid nonce and is blocked — the XSS bug still exists, but it cannot execute.",
          },
          {
            type: "code",
            lang: "http",
            code: `Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-{random}' 'strict-dynamic';
  style-src 'self' 'nonce-{random}';
  img-src 'self' data: https:;
  object-src 'none';
  base-uri 'none';
  frame-ancestors 'none'`,
          },
          {
            type: "callout",
            title: "unsafe-inline defeats the purpose",
            text: "A policy containing script-src 'unsafe-inline' provides essentially no XSS protection. Use per-request nonces — Next.js middleware can generate one and inject it into the header and the script tags.",
          },
        ],
      },
      {
        heading: "How do you test for XSS?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Submit a harmless payload into every input and see where it renders unescaped.",
              "Test URL parameters, path segments and fragment identifiers, not just form fields.",
              "Check anywhere content crosses a boundary: imports, API responses, webhooks, admin-entered content.",
              "Grep the codebase for dangerouslySetInnerHTML and innerHTML and justify every occurrence.",
              "Deploy CSP in report-only mode first and review what it would have blocked.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is React immune to XSS?",
        answer:
          "No. It escapes interpolated text, which removes the most common cases, but dangerouslySetInnerHTML, unvalidated URLs and direct DOM manipulation all bypass that protection.",
      },
      {
        question: "Should I sanitise on input or output?",
        answer:
          "Output, primarily. Sanitising only on input means data arriving through any other path is unprotected, and it destroys the original content irreversibly.",
      },
      {
        question: "Do HttpOnly cookies stop XSS damage?",
        answer:
          "They stop session theft via document.cookie, which is significant. An attacker with script execution can still perform actions as the user, so it is mitigation rather than prevention.",
      },
      {
        question: "Is CSP hard to deploy?",
        answer:
          "The first strict policy takes effort, especially with third-party scripts. Start in report-only mode, fix what it flags, then enforce. It is one of the highest-value security headers.",
      },
    ],
    references: [
      { label: "OWASP — XSS prevention cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
      { label: "MDN — Content Security Policy", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" },
      { label: "DOMPurify", href: "https://github.com/cure53/DOMPurify" },
    ],
    internalLinks: [
      { label: "Security headers that matter", href: "/blog/security-headers-guide" },
      { label: "OWASP Top 10 explained", href: "/blog/owasp-top-10-explained" },
      { label: "CSRF protection explained", href: "/blog/csrf-protection-explained" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "security-headers-guide",
      "csrf-protection-explained",
      "owasp-top-10-explained",
    ],
  },

  {
    slug: "csrf-protection-explained",
    title: "CSRF protection: what SameSite cookies do and do not solve",
    seoTitle: "CSRF Protection Explained (SameSite and Tokens)",
    description:
      "How cross-site request forgery works, why SameSite cookies mitigate but do not eliminate it, and when you still need synchroniser tokens.",
    excerpt:
      "SameSite=Lax handles most CSRF. 'Most' is doing real work in that sentence, and the gap is where the interesting attacks live.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "csrf protection",
    secondaryKeywords: [
      "samesite cookie",
      "csrf token",
      "cross site request forgery",
      "double submit cookie",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-20",
    answer:
      "Cross-site request forgery tricks a logged-in user's browser into making a state-changing request to your site. SameSite=Lax cookies block most cross-site POST requests by default, but you still need explicit protection for cookie-authenticated APIs, cross-origin flows, and any endpoint accepting simple content types.",
    takeaways: [
      "CSRF only matters when the browser attaches credentials automatically — cookies.",
      "SameSite=Lax is a strong default but not a complete answer.",
      "Token-based auth in an Authorization header is not vulnerable to classic CSRF.",
      "Never perform state changes on a GET request.",
    ],
    sections: [
      {
        heading: "How does CSRF work?",
        body: [
          {
            type: "p",
            text: "A user is logged into your site. They visit a malicious page, which submits a form to your domain. The browser attaches their session cookie automatically because that is how cookies work. Your server sees a valid session and performs the action — a transfer, a password change, a deletion.",
          },
          {
            type: "code",
            lang: "html",
            code: `<!-- On attacker.com, auto-submitted -->
<form action="https://yourbank.example/transfer" method="POST">
  <input type="hidden" name="to" value="attacker">
  <input type="hidden" name="amount" value="10000">
</form>
<script>document.forms[0].submit()</script>`,
          },
          {
            type: "p",
            text: "The attacker cannot read the response — the same-origin policy prevents that. They do not need to. The side effect is the attack.",
          },
        ],
      },
      {
        heading: "What does SameSite actually do?",
        answer:
          "It tells the browser whether to attach a cookie on requests originating from another site.",
        body: [
          {
            type: "table",
            head: ["Value", "Cookie sent on cross-site…", "Trade-off"],
            rows: [
              ["Strict", "Never, including top-level navigation", "Users arriving from an external link appear logged out"],
              ["Lax", "Only top-level GET navigation", "Good balance; the common default"],
              ["None", "Always (requires Secure)", "Needed for genuine cross-site use; no CSRF protection"],
            ],
          },
          {
            type: "list",
            items: [
              "Lax blocks cross-site POST, PUT, DELETE and fetches with credentials.",
              "It does not protect endpoints that change state on GET — another reason never to do that.",
              "It does not help if you must set SameSite=None for a legitimate cross-site integration.",
              "Older or unusual clients may not enforce it, so it is a strong mitigation rather than a guarantee.",
            ],
          },
        ],
      },
      {
        heading: "When do you still need tokens?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Any cookie-authenticated endpoint that must accept cross-site requests.",
              "High-value operations where defence in depth is warranted: payments, password and email changes, permission grants.",
              "Applications embedded in iframes or serving multiple origins.",
              "Anywhere you cannot guarantee SameSite is being applied by every client.",
            ],
          },
          {
            type: "code",
            lang: "ts",
            code: `// Synchroniser token: server-generated, tied to the session
const token = crypto.randomBytes(32).toString("base64url");
session.csrfToken = token;

// Verify on every state-changing request, in constant time
const submitted = request.headers.get("x-csrf-token") ?? formData.get("_csrf");
if (!submitted || !timingSafeEqual(Buffer.from(submitted), Buffer.from(session.csrfToken))) {
  return new Response("Invalid CSRF token", { status: 403 });
}`,
          },
        ],
      },
      {
        heading: "What about frameworks and modern APIs?",
        body: [
          {
            type: "list",
            items: [
              "Next.js server actions verify the request origin and use unguessable action identifiers, which addresses classic CSRF for actions.",
              "APIs authenticated with a bearer token in a header are not vulnerable, because the browser does not attach that header automatically.",
              "A custom header requirement (such as X-Requested-With) forces a CORS preflight for non-simple requests, which provides useful protection.",
              "Checking Origin and Sec-Fetch-Site headers is a lightweight additional layer supported by all current browsers.",
            ],
          },
          {
            type: "callout",
            title: "Do not disable CSRF protection to fix a bug",
            text: "The most common way CSRF protection fails is that someone turned it off to make an integration work and never turned it back on. Fix the integration instead.",
          },
        ],
      },
      {
        heading: "How do you test it?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Build a simple HTML page on a different origin that posts to your state-changing endpoint.",
              "Log in to your application in the same browser, then open that page.",
              "If the action succeeds, you have a CSRF vulnerability.",
              "Repeat for every endpoint that changes state, including ones only the UI calls.",
              "Verify that requests with a missing or wrong token are rejected, not merely logged.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is CSRF still relevant with SameSite defaults?",
        answer:
          "Less common, but yes. Cross-site integrations, GET-based state changes, and misconfigured cookies all leave gaps, and high-value endpoints warrant explicit protection regardless.",
      },
      {
        question: "Do single-page apps need CSRF protection?",
        answer:
          "Only if they authenticate with cookies. With a bearer token in an Authorization header, classic CSRF does not apply — though you then have to think about token storage instead.",
      },
      {
        question: "What is the double-submit cookie pattern?",
        answer:
          "Sending the token both as a cookie and in a header or field, then comparing. It avoids server-side session storage but is weaker than a synchroniser token if an attacker can set cookies on your domain.",
      },
      {
        question: "Does CORS prevent CSRF?",
        answer:
          "No. CORS controls whether JavaScript can read a response. A form submission does not need to read anything, and forms are not subject to CORS.",
      },
    ],
    references: [
      { label: "OWASP — CSRF prevention cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html" },
      { label: "MDN — SameSite cookies", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite" },
      { label: "MDN — Sec-Fetch-Site", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-Site" },
    ],
    internalLinks: [
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
      { label: "Preventing XSS", href: "/blog/xss-prevention-guide" },
      { label: "Next.js server actions guide", href: "/blog/nextjs-server-actions-guide" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "authentication-patterns-web-apps",
      "xss-prevention-guide",
      "nextjs-server-actions-guide",
    ],
  },

  {
    slug: "sql-injection-prevention",
    title: "SQL injection in 2026: still happening, still preventable in one line",
    seoTitle: "SQL Injection Prevention: A Developer's Guide",
    description:
      "How SQL injection works, why ORMs are not automatically safe, parameterised queries, dynamic query building and least-privilege database users.",
    excerpt:
      "Parameterised queries have solved this for twenty years. Injection persists because of the one query someone built with string concatenation.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "sql injection prevention",
    secondaryKeywords: [
      "parameterized queries",
      "orm raw query safety",
      "database least privilege",
      "nosql injection",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-06",
    answer:
      "SQL injection happens when user input is concatenated into a query so the database interprets it as code. Prevent it by always using parameterised queries or an ORM's safe query builder, validating identifiers against an allow-list when table or column names must be dynamic, and running the application with a least-privilege database user.",
    takeaways: [
      "Parameterised queries separate code from data — that separation is the entire fix.",
      "ORMs are safe until you use their raw query escape hatch.",
      "Table and column names cannot be parameterised; use an allow-list.",
      "A least-privilege database user limits the damage when something else goes wrong.",
    ],
    sections: [
      {
        heading: "How does injection actually work?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Vulnerable
const q = \`SELECT * FROM users WHERE email = '\${email}' AND active = true\`;
// email = "' OR '1'='1' --"
// becomes: SELECT * FROM users WHERE email = '' OR '1'='1' --' AND active = true

// Safe: the driver sends the query and the values separately
const rows = await db.query(
  "SELECT * FROM users WHERE email = $1 AND active = true",
  [email]
);`,
          },
          {
            type: "p",
            text: "With parameters, the database receives the query structure first and the values second. There is no parsing step in which a value could become syntax, which is why this is a complete fix rather than a filter that might miss something.",
          },
        ],
      },
      {
        heading: "Where do ORMs leave gaps?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Raw query methods — safe only if you use their parameter binding rather than template concatenation.",
              "Dynamic ORDER BY and column selection, which cannot be parameterised.",
              "Filter objects built directly from request bodies, which can inject operators in some query languages.",
              "Raw fragments inside otherwise safe builder chains.",
            ],
          },
          {
            type: "code",
            lang: "ts",
            code: `// Unsafe even with an ORM
await prisma.$queryRawUnsafe(\`SELECT * FROM users WHERE id = \${id}\`);

// Safe: tagged template binds parameters
await prisma.$queryRaw\`SELECT * FROM users WHERE id = \${id}\`;

// Dynamic ordering: allow-list, never interpolate
const columns = { name: "name", created: "created_at" } as const;
const orderBy = columns[input.sort] ?? "created_at";`,
          },
        ],
      },
      {
        heading: "What about NoSQL injection?",
        answer:
          "Document databases are vulnerable too, when a request body is passed directly into a query and can smuggle operators.",
        body: [
          {
            type: "code",
            lang: "js",
            code: `// Vulnerable: body is { "email": "a@b.com", "password": { "$ne": null } }
await users.findOne({ email: body.email, password: body.password });
// matches any user whose password is not null

// Safe: validate types before querying
const { email, password } = loginSchema.parse(body);   // both must be strings
await users.findOne({ email, password: hash(password) });`,
          },
          {
            type: "p",
            text: "The fix is the same principle: never pass unvalidated structures into a query. A schema that requires a string rejects the object carrying the operator.",
          },
        ],
      },
      {
        heading: "What defence in depth applies?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Least-privilege database user: the application should not own DDL rights or be a superuser.",
              "Separate read-only credentials for reporting and analytics workloads.",
              "Row-level security for multi-tenant data where the database can enforce isolation.",
              "Statement timeouts so an injected expensive query cannot run indefinitely.",
              "Query logging and alerting on unusual patterns.",
              "Never return raw database errors to clients — they guide an attacker directly.",
            ],
          },
          {
            type: "callout",
            title: "Check your application's database grants",
            text: "Many applications run as the database owner because that is what the tutorial did. If the application never creates tables at runtime, it does not need the permission to drop them.",
          },
        ],
      },
      {
        heading: "How do you find existing vulnerabilities?",
        body: [
          {
            type: "list",
            items: [
              "Grep for string concatenation and template literals near query calls.",
              "Search for every raw or unsafe query method your ORM exposes and review each occurrence.",
              "Test inputs with a single quote and observe whether an error surfaces — an error is a signal.",
              "Enable static analysis rules that flag string-built queries in CI.",
              "Cover the paths people forget: search, sorting, filters, exports, admin tools and legacy endpoints.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are prepared statements the same as parameterised queries?",
        answer:
          "Closely related. A prepared statement is compiled once and executed with different parameters; parameterisation is the property that keeps values separate from the query structure. Both prevent injection.",
      },
      {
        question: "Is escaping input good enough?",
        answer:
          "No. Escaping depends on getting the character set, quoting context and database dialect exactly right. Parameterisation removes the problem instead of managing it.",
      },
      {
        question: "Can stored procedures prevent injection?",
        answer:
          "Only if they use parameters internally. A stored procedure that builds dynamic SQL from its arguments is exactly as vulnerable as application code doing the same.",
      },
      {
        question: "How can I parameterise a table name?",
        answer:
          "You cannot — parameters bind values, not identifiers. Map user input to a fixed allow-list of permitted names in code.",
      },
    ],
    references: [
      { label: "OWASP — SQL injection prevention cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html" },
      { label: "PostgreSQL — PREPARE", href: "https://www.postgresql.org/docs/current/sql-prepare.html" },
      { label: "OWASP — Injection prevention", href: "https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html" },
    ],
    internalLinks: [
      { label: "OWASP Top 10 explained", href: "/blog/owasp-top-10-explained" },
      { label: "PostgreSQL query optimization", href: "/blog/postgresql-query-optimization" },
      { label: "API security best practices", href: "/blog/api-security-best-practices" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "owasp-top-10-explained",
      "api-security-best-practices",
      "postgresql-query-optimization",
    ],
  },

  {
    slug: "security-headers-guide",
    title: "Security headers: which ones matter and what to set them to",
    seoTitle: "Security Headers Guide: CSP, HSTS and More",
    description:
      "Content-Security-Policy, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy and frame protection — what each does and safe values.",
    excerpt:
      "Six headers, most of them one line each. They will not fix a vulnerability, but several of them turn one into a non-event.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "security headers",
    secondaryKeywords: [
      "content security policy",
      "hsts header",
      "permissions policy",
      "referrer policy",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-23",
    answer:
      "The security headers worth setting on every site are Content-Security-Policy, Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy, Permissions-Policy and frame protection via CSP frame-ancestors. CSP is by far the most valuable and the only one requiring real configuration effort.",
    takeaways: [
      "Five of the six are a single line and can be set today.",
      "CSP takes work but converts most XSS bugs into blocked requests.",
      "frame-ancestors in CSP supersedes X-Frame-Options.",
      "Test with report-only mode before enforcing anything that can break a page.",
    ],
    sections: [
      {
        heading: "Which headers should every site send?",
        body: [
          {
            type: "table",
            head: ["Header", "Protects against", "Safe starting value"],
            rows: [
              ["Content-Security-Policy", "XSS, injection, data exfiltration", "Nonce-based, strict-dynamic"],
              ["Strict-Transport-Security", "Protocol downgrade, cookie interception", "max-age=31536000; includeSubDomains"],
              ["X-Content-Type-Options", "MIME sniffing", "nosniff"],
              ["Referrer-Policy", "URL leakage to third parties", "strict-origin-when-cross-origin"],
              ["Permissions-Policy", "Unwanted API access by embeds", "camera=(), microphone=(), geolocation=()"],
              ["CSP frame-ancestors", "Clickjacking", "'none' or 'self'"],
            ],
          },
        ],
      },
      {
        heading: "How do you configure headers in Next.js?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// next.config.ts
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
];

export default {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};`,
            caption: "CSP with a per-request nonce belongs in middleware, not in static config.",
          },
        ],
      },
      {
        heading: "How do you build a strict CSP?",
        answer:
          "Generate a random nonce per request, include it in the policy and on every script tag, and use strict-dynamic so nonce-loaded scripts can load their own dependencies.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// middleware.ts
const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
const csp = [
  \`default-src 'self'\`,
  \`script-src 'self' 'nonce-\${nonce}' 'strict-dynamic'\`,
  \`style-src 'self' 'nonce-\${nonce}'\`,
  \`img-src 'self' data: https:\`,
  \`font-src 'self'\`,
  \`connect-src 'self'\`,
  \`object-src 'none'\`,
  \`base-uri 'none'\`,
  \`frame-ancestors 'none'\`,
  \`upgrade-insecure-requests\`,
].join("; ");`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Deploy as Content-Security-Policy-Report-Only first and collect violations for a week.",
              "Fix legitimate violations by adding nonces or explicit sources — not by adding unsafe-inline.",
              "Enforce once the report stream is quiet.",
              "Keep a reporting endpoint enabled after enforcement so new violations surface.",
            ],
          },
          {
            type: "callout",
            title: "Third-party scripts are the hard part",
            text: "Most CSP projects stall on a tag manager that injects inline scripts. strict-dynamic helps, and some vendors document a CSP-compatible setup. Anything that cannot work with a strict policy is worth re-evaluating on those grounds alone.",
          },
        ],
      },
      {
        heading: "What about cookies and CORS?",
        body: [
          {
            type: "list",
            items: [
              "Cookies: HttpOnly, Secure, SameSite=Lax or Strict, with the __Host- prefix where possible.",
              "CORS: an explicit origin allow-list, never a reflected origin with credentials enabled.",
              "Cross-Origin-Opener-Policy: same-origin isolates your browsing context.",
              "Cross-Origin-Resource-Policy: same-origin prevents other sites embedding your resources.",
              "Do not send X-Powered-By or detailed server version headers.",
            ],
          },
        ],
      },
      {
        heading: "How do you verify them?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Run your production URL through an online security header scanner.",
              "Check headers on every response type — HTML, API, static assets, error pages.",
              "Confirm they survive your CDN; some platforms strip or override headers.",
              "Add an automated check in CI asserting the presence of each required header.",
              "Re-check after any platform or CDN configuration change.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do security headers slow down a site?",
        answer:
          "No measurably. They add a few hundred bytes per response. CSP has a trivial parsing cost that is not observable.",
      },
      {
        question: "Is X-XSS-Protection still needed?",
        answer:
          "No. The browser XSS auditors it controlled have been removed, and in some configurations the header introduced its own issues. Use CSP instead.",
      },
      {
        question: "Should I use X-Frame-Options or frame-ancestors?",
        answer:
          "frame-ancestors in CSP is the modern mechanism and is more flexible. Sending X-Frame-Options as well is harmless for very old clients.",
      },
      {
        question: "What does Permissions-Policy do?",
        answer:
          "It controls which browser features your page and its embedded frames may use — camera, microphone, geolocation and others. Denying what you do not use limits what a compromised embed can request.",
      },
    ],
    references: [
      { label: "MDN — HTTP security headers", href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers" },
      { label: "OWASP — Secure headers project", href: "https://owasp.org/www-project-secure-headers/" },
      { label: "web.dev — Strict CSP", href: "https://web.dev/articles/strict-csp" },
    ],
    internalLinks: [
      { label: "Preventing XSS", href: "/blog/xss-prevention-guide" },
      { label: "HTTPS and TLS certificates", href: "/blog/https-tls-certificates" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "xss-prevention-guide",
      "https-tls-certificates",
      "web-application-security-checklist",
    ],
  },

  {
    slug: "dependency-security-supply-chain",
    title: "Dependency security: the supply chain risk in your node_modules",
    seoTitle: "Dependency and Supply Chain Security for npm",
    description:
      "How to evaluate packages before installing, keep dependencies patched without breaking things, and defend against typosquatting and compromised maintainers.",
    excerpt:
      "Your application is mostly other people's code. The security question is not whether you trust it, but what happens when one of them is compromised.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "dependency security",
    secondaryKeywords: [
      "npm supply chain attack",
      "npm audit",
      "lockfile security",
      "typosquatting packages",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-09",
    answer:
      "Reduce supply chain risk by installing fewer dependencies, evaluating each before adoption, committing lockfiles and installing with npm ci, enabling automated vulnerability alerts with a defined patch window, pinning or reviewing install scripts, and generating an SBOM so you can answer exposure questions quickly.",
    takeaways: [
      "Every dependency is code you are shipping and did not review.",
      "npm ci with a committed lockfile is a security control, not just a build convenience.",
      "Install scripts run arbitrary code at install time — including in CI.",
      "The realistic defence is fast patching plus a small dependency count.",
    ],
    sections: [
      {
        heading: "How do you evaluate a package before installing?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "How many transitive dependencies does it bring? A package with sixty is sixty more risks.",
              "When was it last published, and are issues being answered?",
              "How many maintainers, and is the repository linked and matching the published code?",
              "Does it need install scripts? Those run arbitrary code on every install.",
              "Could you write the needed part yourself in fifty lines? Sometimes the answer is yes.",
              "Is the name a near-miss for a popular package? Check character by character.",
            ],
          },
          {
            type: "callout",
            title: "The left-pad principle still applies",
            text: "A one-function dependency has the same compromise potential as a large framework, with far less value. The lowest-effort supply chain improvement most teams can make is deleting trivial dependencies.",
          },
        ],
      },
      {
        heading: "What does a safe install process look like?",
        body: [
          {
            type: "code",
            lang: "bash",
            code: `# Reproducible install from the lockfile — fails if it is out of sync
npm ci

# Block install scripts in CI, then run them only for packages you trust
npm ci --ignore-scripts

# Audit and see what is actually exploitable in your usage
npm audit --omit=dev`,
          },
          {
            type: "list",
            items: [
              "Commit the lockfile and never regenerate it casually in a pull request.",
              "Use npm ci in CI so a transitive version cannot change silently between builds.",
              "Consider a minimum release age policy so a freshly-published compromised version is not installed immediately.",
              "Use a private registry proxy for larger organisations, with an allow-list and caching.",
            ],
          },
        ],
      },
      {
        heading: "How should vulnerabilities be triaged?",
        body: [
          {
            type: "table",
            head: ["Severity", "Response window", "Action"],
            rows: [
              ["Critical, reachable", "Same day", "Patch and deploy immediately"],
              ["High, reachable", "Within a week", "Patch in the next release"],
              ["High, not reachable", "Next scheduled update", "Document why it is not exploitable"],
              ["Moderate / low", "Batched monthly", "Update with routine maintenance"],
            ],
          },
          {
            type: "p",
            text: "'Reachable' matters. A vulnerability in a build-time tool that never runs in production is a different risk from one in your request path. Note the reasoning — an unexplained ignored advisory looks identical to a neglected one six months later.",
          },
        ],
      },
      {
        heading: "What are the attack patterns?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Typosquatting: a package named one character away from a popular one.",
              "Maintainer account compromise: a legitimate package publishes a malicious version.",
              "Dependency confusion: a public package with the same name as your internal one, resolved preferentially.",
              "Malicious install scripts that exfiltrate environment variables during npm install — often from CI, where the secrets are.",
              "Protestware: a maintainer intentionally breaking or altering behaviour.",
            ],
          },
          {
            type: "p",
            text: "CI is the highest-value target because it holds deployment credentials. Restrict what CI can access, use short-lived federated credentials, and consider running installs with scripts disabled.",
          },
        ],
      },
      {
        heading: "What should be automated?",
        body: [
          {
            type: "list",
            items: [
              "Dependency update pull requests, grouped and scheduled so they are reviewable.",
              "Vulnerability scanning in CI, failing on critical severity.",
              "SBOM generation and storage per release.",
              "Secret scanning with push protection, since a leaked token often accompanies a dependency incident.",
              "An alert if a new dependency is added without a note in the pull request description.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I fix every npm audit warning?",
        answer:
          "No. Many are in development dependencies or unreachable code paths. Triage by exploitability in your context, and document the ones you consciously accept.",
      },
      {
        question: "Are pinned exact versions safer?",
        answer:
          "They prevent surprise changes but also prevent automatic security patches. A lockfile plus automated update pull requests gives you reproducibility and a review step.",
      },
      {
        question: "How do I reduce dependency count?",
        answer:
          "Audit what each is used for. Small utilities are often replaceable with a few lines or a native API. The bundle and the risk shrink together.",
      },
      {
        question: "What is dependency confusion?",
        answer:
          "When a package manager resolves an internal package name to a public registry version of the same name. Prevent it by scoping internal packages and configuring registry resolution explicitly.",
      },
    ],
    references: [
      { label: "OpenSSF — Best practices", href: "https://openssf.org/resources/guides/" },
      { label: "npm — Auditing package dependencies", href: "https://docs.npmjs.com/auditing-package-dependencies-for-security-vulnerabilities" },
      { label: "OWASP — Vulnerable and outdated components", href: "https://owasp.org/Top10/A06_2021-Vulnerable_and_Outdated_Components/" },
    ],
    internalLinks: [
      { label: "Container security basics", href: "/blog/container-security-basics" },
      { label: "Secrets management for teams", href: "/blog/secrets-management-guide" },
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "container-security-basics",
      "secrets-management-guide",
      "ci-cd-pipeline-design",
    ],
  },

  {
    slug: "api-security-best-practices",
    title: "API security: authentication, authorisation and abuse prevention",
    seoTitle: "API Security Best Practices",
    description:
      "Securing REST and GraphQL APIs — authentication choices, per-object authorisation, input validation, rate limiting, and preventing data over-exposure.",
    excerpt:
      "An API has no UI to hide behind. Every endpoint is directly reachable, and that is the correct way to think about securing one.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "api security",
    secondaryKeywords: [
      "api authentication",
      "broken object level authorization",
      "api abuse prevention",
      "owasp api top 10",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-25",
    answer:
      "Secure an API by authenticating every request, authorising every object access against the caller's identity, validating input against a schema, limiting what each response exposes, rate limiting per identity, and logging enough to detect abuse. Broken object-level authorisation is the most common and most serious API vulnerability.",
    takeaways: [
      "Authenticated does not mean authorised — check ownership per object, every time.",
      "Do not return fields the caller does not need; filter server-side, not in the client.",
      "Mass assignment lets a caller set fields you never intended to expose.",
      "Rate limit by identity, and treat unauthenticated endpoints as the highest risk.",
    ],
    sections: [
      {
        heading: "What is broken object-level authorisation?",
        answer:
          "An endpoint that returns or modifies a resource based on an id supplied by the caller, without checking that the caller may access that resource.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Vulnerable: any authenticated caller can read any order
app.get("/orders/:id", requireAuth, async (req, res) => {
  res.json(await db.order.findUnique({ where: { id: req.params.id } }));
});

// Correct: scope the query to the caller's organisation
app.get("/orders/:id", requireAuth, async (req, res) => {
  const order = await db.order.findFirst({
    where: { id: req.params.id, organisationId: req.user.organisationId },
  });
  if (!order) return res.status(404).end();
  res.json(order);
});`,
          },
          {
            type: "list",
            items: [
              "Test it directly: authenticate as user A and request user B's resource ids.",
              "Sequential integer ids make enumeration trivial — use UUIDs, but never rely on them as security.",
              "Apply the same check to nested resources, bulk endpoints, exports and search.",
              "Return 404 rather than 403 where existence is itself sensitive information.",
            ],
          },
        ],
      },
      {
        heading: "How should authentication be handled?",
        body: [
          {
            type: "table",
            head: ["Method", "Good for", "Watch out for"],
            rows: [
              ["Session cookie", "First-party browser clients", "Needs CSRF consideration"],
              ["Bearer token (JWT)", "Mobile apps, service-to-service", "Revocation; verify signature and claims"],
              ["API key", "Server-to-server integrations", "Rotation, scoping, transmission in headers"],
              ["OAuth 2.1 + PKCE", "Third-party delegated access", "Complexity; exact redirect matching"],
              ["mTLS", "High-trust internal services", "Certificate lifecycle management"],
            ],
          },
          {
            type: "list",
            items: [
              "Verify the signature, algorithm, issuer, audience and expiry on every token — not just the signature.",
              "Never accept credentials in a query string; they end up in logs and referrer headers.",
              "Scope API keys to specific permissions and specific resources, and make rotation self-service.",
              "Keep token lifetimes short and refresh explicitly.",
            ],
          },
        ],
      },
      {
        heading: "How do you prevent data over-exposure?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Define explicit response shapes. Returning the whole database row leaks internal fields, password hashes and audit columns.",
              "Filter at the query, not in the client — 'the UI does not display it' is not a control.",
              "Prevent mass assignment: accept only an explicit list of writable fields from the request body.",
              "Never accept role, tenant, price or status from the client without server-side authorisation.",
              "Apply field-level permissions where different roles see different subsets.",
            ],
          },
          {
            type: "code",
            lang: "ts",
            code: `// Mass assignment: a caller can set role: "admin"
await db.user.update({ where: { id }, data: req.body });

// Safe: parse to an explicit shape first
const data = updateProfileSchema.parse(req.body);  // name, avatarUrl only
await db.user.update({ where: { id }, data });`,
          },
        ],
      },
      {
        heading: "How do you prevent abuse?",
        body: [
          {
            type: "list",
            items: [
              "Rate limit by authenticated identity, with tighter limits on unauthenticated endpoints.",
              "Cap request body size and pagination limits — an uncapped limit parameter is a denial-of-service vector.",
              "For GraphQL, enforce query depth and complexity limits and consider disabling introspection publicly.",
              "Add per-account concurrency limits for expensive operations such as exports.",
              "Monitor for enumeration patterns: many 404s from one identity is a signal.",
              "Return consistent timing on authentication paths so responses do not leak account existence.",
            ],
          },
          {
            type: "callout",
            title: "Log enough to investigate",
            text: "Authentication events, permission denials, administrative actions and unusual volume, all with a request id and identity. Without those, an abuse report is unanswerable.",
          },
        ],
      },
      {
        heading: "What should be in an API security review?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Enumerate every endpoint, including undocumented and legacy ones. You cannot secure what nobody remembers.",
              "For each: who may call it, what it returns, what it can modify.",
              "Test object-level authorisation with two accounts on every resource-scoped endpoint.",
              "Test mass assignment by adding unexpected fields to request bodies.",
              "Verify rate limits actually apply, including behind a CDN.",
              "Check that errors do not leak stack traces, queries or internal hostnames.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are UUIDs enough to protect resources?",
        answer:
          "No. They make enumeration impractical but are not authorisation. Ids leak through logs, referrers, shared links and support tickets. Always check ownership.",
      },
      {
        question: "Should API keys expire?",
        answer:
          "Ideally yes, with self-service rotation and overlapping validity so rotation causes no downtime. At minimum, make revocation immediate and visible.",
      },
      {
        question: "How do I secure a public API?",
        answer:
          "Authenticate everything, scope keys narrowly, rate limit aggressively per key, document limits clearly, and monitor for anomalous usage per account.",
      },
      {
        question: "Is GraphQL less secure than REST?",
        answer:
          "It has a different risk profile: flexible queries mean depth and complexity attacks, and per-field authorisation is easy to get wrong. Neither is inherently less secure; GraphQL requires more deliberate hardening.",
      },
    ],
    references: [
      { label: "OWASP API Security Top 10", href: "https://owasp.org/API-Security/editions/2023/en/0x11-t10/" },
      { label: "OWASP — REST security cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html" },
      { label: "OAuth 2.0 security best current practice", href: "https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics" },
    ],
    internalLinks: [
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "Rate limiting strategies for APIs", href: "/blog/api-rate-limiting-strategies" },
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "rest-api-design-principles",
      "api-rate-limiting-strategies",
      "authentication-patterns-web-apps",
    ],
  },

  {
    slug: "password-security-and-mfa",
    title: "Password security and MFA: what to require and what to stop requiring",
    seoTitle: "Password Security and MFA Best Practices",
    description:
      "Modern password guidance — length over complexity, breach checking, correct hashing — plus MFA options compared and how to handle recovery.",
    excerpt:
      "Forced quarterly rotation and mandatory symbols make passwords worse. Current guidance says length, breach checks and MFA.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "password security best practices",
    secondaryKeywords: [
      "mfa vs 2fa",
      "argon2 bcrypt hashing",
      "passkeys webauthn",
      "password rotation policy",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-11",
    answer:
      "Current guidance is to require a minimum length of at least 8 and ideally 12 characters, allow long passphrases and all character types, check submissions against known breach lists, and stop forcing periodic rotation and composition rules. Hash with bcrypt, scrypt or Argon2, and offer MFA — preferring passkeys or an authenticator app over SMS.",
    takeaways: [
      "Length beats complexity; composition rules push users toward predictable patterns.",
      "Do not expire passwords on a schedule — rotate only on evidence of compromise.",
      "Check new passwords against breach corpora; that single check blocks credential stuffing.",
      "SMS is the weakest MFA factor but still far better than none.",
    ],
    sections: [
      {
        heading: "What should a password policy require?",
        body: [
          {
            type: "table",
            head: ["Rule", "Current guidance"],
            rows: [
              ["Minimum length", "8 required, 12+ recommended"],
              ["Maximum length", "At least 64 — never truncate"],
              ["Composition rules", "Do not impose them"],
              ["Periodic expiry", "No, unless compromise is suspected"],
              ["Breach list check", "Yes — reject known-compromised passwords"],
              ["Password managers", "Allow paste; never block it"],
              ["Unicode and spaces", "Accept all printable characters"],
            ],
          },
          {
            type: "p",
            text: "Composition rules produce Password1! rather than genuine entropy. Forced rotation produces Password1!, Password2!, Password3!. Both trade real security for the appearance of rigour, which is why modern standards recommend against them.",
          },
        ],
      },
      {
        heading: "How should passwords be stored?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `import { hash, verify } from "@node-rs/argon2";

// Store: Argon2id with current cost parameters, salt handled by the library
const stored = await hash(password, { memoryCost: 19456, timeCost: 2, parallelism: 1 });

// Verify — constant time, and rehash if parameters have moved on
const ok = await verify(stored, submitted);`,
          },
          {
            type: "list",
            items: [
              "Argon2id is the current recommendation; bcrypt and scrypt remain acceptable.",
              "Never use MD5, SHA-1 or a bare SHA-256 — they are designed to be fast, which is exactly wrong here.",
              "Tune cost parameters so hashing takes a few hundred milliseconds on your hardware.",
              "Re-hash on successful login when parameters change, so the corpus upgrades gradually.",
              "Note that bcrypt truncates beyond 72 bytes — handle long passphrases explicitly.",
            ],
          },
        ],
      },
      {
        heading: "Which MFA method should you offer?",
        body: [
          {
            type: "table",
            head: ["Method", "Security", "Notes"],
            rows: [
              ["Passkeys / WebAuthn", "Strongest", "Phishing-resistant; increasingly well supported"],
              ["Hardware key (FIDO2)", "Strongest", "Excellent for administrative accounts"],
              ["Authenticator app (TOTP)", "Strong", "Good default; phishable in real time"],
              ["Push notification", "Strong", "Watch for approval fatigue attacks"],
              ["Email code", "Moderate", "Only as strong as the email account"],
              ["SMS", "Weakest", "SIM swap and interception risk — still better than nothing"],
            ],
          },
          {
            type: "callout",
            title: "Passkeys are worth adopting now",
            text: "They remove the shared secret entirely, which eliminates phishing and credential stuffing for accounts that use them. Offer them alongside passwords rather than as a replacement, and support recovery for lost devices.",
          },
        ],
      },
      {
        heading: "How do you handle recovery safely?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Reset tokens: single-use, short-lived, stored hashed, invalidated after use.",
              "Identical response whether or not the account exists.",
              "Invalidate all existing sessions on password change and notify the user by email.",
              "Provide MFA recovery codes at enrolment, shown once and stored hashed.",
              "Never let account recovery bypass MFA — that turns it into the weakest link.",
              "Rate limit reset requests per account and per IP.",
            ],
          },
        ],
      },
      {
        heading: "What defends against credential stuffing?",
        body: [
          {
            type: "list",
            items: [
              "Rate limiting per account and per IP, with progressive delays rather than hard lockout.",
              "Breach-list checks at registration and at password change.",
              "Anomaly detection on new device, new location, or unusual volume, with a verification step.",
              "MFA, which is the single most effective control against reused credentials.",
              "Monitoring for spikes in failed logins across many accounts — the signature of a stuffing run.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we force password changes every 90 days?",
        answer:
          "No. Current NIST guidance recommends against scheduled expiry because it drives predictable patterns. Force a change when there is evidence of compromise.",
      },
      {
        question: "Is SMS MFA worth offering?",
        answer:
          "Yes, as an option. It is the weakest factor and vulnerable to SIM swapping, but it is dramatically better than no second factor and has the widest reach.",
      },
      {
        question: "How do I check against breached passwords?",
        answer:
          "Use a k-anonymity API such as Have I Been Pwned's range endpoint, which lets you check a hash prefix without sending the password or its full hash.",
      },
      {
        question: "Should we build our own authentication?",
        answer:
          "Rarely. A maintained library or managed provider gives you hashing, MFA, breach checks, device management and audit logging that a custom implementation will not match.",
      },
    ],
    references: [
      { label: "NIST SP 800-63B — Digital identity guidelines", href: "https://pages.nist.gov/800-63-3/sp800-63b.html" },
      { label: "OWASP — Password storage cheat sheet", href: "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html" },
      { label: "FIDO Alliance — Passkeys", href: "https://fidoalliance.org/passkeys/" },
    ],
    internalLinks: [
      { label: "Authentication patterns for web apps", href: "/blog/authentication-patterns-web-apps" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "API security best practices", href: "/blog/api-security-best-practices" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "authentication-patterns-web-apps",
      "web-application-security-checklist",
      "api-security-best-practices",
    ],
  },

  {
    slug: "privacy-compliance-for-websites",
    title: "Privacy compliance for websites: consent, cookies and data handling",
    seoTitle: "Website Privacy Compliance: GDPR, DPDP and Cookies",
    description:
      "What GDPR, India's DPDP Act and similar laws require of a typical website — lawful basis, consent banners, analytics, data subject rights and retention.",
    excerpt:
      "Most sites need less than the compliance industry suggests and more than they currently do. The gap is usually consent and retention.",
    category: "Security",
    cluster: "security",
    primaryKeyword: "website privacy compliance",
    secondaryKeywords: [
      "gdpr website requirements",
      "cookie consent",
      "dpdp act india",
      "data retention policy",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-03-28",
    answer:
      "A typical website needs a lawful basis for processing personal data, a clear privacy notice, genuine consent before non-essential cookies and trackers, a way to honour access and deletion requests, defined retention periods, and processor agreements with the vendors handling your users' data. This is general guidance, not legal advice.",
    takeaways: [
      "Consent must be freely given: pre-ticked boxes and cookie walls do not qualify.",
      "Rejecting must be as easy as accepting — one click, same prominence.",
      "Analytics cookies are not 'essential' under most interpretations.",
      "Keep a record of what you collect, why, where it goes and how long you keep it.",
    ],
    sections: [
      {
        heading: "What laws are likely to apply?",
        body: [
          {
            type: "table",
            head: ["Law", "Applies to", "Key requirement"],
            rows: [
              ["GDPR (EU/UK)", "Anyone processing EU/UK residents' data", "Lawful basis, consent, data subject rights"],
              ["DPDP Act (India)", "Digital personal data of individuals in India", "Notice, consent, purpose limitation"],
              ["CCPA/CPRA (California)", "Businesses over thresholds", "Disclosure, opt-out of sale/sharing"],
              ["ePrivacy (EU)", "Cookies and similar technologies", "Consent before non-essential storage"],
            ],
          },
          {
            type: "p",
            text: "Territorial scope follows the user, not the server. An Indian company with European visitors is generally within GDPR's reach. This article is engineering guidance — take actual legal advice for your circumstances.",
          },
        ],
      },
      {
        heading: "What does valid consent look like?",
        answer:
          "Freely given, specific, informed and unambiguous — an affirmative action, with refusal as easy as acceptance.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "No pre-ticked boxes and no implied consent from continued browsing.",
              "'Reject all' presented with equal prominence to 'Accept all' at the same level.",
              "Granular categories: analytics, marketing and personalisation as separate choices.",
              "No non-essential scripts fire before a choice is made.",
              "Consent is logged with a timestamp and version, and is withdrawable as easily as it was given.",
              "Re-ask when purposes change materially, not on a fixed schedule.",
            ],
          },
          {
            type: "callout",
            title: "Reserve space for the banner",
            text: "Consent banners injected above the fold are one of the most common causes of poor Cumulative Layout Shift. Use an overlay or reserve the space so it does not displace content.",
          },
        ],
      },
      {
        heading: "What does a website typically collect?",
        body: [
          {
            type: "list",
            items: [
              "Contact form submissions — name, email, phone, message.",
              "Analytics — IP address, device, pages viewed, referrer.",
              "Marketing tags and advertising identifiers.",
              "Session and authentication cookies for logged-in areas.",
              "Server logs containing IP addresses and user agents.",
              "Error tracking payloads, which can contain personal data if you are not careful.",
            ],
          },
          {
            type: "p",
            text: "Write this inventory down. You cannot answer a deletion request, complete a vendor assessment, or write an accurate privacy notice without knowing what you hold and where.",
          },
        ],
      },
      {
        heading: "What must you build to honour rights?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Access: export everything you hold about an individual in a portable format.",
              "Deletion: remove or anonymise it, including in backups per your documented policy.",
              "Correction: let users update inaccurate data.",
              "Objection and opt-out: honour it and record that you did.",
              "A route to make requests — an email address is sufficient for most small sites.",
              "A defined response time, typically 30 days under GDPR.",
            ],
          },
          {
            type: "p",
            text: "The practical engineering task is knowing every place a user's data lives: the database, the CRM, the email platform, the analytics tool, error tracking, backups and logs. Build the export and deletion path early; retrofitting it across eight systems is painful.",
          },
        ],
      },
      {
        heading: "What about retention and processors?",
        body: [
          {
            type: "list",
            items: [
              "Define a retention period per data category and automate deletion — indefinite retention is not a policy.",
              "Server logs with IP addresses: typically 30 to 90 days.",
              "Contact enquiries: as long as the business relationship plus a defined tail.",
              "Have a data processing agreement with every vendor touching personal data.",
              "Document international transfers and their safeguards.",
              "Reassess when you add a vendor — every new tag is a new processor.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need a cookie banner?",
        answer:
          "If you set non-essential cookies or trackers and have users in jurisdictions requiring consent, yes. A site using only strictly-necessary cookies generally does not, though a clear notice is still good practice.",
      },
      {
        question: "Is Google Analytics compliant?",
        answer:
          "It has faced regulatory challenges in Europe over data transfers. Configure it carefully with consent gating and IP handling, or use a privacy-focused alternative that does not set cookies.",
      },
      {
        question: "What if we are a small business?",
        answer:
          "Most obligations apply regardless of size, though some record-keeping requirements scale. Enforcement priorities differ, but the requirements themselves largely do not.",
      },
      {
        question: "Are cookie walls allowed?",
        answer:
          "Blocking access entirely unless a user accepts tracking is generally considered invalid consent under GDPR, because consent must be freely given. Some jurisdictions permit paid alternatives; take advice before relying on that.",
      },
    ],
    references: [
      { label: "European Commission — Data protection rules", href: "https://commission.europa.eu/law/law-topic/data-protection_en" },
      { label: "ICO — Guide to cookies", href: "https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/" },
      { label: "India — Digital Personal Data Protection Act, 2023", href: "https://www.meity.gov.in/data-protection-framework" },
    ],
    internalLinks: [
      { label: "Third-party scripts and performance", href: "/blog/third-party-scripts-performance" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Our privacy policy", href: "/privacy" },
      { label: "Contact ROVQIX", href: "/contact" },
    ],
    related: [
      "third-party-scripts-performance",
      "web-application-security-checklist",
      "secrets-management-guide",
    ],
  },
];
