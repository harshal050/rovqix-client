import type { Article } from "@/lib/content/types";

/**
 * Cross-cutting practice articles referenced from the commercial landing
 * pages — engineering practice, project delivery and conversion topics that
 * do not sit cleanly inside a single technology cluster.
 */
export const practiceArticles: Article[] = [
  {
    slug: "scoping-a-website-project-that-wont-blow-up",
    title: "How to scope a website project that will not blow up",
    seoTitle: "How to Scope a Website Project Properly",
    description:
      "Why website projects overrun, and the scoping practices that prevent it — page inventories, component counts, content ownership and a written change process.",
    excerpt:
      "Scope creep rarely arrives as one big change. It arrives as twenty small ones nobody priced.",
    category: "Delivery",
    cluster: "seo",
    primaryKeyword: "how to scope a website project",
    secondaryKeywords: [
      "website project scope creep",
      "web project requirements",
      "fixed price website project",
      "website project timeline",
    ],
    authorId: "harshal",
    publishedAt: "2026-08-13",
    answer:
      "Scope a website project by listing every page and every reusable component before pricing it, naming one decision-maker, assigning content ownership with dates, and agreeing in writing that anything outside the list gets a separate estimate. Projects overrun because of undefined content and unlimited revisions far more often than because of engineering.",
    takeaways: [
      "Count components, not pages — twenty pages from eight components is a small project.",
      "Missing content is the single most common cause of a late launch.",
      "One decision-maker. Committee review is the second most common cause.",
      "Write down what is excluded, not just what is included.",
      "A change process is not bureaucracy; it is what keeps the price honest.",
    ],
    sections: [
      {
        heading: "Why do website projects overrun?",
        answer:
          "Because the scope described an outcome rather than a specific list of pages, components and responsibilities.",
        body: [
          {
            type: "table",
            head: ["Cause", "How often", "Prevention"],
            rows: [
              ["Content not ready", "Very common", "Named owner and date per page"],
              ["Unlimited revisions", "Very common", "Two rounds per stage, in writing"],
              ["Committee review", "Common", "One named decision-maker"],
              ["Undefined 'and similar'", "Common", "Explicit page and component list"],
              ["Third-party dependency", "Occasional", "Confirm feasibility before pricing"],
              ["Genuine engineering surprise", "Rare", "Spike the risky part first"],
            ],
          },
          {
            type: "p",
            text: "Notice that only one of these is an engineering problem. Most overruns are decision and content problems, which means most of the prevention happens before anyone writes code.",
          },
        ],
      },
      {
        heading: "What should a scope document actually contain?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Every page, listed by name. Not 'about section' — Home, About, Team, Careers, Contact.",
              "Every reusable component, counted. This is the real driver of build cost.",
              "Integrations named specifically, with the account or API confirmed to exist.",
              "Content ownership: who writes each page, and by what date.",
              "Number of revision rounds per stage.",
              "What is explicitly excluded — often more useful than the inclusion list.",
              "The change process: how additions get estimated and approved.",
            ],
          },
          {
            type: "callout",
            title: "Count components, not pages",
            text: "A twenty-page site built from eight repeated components is a smaller job than a five-page site where every page is structurally unique. Anyone quoting on page count alone is guessing, and the guess will be wrong in one direction or the other.",
          },
        ],
      },
      {
        heading: "How do you handle changes without a fight?",
        body: [
          {
            type: "p",
            text: "Agree upfront that changes are normal and have a process. The problem is never that a client wants something added; it is that nobody priced it and both sides later remember the conversation differently.",
          },
          {
            type: "list",
            items: [
              "Small clarifications inside the agreed intent get absorbed without discussion.",
              "Anything new gets a short written estimate — hours, cost, and effect on the date.",
              "The client approves or declines before it enters the build.",
              "Declining is a normal outcome, not a negotiation failure.",
              "Keep a running log so nobody is surprised by the cumulative total at the end.",
            ],
          },
        ],
      },
      {
        heading: "What questions should you ask before signing?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "What exactly is included, page by page and component by component?",
              "Who writes the content, and what happens to the timeline if it is late?",
              "How many revision rounds, and what does an extra round cost?",
              "What happens if your estimate turns out to be wrong?",
              "Who owns the code, the designs and the hosting accounts at the end?",
              "What does support cover after launch, and for how long?",
              "Can I speak to a client whose project ran into trouble?",
            ],
          },
          {
            type: "p",
            text: "The last one is the most informative. Every studio has had a difficult project. How they describe it — and whether they will let you speak to that client — tells you more than any portfolio.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should a website project be fixed price or hourly?",
        answer:
          "Fixed price works when scope can be defined, which is most marketing and brochure sites. Hourly or retainer suits genuinely exploratory work. The risk with fixed price is a vendor under-scoping to win; the risk with hourly is unlimited cost. Either works with a clear scope document.",
      },
      {
        question: "How long should scoping take?",
        answer:
          "Anywhere from a few days for a small marketing site to two or three weeks for an application. If a vendor quotes a complex build without a discovery phase, the number is a guess.",
      },
      {
        question: "Who should be the decision-maker?",
        answer:
          "One person with authority to approve designs without escalating. They can gather input from others, but the vendor should receive one consolidated decision rather than four conflicting opinions.",
      },
      {
        question: "What if we do not know what we need yet?",
        answer:
          "Then buy discovery as a separate, smaller engagement first. You end up owning a specification and a prototype, and can take those to any vendor — including a different one.",
      },
    ],
    references: [
      {
        label: "Nielsen Norman Group — usability and design process research",
        href: "https://www.nngroup.com/articles/",
      },
    ],
    internalLinks: [
      { label: "Website development services", href: "/services/website-development" },
      { label: "Our process", href: "/process" },
      { label: "Pricing", href: "/pricing" },
    ],
    related: ["technical-seo-checklist-developers", "redirects-and-site-migrations"],
  },

  {
    slug: "anatomy-of-a-converting-landing-page",
    title: "The anatomy of a landing page that converts",
    seoTitle: "Anatomy of a Landing Page That Converts",
    description:
      "What actually moves conversion on a landing page — message match, single goal, objection order, proof specificity, form length and load speed.",
    excerpt:
      "A landing page is one argument made in the right order. Most fail on the first line.",
    category: "Conversion",
    cluster: "performance",
    primaryKeyword: "landing page conversion",
    secondaryKeywords: [
      "high converting landing page structure",
      "landing page best practices",
      "message match ppc",
      "landing page form length",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "A landing page converts when the headline matches the promise that brought the visitor, the page has exactly one goal, objections are answered in the order they occur, proof is specific rather than generic, the form asks only for what is genuinely needed, and the page loads fast enough that paid visitors do not leave first.",
    takeaways: [
      "Message match is the biggest single leak — headline must echo the ad.",
      "One goal. Three calls to action means the page converts on none of them.",
      "Answer objections in order: price, effort, risk, credibility.",
      "Every extra form field costs completions. Ask only what sales genuinely needs.",
      "Speed is a conversion factor, not a technical nicety, on paid traffic.",
    ],
    sections: [
      {
        heading: "What is message match and why does it matter most?",
        answer:
          "Message match is the headline of the landing page repeating the specific promise of the ad or email the visitor clicked.",
        body: [
          {
            type: "p",
            text: "A visitor clicked something specific. If the page they land on talks about something broader, they experience a moment of doubt about whether they are in the right place — and on paid traffic, that moment is where most of the loss happens.",
          },
          {
            type: "table",
            head: ["Ad said", "Weak landing page", "Strong landing page"],
            rows: [
              ["'Invoicing for freelancers'", "'Business management platform'", "'Invoicing built for freelancers'"],
              ["'Free 14-day trial'", "'Get started today'", "'Start your free 14-day trial'"],
              ["'Cut payroll admin in half'", "'Modern HR software'", "'Cut payroll admin time in half'"],
            ],
          },
        ],
      },
      {
        heading: "Why does one goal matter so much?",
        body: [
          {
            type: "p",
            text: "A page offering a demo request, a newsletter signup and a link to pricing is asking the visitor to make a decision about what to decide. That is more cognitive work than choosing to act, and the common outcome is doing nothing.",
          },
          {
            type: "list",
            items: [
              "Remove the main site navigation. Every link is an exit.",
              "One primary action, repeated at natural decision points down the page.",
              "A secondary action is acceptable only if it is genuinely lower commitment toward the same goal.",
              "No footer full of links to everything else you offer.",
              "If you need two goals, you need two pages.",
            ],
          },
        ],
      },
      {
        heading: "What order should objections be answered in?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "What is it, in one sentence a stranger understands.",
              "Who is it for — so the wrong visitor can leave and the right one feels recognised.",
              "How it works, concretely enough to be believable, usually in three steps.",
              "What it costs, or at least the shape of what it costs. Silence here loses cautious buyers.",
              "Why it is safe: guarantee, trial, cancellation terms, or who else already trusts you.",
              "Proof: specific outcomes with numbers and names, not adjectives.",
              "The action, with what happens next stated plainly.",
            ],
          },
          {
            type: "callout",
            title: "Proof has to be specific",
            text: "'Trusted by industry leaders' persuades nobody. 'Cut onboarding from 6 days to 4 hours at [named company]' does. Vague social proof reads as an absence of real results, which is worse than including none at all.",
          },
        ],
      },
      {
        heading: "How long should the form be?",
        body: [
          {
            type: "p",
            text: "As short as your sales process genuinely requires. Every field costs completions, but a shorter form producing unqualified leads is not a win either — the right length depends on what happens after submission.",
          },
          {
            type: "table",
            head: ["Offer", "Reasonable fields"],
            rows: [
              ["Newsletter or content download", "Email only"],
              ["Free trial", "Email, password — nothing else"],
              ["Demo request", "Name, email, company"],
              ["High-value consultation", "Name, email, company, one qualifying question"],
              ["Quote request", "Contact plus the details needed to quote"],
            ],
          },
          {
            type: "p",
            text: "If a field exists because someone in marketing might want the data later, remove it. Fields should exist because a human needs them to do the next step.",
          },
        ],
      },
      {
        heading: "How much does speed affect conversion?",
        body: [
          {
            type: "p",
            text: "On paid traffic it matters more than on organic, because the visitor has less commitment and the click already cost you money. A page that takes five seconds on mobile loses a substantial share of visitors before they see the headline — meaning you paid for the click and got nothing.",
          },
          {
            type: "list",
            items: [
              "Target under two seconds to Largest Contentful Paint on a mid-range phone.",
              "Do not make a hero video the LCP element.",
              "Load the form's JavaScript with the page, not after a delay.",
              "Audit tracking scripts — pixels and tag managers are often the heaviest thing on a campaign page.",
              "Test on a throttled connection, not on office wifi.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long should a landing page be?",
        answer:
          "As long as it takes to answer the objections, and no longer. Low-commitment offers need very little; expensive or unfamiliar products need more. Length itself is not the variable — whether every section is doing work is.",
      },
      {
        question: "Should the call to action be above the fold?",
        answer:
          "It should be visible early, and repeated after each block that answers an objection. Visitors ready to act should not have to scroll; visitors who need convincing should find the action waiting when they are ready.",
      },
      {
        question: "Do video backgrounds help conversion?",
        answer:
          "Rarely, and they frequently hurt by delaying the largest contentful paint. A well-chosen static image plus a strong headline usually outperforms an autoplaying video that arrives late.",
      },
      {
        question: "How much traffic do you need to A/B test?",
        answer:
          "Enough conversions, not enough visitors — typically a few hundred conversions per variant for a trustworthy result. Below that, make changes based on reasoning and qualitative feedback rather than pretending the numbers are significant.",
      },
    ],
    references: [
      {
        label: "Google — page experience and Core Web Vitals documentation",
        href: "https://developers.google.com/search/docs/appearance/page-experience",
      },
      {
        label: "Baymard Institute — checkout and form usability research",
        href: "https://baymard.com/research",
      },
    ],
    internalLinks: [
      { label: "Landing page design and development", href: "/services/landing-page-design" },
      { label: "Website speed optimization", href: "/services/website-speed-optimization" },
      { label: "Ecommerce brands", href: "/industries/ecommerce-brands" },
    ],
    related: ["improve-largest-contentful-paint", "third-party-scripts-performance"],
  },

  {
    slug: "designing-for-trust-in-saas",
    title: "Designing for trust in SaaS products",
    seoTitle: "Designing for Trust in SaaS Products",
    description:
      "The interface decisions that make a SaaS product feel trustworthy — honest empty states, visible system status, reversible actions, and pricing you do not have to decode.",
    excerpt:
      "Trust in software is built in the unglamorous states: what happens when something fails, and whether you can undo it.",
    category: "Product design",
    cluster: "react",
    primaryKeyword: "saas product trust design",
    secondaryKeywords: [
      "saas ux design principles",
      "empty state design",
      "error state design",
      "saas onboarding design",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-13",
    answer:
      "A SaaS product feels trustworthy when system status is always visible, destructive actions are reversible or confirmed proportionally, errors explain what to do next, empty states teach rather than apologise, and pricing and data ownership are stated plainly. Trust is built in failure states, not in the marketing site.",
    takeaways: [
      "The first screen a new user sees is usually an empty state nobody designed.",
      "Undo beats a confirmation dialog for anything reversible.",
      "An error that says 'something went wrong' teaches users the product is unreliable.",
      "Showing system status — saved, syncing, failed — prevents most support tickets.",
      "Hiding pricing or export options reads as a warning sign to experienced buyers.",
    ],
    sections: [
      {
        heading: "Why do empty states matter so much?",
        answer:
          "Because the empty state is the first thing every new user sees, and it is the screen most often left undesigned.",
        body: [
          {
            type: "p",
            text: "A dashboard designed with realistic data looks impressive in a demo. The user who just signed up sees zeros, blank charts and a table with no rows. If that screen was never designed, their first impression of the product is an accident.",
          },
          {
            type: "table",
            head: ["Weak empty state", "Strong empty state"],
            rows: [
              ["'No data available'", "Explains what will appear here and why"],
              ["A blank table", "One clear action to create the first item"],
              ["An empty chart axis", "A sample or illustration of the eventual result"],
              ["Nothing at all", "A short path to value, not a documentation link"],
            ],
          },
        ],
      },
      {
        heading: "How should destructive actions be handled?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Prefer undo over confirmation for anything reversible — it is faster and less annoying.",
              "Reserve confirmation dialogs for genuinely irreversible actions.",
              "Scale friction to consequence: deleting one row is not deleting a workspace.",
              "For high-consequence deletion, require typing the name rather than clicking OK.",
              "Say what will be lost, specifically: 'this deletes 1,240 records and cannot be undone'.",
              "Soft-delete where possible, so support can recover an accident.",
            ],
          },
          {
            type: "callout",
            title: "Confirmation dialogs stop working",
            text: "Users click through dialogs they see frequently without reading them. If a confirmation appears on a routine action, it is not protecting anyone — it is training people to dismiss warnings, including the important ones.",
          },
        ],
      },
      {
        heading: "What makes an error message trustworthy?",
        body: [
          {
            type: "list",
            items: [
              "Say what happened in the user's terms, not the system's.",
              "Say what to do next, even if that is 'try again in a minute'.",
              "Distinguish 'you did something wrong' from 'we did something wrong' — the tone differs.",
              "Preserve their work. Losing a half-completed form to a failed save is unforgivable.",
              "Give an error reference for support, so a ticket is actionable.",
              "Never show a raw stack trace or a database constraint name to a user.",
            ],
          },
          {
            type: "p",
            text: "'Something went wrong' communicates that you did not anticipate the failure. That is a stronger signal about product quality than most teams realise.",
          },
        ],
      },
      {
        heading: "What signals trust on pricing and data?",
        body: [
          {
            type: "list",
            items: [
              "Public pricing. 'Contact sales' for everything reads as 'the price depends on what we think you can pay'.",
              "Clear limits: what happens at the plan boundary, and whether it is a hard stop or an overage.",
              "Easy cancellation, described plainly. Making it hard costs more in reputation than it saves in churn.",
              "Data export in a usable format, documented before purchase.",
              "Honest uptime and status reporting, with a public status page and real incident history.",
              "A security page that describes actual controls rather than listing logos.",
            ],
          },
          {
            type: "p",
            text: "Experienced buyers check these specifically, because they have been burned by products that were easy to enter and difficult to leave.",
          },
        ],
      },
      {
        heading: "How should system status be communicated?",
        body: [
          {
            type: "list",
            items: [
              "Saving state: saved, saving, or failed — never ambiguous silence after an edit.",
              "Optimistic updates that visibly revert if the operation fails, rather than silently diverging.",
              "Progress for anything over a second, with a real estimate where possible.",
              "Offline detection with queued actions, rather than errors the user cannot act on.",
              "Sync status for anything shared between users, so nobody edits stale content unknowingly.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a confirmation dialog always the safe choice?",
        answer:
          "No. Frequent dialogs get dismissed reflexively, which removes protection from the rare action that genuinely needed it. Undo is better for anything reversible, and stronger friction should be reserved for the irreversible.",
      },
      {
        question: "Should we show pricing publicly?",
        answer:
          "For self-serve and mid-market products, almost always — hidden pricing filters out more good prospects than bad ones. Genuinely enterprise-only products with negotiated contracts are the exception, and even those benefit from publishing a starting figure.",
      },
      {
        question: "How much onboarding is too much?",
        answer:
          "A tour of every feature before the user has done anything is too much. Get them to one meaningful outcome first, then introduce capability contextually as they encounter the need for it.",
      },
      {
        question: "Do trust badges and security logos help?",
        answer:
          "Marginally, and much less than substance. A security page describing your actual controls, a real status page and a clear data export policy do far more for a technical buyer than a row of badges.",
      },
    ],
    references: [
      {
        label: "Nielsen Norman Group — 10 usability heuristics",
        href: "https://www.nngroup.com/articles/ten-usability-heuristics/",
      },
      {
        label: "W3C — Web Content Accessibility Guidelines 2.2",
        href: "https://www.w3.org/TR/WCAG22/",
      },
    ],
    internalLinks: [
      { label: "SaaS development services", href: "/services/saas-development" },
      { label: "UI/UX design services", href: "/services/ui-ux-design" },
      { label: "SaaS startups", href: "/industries/saas-startups" },
    ],
    related: ["react-error-boundaries-and-loading-states", "react-accessibility-guide"],
  },

  {
    slug: "typescript-patterns-worth-knowing",
    title: "TypeScript patterns worth knowing",
    seoTitle: "TypeScript Patterns Worth Knowing",
    description:
      "Practical TypeScript patterns that prevent real bugs — discriminated unions, branded types, satisfies, schema-derived types and knowing when to stop.",
    excerpt:
      "The patterns that stop bugs, and the point at which type-level cleverness starts costing more than it saves.",
    category: "TypeScript",
    cluster: "react",
    primaryKeyword: "typescript patterns",
    secondaryKeywords: [
      "discriminated unions typescript",
      "branded types typescript",
      "typescript satisfies operator",
      "zod type inference",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-08-13",
    answer:
      "The TypeScript patterns that prevent the most real bugs are discriminated unions for state, branded types for identifiers, schema-derived types for external data, and `satisfies` for configuration objects. Most application code needs these four and very little else.",
    takeaways: [
      "Discriminated unions make impossible states unrepresentable — the highest-value pattern.",
      "Branded types stop you passing a UserId where an OrderId belongs.",
      "Types vanish at runtime; validate everything crossing a boundary.",
      "`satisfies` gives you checking without widening the inferred type.",
      "Clever conditional types belong in libraries, not in feature code.",
    ],
    sections: [
      {
        heading: "Why are discriminated unions the most valuable pattern?",
        answer:
          "Because they make invalid combinations of state impossible to construct, so the compiler catches an entire class of bug.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `// Every field optional: "loading with data and an error" is representable
type Result = {
  loading: boolean;
  data?: User[];
  error?: Error;
};

// Only valid combinations exist
type Result =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; error: Error };

function render(result: Result) {
  switch (result.status) {
    case "idle": return null;
    case "loading": return <Spinner />;
    case "success": return <List items={result.data} />;   // data is defined here
    case "error": return <Error error={result.error} />;    // error is defined here
  }
}`,
          },
          {
            type: "p",
            text: "In the second version you cannot read `data` in the error branch, cannot forget a case if the switch is exhaustive, and cannot construct a nonsensical state. The first version relies on everyone remembering the rules.",
          },
        ],
      },
      {
        heading: "What are branded types for?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `type Brand<T, B> = T & { readonly __brand: B };

type UserId = Brand<string, "UserId">;
type OrderId = Brand<string, "OrderId">;

const asUserId = (value: string) => value as UserId;

function getOrder(id: OrderId) { /* ... */ }

const userId = asUserId("u_123");
getOrder(userId); // Error: UserId is not assignable to OrderId`,
          },
          {
            type: "p",
            text: "Every identifier in your system is a string, which means the compiler cannot help when they get swapped. Branding costs a few lines and eliminates a category of bug that is genuinely difficult to spot in review.",
          },
        ],
      },
      {
        heading: "Why derive types from schemas?",
        answer:
          "Because a hand-written interface and the runtime validation it describes will eventually disagree, and nothing will tell you.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `import { z } from "zod";

const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  role: z.enum(["admin", "member"]),
  createdAt: z.coerce.date(),
});

// One definition produces both the runtime check and the static type
type User = z.infer<typeof UserSchema>;

export async function fetchUser(id: string): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  return UserSchema.parse(await response.json()); // throws on mismatch
}`,
          },
          {
            type: "callout",
            title: "Types are erased at runtime",
            text: "Declaring a response `as User` tells the compiler to stop asking questions. It does not check anything. If the API returns something different, you get an undefined error three components away from the actual cause.",
          },
        ],
      },
      {
        heading: "When should you use satisfies?",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `type Route = { path: string; auth: boolean };

