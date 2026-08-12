import type { Article } from "@/lib/content/types";

export const reactArticles: Article[] = [
  {
    slug: "react-rerender-performance",
    title: "Why your React app re-renders too much (and how to find out)",
    seoTitle: "React Re-render Performance: Find and Fix It",
    description:
      "How React decides to re-render, how to measure it with the Profiler, and the four fixes that actually work — before you reach for memo on everything.",
    excerpt:
      "Sprinkling memo and useCallback across a codebase is not optimisation, it is superstition. Measure first, then apply one of four structural fixes.",
    category: "React",
    cluster: "react",
    primaryKeyword: "react re-render performance",
    secondaryKeywords: [
      "react memo",
      "usememo usecallback",
      "react profiler",
      "react performance optimization",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-21",
    answer:
      "React re-renders a component when its state changes, its parent re-renders, or a context it consumes updates. Most performance problems come from state living too high in the tree or from context carrying values that change frequently — not from missing memo calls. Profile first, then move state down, split contexts, stabilise props, or memoise the specific expensive subtree.",
    takeaways: [
      "A re-render is not a repaint — React re-running a cheap component is usually fine.",
      "State placed too high is the number one cause of unnecessary work.",
      "Context re-renders every consumer when its value identity changes.",
      "memo only helps if the component's props are actually stable.",
    ],
    sections: [
      {
        heading: "When does React re-render a component?",
        answer:
          "When its own state or a reducer updates, when its parent re-renders, or when a context it subscribes to changes value.",
        body: [
          {
            type: "p",
            text: "Note what is not on that list: prop values changing. A child re-renders because its parent re-rendered, whether or not the props it received are different. React re-runs the function and diffs the output; only actual DOM differences reach the browser.",
          },
          {
            type: "p",
            text: "This matters because it reframes the problem. The question is not 'how do I stop this component re-rendering' but 'why is a component this expensive running this often'.",
          },
        ],
      },
      {
        heading: "How do you measure it?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Install React DevTools and open the Profiler tab. Record the interaction that feels slow.",
              "Enable 'Highlight updates when components render' to see the blast radius of each keystroke or click.",
              "In the flame graph, look for wide bars — components taking milliseconds, not the count of renders.",
              "Use the 'Why did this render?' panel to see whether it was state, props or a hook.",
              "Confirm against a production build; development mode double-invokes renders in StrictMode and is not representative.",
            ],
          },
          {
            type: "callout",
            title: "The threshold that matters",
            text: "A component re-rendering 60 times per second is only a problem if the frame budget is exceeded. Target 16ms per frame total. If your slowest commit is 3ms, stop optimising and go build something.",
          },
        ],
      },
      {
        heading: "Fix one: move state down",
        body: [
          {
            type: "p",
            text: "The most common structural mistake is a piece of state used by one small component sitting in a page-level parent. Every keystroke in a search box then re-renders the entire page tree.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// Before: query lives at the top, whole page re-renders per keystroke
function Page() {
  const [query, setQuery] = useState("");
  return (
    <>
      <ExpensiveChart />
      <SearchInput value={query} onChange={setQuery} />
      <Results query={query} />
    </>
  );
}

// After: state lives with the components that use it
function Page() {
  return (
    <>
      <ExpensiveChart />
      <SearchPanel />   {/* owns query, re-renders alone */}
    </>
  );
}`,
          },
        ],
      },
      {
        heading: "Fix two: split your contexts",
        body: [
          {
            type: "p",
            text: "A context provider re-renders every consumer whenever its value changes identity. Bundling a user object, a theme, and a frequently-updating cart total into one context guarantees that a cart update re-renders every themed component in the app.",
          },
          {
            type: "list",
            items: [
              "One context per concern, and split stable data from frequently-changing data.",
              "Separate state and dispatch into two contexts — components that only dispatch never re-render.",
              "Memoise the provider value so it does not get a new identity on every parent render.",
              "For high-frequency values (mouse position, scroll offset), skip context entirely and use a subscription store.",
            ],
          },
        ],
      },
      {
        heading: "Fix three and four: stabilise props, then memoise",
        body: [
          {
            type: "p",
            text: "React.memo compares props shallowly. Passing an inline object or arrow function creates a new reference on every render, so the memoised child re-renders anyway and you have paid for the comparison. Stabilise first with useCallback and useMemo, then wrap the component.",
          },
          {
            type: "table",
            head: ["Tool", "Use when", "Do not use when"],
            rows: [
              ["React.memo", "Component is genuinely expensive and props are stable", "Component renders in under a millisecond"],
              ["useMemo", "A computation is measurably expensive", "Wrapping a string concat or small array map"],
              ["useCallback", "The function is a dependency or a memoised child's prop", "The consumer is a plain DOM element"],
              ["Virtualisation", "Rendering hundreds of rows", "Rendering a dozen"],
            ],
          },
          {
            type: "p",
            text: "With the React Compiler now available, much of this memoisation can be applied automatically at build time. That does not remove the need to place state well — the compiler optimises what you wrote, it does not restructure your component tree for you.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I wrap every component in React.memo?",
        answer:
          "No. Each memo adds a props comparison on every render and prevents nothing when props are unstable. Apply it to specific components you have profiled and found expensive.",
      },
      {
        question: "Does a re-render mean the DOM updates?",
        answer:
          "No. React re-runs the component and diffs the result; only differences are committed to the DOM. Re-renders cost JavaScript time, not necessarily paint time.",
      },
      {
        question: "Why does my component render twice in development?",
        answer:
          "StrictMode intentionally double-invokes renders and some effects in development to surface impure logic. It does not happen in production builds.",
      },
      {
        question: "Is the React Compiler a replacement for manual memoisation?",
        answer:
          "For most memo, useMemo and useCallback usage, yes — it inserts equivalent optimisations automatically. Structural issues like badly placed state or oversized contexts still need a human.",
      },
    ],
    references: [
      { label: "React — Render and commit", href: "https://react.dev/learn/render-and-commit" },
      { label: "React — React Compiler", href: "https://react.dev/learn/react-compiler" },
      { label: "web.dev — Optimize long tasks", href: "https://web.dev/articles/optimize-long-tasks" },
    ],
    internalLinks: [
      { label: "React state management guide", href: "/blog/react-state-management-guide" },
      { label: "Component architecture that scales", href: "/blog/react-component-architecture" },
      { label: "Interaction to Next Paint explained", href: "/blog/improve-interaction-to-next-paint" },
      { label: "Web application development", href: "/services#web-apps" },
    ],
    related: [
      "react-state-management-guide",
      "react-component-architecture",
      "improve-interaction-to-next-paint",
    ],
  },

  {
    slug: "react-state-management-guide",
    title: "React state management in 2026: choosing between five real options",
    seoTitle: "React State Management: How to Choose (2026)",
    description:
      "Local state, URL state, context, a client store and a server cache solve different problems. A decision guide for picking the right one per piece of state.",
    excerpt:
      "Most 'state management' debates are category errors. Server data and UI state are different problems and need different tools.",
    category: "React",
    cluster: "react",
    primaryKeyword: "react state management",
    secondaryKeywords: [
      "zustand vs redux",
      "react context vs state",
      "server state vs client state",
      "url state react",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-07",
    answer:
      "Classify state before choosing a tool: local UI state belongs in useState, shareable view state belongs in the URL, server data belongs in a caching layer such as React Query or server components, cross-cutting app state belongs in a small store like Zustand, and context should carry stable configuration rather than frequently-changing values.",
    takeaways: [
      "Server data is a cache, not state — it needs invalidation, not a reducer.",
      "The URL is the most underused state container in React apps.",
      "Context is a dependency injection mechanism, not a store.",
      "Reach for a global store only for state that genuinely spans distant parts of the tree.",
    ],
    sections: [
      {
        heading: "What kinds of state does an app actually have?",
        body: [
          {
            type: "table",
            head: ["Kind", "Examples", "Right home"],
            rows: [
              ["Local UI", "Open/closed, hover, input draft", "useState / useReducer"],
              ["URL", "Filters, tab, page, search query", "searchParams"],
              ["Server data", "Products, users, orders", "Server components or React Query"],
              ["Global client", "Auth session, theme, feature flags", "Small store or context"],
              ["Form", "Field values, validation, submission", "Form library or server action state"],
              ["Ephemeral", "Toasts, modals, animation state", "Local state or a tiny event bus"],
            ],
          },
          {
            type: "p",
            text: "Almost every codebase we audit has server data in a global store, which is where the pain comes from. It gets stale, two components disagree about it, and someone writes a manual refetch effect.",
          },
        ],
      },
      {
        heading: "Why does server data need a different tool?",
        answer:
          "Because it is a cached copy of data owned elsewhere, so it needs staleness, revalidation, deduplication and retry — concerns a plain store does not model.",
        body: [
          {
            type: "p",
            text: "React Query, SWR and server components all exist to answer the same questions: is this data stale, who else is asking for it, what happens on focus, what happens on failure. Rebuilding that on top of useState and useEffect is a well-trodden path to subtle bugs.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// Server component: the cache lives on the server
export default async function Orders() {
  const orders = await getOrders(); // deduped, cacheable, no client state
  return <OrderTable orders={orders} />;
}

// Client component: the cache lives in the query client
const { data, isPending, error } = useQuery({
  queryKey: ["orders", status],
  queryFn: () => fetchOrders(status),
  staleTime: 30_000,
});`,
          },
        ],
      },
      {
        heading: "When should state live in the URL?",
        body: [
          {
            type: "p",
            text: "Whenever a user might reasonably want to share, bookmark or reload the current view and get the same thing back. Filters, sort order, pagination, the active tab, the open detail panel — all of these are URL state, and putting them in useState quietly breaks the back button.",
          },
          {
            type: "list",
            items: [
              "Shareable: a colleague can paste the link into Slack and see what you saw.",
              "Reloadable: a refresh does not reset the user's work.",
              "Free history: back and forward behave the way users expect.",
              "Server-readable: with the App Router, searchParams are available during server rendering.",
            ],
          },
          {
            type: "callout",
            title: "Keep URLs readable",
            text: "Use short, stable parameter names and omit defaults. ?status=open&page=2 is fine. A base64-encoded blob of view state is not — it breaks caching, analytics and human trust in the link.",
          },
        ],
      },
      {
        heading: "Context or a store?",
        body: [
          {
            type: "p",
            text: "Use context to pass stable things down without prop drilling: the current user, a theme, a configured client instance. Use a store when many distant components read and write the same frequently-changing value and you need subscriptions rather than re-renders.",
          },
          {
            type: "table",
            head: ["", "Context", "Zustand / Jotai", "Redux Toolkit"],
            rows: [
              ["Best for", "Stable, rarely-changing values", "Cross-cutting mutable state", "Large apps needing strict conventions"],
              ["Re-render behaviour", "All consumers on value change", "Only components reading that slice", "Only selected slices"],
              ["Boilerplate", "Minimal", "Minimal", "Moderate"],
              ["Devtools / time travel", "No", "Basic", "Excellent"],
            ],
          },
          {
            type: "p",
            text: "For most product work we ship, the answer is: server components or React Query for data, URL for view state, useState for the rest, and a 30-line Zustand store for the two or three genuinely global things. Redux Toolkit still earns its place in large applications with many teams touching the same state and a real need for its tooling.",
          },
        ],
      },
      {
        heading: "How do you avoid the common traps?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Derived state: if a value can be computed from existing state during render, compute it. Do not store it and sync it in an effect.",
              "Duplicated server data: one source per resource. Two components holding their own copy will disagree.",
              "useEffect as a data pipeline: effects synchronising state to other state are a smell — usually the state is in the wrong place.",
              "Global by default: adding to the global store is easy and removing it is not. Start local, promote only when a second consumer appears.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Redux dead?",
        answer:
          "No, but its default position is gone. Redux Toolkit remains a good fit for large applications with many contributors and complex state transitions; smaller apps rarely need it now that server-data caching is handled elsewhere.",
      },
      {
        question: "Can I use React Query with server components?",
        answer:
          "Yes. Fetch on the server for the initial render and hydrate the query cache, then let React Query handle client-side refetching and mutations. It is a common and effective combination.",
      },
      {
        question: "Is context slow?",
        answer:
          "Context itself is fast; the problem is that every consumer re-renders when the value identity changes. Split contexts and memoise values and it performs fine for the job it is meant to do.",
      },
      {
        question: "Where should form state live?",
        answer:
          "In the form. Use a form library for complex client-side validation, or a server action with returned error state for simpler forms. Lifting every field into global state is a common and painful mistake.",
      },
    ],
    references: [
      { label: "React — Choosing the state structure", href: "https://react.dev/learn/choosing-the-state-structure" },
      { label: "TanStack Query documentation", href: "https://tanstack.com/query/latest/docs/framework/react/overview" },
      { label: "Redux Toolkit — Why Redux Toolkit", href: "https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today" },
    ],
    internalLinks: [
      { label: "Why your React app re-renders too much", href: "/blog/react-rerender-performance" },
      { label: "React data fetching patterns", href: "/blog/react-data-fetching-patterns" },
      { label: "React Server Components explained", href: "/blog/nextjs-server-components-explained" },
      { label: "Web application development", href: "/services#web-apps" },
    ],
    related: [
      "react-rerender-performance",
      "react-data-fetching-patterns",
      "nextjs-server-components-explained",
    ],
  },

  {
    slug: "react-hooks-common-mistakes",
    title: "Eight React hooks mistakes that survive code review",
    seoTitle: "8 Common React Hooks Mistakes (and Fixes)",
    description:
      "Stale closures, effects used as data pipelines, missing cleanup, unstable dependencies — the hooks bugs that pass review and surface in production.",
    excerpt:
      "These are not beginner mistakes. They are the ones that pass review, work in development, and break under real conditions.",
    category: "React",
    cluster: "react",
    primaryKeyword: "react hooks mistakes",
    secondaryKeywords: [
      "useeffect mistakes",
      "stale closure react",
      "useeffect cleanup",
      "react hooks best practices",
    ],
    authorId: "harshal",
    publishedAt: "2026-06-23",
    answer:
      "The most damaging React hooks mistakes are using effects to synchronise state that could be derived, capturing stale values in closures, omitting cleanup for subscriptions and timers, and creating unstable dependencies that make effects run on every render. Each has a specific fix that removes the effect rather than patching it.",
    takeaways: [
      "Most useEffect calls in a typical codebase should not exist.",
      "Derive during render instead of syncing with an effect.",
      "Every subscription, timer and listener needs a cleanup function.",
      "Race conditions in data effects are silent until your network is slow.",
    ],
    sections: [
      {
        heading: "Mistake 1: using an effect to derive state",
        body: [
          {
            type: "p",
            text: "If a value can be calculated from props or state, calculate it during render. Storing it in state and updating it in an effect adds a render pass, a source of truth, and a chance for the two to disagree.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// Wrong: two renders, two sources of truth
const [total, setTotal] = useState(0);
useEffect(() => setTotal(items.reduce((s, i) => s + i.price, 0)), [items]);

// Right: one render, one source of truth
const total = items.reduce((sum, item) => sum + item.price, 0);`,
          },
        ],
      },
      {
        heading: "Mistake 2: stale closures",
        body: [
          {
            type: "p",
            text: "A callback registered once captures the values that existed at that moment. An interval created in an effect with an empty dependency array will forever see the first render's state — a bug that only appears once the value actually changes.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// Wrong: count is always 0 inside the interval
useEffect(() => {
  const id = setInterval(() => setCount(count + 1), 1000);
  return () => clearInterval(id);
}, []);

// Right: the updater form does not capture count
useEffect(() => {
  const id = setInterval(() => setCount((c) => c + 1), 1000);
  return () => clearInterval(id);
}, []);`,
          },
        ],
      },
      {
        heading: "Mistake 3: missing cleanup",
        body: [
          {
            type: "list",
            items: [
              "Event listeners on window or document that accumulate on every mount.",
              "Intervals and timeouts that keep firing after the component unmounts.",
              "WebSocket or EventSource connections left open, exhausting server connections.",
              "Observers (Intersection, Resize, Mutation) that keep references to detached nodes.",
              "In-flight requests whose responses set state on an unmounted component.",
            ],
          },
          {
            type: "p",
            text: "In a single-page app the cost compounds: navigate between two routes twenty times and you have twenty live listeners. Users report 'it gets slow after a while', which is the hardest kind of bug to reproduce in a five-minute QA pass.",
          },
        ],
      },
      {
        heading: "Mistake 4: race conditions in data effects",
        answer:
          "Two in-flight requests can resolve out of order, leaving the UI showing results for a query the user has already changed.",
        body: [
          {
            type: "code",
            lang: "tsx",
            code: `useEffect(() => {
  const controller = new AbortController();
  fetch(\`/api/search?q=\${query}\`, { signal: controller.signal })
    .then((res) => res.json())
    .then(setResults)
    .catch((err) => { if (err.name !== "AbortError") setError(err); });
  return () => controller.abort();
}, [query]);`,
            caption: "Abort on cleanup, or use a data library that handles ordering for you.",
          },
        ],
      },
      {
        heading: "Mistakes 5 to 8: the rest of the list",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Suppressing the exhaustive-deps lint rule instead of fixing the dependency. The rule is right far more often than the developer overriding it.",
              "Conditional hooks — calling a hook inside an if or after an early return breaks the order React relies on and throws at runtime.",
              "Recreating objects and functions as dependencies each render, so the effect runs every time. Move them outside, or wrap with useMemo/useCallback.",
              "Reading layout in useEffect and then writing to it, causing a visible flash. Use useLayoutEffect for synchronous measurement before paint.",
            ],
          },
          {
            type: "callout",
            title: "A useful heuristic",
            text: "An effect should synchronise your component with something outside React — the DOM, a network connection, a browser API, a third-party widget. If it is synchronising React state with other React state, delete it and restructure.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is useEffect bad?",
        answer:
          "No, but it is overused. It is the right tool for synchronising with external systems and the wrong tool for deriving values, transforming props or reacting to user events.",
      },
      {
        question: "When should I use useLayoutEffect?",
        answer:
          "When you need to measure the DOM and change it before the browser paints — tooltip positioning, scroll restoration. It blocks paint, so use it sparingly and never for data fetching.",
      },
      {
        question: "Why does the linter want a function in my dependency array?",
        answer:
          "Because the effect uses it and it could change between renders. Either define it inside the effect, wrap it in useCallback, or move it out of the component if it has no dependencies.",
      },
      {
        question: "Does the React Compiler fix these?",
        answer:
          "It handles memoisation-related instability, which removes some dependency churn. It does not remove unnecessary effects, add cleanup, or fix race conditions — those are design problems.",
      },
    ],
    references: [
      { label: "React — You Might Not Need an Effect", href: "https://react.dev/learn/you-might-not-need-an-effect" },
      { label: "React — Synchronizing with Effects", href: "https://react.dev/learn/synchronizing-with-effects" },
      { label: "MDN — AbortController", href: "https://developer.mozilla.org/en-US/docs/Web/API/AbortController" },
    ],
    internalLinks: [
      { label: "React data fetching patterns", href: "/blog/react-data-fetching-patterns" },
      { label: "React state management guide", href: "/blog/react-state-management-guide" },
      { label: "React testing strategy", href: "/blog/react-testing-strategy" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "react-data-fetching-patterns",
      "react-state-management-guide",
      "react-testing-strategy",
    ],
  },

  {
    slug: "react-component-architecture",
    title: "Component architecture that survives three years of feature requests",
    seoTitle: "React Component Architecture That Scales",
    description:
      "How to structure React components, folders and boundaries so a codebase stays workable as the team grows — composition, colocation and the props explosion problem.",
    excerpt:
      "Every codebase is well organised on day one. The question is what it looks like after forty feature requests have been bolted onto the same Button.",
    category: "React",
    cluster: "react",
    primaryKeyword: "react component architecture",
    secondaryKeywords: [
      "react folder structure",
      "component composition",
      "design system components",
      "react code organization",
    ],
    authorId: "harshal",
    publishedAt: "2026-06-09",
    answer:
      "Scalable React architecture comes from three habits: compose components instead of adding boolean props, colocate files by feature rather than by file type, and keep a clear boundary between generic UI primitives and product-specific components. Structure follows change patterns — organise around what gets edited together.",
    takeaways: [
      "A component with more than a handful of boolean props needs composition, not another flag.",
      "Colocate by feature; group by file type only for genuinely shared primitives.",
      "Separate UI primitives from product components — different owners, different change rates.",
      "Prop drilling three levels deep is fine. Nine levels means the structure is wrong.",
    ],
    sections: [
      {
        heading: "How should you organise folders?",
        answer:
          "By feature, with a shared layer for things genuinely used across features.",
        body: [
          {
            type: "code",
            lang: "text",
            code: `components/
  ui/               # primitives: button, input, dialog — no product knowledge
  shared/           # cross-feature: page hero, section heading, cards
  sections/
    home/           # everything the home page renders
    pricing/
    blog/
lib/
  content/          # data + helpers, colocated with their types
  api/
  constants/`,
            caption: "Files that change together live together.",
          },
          {
            type: "p",
            text: "The test is simple: when you implement a typical feature request, how many directories do you touch? If a change to the pricing table means editing four unrelated folders, the structure is fighting you.",
          },
        ],
      },
      {
        heading: "What is the props explosion problem?",
        body: [
          {
            type: "p",
            text: "A component starts with two props. A year later it has nineteen, six of which are booleans that combine into states nobody has tested. This happens because every new requirement was added as configuration rather than composition.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// Configuration: every variation is a new prop
<Card title="…" subtitle="…" showIcon iconName="zap" showFooter
      footerText="…" variant="glass" compact isClickable href="/x" />

// Composition: the caller assembles what it needs
<Card href="/x">
  <Card.Header icon={<Zap />}>Title</Card.Header>
  <Card.Body>Subtitle text</Card.Body>
  <Card.Footer>Read the case study</Card.Footer>
</Card>`,
          },
          {
            type: "p",
            text: "Composition moves the variation to the call site, where it is visible. The component stays small, the combinations stay legal by construction, and nobody has to read the implementation to know what showFooter does when compact is also true.",
          },
        ],
      },
      {
        heading: "Where is the boundary between UI and product components?",
        body: [
          {
            type: "table",
            head: ["", "UI primitive", "Product component"],
            rows: [
              ["Knows about", "Styling, accessibility, interaction", "Your domain: orders, posts, plans"],
              ["Example", "Button, Dialog, Input", "PricingTable, OrderRow, ArticleCard"],
              ["Changes when", "The design system changes", "The product changes"],
              ["Data access", "None — props only", "May fetch or receive domain objects"],
            ],
          },
          {
            type: "p",
            text: "Keep primitives free of domain knowledge. The moment a Button imports your auth context to decide whether to render, it stops being reusable and starts being a liability across every future page.",
          },
        ],
      },
      {
        heading: "How do you keep components testable?",
        body: [
          {
            type: "list",
            items: [
              "Push data fetching to the edges — pages and containers fetch, presentational components receive.",
              "Keep business logic in plain functions you can test without rendering anything.",
              "Avoid components that are simultaneously fetching, transforming and rendering; that is three responsibilities and three reasons to change.",
              "Prefer explicit props over reaching into context, except for genuinely ambient concerns.",
            ],
          },
          {
            type: "callout",
            title: "The rename test",
            text: "If you cannot name a component without using 'and' or 'Manager', it does two things. Split it. The naming difficulty is the design feedback.",
          },
        ],
      },
      {
        heading: "When should you extract a component?",
        body: [
          {
            type: "p",
            text: "On the third use, not the first. Premature abstraction produces components with configuration for requirements that never arrived, and those are harder to unwind than duplication. Two similar blocks of JSX are cheaper to maintain than one wrong abstraction.",
          },
          {
            type: "p",
            text: "The exception is size: a component over roughly 200 lines is usually doing several things regardless of reuse, and splitting it improves comprehension even if each piece is used exactly once.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use atomic design?",
        answer:
          "The vocabulary (atoms, molecules, organisms) helps teams agree on granularity, but strict enforcement leads to arguments about whether something is a molecule. A two-layer split — primitives and product components — captures most of the value with less ceremony.",
      },
      {
        question: "How large should a component file be?",
        answer:
          "There is no hard rule, but past about 200 lines most components are doing more than one thing. Treat size as a prompt to look, not a rule to enforce.",
      },
      {
        question: "Is prop drilling always bad?",
        answer:
          "No. Two or three levels is clear and explicit. It becomes a problem when intermediate components receive props they do not use, which is a signal to compose differently or introduce context.",
      },
      {
        question: "Should every component have its own folder?",
        answer:
          "Only when it has companions — tests, styles, subcomponents. A single-file component in a folder of its own is overhead without benefit.",
      },
    ],
    references: [
      { label: "React — Thinking in React", href: "https://react.dev/learn/thinking-in-react" },
      { label: "React — Passing props to a component", href: "https://react.dev/learn/passing-props-to-a-component" },
      { label: "Kent C. Dodds — Colocation", href: "https://kentcdodds.com/blog/colocation" },
    ],
    internalLinks: [
      { label: "Frontend architecture decisions", href: "/blog/frontend-architecture-decisions" },
      { label: "React re-render performance", href: "/blog/react-rerender-performance" },
      { label: "React testing strategy", href: "/blog/react-testing-strategy" },
      { label: "Our development process", href: "/process" },
    ],
    related: [
      "frontend-architecture-decisions",
      "react-rerender-performance",
      "react-testing-strategy",
    ],
  },

  {
    slug: "frontend-architecture-decisions",
    title: "The seven frontend architecture decisions you make once",
    seoTitle: "7 Frontend Architecture Decisions That Stick",
    description:
      "Framework, rendering, styling, state, data layer, testing and deployment — the early choices that are expensive to reverse, and how to make them deliberately.",
    excerpt:
      "Some decisions can be changed in an afternoon. These seven set the shape of the codebase for years, so they deserve an hour of thought each.",
    category: "React",
    cluster: "react",
    primaryKeyword: "frontend architecture decisions",
    secondaryKeywords: [
      "frontend tech stack",
      "choosing a frontend framework",
      "architecture decision record",
      "web app architecture",
    ],
    authorId: "harshal",
    publishedAt: "2026-05-26",
    answer:
      "Seven frontend decisions are hard to reverse later: the framework, the rendering strategy, the styling approach, the state model, the data layer contract, the testing strategy, and the deployment target. Each should be written down with its reasoning so the next engineer inherits the argument, not just the outcome.",
    takeaways: [
      "Write architecture decisions down — a two-paragraph record beats tribal memory.",
      "Optimise for the team you have, not the team a conference talk assumes.",
      "Reversibility is a feature: prefer the choice that is cheaper to undo when it is close.",
      "Boring, widely-known technology is a legitimate architectural advantage.",
    ],
    sections: [
      {
        heading: "Decision 1: framework and rendering",
        body: [
          {
            type: "p",
            text: "This pair travels together. Choosing Next.js largely settles rendering; choosing a Vite SPA settles it differently. The deciding question is whether unauthenticated visitors and search engines need to see your content — if so, server rendering is not optional.",
          },
          {
            type: "p",
            text: "Record what you assumed. 'We chose a client-only SPA because 100% of traffic is authenticated' is a decision that can be revisited honestly when marketing asks for a public pricing page.",
          },
        ],
      },
      {
        heading: "Decision 2: styling approach",
        body: [
          {
            type: "table",
            head: ["Approach", "Strength", "Cost"],
            rows: [
              ["Utility CSS (Tailwind)", "Fast, no naming, small production CSS", "Verbose markup, needs component discipline"],
              ["CSS Modules", "Plain CSS, scoped, zero runtime", "Manual design token wiring"],
              ["CSS-in-JS (runtime)", "Dynamic styling from props", "Runtime cost, server component friction"],
              ["Zero-runtime CSS-in-JS", "Typed styles, no runtime", "Smaller ecosystem, build complexity"],
            ],
          },
          {
            type: "p",
            text: "Any of these can produce an excellent result. What cannot is using three of them in one codebase, which is what happens when the decision is never actually made.",
          },
        ],
      },
      {
        heading: "Decisions 3 and 4: state and data",
        body: [
          {
            type: "p",
            text: "Decide where server data lives and how it gets there before the second engineer joins. Server components, a query library, or a hand-rolled fetch layer are all defensible; mixing all three per-feature is not.",
          },
          {
            type: "list",
            items: [
              "Who owns the cache — server, query client, or store?",
              "How are errors surfaced consistently across the app?",
              "How is loading represented — skeletons, spinners, or optimistic UI?",
              "Are types generated from the API contract, or hand-written and hopeful?",
            ],
          },
          {
            type: "callout",
            title: "Generate your API types",
            text: "Whether from OpenAPI, GraphQL or a shared TypeScript package, generated types catch the class of bug where the backend renamed a field and the frontend found out in production.",
          },
        ],
      },
      {
        heading: "Decisions 5 and 6: testing and quality gates",
        body: [
          {
            type: "p",
            text: "Decide what CI blocks on. A pipeline that runs tests but does not fail the merge is decoration. Our default for client projects: type check, lint, unit tests for logic, and a handful of end-to-end tests covering the flows that generate revenue.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Type checking — non-negotiable, fastest feedback per second spent.",
              "Unit tests for pure logic: pricing, permissions, formatting, validation.",
              "Component tests for interactive pieces with real accessibility queries.",
              "End-to-end for critical paths only: signup, checkout, the primary workflow.",
              "A Lighthouse or bundle-size check so performance regressions are visible in the PR.",
            ],
          },
        ],
      },
      {
        heading: "Decision 7: deployment target",
        body: [
          {
            type: "p",
            text: "Managed platform, container on a cloud provider, or static export to a CDN. This decision constrains which framework features you can use, so make it early and verify your feature set against it before you depend on something the target cannot run.",
          },
          {
            type: "quote",
            text: "Write the decision, the alternatives considered, and the assumption that would make you change your mind. Three paragraphs, in the repository, dated.",
            cite: "ROVQIX architecture decision record template",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is an architecture decision record?",
        answer:
          "A short markdown file in the repository capturing a decision, the context, the options considered and the consequences. It costs ten minutes and saves the next team from re-litigating a choice without knowing why it was made.",
      },
      {
        question: "How do I choose between two good options?",
        answer:
          "Pick the one your team already knows, or the one that is cheaper to reverse. Familiarity and reversibility are underrated tie-breakers compared with benchmark differences you will never notice.",
      },
      {
        question: "When should we revisit these decisions?",
        answer:
          "When the assumption behind one stops holding — the app gains public pages, the team triples, traffic grows tenfold. Not on a schedule, and not because something new trended.",
      },
      {
        question: "Is a monorepo an architecture decision?",
        answer:
          "Yes, and a significant one. It pays off with multiple deployable apps sharing code, and adds tooling overhead when there is only one app. Decide based on how many things you actually deploy.",
      },
    ],
    references: [
      { label: "Architecture decision records — adr.github.io", href: "https://adr.github.io/" },
      { label: "web.dev — Rendering on the web", href: "https://web.dev/articles/rendering-on-the-web" },
      { label: "Next.js documentation", href: "https://nextjs.org/docs" },
    ],
    internalLinks: [
      { label: "Next.js vs React", href: "/blog/nextjs-vs-react-which-to-choose" },
      { label: "React component architecture", href: "/blog/react-component-architecture" },
      { label: "Monolith vs microservices", href: "/blog/monolith-vs-microservices" },
      { label: "How we work", href: "/process" },
    ],
    related: [
      "nextjs-vs-react-which-to-choose",
      "react-component-architecture",
      "monolith-vs-microservices",
    ],
  },

  {
    slug: "react-forms-guide",
    title: "Building React forms that are accessible, validated and hard to break",
    seoTitle: "React Forms: Validation and Accessibility Guide",
    description:
      "Controlled vs uncontrolled inputs, schema validation, error announcement, submission states and the accessibility details that make forms usable for everyone.",
    excerpt:
      "Forms are where most web products earn their money and where most accessibility audits fail. The details are small and the impact is not.",
    category: "React",
    cluster: "react",
    primaryKeyword: "react forms",
    secondaryKeywords: [
      "react hook form",
      "form validation react",
      "accessible forms",
      "zod validation",
    ],
    authorId: "harshal",
    publishedAt: "2026-05-12",
    answer:
      "A production React form needs uncontrolled inputs or a form library for performance, a shared schema validating on both client and server, error messages linked to inputs with aria-describedby, a disabled-and-labelled submit state, and a focus move to the first error on failed submission. Native form semantics do most of the work if you let them.",
    takeaways: [
      "Use a real <form> element with a submit button — never a div with an onClick.",
      "Validate with the same schema on client and server so rules cannot diverge.",
      "Link errors to inputs with aria-describedby and mark them aria-invalid.",
      "Move focus to the first error after a failed submit; screen reader users otherwise get no feedback.",
    ],
    sections: [
      {
        heading: "Controlled or uncontrolled inputs?",
        answer:
          "Uncontrolled by default; controlled when a value needs to drive other UI on every keystroke.",
        body: [
          {
            type: "p",
            text: "A controlled input re-renders the form on every character. For a login form that is irrelevant. For a 40-field application form with conditional sections, it is the difference between a snappy and a laggy experience on a mid-range phone.",
          },
          {
            type: "p",
            text: "Form libraries like React Hook Form default to uncontrolled inputs with refs, subscribing only the components that need a value. That is why they scale to large forms while a naive useState-per-field approach does not.",
          },
        ],
      },
      {
        heading: "How should validation be structured?",
        body: [
          {
            type: "p",
            text: "Define the schema once and use it in both places. The client uses it for immediate feedback; the server uses it as the actual boundary. If they are separate implementations, they will drift, and the drift will be a security bug rather than a cosmetic one.",
          },
          {
            type: "code",
            lang: "ts",
            code: `// lib/schemas/contact.ts — imported by the form and the server action
export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  budget: z.enum(["<5k", "5k-15k", "15k+"]),
  message: z.string().min(20, "Tell us a little more — at least 20 characters"),
});
export type ContactInput = z.infer<typeof contactSchema>;`,
          },
          {
            type: "list",
            items: [
              "Validate on blur for the first pass, then on change once a field has errored — validating on every keystroke from the start is hostile.",
              "Write error messages as instructions, not diagnoses: 'Enter a valid email address', not 'Invalid input'.",
              "Never block submission on a field the user cannot see, such as one inside a collapsed section.",
            ],
          },
        ],
      },
      {
        heading: "What makes a form accessible?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Every input has a real <label> with htmlFor. Placeholders are not labels — they vanish on focus and fail contrast.",
              "Errors are referenced with aria-describedby and the field is marked aria-invalid=\"true\".",
              "The error summary, or the first error, receives focus after a failed submit.",
              "Required fields use the required attribute, not just an asterisk in the label text.",
              "Related controls (radio groups, checkbox sets) are wrapped in a fieldset with a legend.",
              "Submission status is announced via a live region so it is not visual-only.",
              "Inputs use correct type and autocomplete attributes so browsers and password managers can help.",
            ],
          },
          {
            type: "code",
            lang: "tsx",
            code: `<label htmlFor="email">Work email</label>
<input
  id="email"
  name="email"
  type="email"
  autoComplete="email"
  required
  aria-invalid={Boolean(errors.email)}
  aria-describedby={errors.email ? "email-error" : undefined}
/>
{errors.email && <p id="email-error" role="alert">{errors.email.message}</p>}`,
          },
        ],
      },
      {
        heading: "How do you handle submission states?",
        body: [
          {
            type: "list",
            items: [
              "Disable the submit button while in flight and change its label — 'Sending…' communicates more than a spinner alone.",
              "Guard against double submission on the server too; a slow network turns one impatient click into two orders.",
              "On failure, keep the user's input. Clearing a form after a network error is the fastest way to lose a lead.",
              "On success, show confirmation in the same place the user was looking, and move focus to it.",
            ],
          },
          {
            type: "callout",
            title: "Measure abandonment, not just conversion",
            text: "Track which field is focused when users leave. On one client's enquiry form, a mandatory phone number field accounted for 31% of abandonment. Making it optional recovered most of it.",
          },
        ],
      },
      {
        heading: "Which library should you use?",
        body: [
          {
            type: "table",
            head: ["Option", "Good for", "Notes"],
            rows: [
              ["Native form + server action", "Simple forms, progressive enhancement", "Works without JavaScript; least code"],
              ["React Hook Form + Zod", "Medium to large forms, complex validation", "Uncontrolled by default, excellent performance"],
              ["TanStack Form", "Type-heavy forms with cross-field logic", "Strong inference, newer ecosystem"],
              ["Hand-rolled useState", "Two or three fields", "Fine at small scale, painful past that"],
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I validate on every keystroke?",
        answer:
          "Not initially. Validate on blur, then switch that field to on-change once it has an error so the user sees it clear as they fix it. Immediate errors while typing feel like being interrupted.",
      },
      {
        question: "Do I still need client-side validation with server actions?",
        answer:
          "Yes, for responsiveness. The server check is the security boundary; the client check saves a round trip and gives instant feedback. Share the schema so both are the same rules.",
      },
      {
        question: "How do I make a multi-step form accessible?",
        answer:
          "Announce step changes in a live region, move focus to the new step heading, keep progress visible, and never lose entered data when navigating backwards.",
      },
      {
        question: "Are placeholders acceptable as labels?",
        answer:
          "No. They disappear when the field has content, typically fail contrast requirements, and are not reliably announced by assistive technology. Use a visible label.",
      },
    ],
    references: [
      { label: "MDN — Client-side form validation", href: "https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation" },
      { label: "W3C WAI — Forms tutorial", href: "https://www.w3.org/WAI/tutorials/forms/" },
      { label: "React Hook Form documentation", href: "https://react-hook-form.com/get-started" },
    ],
    internalLinks: [
      { label: "Next.js server actions guide", href: "/blog/nextjs-server-actions-guide" },
      { label: "React accessibility guide", href: "/blog/react-accessibility-guide" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Contact ROVQIX", href: "/contact" },
    ],
    related: [
      "react-accessibility-guide",
      "nextjs-server-actions-guide",
      "web-application-security-checklist",
    ],
  },

  {
    slug: "react-accessibility-guide",
    title: "Accessibility in React: the twelve things that catch 80% of issues",
    seoTitle: "React Accessibility: 12 High-Impact Fixes",
    description:
      "Semantic HTML, focus management, keyboard navigation, announcements and colour contrast — the practical accessibility work that matters most in React apps.",
    excerpt:
      "Most accessibility failures in React apps come from a handful of repeated patterns. Fix these twelve and the audit gets short.",
    category: "React",
    cluster: "react",
    primaryKeyword: "react accessibility",
    secondaryKeywords: [
      "web accessibility wcag",
      "keyboard navigation react",
      "aria attributes",
      "focus management react",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-28",
    answer:
      "The highest-impact accessibility work in React is using semantic HTML instead of divs, keeping every interactive element keyboard reachable with a visible focus indicator, managing focus when content changes, labelling controls properly, and meeting colour contrast minimums. These cover the majority of real-world WCAG failures.",
    takeaways: [
      "A div with onClick is invisible to keyboard and screen reader users — use a button.",
      "Never remove focus outlines without replacing them with something equally visible.",
      "Dynamic content needs announcing; a screen reader does not notice a silent DOM change.",
      "Accessibility overlaps heavily with SEO — both reward semantic, well-structured HTML.",
    ],
    sections: [
      {
        heading: "Why does accessibility matter commercially?",
        body: [
          {
            type: "p",
            text: "Beyond the legal exposure that now applies in many jurisdictions, accessible markup is machine-readable markup. Semantic headings, labelled controls and meaningful link text improve how search engines and AI answer engines parse your page — the same work serves both audiences.",
          },
          {
            type: "p",
            text: "Practically: roughly one in six people has a disability of some kind. Keyboard-only navigation also covers power users, and captioned media covers everyone watching on mute in public.",
          },
        ],
      },
      {
        heading: "The first six: structure and semantics",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Use real elements: button for actions, a for navigation, input with a label. You get keyboard support, focus and roles for free.",
              "One h1 per page, and never skip heading levels — headings are how screen reader users navigate.",
              "Use landmarks: header, nav, main, footer. Screen reader users jump between them.",
              "Give every image meaningful alt text, or alt=\"\" if it is decorative.",
              "Write descriptive link text. 'Read more' repeated eleven times is useless out of context.",
              "Set lang on the html element so screen readers use the right pronunciation rules.",
            ],
          },
        ],
      },
      {
        heading: "The next six: interaction and feedback",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Every interactive element must be reachable and operable by keyboard alone. Test by unplugging the mouse.",
              "Keep a visible focus indicator with at least 3:1 contrast against its background.",
              "Trap focus inside modals, return it to the trigger on close, and close on Escape.",
              "Announce dynamic changes with aria-live regions — toasts, validation errors, search result counts.",
              "Meet contrast minimums: 4.5:1 for body text, 3:1 for large text and UI component boundaries.",
              "Respect prefers-reduced-motion by disabling non-essential animation.",
            ],
          },
          {
            type: "code",
            lang: "tsx",
            code: `// Announce async results without stealing focus
<div role="status" aria-live="polite" className="sr-only">
  {isPending ? "Searching" : \`\${results.length} results found\`}
</div>`,
          },
        ],
      },
      {
        heading: "What are the React-specific traps?",
        body: [
          {
            type: "list",
            items: [
              "Client-side navigation does not move focus or announce the new page. Move focus to the main heading on route change.",
              "Conditionally rendered content appears silently — pair it with a live region or a focus move.",
              "Autofocus inside a modal is helpful; autofocus on page load is disorienting.",
              "Custom select and combobox components almost always break keyboard semantics. Use a headless library that implements the ARIA pattern properly.",
              "Removing an element that currently has focus sends focus to the body, losing the user's place.",
            ],
          },
          {
            type: "callout",
            title: "Prefer headless primitives",
            text: "Libraries like Radix and Base UI implement the roving tabindex, focus trapping and ARIA relationships that these patterns require. Reimplementing a combobox from scratch is a multi-week job done properly.",
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
              "Automated: axe DevTools or Lighthouse in CI. Catches maybe 40% of issues — necessary, not sufficient.",
              "Keyboard pass: Tab through the whole page. Can you reach and operate everything? Is focus always visible?",
              "Screen reader pass: NVDA on Windows or VoiceOver on macOS, ten minutes on your main flow.",
              "Zoom to 200% and check nothing is clipped or overlapping.",
              "Test with a colour contrast analyser rather than trusting the design file.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do accessibility overlays fix compliance?",
        answer:
          "No. Overlay widgets have been widely criticised by disability advocates and have not prevented legal action. They cannot fix semantics that are not in the markup. Fix the code.",
      },
      {
        question: "What WCAG level should we target?",
        answer:
          "WCAG 2.2 Level AA is the standard referenced by most regulations, including the European Accessibility Act. Level AAA is not expected for general-purpose sites.",
      },
      {
        question: "Does ARIA make things accessible?",
        answer:
          "Only when native HTML cannot express the pattern. Incorrect ARIA is worse than none — the first rule of ARIA is to use a native element instead wherever possible.",
      },
      {
        question: "Does accessibility help SEO?",
        answer:
          "Indirectly but genuinely. Headings, alt text, link text, semantic landmarks and captions all improve how search engines and AI systems understand a page.",
      },
    ],
    references: [
      { label: "W3C — WCAG 2.2 quick reference", href: "https://www.w3.org/WAI/WCAG22/quickref/" },
      { label: "MDN — ARIA authoring practices", href: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA" },
      { label: "Deque — axe DevTools", href: "https://www.deque.com/axe/devtools/" },
    ],
    internalLinks: [
      { label: "React forms guide", href: "/blog/react-forms-guide" },
      { label: "Semantic HTML and SEO", href: "/blog/semantic-html-seo" },
      { label: "Core Web Vitals explained", href: "/blog/core-web-vitals-explained" },
      { label: "Our services", href: "/services" },
    ],
    related: ["react-forms-guide", "semantic-html-seo", "core-web-vitals-explained"],
  },

  {
    slug: "react-error-boundaries-and-loading-states",
    title: "Error boundaries, Suspense and loading states that do not feel broken",
    seoTitle: "React Error Boundaries and Loading States",
    description:
      "How to design failure and loading states in React — where boundaries belong, what skeletons should look like, and how to recover without a full page reload.",
    excerpt:
      "Users judge reliability by how your app behaves when something goes wrong. Most apps put all their design effort into the happy path.",
    category: "React",
    cluster: "react",
    primaryKeyword: "react error boundaries",
    secondaryKeywords: [
      "react suspense",
      "loading skeleton",
      "error handling react",
      "graceful degradation",
    ],
    authorId: "harshal",
    publishedAt: "2026-04-14",
    answer:
      "Place error boundaries around independently recoverable regions rather than the whole app, use Suspense with skeletons that match the eventual layout, and always give the user a way forward — a retry action, cached content, or a clear next step. A failure that takes down the entire page is a design choice, not an inevitability.",
    takeaways: [
      "One global error boundary means one failing widget blanks the whole page.",
      "Skeletons should mirror the real layout, or they cause layout shift when content arrives.",
      "Every error state needs an action: retry, go back, or contact support.",
      "Log the error with context before showing the fallback — silent boundaries hide bugs.",
    ],
    sections: [
      {
        heading: "Where should error boundaries go?",
        answer:
          "Around each region that can fail independently and still leave a usable page.",
        body: [
          {
            type: "p",
            text: "A dashboard with six widgets should have six boundaries, not one. If the revenue chart's API is down, the other five widgets should still render and the chart should show a compact error with a retry button.",
          },
          {
            type: "p",
            text: "In the Next.js App Router this is built into routing: an error.tsx file scopes a boundary to its route segment, and a nested segment's error keeps the parent layout intact. Put error.tsx where the recoverable unit is.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// app/dashboard/reports/error.tsx
"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => { captureException(error); }, [error]);
  return (
    <div role="alert">
      <h2>We could not load your reports</h2>
      <p>This is usually temporary.</p>
      <button onClick={reset}>Try again</button>
    </div>
  );
}`,
          },
        ],
      },
      {
        heading: "What makes a good loading state?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Match the shape of the real content. A skeleton with different dimensions guarantees layout shift on arrival.",
              "Do not show a loader for work under about 200ms — the flash is worse than the wait.",
              "For work over roughly 3 seconds, say what is happening: 'Generating your report'.",
              "Keep the surrounding page interactive. Blocking the whole UI for one region is rarely necessary.",
              "Stream where you can: render the shell immediately and let slow regions fill in.",
            ],
          },
          {
            type: "callout",
            title: "Skeletons are a layout contract",
            text: "If your skeleton card is 180px tall and the real card is 240px, you have designed a Cumulative Layout Shift into the page. Build skeletons from the same component dimensions.",
          },
        ],
      },
      {
        heading: "What do error boundaries not catch?",
        body: [
          {
            type: "table",
            head: ["Error type", "Caught by boundary?", "Handle with"],
            rows: [
              ["Render-time throw", "Yes", "Error boundary"],
              ["Event handler throw", "No", "try/catch in the handler"],
              ["Async rejection (fetch)", "No", "Catch and set error state"],
              ["Server-side render error", "Partly", "Framework error handling"],
              ["Errors inside the boundary itself", "No", "Keep fallbacks trivially simple"],
            ],
          },
          {
            type: "p",
            text: "This is why 'we have an error boundary' is not an error strategy. Most production errors are asynchronous, and they need explicit handling at the call site.",
          },
        ],
      },
      {
        heading: "How should errors be communicated?",
        body: [
          {
            type: "list",
            items: [
              "Say what happened in plain language, without stack traces or error codes as the headline.",
              "Say whether it is likely temporary, and offer the obvious action.",
              "Include a support reference id so a user can report it and you can find it in your logs.",
              "Preserve user input. Losing a half-written message because a request failed is the worst possible outcome.",
              "Never render an empty page. A blank screen reads as broken even when nothing is technically wrong.",
            ],
          },
        ],
      },
      {
        heading: "How do you verify failure paths?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Throttle the network in DevTools and reload — do skeletons appear and settle without shifting?",
              "Block an API domain and confirm the region fails gracefully rather than the page.",
              "Return a 500 from one endpoint in staging and walk the flow.",
              "Confirm the error reached your monitoring with enough context to debug.",
              "Add an end-to-end test for at least one failure path on your most important flow.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can error boundaries be function components?",
        answer:
          "Not directly — the boundary itself must be a class component or come from a library like react-error-boundary. In the Next.js App Router, error.tsx wraps this for you.",
      },
      {
        question: "Should I show the error message to users?",
        answer:
          "Show a human summary, not the raw message. Raw errors can leak implementation details and are rarely actionable. Log the full detail server-side against a reference id.",
      },
      {
        question: "Are spinners or skeletons better?",
        answer:
          "Skeletons for content whose shape you know, spinners for indeterminate actions like a form submission. Skeletons reduce perceived wait because the page appears to be assembling.",
      },
      {
        question: "How does Suspense relate to error boundaries?",
        answer:
          "Suspense handles the pending state, error boundaries handle the failed state. Most data-loading regions want both, and in the App Router loading.tsx and error.tsx give you each.",
      },
    ],
    references: [
      { label: "React — Error boundaries reference", href: "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary" },
      { label: "React — Suspense", href: "https://react.dev/reference/react/Suspense" },
      { label: "web.dev — Cumulative Layout Shift", href: "https://web.dev/articles/cls" },
    ],
    internalLinks: [
      { label: "Fixing Cumulative Layout Shift", href: "/blog/fix-cumulative-layout-shift" },
      { label: "Monitoring and observability basics", href: "/blog/observability-for-web-apps" },
      { label: "React data fetching patterns", href: "/blog/react-data-fetching-patterns" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "react-data-fetching-patterns",
      "fix-cumulative-layout-shift",
      "observability-for-web-apps",
    ],
  },

  {
    slug: "react-data-fetching-patterns",
    title: "Data fetching patterns in React: waterfalls, parallelism and caching",
    seoTitle: "React Data Fetching Patterns That Scale",
    description:
      "How to avoid request waterfalls, when to fetch on the server vs the client, and how to structure caching, mutations and optimistic updates.",
    excerpt:
      "Most slow React pages are not slow because of rendering. They are slow because six requests are queued behind each other for no reason.",
    category: "React",
    cluster: "react",
    primaryKeyword: "react data fetching",
    secondaryKeywords: [
      "request waterfall",
      "react query patterns",
      "optimistic updates",
      "server side data fetching",
    ],
    authorId: "harshal",
    publishedAt: "2026-03-31",
    answer:
      "The dominant cost in React data fetching is the request waterfall — each request waiting for a parent to render before it starts. Fetch independent data in parallel with Promise.all on the server or prefetching on the client, colocate requests with the components that need them, and let a cache layer deduplicate rather than lifting every fetch to the top.",
    takeaways: [
      "A waterfall of four 200ms requests is an 800ms page for no good reason.",
      "Server-side fetching removes a network round trip and the client's cold cache.",
      "Deduplicate by cache key, not by hoisting every fetch into one parent.",
      "Optimistic updates need a rollback path; without one they teach users not to trust the UI.",
    ],
    sections: [
      {
        heading: "What is a request waterfall and why does it happen?",
        answer:
          "A waterfall is a chain of requests where each can only start after the previous one finishes, usually because a component must render before its child's fetch begins.",
        body: [
          {
            type: "p",
            text: "Component-level fetching creates waterfalls naturally: the page fetches the user, renders, the sidebar then fetches permissions, renders, the widget then fetches data. Each step adds a full round trip even though nothing after the first depends on the previous result.",
          },
          {
            type: "code",
            lang: "tsx",
            code: `// Waterfall: 3 sequential round trips
const user = await getUser(id);
const orders = await getOrders(id);
const invoices = await getInvoices(id);

// Parallel: 1 round trip's worth of latency
const [user, orders, invoices] = await Promise.all([
  getUser(id),
  getOrders(id),
  getInvoices(id),
]);`,
          },
        ],
      },
      {
        heading: "Should you fetch on the server or the client?",
        body: [
          {
            type: "table",
            head: ["Situation", "Fetch where", "Why"],
            rows: [
              ["Initial page content", "Server", "No client round trip, no cold cache, indexable"],
              ["Data behind a click", "Client", "Not needed for first paint"],
              ["Frequently refetched data", "Client", "Cache, focus refetch, polling"],
              ["Secrets or privileged queries", "Server", "Credentials never reach the browser"],
              ["Real-time updates", "Client", "Sockets, subscriptions"],
            ],
          },
          {
            type: "p",
            text: "A common effective split: server-render the initial data into the page, then hand it to a client cache as initial state so subsequent interactions are instant and refetching is handled.",
          },
        ],
      },
      {
        heading: "How should caching be keyed?",
        body: [
          {
            type: "p",
            text: "Cache keys should describe the request exactly — resource, identifier and every parameter that changes the response. A key of ['orders'] when the query filters by status will serve one filter's results for another's.",
          },
          {
            type: "list",
            items: [
              "Include every variable that affects the response in the key.",
              "Set staleTime deliberately: zero means refetching constantly, infinity means never noticing a change.",
              "Invalidate by key prefix after mutations rather than manually rewriting cached values everywhere.",
              "For server-side caches, use tags so one content change can invalidate every derived page.",
            ],
          },
        ],
      },
      {
        heading: "How do mutations and optimistic updates fit?",
        body: [
          {
            type: "p",
            text: "A mutation should do three things: apply the change, invalidate what it affected, and handle failure visibly. Optimistic updates add a fourth — rollback — and should only be used where success is overwhelmingly likely and the change is cheap to reverse.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Good candidates: toggling a like, marking read, reordering a list, adding a tag.",
              "Bad candidates: payments, irreversible deletions, anything with server-side validation that commonly fails.",
              "Always implement the rollback and show a message when it happens. Silent reverts are worse than a loading state.",
            ],
          },
          {
            type: "callout",
            title: "Prefetch on intent",
            text: "Prefetching on hover or focus of a link turns a 300ms navigation into an instant one. It is the single highest-perceived-performance change most apps can make, and it costs a few lines.",
          },
        ],
      },
      {
        heading: "How do you find waterfalls in an existing app?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Open the Network panel, filter to XHR/fetch, and look at the waterfall chart for staircase patterns.",
              "Throttle to Fast 3G — waterfalls that are invisible on a fast connection become obvious.",
              "Count requests before first meaningful paint. More than three or four sequential ones needs restructuring.",
              "Check for duplicate requests to the same URL — a sign of missing deduplication.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is fetching inside components an anti-pattern?",
        answer:
          "No — colocation is good for maintainability. The anti-pattern is sequential dependency between those fetches. Colocate, but start independent requests in parallel higher up or via prefetching.",
      },
      {
        question: "Do I still need React Query with server components?",
        answer:
          "Not for read-only pages. You still benefit from it for client-driven interactions: polling, infinite scroll, optimistic mutations and background refetching.",
      },
      {
        question: "How do I handle pagination?",
        answer:
          "Keep the page in the URL so it is shareable, prefetch the next page on idle, and use cursor-based pagination on the API for stable results with changing data.",
      },
      {
        question: "What is a reasonable staleTime?",
        answer:
          "Match it to how fast the data actually changes. Reference data can be minutes; a live order queue might be seconds. Defaulting everything to zero causes needless refetch storms.",
      },
    ],
    references: [
      { label: "TanStack Query — Important defaults", href: "https://tanstack.com/query/latest/docs/framework/react/guides/important-defaults" },
      { label: "web.dev — Prefetching and prerendering", href: "https://web.dev/articles/prerender-pages" },
      { label: "Next.js — Fetching data", href: "https://nextjs.org/docs/app/getting-started/fetching-data" },
    ],
    internalLinks: [
      { label: "React state management guide", href: "/blog/react-state-management-guide" },
      { label: "Next.js caching explained", href: "/blog/nextjs-caching-explained" },
      { label: "REST API design principles", href: "/blog/rest-api-design-principles" },
      { label: "Web application development", href: "/services#web-apps" },
    ],
    related: [
      "react-state-management-guide",
      "nextjs-caching-explained",
      "rest-api-design-principles",
    ],
  },

  {
    slug: "react-testing-strategy",
    title: "A testing strategy for React apps that a small team can actually maintain",
    seoTitle: "React Testing Strategy for Small Teams",
    description:
      "What to test, what to skip, and how to structure unit, component and end-to-end tests so the suite catches real regressions without becoming a burden.",
    excerpt:
      "A test suite nobody trusts is worse than none — it costs time and provides false confidence. Here is what we actually test on client projects.",
    category: "React",
    cluster: "react",
    primaryKeyword: "react testing strategy",
    secondaryKeywords: [
      "react testing library",
      "playwright end to end",
      "unit vs integration tests",
      "test coverage",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-03-17",
    answer:
      "Test business logic exhaustively with fast unit tests, test components at the interaction level with Testing Library queries that mirror how users find elements, and reserve end-to-end tests for the handful of flows that generate revenue. Coverage percentage is a poor target; coverage of critical paths is the real goal.",
    takeaways: [
      "Test behaviour, not implementation — queries by role and label, never by class name.",
      "Pure logic deserves the most tests: it is cheap to test and expensive to get wrong.",
      "Five reliable end-to-end tests beat fifty flaky ones.",
      "A flaky test is a broken test. Fix it or delete it the same week.",
    ],
    sections: [
      {
        heading: "What should you actually test?",
        body: [
          {
            type: "table",
            head: ["Layer", "Test with", "How much"],
            rows: [
              ["Pure logic (pricing, permissions, formatting)", "Unit tests", "Thorough, including edge cases"],
              ["Components with interaction", "Testing Library", "Main states and one failure path"],
              ["Forms and validation", "Component tests", "Valid, invalid, submitting, error"],
              ["Critical user journeys", "Playwright / Cypress", "3–8 flows total"],
              ["Static presentational markup", "—", "Usually not worth it"],
            ],
          },
          {
            type: "p",
            text: "The distribution matters more than the total. A suite of 400 snapshot tests over presentational components will not catch the bug where the discount calculation rounds the wrong way.",
          },
        ],
      },
      {
        heading: "How do you write component tests that do not break constantly?",
        answer:
          "Query the way a user would — by role, label and text — and assert on visible outcomes rather than internal state.",
        body: [
          {
            type: "code",
            lang: "tsx",
            code: `test("shows a validation error for an invalid email", async () => {
  const user = userEvent.setup();
  render(<EnquiryForm />);

  await user.type(screen.getByLabelText(/work email/i), "not-an-email");
  await user.click(screen.getByRole("button", { name: /send/i }));

  expect(await screen.findByRole("alert")).toHaveTextContent(/valid email/i);
});`,
            caption: "This test survives a refactor of class names, structure and internal state.",
          },
          {
            type: "p",
            text: "A useful side effect: tests written with role and label queries fail when the markup is inaccessible. If getByRole('button') cannot find your clickable div, your users' assistive technology cannot either.",
          },
        ],
      },
      {
        heading: "How many end-to-end tests do you need?",
        body: [
          {
            type: "p",
            text: "Fewer than you think. End-to-end tests are the slowest to run, the most expensive to maintain and the most prone to flakiness. Cover the flows where a failure costs money — signup, checkout, the core workflow — and stop.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Run them against a production-like build, not the dev server.",
              "Use stable test ids only where role and text queries genuinely cannot identify an element.",
              "Seed data through the API or a fixture, not by clicking through the UI to set up state.",
              "Never use fixed sleeps; wait for a condition. Sleeps are where flakiness is born.",
              "Run them on every pull request. A suite that only runs nightly gets ignored.",
            ],
          },
        ],
      },
      {
        heading: "What about coverage targets?",
        body: [
          {
            type: "p",
            text: "Coverage measures which lines ran, not whether they were verified. It is useful for finding untested files and useless as a KPI. We track coverage but gate on something better: does every critical path have at least one test, and did the last three production bugs get a regression test?",
          },
          {
            type: "callout",
            title: "The regression rule",
            text: "Every production bug gets a failing test before the fix. It is the only mechanism that reliably grows a suite around the code that actually breaks.",
          },
        ],
      },
      {
        heading: "How should tests run in CI?",
        body: [
          {
            type: "list",
            items: [
              "Type check and lint first — they are the fastest signal and catch the most per second.",
              "Unit and component tests in parallel; they should finish in under two minutes.",
              "End-to-end tests against a preview deployment, with video or trace artifacts on failure.",
              "Block the merge on all of them. A green-optional pipeline is documentation, not a gate.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use snapshot tests?",
        answer:
          "Sparingly. Large component snapshots break on every legitimate change and get updated without reading. Small snapshots of serialised data structures are more useful than DOM snapshots.",
      },
      {
        question: "Vitest or Jest?",
        answer:
          "Vitest is generally faster and integrates cleanly with Vite-based tooling; Jest has the larger ecosystem and long-standing Next.js support. Either is fine — pick one and be consistent.",
      },
      {
        question: "How do I test server components?",
        answer:
          "Test the data functions they call as plain units, and cover the rendered output with an end-to-end test. Direct unit testing of async server components has limited tooling support today.",
      },
      {
        question: "Is 100% coverage worth pursuing?",
        answer:
          "No. The last 20% is usually error paths and glue code where tests cost more than they return. Aim for confidence on the paths that matter rather than a number.",
      },
    ],
    references: [
      { label: "Testing Library — Guiding principles", href: "https://testing-library.com/docs/guiding-principles/" },
      { label: "Playwright documentation", href: "https://playwright.dev/docs/intro" },
      { label: "Kent C. Dodds — Testing Trophy", href: "https://kentcdodds.com/blog/the-testing-trophy-and-testing-classifications" },
    ],
    internalLinks: [
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "React component architecture", href: "/blog/react-component-architecture" },
      { label: "React hooks common mistakes", href: "/blog/react-hooks-common-mistakes" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "ci-cd-pipeline-design",
      "react-component-architecture",
      "react-hooks-common-mistakes",
    ],
  },
];
