export const blogPosts = [
  {
    slug: "designing-for-trust-in-saas",
    title: "Designing for trust in SaaS products",
    excerpt:
      "Why the smallest interface details — loading states, empty states, error copy — decide whether users trust your product.",
    category: "Design",
    date: "2026-05-14",
    readTime: "6 min read",
    content: [
      "Trust in software is built in milliseconds, not minutes. Before a user reads a single word of your value proposition, they've already formed an opinion based on how your interface loads, responds, and recovers from errors.",
      "We've found that the highest-leverage design work often isn't the hero section — it's the loading skeleton, the empty state illustration, and the error message copy. These are the moments where users decide whether your product is reliable.",
      "When we redesign a SaaS product, we start by auditing every 'boring' state: loading, empty, error, and success confirmations. Getting these right compounds trust across the entire product experience.",
    ],
  },
  {
    slug: "performance-is-a-design-decision",
    title: "Performance is a design decision, not an engineering afterthought",
    excerpt:
      "How treating Core Web Vitals as a design constraint — not a post-launch fix — changes the way you build interfaces.",
    category: "Engineering",
    date: "2026-04-22",
    readTime: "5 min read",
    content: [
      "Most teams treat performance as something engineering fixes after design ships. That's backwards. Every animation, every image, every third-party embed is a design decision with a performance cost attached.",
      "We design with a performance budget from day one — capping animation complexity, choosing image formats deliberately, and questioning every dependency before it enters the bundle.",
      "The result: sites that feel instant, not just look premium. Motion should never come at the cost of a smooth 60fps scroll.",
    ],
  },
  {
    slug: "anatomy-of-a-converting-landing-page",
    title: "The anatomy of a landing page that actually converts",
    excerpt:
      "Breaking down the structural decisions behind high-converting landing pages — beyond just 'add more social proof.'",
    category: "Strategy",
    date: "2026-03-30",
    readTime: "7 min read",
    content: [
      "Conversion isn't a single button color test. It's a sequence of decisions: what claim you lead with, how fast you address objections, and how many steps stand between interest and action.",
      "We map every landing page against the visitor's actual decision journey — not a generic template — before a single pixel is designed.",
      "The pages that convert best usually have the least friction, not the most persuasion tactics.",
    ],
  },
  {
    slug: "voice-ai-interface-patterns",
    title: "Interface patterns for voice and conversational AI products",
    excerpt:
      "Emerging UI patterns for products built on voice synthesis and conversational agents — and where most teams get it wrong.",
    category: "AI",
    date: "2026-03-02",
    readTime: "8 min read",
    content: [
      "Voice-first and conversational AI products break most of our existing design conventions. There's no fixed layout to anchor around — the interface has to represent state, uncertainty, and turn-taking in real time.",
      "We've developed a set of interaction patterns specifically for AI-native products: visual waveforms for voice state, confidence indicators for generated content, and graceful degradation when the model is uncertain.",
      "The best AI interfaces don't hide the model's reasoning — they make it legible.",
    ],
  },
  {
    slug: "why-motion-design-earns-its-place",
    title: "Why every animation should earn its place",
    excerpt:
      "A framework for deciding when motion adds clarity versus when it's just decoration competing for attention.",
    category: "Motion",
    date: "2026-02-11",
    readTime: "4 min read",
    content: [
      "Motion is one of the easiest things to overdo in modern web design. The question we ask before adding any animation: does this help the user understand what just happened, or is it decoration?",
      "Good motion clarifies cause and effect — a card that lifts on hover tells you it's clickable. Bad motion distracts from the content it's supposed to support.",
      "Our rule: if you can't articulate what an animation communicates, cut it.",
    ],
  },
  {
    slug: "scoping-a-website-project-that-wont-blow-up",
    title: "How to scope a website project that won't blow up",
    excerpt:
      "The scoping mistakes that turn a four-week project into a four-month one — and how we structure engagements to avoid them.",
    category: "Process",
    date: "2026-01-18",
    readTime: "6 min read",
    content: [
      "Scope creep rarely comes from one big change — it's death by a thousand 'quick additions.' The fix isn't rigidity, it's clarity about what's in scope and a fast, cheap path for what isn't.",
      "We scope every engagement around a fixed set of pages and components upfront, with a clear, priced process for additions. No ambiguity, no resentment.",
      "The projects that stay on time are the ones where everyone agreed on 'done' before we started.",
    ],
  },
] as const;

export type BlogPost = (typeof blogPosts)[number];

export const blogCategories = [
  "All",
  ...Array.from(new Set(blogPosts.map((post) => post.category))),
];