// as: checked, but the specific keys are lost
const routes = {
  home: { path: "/", auth: false },
  admin: { path: "/admin", auth: true },
} as Record<string, Route>;
routes.hom; // no error — Record<string, …> accepts any key

// satisfies: checked AND the literal keys are preserved
const routes = {
  home: { path: "/", auth: false },
  admin: { path: "/admin", auth: true },
} satisfies Record<string, Route>;
routes.hom; // Error: property does not exist`,
          },
          {
            type: "p",
            text: "Use `satisfies` for configuration objects, route maps, theme tokens and anything where you want validation against a shape without losing the precise inferred type.",
          },
        ],
      },
      {
        heading: "When should you stop?",
        body: [
          {
            type: "list",
            items: [
              "If a type takes longer to understand than the function it describes, simplify it.",
              "Deeply nested conditional types belong in library code where many callers benefit.",
              "A well-named helper function often beats a clever generic.",
              "`unknown` plus a validation step is better than a complex type nobody trusts.",
              "If the error messages become unreadable, the abstraction has failed regardless of correctness.",
            ],
          },
          {
            type: "p",
            text: "The purpose of types is to make bugs impossible and intent obvious. Type-level programming that achieves the first while destroying the second is a net loss on a team.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should we enable every strict flag?",
        answer:
          "Enable strict mode always. Beyond that, `noUncheckedIndexedAccess` catches real bugs and is worth the friction; `exactOptionalPropertyTypes` is stricter than most codebases need. Turn them on for new code first if retrofitting.",
      },
      {
        question: "Is `any` ever acceptable?",
        answer:
          "Occasionally, at an untyped third-party boundary, with a comment explaining why. `unknown` followed by validation is almost always the better choice, because it forces the check rather than skipping it.",
      },
      {
        question: "Do we need runtime validation if the API is also TypeScript?",
        answer:
          "Yes, at the network boundary. The deployed API may be a version behind, and shared types only guarantee that both sides compiled — not that the running code agrees.",
      },
      {
        question: "How do we type an untyped legacy codebase?",
        answer:
          "Incrementally. Enable strict for new files, type the data layer first since it catches the most, and convert modules as you touch them rather than treating it as a separate project.",
      },
    ],
    references: [
      {
        label: "TypeScript Handbook — narrowing and discriminated unions",
        href: "https://www.typescriptlang.org/docs/handbook/2/narrowing.html",
      },
      { label: "Zod documentation", href: "https://zod.dev/" },
    ],
    internalLinks: [
      { label: "Hire TypeScript developers", href: "/hire/hire-typescript-developers" },
      { label: "React development services", href: "/services/react-development" },
    ],
    related: ["react-component-architecture", "rest-api-design-principles"],
  },

  {
    slug: "environment-variables-and-config",
    title: "Environment variables and configuration done properly",
    seoTitle: "Environment Variables & Config Best Practices",
    description:
      "How to handle configuration across environments — validation at boot, separating secrets from settings, and why a missing variable should crash the app immediately.",
    excerpt:
      "A missing environment variable should crash the app at startup, not produce a confusing bug three hours into production.",
    category: "Backend",
    cluster: "devops",
    primaryKeyword: "environment variables best practices",
    secondaryKeywords: [
      "configuration management node",
      "validate env variables",
      "secrets vs config",
      "twelve factor config",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-08-13",
    answer:
      "Configuration should be validated against a schema at application startup so a missing or malformed variable crashes immediately with a clear message. Secrets belong in a secrets manager injected at runtime, non-secret settings can live in version-controlled config, and no secret should ever reach a client bundle.",
    takeaways: [
      "Validate configuration at boot. Failing at startup beats failing at 2am.",
      "Secrets and settings are different things with different storage.",
      "Anything prefixed for the client is public — treat it as published.",
      "Commit a .env.example listing every variable, with no real values.",
      "Different values per environment; identical variable names.",
    ],
    sections: [
      {
        heading: "Why validate configuration at startup?",
        answer:
          "Because a missing variable discovered at request time produces a confusing runtime error far from its cause.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `import { z } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.string().url(),
  REDIS_URL: z.string().url(),
  SESSION_SECRET: z.string().min(32),
  STRIPE_SECRET_KEY: z.string().startsWith("sk_"),
  PORT: z.coerce.number().int().positive().default(3000),
});

// Throws at import time, before the server accepts a single request
export const env = EnvSchema.parse(process.env);`,
          },
          {
            type: "p",
            text: "Without this, a missing DATABASE_URL surfaces as 'connect ECONNREFUSED undefined:undefined' during the first request that needs the database — possibly hours after deployment, in a code path unrelated to configuration.",
          },
          {
            type: "callout",
            title: "Fail loudly, fail early",
            text: "A deploy that refuses to start is an obvious, immediate problem someone fixes in two minutes. A deploy that starts and misbehaves subtly is an incident.",
          },
        ],
      },
      {
        heading: "What is the difference between secrets and settings?",
        body: [
          {
            type: "table",
            head: ["", "Settings", "Secrets"],
            rows: [
              ["Examples", "Feature flags, log level, page size", "API keys, database passwords, tokens"],
              ["Storage", "Version-controlled config or env", "Secrets manager"],
              ["Rotation", "Rarely", "On a schedule and on incident"],
              ["Visibility", "Fine for the whole team", "Least privilege"],
              ["In a repository", "Acceptable", "Never"],
              ["Audit trail", "Git history", "Access log in the manager"],
            ],
          },
          {
            type: "p",
            text: "Conflating them is why secrets end up in repositories. Once a secret is committed, rewriting history is not enough — it must be rotated, because it may already have been cloned or scraped.",
          },
        ],
      },
      {
        heading: "How do client-side variables differ?",
        body: [
          {
            type: "list",
            items: [
              "Anything exposed to the browser bundle is public. Not obscure — public, permanently, to anyone who opens devtools.",
              "Publishable API keys designed for client use are fine. Secret keys never are.",
              "Framework prefixes such as NEXT_PUBLIC_ exist to make the boundary explicit; respect it.",
              "Review what is in the client bundle before launch — searching the built output for 'secret' and 'key' takes a minute.",
              "If a value must stay private, the call using it belongs on the server.",
            ],
          },
        ],
      },
      {
        heading: "How should configuration differ across environments?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Same variable names everywhere; only the values change.",
              "Every environment gets its own secrets — never share production credentials with staging.",
              "Development uses local or containerised services, not a shared remote database.",
              "Staging mirrors production configuration as closely as budget allows, so surprises surface there.",
              "Commit a .env.example listing every variable with placeholder values and a comment for each.",
              "Validate on every environment, including local, so a new developer's first run tells them what is missing.",
            ],
          },
        ],
      },
      {
        heading: "What about feature flags?",
        body: [
          {
            type: "p",
            text: "Environment variables are a poor feature flag mechanism: changing one requires a deploy, and the value is the same for every user. That is fine for a build-time toggle and wrong for anything you want to roll out gradually.",
          },
          {
            type: "list",
            items: [
              "Build-time toggles (which integrations exist at all): environment variables are appropriate.",
              "Runtime toggles (enable for 10% of users): a feature flag service or a database-backed flag.",
              "Kill switches: must be runtime, because needing a deploy to disable a broken feature defeats the purpose.",
              "Whichever you use, remove flags once the decision is permanent. Stale flags become untested code paths.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should .env files be committed?",
        answer:
          "Never with real values. Commit a .env.example listing every required variable with placeholders and a short comment, and add .env to .gitignore. New developers then know exactly what to provide.",
      },
      {
        question: "What if a secret is accidentally committed?",
        answer:
          "Rotate it immediately — that is the only reliable remediation. Removing it from history is worth doing afterwards, but assume the value is compromised the moment it was pushed.",
      },
      {
        question: "Where should secrets live in production?",
        answer:
          "A managed secrets service — AWS Secrets Manager, Google Secret Manager, Vault, or your platform's encrypted environment settings — injected at runtime rather than baked into an image.",
      },
      {
        question: "How many environments do we need?",
        answer:
          "Development, staging and production covers most teams. Preview environments per pull request are extremely useful and largely automatic on modern platforms. More than that usually adds maintenance rather than safety.",
      },
    ],
    references: [
      { label: "The Twelve-Factor App — Config", href: "https://12factor.net/config" },
      {
        label: "OWASP — Secrets Management Cheat Sheet",
        href: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
      },
    ],
    internalLinks: [
      { label: "DevOps and cloud services", href: "/services/devops-and-cloud-services" },
      { label: "Hire DevOps engineers", href: "/hire/hire-devops-engineers" },
    ],
    related: ["secrets-management-guide", "ci-cd-pipeline-design"],
  },

  {
    slug: "web-animation-performance",
    title: "Web animation performance: keeping motion smooth on real devices",
    seoTitle: "Web Animation Performance Guide",
    description:
      "Why animations stutter and how to fix them — compositor-only properties, avoiding layout thrash, respecting reduced motion, and testing on hardware users actually own.",
    excerpt:
      "Animation is cheap on a MacBook and expensive on a three-year-old Android. Only one of those is your audience.",
    category: "Performance",
    cluster: "performance",
    primaryKeyword: "web animation performance",
    secondaryKeywords: [
      "css animation performance",
      "compositor only properties",
      "prefers reduced motion",
      "smooth scroll animation",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-08-13",
    answer:
      "Web animations stay smooth when they only change transform and opacity, which the compositor can handle without recalculating layout or repainting. Animating width, height, top or left forces layout on every frame, which is the usual cause of stutter on mid-range mobile devices.",
    takeaways: [
      "Animate transform and opacity. Nearly everything else triggers layout or paint.",
      "60fps means 16.7ms per frame, including everything else the page is doing.",
      "Reading a layout property after writing one forces synchronous layout — the classic thrash.",
      "Respect prefers-reduced-motion; it is an accessibility requirement, not a preference.",
      "Test on a mid-range Android, not on the machine you built it on.",
    ],
    sections: [
      {
        heading: "Which properties are cheap to animate?",
        answer:
          "Transform and opacity, because the compositor can apply them without recalculating layout or repainting pixels.",
        body: [
          {
            type: "table",
            head: ["Property", "Triggers", "Cost"],
            rows: [
              ["transform", "Composite only", "Cheap"],
              ["opacity", "Composite only", "Cheap"],
              ["background-color", "Paint", "Moderate"],
              ["box-shadow", "Paint", "Moderate to expensive"],
              ["width / height", "Layout, paint, composite", "Expensive"],
              ["top / left", "Layout, paint, composite", "Expensive"],
              ["margin / padding", "Layout, paint, composite", "Expensive"],
            ],
          },
          {
            type: "code",
            lang: "css",
            code: `/* Forces layout on every frame */
.card:hover { width: 320px; top: -4px; }

/* Compositor handles it — same visual result */
.card { transition: transform 200ms ease-out; }
.card:hover { transform: translateY(-4px) scale(1.05); }`,
          },
        ],
      },
      {
        heading: "What is layout thrashing?",
        body: [
          {
            type: "code",
            lang: "js",
            code: `// Bad: read after write, in a loop — forces synchronous layout each iteration
for (const el of items) {
  el.style.height = "auto";
  const height = el.offsetHeight;  // forces layout, every time
  el.style.height = height + "px";
}

// Better: batch all reads, then all writes
const heights = items.map(el => el.offsetHeight);
items.forEach((el, i) => { el.style.height = heights[i] + "px"; });`,
          },
          {
            type: "p",
            text: "Reading a geometry property forces the browser to flush pending style changes and recalculate layout. Doing that inside a loop turns one layout pass into hundreds, which is why some animations are fine with ten items and unusable with a hundred.",
          },
        ],
      },
      {
        heading: "How much animation is too much?",
        body: [
          {
            type: "list",
            items: [
              "Animating dozens of elements simultaneously will drop frames regardless of which properties you use.",
              "Scroll-driven animation is the most common cause of jank — every scroll event competing for the main thread.",
              "Long-running background animation drains battery and keeps the compositor busy on every frame.",
              "will-change promotes an element to its own layer; used liberally it exhausts memory and makes things worse.",
              "If an animation exists only because it looked good in a design tool, question whether it earns its cost.",
            ],
          },
          {
            type: "callout",
            title: "Test on the device your users have",
            text: "A scroll animation that feels effortless on an M-series MacBook can be visibly broken on a mid-range Android from three years ago. Chrome DevTools' 4x CPU throttle is the minimum honest test, and a real cheap phone is better.",
          },
        ],
      },
      {
        heading: "How do you respect reduced motion?",
        body: [
          {
            type: "code",
            lang: "css",
            code: `@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}`,
          },
          {
            type: "p",
            text: "Some users experience nausea or vestibular symptoms from parallax and large motion. The preference is set at the operating system level, and honouring it is a WCAG requirement rather than a nicety.",
          },
          {
            type: "list",
            items: [
              "Reduce does not have to mean remove — a fade instead of a slide is often the right substitute.",
              "Parallax, auto-playing carousels and large scale transitions are the highest-risk patterns.",
              "Check the preference in JavaScript too, for animations driven by code rather than CSS.",
              "It doubles as a performance escape hatch on low-end devices, which frequently have it enabled.",
            ],
          },
        ],
      },
      {
        heading: "How do you debug a stuttering animation?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Record a performance profile in DevTools while the animation runs.",
              "Look for long tasks and purple layout blocks in the flame chart — those are the cost.",
              "Enable paint flashing to see what is repainting; a whole-screen flash on a small hover is the problem.",
              "Check the layer count. Too many promoted layers costs memory and can slow compositing.",
              "Throttle the CPU 4x and repeat. If it is smooth throttled, it is smooth on real hardware.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is CSS animation faster than JavaScript animation?",
        answer:
          "CSS animations on transform and opacity can run off the main thread, so they keep going even when JavaScript is busy. A JavaScript animation using the Web Animations API on the same properties performs comparably; one using requestAnimationFrame to set layout properties does not.",
      },
      {
        question: "Should we use will-change?",
        answer:
          "Sparingly, and shortly before the animation starts rather than permanently in a stylesheet. It promotes an element to its own compositor layer, which costs memory. Applied to many elements it makes performance worse, not better.",
      },
      {
        question: "Are animation libraries bad for performance?",
        answer:
          "Not inherently — good ones animate the right properties. The cost is bundle size, so import only what you use and avoid loading a large motion library globally for one hero animation.",
      },
      {
        question: "What frame rate should we target?",
        answer:
          "60fps, meaning under 16.7ms per frame including all other page work. On high-refresh displays the browser may target higher, but 60 is the practical bar and consistency matters more than the peak.",
      },
    ],
    references: [
      {
        label: "web.dev — Animations guide",
        href: "https://web.dev/articles/animations-guide",
      },
      {
        label: "MDN — prefers-reduced-motion",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion",
      },
    ],
    internalLinks: [
      { label: "Website speed optimization", href: "/services/website-speed-optimization" },
      { label: "Web development in Los Angeles", href: "/locations/web-development-company-los-angeles" },
    ],
    related: ["core-web-vitals-explained", "improve-largest-contentful-paint"],
  },
];
