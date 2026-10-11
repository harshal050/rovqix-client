import type { Article } from "@rovqix/shared/lib/content/types";

export const aiSeoArticles: Article[] = [
  {
    slug: "what-is-answer-engine-optimization",
    title: "What is Answer Engine Optimisation (AEO) and how is it different from SEO?",
    seoTitle: "What Is Answer Engine Optimization (AEO)?",
    description:
      "AEO defined: optimising content to be selected as the answer by AI assistants and search features, how it differs from ranking, and what to change.",
    excerpt:
      "Traditional SEO competes for a click. AEO competes to be the sentence the assistant reads out — often with no click at all.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "answer engine optimization",
    secondaryKeywords: [
      "aeo vs seo",
      "ai search optimization",
      "zero click search",
      "featured snippet optimization",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-08-11",
    answer:
      "Answer Engine Optimisation is the practice of structuring content so AI assistants and answer-based search features can extract and present it as a direct answer. It differs from traditional SEO in its unit of competition: not a ranked page, but an extractable passage that answers a specific question completely on its own.",
    takeaways: [
      "The competitive unit is a passage, not a page.",
      "Answers must be self-contained — extraction removes surrounding context.",
      "Question-shaped headings followed by direct answers are the core pattern.",
      "AEO and SEO overlap heavily; this is an addition to good practice, not a replacement.",
    ],
    sections: [
      {
        heading: "What is an answer engine?",
        answer:
          "Any system that returns a synthesised answer rather than a list of links — AI assistants, AI Overviews, and voice assistants.",
        body: [
          {
            type: "p",
            text: "The user asks a question and receives a composed answer, usually with a small number of cited sources. Instead of ten blue links competing for a click, a handful of passages compete to be part of the answer, and being cited is the visibility.",
          },
          {
            type: "table",
            head: ["", "Traditional SEO", "AEO"],
            rows: [
              ["Competitive unit", "A page", "A passage"],
              ["Goal", "Rank, earn the click", "Be extracted and cited"],
              ["Success metric", "Position, clicks", "Citations, mentions, assisted traffic"],
              ["Content shape", "Comprehensive page", "Self-contained answers within a page"],
              ["Winner count", "Ten results", "Often three to five sources"],
            ],
          },
        ],
      },
      {
        heading: "What actually changes in your content?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Lead with the answer. Put a direct, complete response in the first two sentences under each question heading.",
              "Use question-shaped headings that match how people phrase things: 'How much does a website cost?' not 'Pricing'.",
              "Make every passage self-contained. 'As mentioned above' is meaningless once extracted.",
              "Define terms explicitly, in a single sentence a system can lift verbatim.",
              "Use lists and tables for comparisons and steps — they extract cleanly.",
              "Include specific numbers, thresholds and dates rather than vague qualifiers.",
            ],
          },
          {
            type: "code",
            lang: "markdown",
            code: `## How long does a website take to build?

A typical business website takes 4–8 weeks from kickoff to launch: one week
for discovery, two for design, three for development, and one for testing
and deployment. Complex platforms with custom integrations take 12–20 weeks.

[Then the detail: what changes the timeline, examples, exceptions.]`,
            caption: "Answer first, then depth. The first paragraph is the extractable unit.",
          },
        ],
      },
      {
        heading: "What does not change?",
        body: [
          {
            type: "list",
            items: [
              "The content still has to be accurate and genuinely useful. Extraction rewards clarity, not padding.",
              "Technical fundamentals still apply — crawlable HTML, fast pages, clean structure.",
              "Authority still matters. AI systems disproportionately cite sources that are already well-regarded.",
              "Original information, data and experience remain the differentiator, more so than before.",
            ],
          },
          {
            type: "callout",
            title: "AEO is not a separate discipline",
            text: "Almost everything that makes content extractable also makes it better for humans: a direct answer up front, clear headings, real structure. Teams that already write well need formatting discipline, not a new strategy.",
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
              "Track referral traffic from AI assistants in analytics — the referrer domains are identifiable.",
              "Manually test your priority questions across the major assistants monthly and record whether you are cited.",
              "Monitor branded search volume, which often rises when a brand is being mentioned in answers.",
              "Watch impressions-with-flat-clicks in Search Console, a signature of answers being shown without a click.",
              "Track assisted conversions: AI-referred visitors are typically fewer but further along in intent.",
            ],
          },
          {
            type: "p",
            text: "Measurement here is genuinely immature. Accept directional evidence, keep a manual citation log, and do not build a reporting structure that implies more precision than exists.",
          },
        ],
      },
      {
        heading: "Is it worth the effort?",
        body: [
          {
            type: "p",
            text: "The honest assessment: the formatting changes cost very little and improve the content for human readers anyway. The strategic risk is different — as more queries are answered without a click, informational content generates less traffic even when it is the source of the answer.",
          },
          {
            type: "p",
            text: "The response we recommend to clients is to keep publishing genuinely useful informational content for authority and citation, and to make sure the content people convert on — comparisons, pricing, capability pages — is the content you optimise hardest for the click.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is AEO replacing SEO?",
        answer:
          "No. It is an additional layer on top of the same foundations. A page that cannot be crawled, is slow, or has no authority will not be cited by an answer engine either.",
      },
      {
        question: "What is the difference between AEO and GEO?",
        answer:
          "AEO focuses on being selected as a direct answer. GEO — generative engine optimisation — is broader, covering how your brand and content appear across generative AI systems. The tactics overlap substantially.",
      },
      {
        question: "Does being cited bring traffic?",
        answer:
          "Some, though typically less than a top ranking would. AI-referred visitors tend to convert well because they arrive with more context and clearer intent.",
      },
      {
        question: "How long does AEO take to show results?",
        answer:
          "AI systems refresh at different rates; some cite live retrieval, others rely on training data. Expect weeks for retrieval-based systems and much longer for anything training-dependent.",
      },
    ],
    references: [
      { label: "Google Search Central — AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "Google Search Central — Creating helpful content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "Schema.org", href: "https://schema.org/" },
    ],
    internalLinks: [
      { label: "Generative Engine Optimisation explained", href: "/blog/generative-engine-optimization" },
      { label: "Content structure for AI search", href: "/blog/content-structure-for-ai-search" },
      { label: "Getting cited in AI Overviews", href: "/blog/getting-cited-in-ai-overviews" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "generative-engine-optimization",
      "content-structure-for-ai-search",
      "getting-cited-in-ai-overviews",
    ],
  },

  {
    slug: "generative-engine-optimization",
    title: "Generative Engine Optimisation: making your brand legible to AI systems",
    seoTitle: "Generative Engine Optimization (GEO) Explained",
    description:
      "What GEO covers, how generative systems select and synthesise sources, and the practical work that improves how your brand is represented.",
    excerpt:
      "GEO is less about ranking and more about whether an AI system can describe your company accurately when someone asks about it.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "generative engine optimization",
    secondaryKeywords: [
      "geo seo",
      "llm visibility",
      "brand mentions ai",
      "ai search visibility",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-07-28",
    answer:
      "Generative Engine Optimisation is the practice of improving how your brand, products and content are represented in AI-generated answers. It combines extractable content structure, consistent factual information across the web, third-party mentions, and clear entity signals so generative systems describe you accurately and cite you as a source.",
    takeaways: [
      "Generative systems synthesise from many sources — consistency across them matters more than any single page.",
      "Third-party mentions carry weight you cannot manufacture on your own site.",
      "Being described inaccurately is a real risk, and mostly a data consistency problem.",
      "Entity clarity — who you are, what you do, where — is foundational.",
    ],
    sections: [
      {
        heading: "How do generative systems choose sources?",
        body: [
          {
            type: "p",
            text: "The details vary by system and are not fully published, but the observable pattern is consistent: retrieve candidate documents relevant to the query, extract passages that answer it directly, weight sources by apparent authority and agreement, and synthesise an answer with citations.",
          },
          {
            type: "list",
            items: [
              "Relevance to the specific question, at passage level rather than page level.",
              "Clarity — text that states something plainly is easier to use than text that circles it.",
              "Corroboration — claims supported by multiple independent sources are preferred.",
              "Authority signals, including the same reputation cues that matter for traditional search.",
              "Freshness, for anything time-sensitive.",
            ],
          },
        ],
      },
      {
        heading: "What does GEO cover beyond your own site?",
        answer:
          "Everything an AI system might read about you — directories, review sites, forums, press, documentation and social profiles.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Consistent name, address, phone, services and description everywhere you appear.",
              "An accurate, complete About page — the canonical source for who you are.",
              "Third-party mentions: industry directories, partner pages, guest content, genuine press.",
              "Community presence where your topic is discussed, contributing substance rather than links.",
              "Structured data describing your organisation, people, services and content.",
              "Documentation and public resources that others cite.",
            ],
          },
          {
            type: "callout",
            title: "Inconsistency produces hallucination",
            text: "If three sources describe your services differently, a generative system may synthesise something none of you said. The fix is boring: make the facts identical everywhere.",
          },
        ],
      },
      {
        heading: "What content earns citations?",
        body: [
          {
            type: "table",
            head: ["Content type", "Citation likelihood", "Why"],
            rows: [
              ["Original data and research", "High", "Nobody else can be the source"],
              ["Clear definitions and explanations", "High", "Directly extractable"],
              ["Comparison tables", "High", "Structured and specific"],
              ["Step-by-step processes", "High", "Extract as ordered lists"],
              ["Documented first-hand experience", "Moderate to high", "Cannot be synthesised from other sources"],
              ["Generic overview content", "Low", "Interchangeable with a hundred others"],
              ["Thin listicles", "Very low", "No unique information"],
            ],
          },
          {
            type: "p",
            text: "The pattern is clear: content that contains information available nowhere else gets cited. Content that restates the consensus does not need to be cited, because the model already contains the consensus.",
          },
        ],
      },
      {
        heading: "How do you audit your current representation?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Ask several AI assistants directly: 'What is [your company]?' and 'Who are the best [your service] providers in [your market]?'",
              "Record what they say, what they get wrong, and which sources they cite.",
              "Trace inaccuracies back to their likely source — usually an outdated directory or old page.",
              "Fix the source data, then re-test after a few weeks.",
              "Repeat monthly and keep a log; this is currently the most reliable measurement available.",
            ],
          },
        ],
      },
      {
        heading: "What should you not do?",
        body: [
          {
            type: "list",
            items: [
              "Do not mass-produce thin AI-written pages. They add nothing citable and risk being classified as scaled content abuse.",
              "Do not stuff prompts or instructions into your pages hoping to manipulate a model — it does not work and looks like spam to human reviewers.",
              "Do not fabricate statistics or credentials. Contradiction across sources reduces trust in all of them.",
              "Do not abandon traditional search. It still drives the majority of measurable traffic for most businesses.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is GEO different from AEO?",
        answer:
          "AEO focuses on being the extracted answer to a question. GEO is broader — how your brand and content are represented across generative systems overall. In practice the work overlaps heavily.",
      },
      {
        question: "Can I control what AI says about my company?",
        answer:
          "Not directly. You can influence it by making accurate information abundant, consistent and well-structured across the sources these systems read.",
      },
      {
        question: "Do I need a separate GEO strategy?",
        answer:
          "Not separate — extended. Good structure, original information, entity clarity and third-party credibility serve traditional search and generative systems together.",
      },
      {
        question: "How do I measure GEO results?",
        answer:
          "Manual citation testing on a fixed question set, AI referral traffic in analytics, branded search trends, and qualitative signals like prospects mentioning they found you via an assistant.",
      },
    ],
    references: [
      { label: "Google Search Central — AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "Google — E-E-A-T and quality rater guidelines", href: "https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t" },
      { label: "Schema.org — Organization", href: "https://schema.org/Organization" },
    ],
    internalLinks: [
      { label: "What is Answer Engine Optimisation?", href: "/blog/what-is-answer-engine-optimization" },
      { label: "Entity SEO and the knowledge graph", href: "/blog/entity-seo-knowledge-graph" },
      { label: "Measuring AI search traffic", href: "/blog/measuring-ai-search-traffic" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "what-is-answer-engine-optimization",
      "entity-seo-knowledge-graph",
      "measuring-ai-search-traffic",
    ],
  },

  {
    slug: "llms-txt-and-ai-crawlers",
    title: "AI crawlers and llms.txt: what to allow, what to block, and why",
    seoTitle: "AI Crawlers and llms.txt: A Practical Guide",
    description:
      "Which AI crawlers visit your site, how to control them in robots.txt, what llms.txt proposes, and the trade-off between training data and citation visibility.",
    excerpt:
      "Blocking AI crawlers protects your content from training. It may also remove you from the answers people now use instead of search.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "llms.txt ai crawlers",
    secondaryKeywords: [
      "gptbot robots.txt",
      "block ai crawlers",
      "ai training data",
      "google-extended",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-07-14",
    answer:
      "AI companies operate distinct crawlers for training, live retrieval and user-initiated fetching, each with its own user agent that can be allowed or blocked in robots.txt. llms.txt is a proposed convention for offering a markdown summary of your site to language models; it is not an official standard and is not widely honoured yet.",
    takeaways: [
      "Training crawlers and retrieval crawlers are different — you can allow one and block the other.",
      "Blocking retrieval crawlers removes you from citations in those products.",
      "llms.txt is a proposal, not a standard; adopting it costs little and guarantees nothing.",
      "robots.txt is voluntary — it is not access control.",
    ],
    sections: [
      {
        heading: "Which AI crawlers should you know about?",
        body: [
          {
            type: "table",
            head: ["User agent", "Operator", "Purpose"],
            rows: [
              ["GPTBot", "OpenAI", "Training data collection"],
              ["OAI-SearchBot", "OpenAI", "Search indexing for its products"],
              ["ChatGPT-User", "OpenAI", "Fetching a page on a user's request"],
              ["Google-Extended", "Google", "Controls use in Gemini and AI training"],
              ["ClaudeBot", "Anthropic", "Training data collection"],
              ["PerplexityBot", "Perplexity", "Search index for answers"],
              ["CCBot", "Common Crawl", "Open dataset used by many models"],
              ["Applebot-Extended", "Apple", "Controls use in Apple AI training"],
            ],
          },
          {
            type: "p",
            text: "Note that Google-Extended does not affect Googlebot or your search rankings — it only controls AI training and Gemini use. Blocking Googlebot itself would remove you from search entirely, which is a different decision.",
          },
        ],
      },
      {
        heading: "How do you control them?",
        body: [
          {
            type: "code",
            lang: "text",
            code: `# robots.txt — allow retrieval and citation, block training
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

# Allow the crawlers that power citations in AI answers
User-agent: OAI-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://rovqix.in/sitemap.xml`,
          },
          {
            type: "callout",
            title: "robots.txt is a request, not a control",
            text: "Compliant crawlers honour it; nothing enforces it. If you need to actually prevent access, that requires authentication, rate limiting or bot management at the edge.",
          },
        ],
      },
      {
        heading: "Should you block them?",
        body: [
          {
            type: "table",
            head: ["Your situation", "Suggested stance"],
            rows: [
              ["Marketing site seeking visibility", "Allow everything"],
              ["Publisher monetising via traffic", "Block training, allow retrieval"],
              ["Paid content or courses", "Block training; gate content behind auth"],
              ["Documentation you want cited", "Allow everything"],
              ["Proprietary research", "Block training, consider blocking retrieval"],
              ["Ecommerce", "Allow — product discovery via AI is growing"],
            ],
          },
          {
            type: "p",
            text: "The genuine trade-off: training use may reduce the need for anyone to visit you, while retrieval use is how you get cited today. Blocking everything is a defensible commercial position for a publisher and a poor one for a services business trying to be found.",
          },
        ],
      },
      {
        heading: "What is llms.txt?",
        body: [
          {
            type: "p",
            text: "A proposed convention: a markdown file at /llms.txt providing a curated, machine-friendly overview of your site — what it is, and links to the most important pages with brief descriptions. The intent is to give language models a clean summary instead of requiring them to parse your navigation.",
          },
          {
            type: "code",
            lang: "markdown",
            code: `# ROVQIX

> A website development studio building business websites, SaaS platforms
> and web applications with Next.js, React and Node.js.

## Services
- [Services overview](https://rovqix.in/services): what we build and for whom
- [Pricing](https://rovqix.in/pricing): package structure and typical ranges

## Guides
- [Next.js caching explained](https://rovqix.in/blog/nextjs-caching-explained)
- [Technical SEO checklist](https://rovqix.in/blog/technical-seo-checklist-developers)

## Contact
- [Contact](https://rovqix.in/contact): rovqix@gmail.com`,
          },
          {
            type: "list",
            items: [
              "It is not an official standard and adoption by AI systems is limited and undocumented.",
              "It costs almost nothing to publish and cannot hurt.",
              "It does not replace a sitemap, structured data or good page structure.",
              "Treat it as a low-cost bet, not a strategy.",
            ],
          },
        ],
      },
      {
        heading: "What is the practical recommendation?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Decide your position deliberately, and write down the reasoning so it can be revisited.",
              "For most service businesses: allow everything. Visibility is worth more than the theoretical training cost.",
              "For publishers: block training crawlers, allow retrieval crawlers, and monitor referral traffic.",
              "Publish llms.txt if you have a clear site structure worth summarising.",
              "Log AI crawler traffic in your server logs so you know who is actually visiting.",
              "Review quarterly — this area is changing faster than any other part of SEO.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does blocking Google-Extended affect my rankings?",
        answer:
          "No. It is separate from Googlebot and only controls use of your content for AI training and Gemini. Regular search crawling and ranking are unaffected.",
      },
      {
        question: "Can AI companies ignore robots.txt?",
        answer:
          "Technically yes — it is a convention, not enforcement. Major operators publish their user agents and state that they honour it, but nothing prevents non-compliant scraping.",
      },
      {
        question: "Is llms.txt worth implementing?",
        answer:
          "It takes an hour and cannot hurt. Do not expect measurable results, and do not let it displace work on page structure and content quality.",
      },
      {
        question: "How do I see which AI crawlers visit my site?",
        answer:
          "Filter your server access logs by user agent. This is more reliable than analytics, which typically excludes bots entirely.",
      },
    ],
    references: [
      { label: "OpenAI — Bots and crawlers", href: "https://platform.openai.com/docs/bots" },
      { label: "Google — Google crawlers and user agents", href: "https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers" },
      { label: "llms.txt proposal", href: "https://llmstxt.org/" },
    ],
    internalLinks: [
      { label: "Generative Engine Optimisation explained", href: "/blog/generative-engine-optimization" },
      { label: "Technical SEO checklist for developers", href: "/blog/technical-seo-checklist-developers" },
      { label: "Measuring AI search traffic", href: "/blog/measuring-ai-search-traffic" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "generative-engine-optimization",
      "measuring-ai-search-traffic",
      "technical-seo-checklist-developers",
    ],
  },

  {
    slug: "content-structure-for-ai-search",
    title: "Structuring content so AI systems can actually use it",
    seoTitle: "Content Structure for AI Search and Extraction",
    description:
      "The formatting patterns that make content extractable — question headings, self-contained answers, definitions, tables and chunk-friendly paragraphs.",
    excerpt:
      "AI systems do not read your page. They retrieve chunks of it. Write so that any single chunk still makes sense alone.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "content structure for ai search",
    secondaryKeywords: [
      "extractable content",
      "chunking content llm",
      "question based headings",
      "self contained answers",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-06-30",
    answer:
      "AI retrieval systems split pages into chunks and select individual passages, so content should be written so that each section stands alone: a question-shaped heading, a direct answer in the first two sentences, self-contained context with no backward references, and structured lists or tables for comparisons and steps.",
    takeaways: [
      "Assume every paragraph will be read without the ones around it.",
      "Repeat the subject rather than using pronouns across paragraph boundaries.",
      "Question headings match query phrasing and mark the start of an answerable unit.",
      "Tables and lists survive extraction better than the same facts in prose.",
    ],
    sections: [
      {
        heading: "Why does chunking change how you write?",
        answer:
          "Retrieval systems split documents into passages and select individual chunks, so context outside the chunk is lost.",
        body: [
          {
            type: "p",
            text: "A paragraph beginning 'This means the second approach is usually better' is meaningless in isolation. The system has no access to what 'this' or 'the second approach' refers to. That passage will either be skipped or, worse, used with the referent guessed.",
          },
          {
            type: "code",
            lang: "markdown",
            code: `<!-- Poor: depends on surrounding context -->
This is why we usually recommend the second option for smaller teams.

<!-- Good: self-contained -->
Server-side sessions are usually the better choice for teams under ten
engineers, because immediate revocation matters more than avoiding a
shared session store.`,
          },
        ],
      },
      {
        heading: "What patterns extract well?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Question heading, then a direct answer in one or two sentences, then the detail.",
              "Explicit definitions: 'X is …' in a single sentence, stated plainly.",
              "Comparison tables with clear column headers.",
              "Numbered steps for processes, each step complete on its own.",
              "Specific figures with context: '2.5 seconds at the 75th percentile' rather than 'fast'.",
              "A short summary block near the top listing the key points.",
            ],
          },
          {
            type: "table",
            head: ["Write this", "Not this"],
            rows: [
              ["\"LCP should be under 2.5 seconds\"", "\"LCP should be reasonably quick\""],
              ["\"A canonical URL tells search engines…\"", "\"As we discussed, this tag…\""],
              ["A table comparing three options", "Three paragraphs comparing them"],
              ["\"PostgreSQL connection pooling\"", "\"It\" (three paragraphs later)"],
            ],
          },
        ],
      },
      {
        heading: "How should a page be organised?",
        body: [
          {
            type: "code",
            lang: "markdown",
            code: `# [Question or clear topic as H1]

[Direct answer to the main question — 2–3 sentences, complete on its own]

**Key points**
- [Fact 1 with a specific number]
- [Fact 2]

## What is [term]?
[Definition sentence.] [Elaboration.]

## How does [process] work?
[Direct answer.] [Numbered steps.]

## [Option A] vs [Option B]
[Direct answer on when to choose each.] [Comparison table.]

## Frequently asked questions
[Question-and-answer pairs, each self-contained]`,
          },
          {
            type: "callout",
            title: "This is also just good writing",
            text: "Leading with the answer, defining terms and using tables for comparisons is what a clear technical writer already does. AI extraction rewards the same discipline that makes a page skimmable for a human in a hurry.",
          },
        ],
      },
      {
        heading: "What should you avoid?",
        body: [
          {
            type: "list",
            items: [
              "Long preambles before the answer. 'In today's fast-paced digital landscape' is three sentences of nothing.",
              "Backward references across sections: 'as mentioned above', 'the previous approach'.",
              "Pronouns whose antecedent is in a different paragraph.",
              "Key information only in an image or a chart with no text equivalent.",
              "Content revealed only on interaction, which many crawlers never see.",
              "Vague qualifiers where a number exists.",
            ],
          },
        ],
      },
      {
        heading: "Does this conflict with writing for humans?",
        body: [
          {
            type: "p",
            text: "Rarely. The main tension is repetition: restating the subject instead of using a pronoun can read slightly stiffly. In practice a small amount of deliberate repetition is invisible to readers and decisive for extraction, so the trade is worth making.",
          },
          {
            type: "p",
            text: "The genuine failure mode is over-applying the pattern — turning every heading into a question and every section into a template. Use the structure where the content has a question to answer, and write normally where it does not.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long should an extractable answer be?",
        answer:
          "Two to four sentences, or 40 to 60 words, is a practical target. Long enough to be complete, short enough to be quoted whole.",
      },
      {
        question: "Should every heading be a question?",
        answer:
          "No. Use question headings where users actually ask a question. Forcing every heading into interrogative form reads badly and adds no benefit.",
      },
      {
        question: "Do FAQ sections still help?",
        answer:
          "Yes, for extraction and for readers, even though FAQ rich results are now limited in search. A well-written FAQ is a set of pre-chunked, self-contained answers.",
      },
      {
        question: "Does content length matter?",
        answer:
          "Completeness matters, length does not. A 900-word article that fully answers the question outperforms a padded 3,000-word one, and it chunks better.",
      },
    ],
    references: [
      { label: "Google — Creating helpful content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "Google — AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "Nielsen Norman Group — How users read on the web", href: "https://www.nngroup.com/articles/how-users-read-on-the-web/" },
    ],
    internalLinks: [
      { label: "What is Answer Engine Optimisation?", href: "/blog/what-is-answer-engine-optimization" },
      { label: "Semantic HTML and SEO", href: "/blog/semantic-html-seo" },
      { label: "FAQ content strategy", href: "/blog/faq-content-strategy" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "what-is-answer-engine-optimization",
      "faq-content-strategy",
      "semantic-html-seo",
    ],
  },

  {
    slug: "getting-cited-in-ai-overviews",
    title: "Getting cited in AI Overviews and AI answers",
    seoTitle: "How to Get Cited in AI Overviews",
    description:
      "What AI Overviews are, which pages get cited, how to improve your chances, and how to think about the traffic impact honestly.",
    excerpt:
      "AI Overviews answer the question and cite a few sources. Being one of them is the new position one — with fewer clicks attached.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "ai overviews citations",
    secondaryKeywords: [
      "google ai overviews",
      "ai search citation",
      "zero click traffic",
      "seo for ai overviews",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-06-16",
    answer:
      "AI Overviews are AI-generated summaries shown above traditional results, citing a small number of sources. Pages cited tend to already rank well, answer the specific question directly and early, come from sites with topical authority, and present information in clearly structured, extractable form.",
    takeaways: [
      "Ranking on page one remains close to a prerequisite for being cited.",
      "Directly answering the specific question matters more than covering the topic broadly.",
      "Informational queries lose clicks; commercial and comparison queries hold up better.",
      "Citations appear and disappear — track them over time rather than in a single check.",
    ],
    sections: [
      {
        heading: "What gets cited?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Pages that already rank in the top results for the query — the overlap is substantial.",
              "Pages that answer that specific question, not a broader topic that mentions it.",
              "Content with a clear, direct answer near the top of the relevant section.",
              "Sites with recognised topical depth rather than one-off coverage.",
              "Sources with visible expertise signals: named authors, dates, references.",
              "Content that is unique — original data, first-hand experience, specific examples.",
            ],
          },
          {
            type: "callout",
            title: "The uncomfortable finding",
            text: "Citation is heavily correlated with existing ranking. There is no shortcut that bypasses the underlying SEO work — AEO formatting improves your odds among pages that already compete.",
          },
        ],
      },
      {
        heading: "How do you improve your chances?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Identify the questions where an AI answer appears for your target terms.",
              "Check whether you rank on page one for those queries. If not, that is the first problem.",
              "Restructure the relevant section: question heading, direct answer in two sentences, then depth.",
              "Add specifics — numbers, thresholds, dates, named examples. Vague content is not quotable.",
              "Add original information that cannot be sourced elsewhere.",
              "Make sure the answer is in server-rendered HTML.",
              "Keep the page updated; stale content is less likely to be selected for changing topics.",
            ],
          },
        ],
      },
      {
        heading: "What happens to your traffic?",
        body: [
          {
            type: "table",
            head: ["Query type", "Click impact", "Response"],
            rows: [
              ["Simple factual", "Large decline", "Accept it; these rarely converted"],
              ["How-to and tutorial", "Moderate decline", "Add depth the summary cannot replace"],
              ["Comparison", "Smaller decline", "Detail and nuance still pull the click"],
              ["Commercial and transactional", "Least affected", "Prioritise these pages"],
              ["Brand and navigational", "Largely unaffected", "—"],
            ],
          },
          {
            type: "p",
            text: "The strategic implication is a shift in what informational content is for. It builds authority and earns citations; it generates less direct traffic than it did. Content that drives revenue — comparisons, pricing, capability, case studies — deserves proportionally more investment.",
          },
        ],
      },
      {
        heading: "How do you track citations?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Build a list of 20 to 50 questions that matter commercially.",
              "Check each monthly across the major AI surfaces, recording whether an AI answer appears and who is cited.",
              "Log the date, the answer, and the sources — patterns only emerge over months.",
              "In Search Console, watch for impressions holding steady while clicks fall; that is the signature.",
              "Segment analytics by AI referrer domains to capture the traffic that does arrive.",
            ],
          },
        ],
      },
      {
        heading: "What should you not do?",
        body: [
          {
            type: "list",
            items: [
              "Do not block AI crawlers and then expect citations from those products.",
              "Do not publish thin question-and-answer pages hoping volume produces citations.",
              "Do not fabricate statistics to appear more quotable — contradiction is detectable and damaging.",
              "Do not restructure high-converting commercial pages into answer format; those pages exist to convert, not to be extracted.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I opt out of AI Overviews?",
        answer:
          "There is no dedicated opt-out that preserves normal search presence. The nosnippet and max-snippet directives limit snippet use but also affect regular results, which is usually a worse trade.",
      },
      {
        question: "Do citations bring meaningful traffic?",
        answer:
          "Less than a top organic position, but the visitors tend to be higher intent. Treat it as brand visibility with a modest traffic component.",
      },
      {
        question: "Why do citations change between checks?",
        answer:
          "These systems are non-deterministic and personalised, and the underlying index changes. Track over time; a single check is anecdote, not measurement.",
      },
      {
        question: "Should I keep publishing informational content?",
        answer:
          "Yes, for authority, citations and the queries that still convert. Adjust expectations on traffic per article and put more weight on genuinely original material.",
      },
    ],
    references: [
      { label: "Google — AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "Google — Snippet control with meta tags", href: "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag" },
      { label: "Google Search Central — Helpful content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    internalLinks: [
      { label: "Content structure for AI search", href: "/blog/content-structure-for-ai-search" },
      { label: "Topical authority and content clusters", href: "/blog/topical-authority-clusters" },
      { label: "Measuring AI search traffic", href: "/blog/measuring-ai-search-traffic" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "content-structure-for-ai-search",
      "topical-authority-clusters",
      "measuring-ai-search-traffic",
    ],
  },

  {
    slug: "entity-seo-knowledge-graph",
    title: "Entity SEO: helping search engines know who you are",
    seoTitle: "Entity SEO and the Knowledge Graph Explained",
    description:
      "How search engines model entities rather than keywords, how to establish your organisation and people as entities, and why consistency is the whole game.",
    excerpt:
      "Search engines stopped matching strings a long time ago. They match things — and if they cannot tell which thing you are, nothing else helps.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "entity seo",
    secondaryKeywords: [
      "knowledge graph",
      "entity based search",
      "organization schema",
      "brand entity",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-05-19",
    answer:
      "Entity SEO is the practice of establishing your organisation, people, products and topics as recognisable entities that search engines and AI systems can identify, describe and connect. It is achieved through consistent information everywhere you appear, explicit structured data, and third-party corroboration.",
    takeaways: [
      "Search engines match entities and relationships, not just keyword strings.",
      "Consistency across every mention of your business is the primary signal.",
      "Structured data makes relationships explicit instead of inferred.",
      "Third-party corroboration is what turns a claim into a recognised fact.",
    ],
    sections: [
      {
        heading: "What is an entity?",
        answer:
          "An entity is a distinct thing — a company, person, product, place or concept — that a search system can identify and hold facts about, independent of how it is named.",
        body: [
          {
            type: "p",
            text: "This is why a search for a company returns coherent information from many sources rather than pages containing that exact string. The system has resolved the name to a thing, and it knows attributes about that thing: what it does, where it is, who runs it, what it is related to.",
          },
          {
            type: "p",
            text: "For a business, the practical question is whether search and AI systems have resolved you to a distinct entity with accurate attributes, or whether you are an ambiguous string that could refer to several things.",
          },
        ],
      },
      {
        heading: "How do you establish your organisation as an entity?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Organization structured data on your site, with name, URL, logo, contact details and sameAs links to your profiles.",
              "A substantive About page describing who you are, what you do, when you were founded and where you operate.",
              "Identical name, address and phone number everywhere — website, directories, social profiles, listings.",
              "Verified profiles on the platforms relevant to your sector, all pointing back to your site.",
              "Third-party mentions: industry directories, partner listings, genuine press coverage.",
              "A consistent one-sentence description of what you do, used everywhere.",
            ],
          },
          {
            type: "code",
            lang: "json",
            code: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://rovqix.in/#organization",
  "name": "ROVQIX",
  "url": "https://rovqix.in",
  "logo": "https://rovqix.in/opengraph-image",
  "description": "Website development studio building business websites, SaaS platforms and web applications.",
  "email": "rovqix@gmail.com",
  "telephone": "+91 9537325355",
  "sameAs": [
    "https://x.com/rovqix",
    "https://www.youtube.com/@rovqix",
    "https://linkedin.com/in/rovqix-tech-448623412"
  ]
}`,
          },
        ],
      },
      {
        heading: "Why do people matter as entities?",
        body: [
          {
            type: "p",
            text: "Author entities carry expertise signals. A named author with a consistent presence — a real profile, a body of work, external contributions — supports the experience and expertise part of E-E-A-T in a way an anonymous byline cannot.",
          },
          {
            type: "list",
            items: [
              "Give every article a named author with a real bio page.",
              "Use Person structured data with jobTitle, knowsAbout and sameAs.",
              "Keep the author's professional profiles consistent with what your bio says.",
              "Link the author to the organisation with worksFor.",
              "Let authors build presence outside your site — that external corroboration is what makes the entity real.",
            ],
          },
          {
            type: "callout",
            title: "Do not invent authors",
            text: "Fabricated author personas with stock photographs are detectable and undermine exactly the trust they are meant to create. If a piece is written by the team, attribute it to the team honestly.",
          },
        ],
      },
      {
        heading: "How do topical entities work?",
        body: [
          {
            type: "p",
            text: "Beyond your organisation, search systems associate your site with topics. Covering a subject comprehensively — with depth, internal linking and consistent terminology — builds an association between your entity and that topic, which is what topical authority means in entity terms.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Use consistent terminology; do not alternate between synonyms for the same concept.",
              "Mention related entities naturally — technologies, standards, organisations in your field.",
              "Build clusters that cover a topic's sub-areas rather than isolated articles.",
              "Link related content so the relationships are explicit rather than inferred.",
            ],
          },
        ],
      },
      {
        heading: "How do you check your entity status?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Search your brand name and see whether a knowledge panel or coherent summary appears.",
              "Ask AI assistants what your company is and note what they get wrong.",
              "Search your brand name plus your main service and check that the results describe you correctly.",
              "Audit every directory and profile listing for inconsistent details.",
              "Validate your Organization and Person structured data.",
              "Fix the inconsistencies you find and re-check after a month.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How do I get a knowledge panel?",
        answer:
          "There is no application process. Panels appear when a search engine has high confidence about an entity, built from consistent structured data, authoritative third-party sources and sustained recognition. It takes time and cannot be requested.",
      },
      {
        question: "Does Wikipedia matter for entity recognition?",
        answer:
          "It is a strong signal, but notability requirements mean most businesses will never qualify. Industry directories, press and consistent profiles serve the same purpose at a smaller scale.",
      },
      {
        question: "What is sameAs in structured data?",
        answer:
          "A property listing other URLs representing the same entity — your social profiles, directory listings, official pages. It helps a system connect scattered references into one entity.",
      },
      {
        question: "Do author entities really affect rankings?",
        answer:
          "Google has said there is no author-specific ranking signal, but expertise and trust signals matter for quality evaluation, and named accountable authors are part of demonstrating them.",
      },
    ],
    references: [
      { label: "Google — Knowledge panels", href: "https://support.google.com/knowledgepanel/answer/9163198" },
      { label: "Schema.org — Organization", href: "https://schema.org/Organization" },
      { label: "Google — E-E-A-T and quality raters", href: "https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t" },
    ],
    internalLinks: [
      { label: "Structured data that earns rich results", href: "/blog/structured-data-guide" },
      { label: "Generative Engine Optimisation explained", href: "/blog/generative-engine-optimization" },
      { label: "About ROVQIX", href: "/about" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "structured-data-guide",
      "generative-engine-optimization",
      "topical-authority-clusters",
    ],
  },

  {
    slug: "measuring-ai-search-traffic",
    title: "Measuring AI search traffic and citations without fooling yourself",
    seoTitle: "How to Measure AI Search Traffic and Citations",
    description:
      "Identifying AI referrers in analytics, tracking citations manually, reading Search Console for zero-click signals, and what cannot be measured yet.",
    excerpt:
      "AI search measurement is genuinely immature. The honest approach is a few reliable signals and a manual log, not a dashboard implying precision.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "measuring ai search traffic",
    secondaryKeywords: [
      "ai referral traffic",
      "chatgpt referral analytics",
      "zero click measurement",
      "ai seo reporting",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-05-05",
    answer:
      "Measure AI search through three sources: referral traffic from AI assistant domains in your analytics, a manual monthly log of whether you are cited for your priority questions, and Search Console patterns showing impressions holding while clicks decline. Attribution beyond that is currently not reliably available.",
    takeaways: [
      "AI referral traffic is identifiable by referrer domain and worth segmenting.",
      "Citations must be checked manually — no complete automated source exists.",
      "Rising impressions with falling clicks is the zero-click signature.",
      "AI-referred visitors are usually fewer but convert better.",
    ],
    sections: [
      {
        heading: "How do you identify AI referral traffic?",
        body: [
          {
            type: "table",
            head: ["Referrer contains", "Source"],
            rows: [
              ["chatgpt.com / chat.openai.com", "ChatGPT"],
              ["perplexity.ai", "Perplexity"],
              ["claude.ai", "Claude"],
              ["copilot.microsoft.com / bing.com/chat", "Microsoft Copilot"],
              ["gemini.google.com", "Gemini"],
            ],
          },
          {
            type: "p",
            text: "Create a segment or channel group matching these referrers so AI traffic is not buried in 'Other' or misattributed to direct. Volume will look small; look at conversion rate and pages per session before dismissing it.",
          },
          {
            type: "callout",
            title: "Much of it is invisible",
            text: "Users often read the answer, then search your brand name or type the URL directly. That visit attributes to organic or direct, not to the assistant that actually caused it. Assume the measured number understates the real influence.",
          },
        ],
      },
      {
        heading: "How do you track citations?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Write down 20 to 50 questions that matter commercially, in the phrasing a real prospect would use.",
              "Once a month, ask each across the major assistants and record: was an AI answer given, were you cited, who else was.",
              "Keep the log in a spreadsheet with dates — the value is the trend, not any single result.",
              "Note which of your pages was cited so you can identify what format works.",
              "Re-test after making structural changes to a page, allowing several weeks.",
            ],
          },
          {
            type: "p",
            text: "Third-party tools that monitor AI citations exist and are improving. Treat their coverage as partial, because these systems are non-deterministic and personalised, and no external tool can observe them exhaustively.",
          },
        ],
      },
      {
        heading: "What does Search Console tell you?",
        body: [
          {
            type: "list",
            items: [
              "Impressions steady or rising while clicks fall is the classic zero-click pattern.",
              "Declining click-through rate on informational queries while commercial queries hold up.",
              "Position stable but traffic down, which rules out a ranking cause.",
              "Compare year on year rather than month on month to separate this from seasonality.",
            ],
          },
          {
            type: "p",
            text: "Search Console does not currently break out AI Overview impressions separately, so this is inference rather than measurement. State that clearly in any report — presenting inference as data is how a measurement practice loses credibility.",
          },
        ],
      },
      {
        heading: "What should a report actually contain?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "AI referral sessions and conversions, by source, trended monthly.",
              "Citation rate on the tracked question set, with month-on-month change.",
              "Branded search volume, as a proxy for awareness generated by mentions.",
              "Organic performance split by query intent, so informational decline does not hide commercial health.",
              "A written note on what is inferred rather than measured.",
            ],
          },
          {
            type: "table",
            head: ["Metric", "Reliability"],
            rows: [
              ["AI referral sessions", "Good — direct measurement"],
              ["Conversions from AI referrals", "Good"],
              ["Citation rate on tracked questions", "Moderate — manual sample"],
              ["Zero-click impact", "Inferred from CTR patterns"],
              ["Total AI-influenced revenue", "Not measurable today"],
            ],
          },
        ],
      },
      {
        heading: "What should you do with the numbers?",
        body: [
          {
            type: "list",
            items: [
              "Identify which content formats get cited and produce more of them.",
              "Identify commercially important questions where you are absent and address them specifically.",
              "Track whether AI-referred visitors convert better than organic — in most accounts we see, they do.",
              "Reassess informational content whose traffic has declined: is it still earning authority and citations, or should it be consolidated?",
              "Avoid over-rotating. For most businesses, traditional organic search still drives the large majority of measurable revenue.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Why is my AI referral traffic so low?",
        answer:
          "Partly because volume genuinely is lower, and partly because attribution leaks — many users read the answer and then reach you through a branded search or by typing the URL.",
      },
      {
        question: "Can I see AI Overview impressions in Search Console?",
        answer:
          "Not as a separate breakout at present. You can infer the effect from impressions and click-through patterns, but it is inference.",
      },
      {
        question: "Are AI citation tracking tools accurate?",
        answer:
          "They provide useful directional coverage. Because the systems are non-deterministic and personalised, no tool can be exhaustive — combine them with your own manual log.",
      },
      {
        question: "How often should I check citations?",
        answer:
          "Monthly for a stable question set. More frequent checking produces noise from the natural variation in these systems.",
      },
    ],
    references: [
      { label: "Google — Search Console performance report", href: "https://support.google.com/webmasters/answer/7576553" },
      { label: "Google Analytics — Traffic acquisition", href: "https://support.google.com/analytics/answer/9143382" },
      { label: "Google — AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
    ],
    internalLinks: [
      { label: "Getting cited in AI Overviews", href: "/blog/getting-cited-in-ai-overviews" },
      { label: "Generative Engine Optimisation explained", href: "/blog/generative-engine-optimization" },
      { label: "AI crawlers and llms.txt", href: "/blog/llms-txt-and-ai-crawlers" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "getting-cited-in-ai-overviews",
      "generative-engine-optimization",
      "llms-txt-and-ai-crawlers",
    ],
  },

  {
    slug: "faq-content-strategy",
    title: "FAQ content: when it works, when it is padding, and how to write it",
    seoTitle: "FAQ Content Strategy That Actually Works",
    description:
      "Choosing questions from real data, writing self-contained answers, when FAQPage schema is appropriate, and avoiding the FAQ sections nobody reads.",
    excerpt:
      "An FAQ section is either the most useful part of a page or three hundred words of filler. The difference is where the questions came from.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "faq content strategy",
    secondaryKeywords: [
      "faq page seo",
      "faqpage schema",
      "question based content",
      "people also ask",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-04-21",
    answer:
      "An effective FAQ answers questions real users actually ask, sourced from support tickets, sales calls, search queries and People Also Ask data. Each answer should be self-contained in two to four sentences, kept in the HTML rather than hidden behind JavaScript, and marked up with FAQPage schema where genuinely appropriate.",
    takeaways: [
      "Source questions from real conversations, not from a keyword tool alone.",
      "Answers must stand alone — they are extracted individually.",
      "Keep the answer in the DOM even when the accordion is closed.",
      "An FAQ that restates the page above it adds nothing.",
    ],
    sections: [
      {
        heading: "Where should questions come from?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Support tickets — the questions people ask after they have already read the page.",
              "Sales calls — the objections and clarifications that come up before buying.",
              "Search Console queries — the long-tail questions bringing people to the page.",
              "People Also Ask boxes for your target queries.",
              "Community forums and social threads where your topic is discussed.",
              "Your own team's recurring internal questions, which usually mirror customers'.",
            ],
          },
          {
            type: "callout",
            title: "The support ticket test",
            text: "If a question has never been asked by a real person, it does not belong in your FAQ. Invented questions are recognisable and produce the sections readers scroll past.",
          },
        ],
      },
      {
        heading: "How should answers be written?",
        body: [
          {
            type: "code",
            lang: "markdown",
            code: `<!-- Poor: vague, unhelpful, self-referential -->
**How much does a website cost?**
Costs vary depending on your requirements. Contact us for a quote.

<!-- Good: specific, self-contained, honest -->
**How much does a business website cost?**
A professional business website typically costs between ₹60,000 and ₹3,00,000
depending on page count, custom design and integrations. A five-page marketing
site sits at the lower end; a platform with a CMS, payments and a dashboard
sits at the upper end. We publish indicative ranges on our pricing page.`,
          },
          {
            type: "list",
            items: [
              "Two to four sentences — complete but quotable.",
              "Answer directly in the first sentence; qualify afterwards.",
              "Include specifics: numbers, ranges, timeframes, named conditions.",
              "Write so the answer makes sense with no other context.",
              "Do not repeat the question back before answering it.",
              "Link onward where a full answer needs more room.",
            ],
          },
        ],
      },
      {
        heading: "How should FAQs be implemented technically?",
        body: [
          {
            type: "code",
            lang: "html",
            code: `<!-- Native details: the answer is in the HTML whether open or closed -->
<details>
  <summary><h3>How long does a website take to build?</h3></summary>
  <p>A typical business website takes 4–8 weeks from kickoff to launch…</p>
</details>`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Keep answers in the server-rendered HTML — crawlers should not need to click.",
              "Use real heading elements for questions so they appear in the document outline.",
              "Give each question a stable id so it can be linked directly.",
              "Add FAQPage structured data when the content genuinely is a question-and-answer set.",
              "Do not hide answers behind a JavaScript fetch triggered by expanding the item.",
            ],
          },
        ],
      },
      {
        heading: "Is FAQPage schema still worth adding?",
        body: [
          {
            type: "p",
            text: "Google restricted FAQ rich results to a limited set of authoritative sites, so most sites will not see the visual result any more. The markup is still worth including where it accurately describes the content: it makes the question-and-answer relationship explicit for any system parsing the page, including AI answer engines.",
          },
          {
            type: "p",
            text: "What is not worth doing is adding an FAQ section purely to obtain markup. That was always a weak tactic and now has no visible payoff at all.",
          },
        ],
      },
      {
        heading: "When does an FAQ not belong?",
        body: [
          {
            type: "list",
            items: [
              "When it restates content already covered on the same page.",
              "When the questions were invented to hit a word count.",
              "When a dedicated page would serve the question better — a complex topic deserves its own article.",
              "When it pushes the actual conversion path far down the page.",
              "When it has not been reviewed in two years and now contains outdated pricing or policies.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many questions should an FAQ have?",
        answer:
          "As many as are genuinely asked — typically three to eight per page. Padding to reach a number produces the sections readers learn to skip.",
      },
      {
        question: "Should FAQs live on one page or across the site?",
        answer:
          "Contextual FAQs on the relevant page work better for both users and extraction. A central FAQ page is useful as a supplement, not as the only location.",
      },
      {
        question: "Do accordions hurt SEO?",
        answer:
          "Not if the content is in the HTML. Google has stated that content hidden behind a click is indexed normally when it is present in the DOM. Content fetched only on expansion is the risk.",
      },
      {
        question: "Can I use AI to generate FAQs?",
        answer:
          "It can help draft phrasing, but the questions must come from real data and the answers must contain your actual specifics. Generic generated answers are exactly the content that does not get cited.",
      },
    ],
    references: [
      { label: "Google — FAQPage structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/faqpage" },
      { label: "Google — Hidden content and indexing", href: "https://developers.google.com/search/docs/appearance/visual-elements-guide" },
      { label: "Schema.org — FAQPage", href: "https://schema.org/FAQPage" },
    ],
    internalLinks: [
      { label: "Content structure for AI search", href: "/blog/content-structure-for-ai-search" },
      { label: "Structured data that earns rich results", href: "/blog/structured-data-guide" },
      { label: "Our pricing", href: "/pricing" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "content-structure-for-ai-search",
      "structured-data-guide",
      "what-is-answer-engine-optimization",
    ],
  },

  {
    slug: "topical-authority-clusters",
    title: "Topical authority: covering a subject properly instead of chasing keywords",
    seoTitle: "Topical Authority and Content Clusters",
    description:
      "What topical authority means in practice, how to map a topic's sub-areas, how deep coverage needs to go, and how to avoid producing thin cluster filler.",
    excerpt:
      "Topical authority is not a number of articles. It is whether someone who reads your site comes away genuinely informed about the subject.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "topical authority",
    secondaryKeywords: [
      "content clusters",
      "pillar content strategy",
      "content mapping",
      "semantic seo",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-04-07",
    answer:
      "Topical authority is the degree to which search and AI systems associate your site with comprehensive, credible coverage of a subject. It is built by covering a topic's genuine sub-areas in depth, linking them coherently, using consistent terminology, and demonstrating first-hand expertise — not by publishing a target number of articles.",
    takeaways: [
      "Depth on one topic beats shallow coverage of five.",
      "Map the sub-topics a knowledgeable person would expect, then cover them properly.",
      "Thin cluster filler actively dilutes authority rather than adding to it.",
      "Original experience and data are what separate authority from aggregation.",
    ],
    sections: [
      {
        heading: "What does topical authority actually mean?",
        body: [
          {
            type: "p",
            text: "It is the association between your site and a subject, built from the depth, breadth, internal coherence and credibility of your coverage. It is not a metric a search engine publishes, and it is not something you can claim — it is inferred from what you have produced.",
          },
          {
            type: "list",
            items: [
              "Breadth: the sub-topics a practitioner would expect to see covered.",
              "Depth: each piece answering its question completely rather than superficially.",
              "Coherence: internal linking that reflects real relationships between the pieces.",
              "Consistency: the same terminology and positions across the body of work.",
              "Credibility: named authors, real experience, cited sources, corroboration elsewhere.",
            ],
          },
        ],
      },
      {
        heading: "How do you map a topic?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Write down the questions a beginner, a practitioner and a decision-maker would each ask.",
              "Look at what already ranks and what the sub-headings of those pages cover.",
              "Mine People Also Ask, forum threads and your own support and sales conversations.",
              "Group the questions into sub-topics; each substantial sub-topic becomes a page.",
              "Identify which sub-topics you have genuine first-hand experience with — those are your strongest pieces.",
              "Be honest about the gaps. A cluster with three excellent pages beats one with twelve where nine are filler.",
            ],
          },
          {
            type: "code",
            lang: "text",
            code: `Topic: Web performance
├── Core Web Vitals explained          (pillar)
├── Improving LCP                      (depth)
├── Improving INP                      (depth)
├── Fixing CLS                         (depth)
├── Reducing bundle size               (cause)
├── Font optimisation                  (cause)
├── Image formats                      (cause)
├── Third-party scripts                (cause)
├── Performance budgets                (process)
└── Lab vs field data                  (measurement)`,
          },
        ],
      },
      {
        heading: "How much do you need to publish?",
        answer:
          "Enough to cover the topic's real sub-areas — usually eight to fifteen substantial pieces for a defined subject, not a fixed quota.",
        body: [
          {
            type: "p",
            text: "The number matters less than the completeness. If a reader can arrive knowing nothing and leave able to act, the coverage is sufficient. If there is an obvious question your cluster does not address, it is not — regardless of the article count.",
          },
          {
            type: "callout",
            title: "The dilution risk is real",
            text: "Publishing thin articles to fill a content map produces pages that do not rank, do not get cited, and reduce the average quality signal of your site. Fewer, better pages is not a compromise — it is the strategy.",
          },
        ],
      },
      {
        heading: "What makes a cluster credible rather than assembled?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "First-hand specifics: what happened when you did this, with numbers.",
              "Positions: recommending one approach over another and explaining the trade-off.",
              "Honest limitations: saying when a technique does not apply is a strong credibility signal.",
              "Original artifacts: diagrams, benchmarks, checklists, tools others reference.",
              "Named authors with real, verifiable expertise in the subject.",
              "Maintenance: updating pieces when the underlying reality changes.",
            ],
          },
        ],
      },
      {
        heading: "How do you know it is working?",
        body: [
          {
            type: "list",
            items: [
              "New pages in the cluster start ranking faster than your first ones did.",
              "You rank for terms you never explicitly targeted within the topic.",
              "AI systems cite you for questions in that subject area.",
              "The cluster's pages appear together for related queries.",
              "People reference your pieces without being asked to.",
            ],
          },
          {
            type: "p",
            text: "The timeline is months, not weeks. Topical authority is the slowest-compounding and longest-lasting investment in content — which is precisely why most sites abandon it before it starts working.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How long does topical authority take to build?",
        answer:
          "Typically six to twelve months of consistent, substantial publishing on one subject. Sites already established in adjacent areas see it faster.",
      },
      {
        question: "Should I cover many topics or one deeply?",
        answer:
          "One deeply first. A site with genuine authority in one subject outperforms one with shallow coverage of five, and the depth makes the next topic easier to establish.",
      },
      {
        question: "Do I need a pillar page?",
        answer:
          "A comprehensive overview page helps as a hub for internal linking and for broad queries. The cluster pages are where the depth lives, and they do most of the ranking.",
      },
      {
        question: "What if my competitors have more content?",
        answer:
          "Volume is not the metric. Cover the sub-topics they cover superficially with genuine depth and original material, and you compete on the axis that actually matters.",
      },
    ],
    references: [
      { label: "Google — Creating helpful, reliable content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
      { label: "Google — E-E-A-T explained", href: "https://developers.google.com/search/blog/2022/12/google-raters-guidelines-e-e-a-t" },
      { label: "Google — Search quality rater guidelines", href: "https://guidelines.raterhub.com/searchqualityevaluatorguidelines.pdf" },
    ],
    internalLinks: [
      { label: "Internal linking strategy", href: "/blog/internal-linking-strategy" },
      { label: "Entity SEO and the knowledge graph", href: "/blog/entity-seo-knowledge-graph" },
      { label: "AI content and Google's guidelines", href: "/blog/ai-content-and-google-guidelines" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "internal-linking-strategy",
      "entity-seo-knowledge-graph",
      "ai-content-and-google-guidelines",
    ],
  },

  {
    slug: "ai-content-and-google-guidelines",
    title: "AI-generated content and Google's guidelines: what is actually allowed",
    seoTitle: "AI Content and Google Guidelines: What's Allowed",
    description:
      "Google's stated position on AI-generated content, what scaled content abuse means, where AI assistance is legitimate, and how to use it without risk.",
    excerpt:
      "Google does not penalise AI content. It penalises content produced at scale primarily to manipulate rankings — which is what most AI content is.",
    category: "AI SEO",
    cluster: "ai-seo",
    primaryKeyword: "ai generated content seo",
    secondaryKeywords: [
      "scaled content abuse",
      "google ai content policy",
      "ai writing seo",
      "helpful content",
    ],
    authorId: "rovqix-growth",
    publishedAt: "2026-03-24",
    answer:
      "Google's position is that how content is produced does not matter; whether it is helpful, original and created for people does. Using AI to assist writing is permitted. Producing large volumes of low-value pages primarily to manipulate search rankings is scaled content abuse and is subject to spam policies, regardless of whether AI was involved.",
    takeaways: [
      "Method is not the test — purpose and quality are.",
      "Scaled content abuse is about intent and volume, not about tooling.",
      "AI is genuinely useful for outlining, editing and structure, and weak at expertise.",
      "Everything published needs a named human who is accountable for it being correct.",
    ],
    sections: [
      {
        heading: "What is Google's actual position?",
        body: [
          {
            type: "p",
            text: "Google's guidance states that automation, including AI, is not against its guidelines when used to produce helpful content. What is against them is using automation to generate content primarily for ranking rather than for people — which is defined as scaled content abuse and covered by spam policies.",
          },
          {
            type: "list",
            items: [
              "Rewriting other people's content at scale with no added value.",
              "Generating pages for keyword variations with substantially the same content.",
              "Stitching together content from multiple sources without original contribution.",
              "Publishing volume with no human review, expertise or accountability.",
            ],
          },
          {
            type: "callout",
            title: "The test is purpose, not process",
            text: "Ask honestly: would this page exist if search engines did not? If the only reason it exists is to rank, it is the content the policies describe — whether a person or a model wrote it.",
          },
        ],
      },
      {
        heading: "Where is AI genuinely useful?",
        body: [
          {
            type: "table",
            head: ["Task", "Suitability", "Note"],
            rows: [
              ["Outlining and structure", "Good", "Fast, and you review it"],
              ["Editing and tightening prose", "Good", "Improves clarity of your own writing"],
              ["Suggesting questions to cover", "Good", "Validate against real user data"],
              ["Formatting into tables and lists", "Good", "Mechanical work done well"],
              ["Drafting from your notes and transcripts", "Good", "The expertise is yours"],
              ["Writing about topics you do not know", "Poor", "You cannot verify it"],
              ["Generating original data or experience", "Not possible", "There is nothing to generate from"],
            ],
          },
        ],
      },
      {
        heading: "What does a responsible workflow look like?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Start from something you know — a project, an incident, a decision, a dataset.",
              "Outline the piece yourself or with AI assistance, then decide what it must contain.",
              "Draft with whatever tooling helps, keeping your specifics and positions intact.",
              "Verify every factual claim against a primary source, and cite it.",
              "Add what a model cannot: numbers from your work, trade-offs you have lived, honest limitations.",
              "Have a named human review, edit and take responsibility for accuracy.",
              "Attribute the piece to a real author and keep it updated.",
            ],
          },
          {
            type: "p",
            text: "The disclosure question comes up frequently. Google does not require an AI disclosure. What matters is that the content is accurate and that a person stands behind it — the same standard that has always applied to editorial work.",
          },
        ],
      },
      {
        heading: "Why does purely generated content underperform anyway?",
        body: [
          {
            type: "list",
            items: [
              "It restates the consensus, which means it contains nothing worth citing.",
              "It has no specific numbers, examples or outcomes, because it has no source for them.",
              "It cannot take a position or acknowledge a trade-off it has not experienced.",
              "It converges on the same structure and phrasing as every competitor doing the same thing.",
              "It carries no expertise signals — no author with relevant experience behind it.",
            ],
          },
          {
            type: "p",
            text: "This is the practical argument independent of policy. Even if no guideline existed, generic content would still fail to rank against something that contains information available nowhere else.",
          },
        ],
      },
      {
        heading: "What about the sites that got hit?",
        body: [
          {
            type: "p",
            text: "The pattern in the widely-reported cases has been consistent: high volume, low differentiation, no named expertise, and content that clearly existed to capture search traffic rather than to inform. The AI involvement was a means of achieving scale, not the reason for the action.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Audit what you have published. Which pages would a knowledgeable reader find useful?",
              "Consolidate or remove thin pages rather than trying to improve all of them.",
              "Add genuine expertise, authorship and specifics to the pages worth keeping.",
              "Slow the publishing rate to what you can produce with real substance.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will Google penalise me for using AI to write?",
        answer:
          "Not for the tool. Google's stated position is that AI-assisted content is acceptable when it is helpful and created for people. Scaled low-value content is the problem, however it was produced.",
      },
      {
        question: "Can Google detect AI-generated text?",
        answer:
          "Detection is unreliable and Google has said it evaluates quality rather than authorship method. Assume the assessment is about whether the content is useful and original, not about how it was typed.",
      },
      {
        question: "Should I disclose AI assistance?",
        answer:
          "Not required for search. Some publications disclose it as an editorial policy. What matters is that a named human is accountable for accuracy.",
      },
      {
        question: "How much AI assistance is too much?",
        answer:
          "There is no percentage. The workable test is whether the piece contains information, judgement or experience that only your team could supply. If it does not, publishing it adds nothing.",
      },
    ],
    references: [
      { label: "Google — AI-generated content guidance", href: "https://developers.google.com/search/blog/2023/02/google-search-and-ai-content" },
      { label: "Google — Spam policies for Google Search", href: "https://developers.google.com/search/docs/essentials/spam-policies" },
      { label: "Google — Creating helpful content", href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" },
    ],
    internalLinks: [
      { label: "Topical authority and content clusters", href: "/blog/topical-authority-clusters" },
      { label: "Content structure for AI search", href: "/blog/content-structure-for-ai-search" },
      { label: "Generative Engine Optimisation explained", href: "/blog/generative-engine-optimization" },
      { label: "Our SEO services", href: "/services#seo" },
    ],
    related: [
      "topical-authority-clusters",
      "content-structure-for-ai-search",
      "generative-engine-optimization",
    ],
  },
];
