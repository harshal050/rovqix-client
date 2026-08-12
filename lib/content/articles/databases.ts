import type { Article } from "@/lib/content/types";

export const databaseArticles: Article[] = [
  {
    slug: "postgresql-indexing-guide",
    title: "PostgreSQL indexing: which index, on which column, and when not to",
    seoTitle: "PostgreSQL Indexing Guide (B-tree, GIN, Partial)",
    description:
      "How PostgreSQL chooses indexes, when B-tree, GIN, GiST, BRIN and partial indexes apply, and how to tell whether an index is earning its keep.",
    excerpt:
      "Adding an index is easy. Knowing which one, in which column order, and which existing indexes to delete is the part that changes query times.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "postgresql indexing",
    secondaryKeywords: [
      "postgres index types",
      "composite index column order",
      "partial index",
      "gin index full text",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-17",
    answer:
      "PostgreSQL's default B-tree index handles equality and range queries on ordered data. Use GIN for arrays, JSONB and full-text search, BRIN for very large naturally-ordered tables, and partial indexes when queries only ever touch a subset of rows. Column order in a composite index matters: put equality predicates first, then the range or sort column.",
    takeaways: [
      "Every index speeds up reads and slows down writes — they are not free.",
      "Composite index column order decides whether the index can be used at all.",
      "A partial index on the rows you actually query is often a fraction of the size.",
      "Unused indexes are pure cost; pg_stat_user_indexes tells you which they are.",
    ],
    sections: [
      {
        heading: "Which index type should you use?",
        body: [
          {
            type: "table",
            head: ["Type", "Use for", "Example"],
            rows: [
              ["B-tree (default)", "Equality, ranges, ORDER BY", "WHERE created_at > $1"],
              ["GIN", "Arrays, JSONB containment, full-text", "WHERE tags @> ARRAY['seo']"],
              ["GiST", "Geometric, ranges, nearest-neighbour", "Overlapping time ranges"],
              ["BRIN", "Huge tables with correlated physical order", "Append-only event logs"],
              ["Hash", "Equality only", "Rarely worth it over B-tree"],
            ],
          },
          {
            type: "p",
            text: "In practice, 90% of the indexes on a typical product database are B-tree, and the interesting decisions are about which columns and in what order rather than which type.",
          },
        ],
      },
      {
        heading: "Why does composite index column order matter?",
        answer:
          "PostgreSQL can use a composite index for a query only if the query constrains a leading prefix of its columns.",
        body: [
          {
            type: "code",
            lang: "sql",
            code: `CREATE INDEX idx_orders ON orders (customer_id, status, created_at);

-- Uses the index fully
SELECT * FROM orders WHERE customer_id = 42 AND status = 'open' ORDER BY created_at DESC;

-- Uses only the customer_id portion
SELECT * FROM orders WHERE customer_id = 42 AND created_at > now() - interval '7 days';

-- Cannot use this index at all
SELECT * FROM orders WHERE status = 'open';`,
          },
          {
            type: "p",
            text: "The rule: equality predicates first, in order of selectivity, then the column you range over or sort by last. Getting this wrong is the difference between an index scan and a sequential scan over ten million rows.",
          },
        ],
      },
      {
        heading: "When should you use a partial index?",
        body: [
          {
            type: "p",
            text: "When your queries consistently filter to a small subset. If 98% of orders are completed and every dashboard query looks at open ones, indexing only the open rows produces an index a fiftieth of the size that fits comfortably in memory.",
          },
          {
            type: "code",
            lang: "sql",
            code: `-- Only index the rows the application actually queries
CREATE INDEX idx_open_orders ON orders (created_at)
WHERE status IN ('open', 'processing');

-- Enforce uniqueness only among live records
CREATE UNIQUE INDEX idx_active_email ON users (lower(email))
WHERE deleted_at IS NULL;`,
          },
          {
            type: "callout",
            title: "Index expressions, not just columns",
            text: "If you query WHERE lower(email) = $1, a plain index on email will not be used. Index the expression itself, or use a case-insensitive collation.",
          },
        ],
      },
      {
        heading: "How do you know if an index is being used?",
        body: [
          {
            type: "code",
            lang: "sql",
            code: `-- Indexes that have never been scanned
SELECT relname, indexrelname, idx_scan, pg_size_pretty(pg_relation_size(indexrelid))
FROM pg_stat_user_indexes
WHERE idx_scan = 0 AND indexrelid NOT IN (SELECT conindid FROM pg_constraint)
ORDER BY pg_relation_size(indexrelid) DESC;`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Check pg_stat_user_indexes after a full business cycle — a month, not an afternoon.",
              "Drop unused indexes: they slow every insert and update and consume cache memory.",
              "Look for redundancy — an index on (a) is redundant if (a, b) exists.",
              "Use EXPLAIN (ANALYZE, BUFFERS) to confirm the planner picks the index you expect.",
              "Create indexes CONCURRENTLY in production so the build does not lock writes.",
            ],
          },
        ],
      },
      {
        heading: "When does an index not help?",
        body: [
          {
            type: "list",
            items: [
              "Low-cardinality columns where a large share of rows match — a sequential scan is genuinely cheaper.",
              "Small tables that fit in a page or two; the planner will ignore your index and be right.",
              "Queries with a leading wildcard LIKE '%term' — use a trigram index instead.",
              "Functions applied to the column in the WHERE clause without a matching expression index.",
              "Write-heavy tables where the index maintenance cost exceeds the read benefit.",
            ],
          },
          {
            type: "p",
            text: "One useful discipline: before adding an index, capture the query's EXPLAIN plan and timing. After adding it, capture them again. If the plan did not change, remove the index — you have added write cost for nothing.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How many indexes is too many?",
        answer:
          "There is no fixed number, but past roughly five or six on a write-heavy table the insert cost becomes noticeable. Every index must be justified by a query you actually run.",
      },
      {
        question: "Do foreign keys create indexes automatically?",
        answer:
          "PostgreSQL indexes the referenced primary key but not the referencing column. Missing indexes on foreign key columns are a very common cause of slow deletes and joins.",
      },
      {
        question: "What is a covering index?",
        answer:
          "An index that contains every column a query needs, using INCLUDE, so PostgreSQL can answer from the index alone without touching the table. Useful for hot read paths.",
      },
      {
        question: "Should I index a JSONB column?",
        answer:
          "Use a GIN index for containment queries across the whole document, or a B-tree expression index on a specific extracted path if you always query the same key. The latter is much smaller.",
      },
    ],
    references: [
      { label: "PostgreSQL — Indexes", href: "https://www.postgresql.org/docs/current/indexes.html" },
      { label: "PostgreSQL — Monitoring statistics", href: "https://www.postgresql.org/docs/current/monitoring-stats.html" },
      { label: "Use The Index, Luke", href: "https://use-the-index-luke.com/" },
    ],
    internalLinks: [
      { label: "Reading EXPLAIN ANALYZE output", href: "/blog/postgresql-query-optimization" },
      { label: "PostgreSQL connection pooling", href: "/blog/postgresql-connection-pooling" },
      { label: "Running database migrations safely", href: "/blog/database-migrations-safely" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "postgresql-query-optimization",
      "postgresql-connection-pooling",
      "database-migrations-safely",
    ],
  },

  {
    slug: "postgresql-query-optimization",
    title: "Reading EXPLAIN ANALYZE: how to find the actual slow part of a query",
    seoTitle: "PostgreSQL EXPLAIN ANALYZE: A Practical Guide",
    description:
      "How to read a PostgreSQL query plan, spot bad row estimates, recognise the expensive node types, and fix the five most common causes of slow queries.",
    excerpt:
      "Everyone runs EXPLAIN. Fewer people read the row estimates, which is where the actual answer usually is.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "explain analyze postgresql",
    secondaryKeywords: [
      "postgres query optimization",
      "slow query postgres",
      "query planner",
      "sequential scan",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-03",
    answer:
      "EXPLAIN ANALYZE runs a query and reports the plan with actual timings and row counts. Read it inside-out, compare estimated rows to actual rows at each node, and start with the node where that ratio is worst — a bad estimate is what causes the planner to choose the wrong join strategy and produce a slow plan.",
    takeaways: [
      "Estimated vs actual rows is the most informative number in the plan.",
      "Read plans from the innermost node outward; time is cumulative.",
      "A sequential scan is not automatically bad — on a small or mostly-matching table it is optimal.",
      "Nested loops over large row counts are the classic sign of a bad estimate.",
    ],
    sections: [
      {
        heading: "How do you read a query plan?",
        body: [
          {
            type: "code",
            lang: "sql",
            code: `EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT o.id, o.total, c.name
FROM orders o JOIN customers c ON c.id = o.customer_id
WHERE o.status = 'open' AND o.created_at > now() - interval '30 days';

-- Nested Loop  (cost=0.71..8231.44 rows=12 width=48)
--               (actual time=0.042..842.113 rows=48213 loops=1)
--   ->  Index Scan using idx_open_orders on orders o
--         (actual time=0.021..31.204 rows=48213 loops=1)
--   ->  Index Scan using customers_pkey on customers c
--         (actual time=0.014..0.015 rows=1 loops=48213)`,
          },
          {
            type: "p",
            text: "The tell is right there: the planner estimated 12 rows and got 48,213. It chose a nested loop because 12 lookups is cheap; at 48,213 it becomes 48,213 index lookups. Fixing the estimate — usually by running ANALYZE or adding extended statistics — lets it pick a hash join instead.",
          },
          {
            type: "list",
            items: [
              "actual time is start..end in milliseconds for that node, and includes its children.",
              "loops multiplies the reported time — a 0.015ms node run 48,213 times is 723ms.",
              "BUFFERS shows shared hits versus reads: high reads means the data is not in cache.",
              "rows is per loop, not the total. This trips up almost everyone the first time.",
            ],
          },
        ],
      },
      {
        heading: "Which node types should worry you?",
        body: [
          {
            type: "table",
            head: ["Node", "Meaning", "Concerning when"],
            rows: [
              ["Seq Scan", "Full table read", "On a large table with a selective filter"],
              ["Nested Loop", "Row-by-row join", "Outer row count is large"],
              ["Hash Join", "Build hash, probe", "Rarely a problem; watch memory"],
              ["Sort", "Ordering rows", "Sort Method shows 'external merge' (spilled to disk)"],
              ["Bitmap Heap Scan", "Index then fetch pages", "Recheck cond removing most rows"],
              ["Materialize", "Caching a subplan", "Often a sign of a missing index"],
            ],
          },
          {
            type: "callout",
            title: "Sequential scans are frequently correct",
            text: "If a query returns 40% of a table, reading it sequentially is faster than 400,000 random index lookups. Chasing 'Seq Scan' out of every plan is a common way to make things slower.",
          },
        ],
      },
      {
        heading: "What are the five most common causes of slow queries?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Missing index on a filter or join column — the fix is usually one CREATE INDEX CONCURRENTLY.",
              "Stale statistics after a bulk load, causing wildly wrong estimates. Run ANALYZE.",
              "N+1 queries from the ORM: 200 fast queries instead of one join. Fix in the application, not the database.",
              "SELECT * pulling large text or JSONB columns you never use, inflating I/O and network transfer.",
              "OFFSET pagination at depth — OFFSET 100000 makes PostgreSQL read and discard 100,000 rows.",
            ],
          },
        ],
      },
      {
        heading: "How do you find slow queries in the first place?",
        body: [
          {
            type: "code",
            lang: "sql",
            code: `-- Requires the pg_stat_statements extension
SELECT calls, round(mean_exec_time::numeric, 2) AS avg_ms,
       round(total_exec_time::numeric) AS total_ms, query
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;`,
            caption: "Sort by total time, not average — a 5ms query run a million times matters more.",
          },
          {
            type: "list",
            items: [
              "Enable pg_stat_statements on every production database; it is the single best diagnostic you can turn on.",
              "Set log_min_duration_statement to log anything over, say, 500ms.",
              "Track pg_stat_activity for long-running and blocked queries during incidents.",
              "Instrument the application side too — query time plus round trips is what the user feels.",
            ],
          },
        ],
      },
      {
        heading: "What about the ORM?",
        body: [
          {
            type: "p",
            text: "Most slow-query incidents we investigate are not database problems; they are application problems visible in the database. The ORM issued 300 queries because a relation was accessed in a loop, or fetched every column of a wide table to render three of them.",
          },
          {
            type: "list",
            items: [
              "Log queries in development with counts per request — a page issuing 80 queries is a design problem.",
              "Use the ORM's eager loading for known relations instead of lazy access inside loops.",
              "Select explicit columns on wide tables.",
              "Drop to raw SQL for genuinely complex reporting queries; ORMs generate poor plans for them.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does EXPLAIN ANALYZE actually run the query?",
        answer:
          "Yes — including writes. Wrap data-modifying statements in a transaction you roll back, or use plain EXPLAIN for the estimated plan only.",
      },
      {
        question: "What is a good ratio of estimated to actual rows?",
        answer:
          "Within an order of magnitude is usually fine. A 1000× discrepancy almost always means stale statistics, correlated columns needing extended statistics, or a predicate the planner cannot estimate.",
      },
      {
        question: "Should I use query hints?",
        answer:
          "PostgreSQL deliberately has no hints. Fix the underlying cause — statistics, indexes, query shape — rather than forcing a plan that will be wrong when the data distribution changes.",
      },
      {
        question: "How often should ANALYZE run?",
        answer:
          "Autovacuum handles it for normal workloads. After a bulk load or a large migration, run it manually — the planner is only as good as its statistics.",
      },
    ],
    references: [
      { label: "PostgreSQL — Using EXPLAIN", href: "https://www.postgresql.org/docs/current/using-explain.html" },
      { label: "PostgreSQL — pg_stat_statements", href: "https://www.postgresql.org/docs/current/pgstatstatements.html" },
      { label: "explain.depesz.com — plan visualiser", href: "https://explain.depesz.com/" },
    ],
    internalLinks: [
      { label: "PostgreSQL indexing guide", href: "/blog/postgresql-indexing-guide" },
      { label: "Database transactions and isolation", href: "/blog/database-transactions-isolation" },
      { label: "Redis caching patterns", href: "/blog/redis-caching-patterns" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "postgresql-indexing-guide",
      "database-transactions-isolation",
      "postgresql-connection-pooling",
    ],
  },

  {
    slug: "postgresql-connection-pooling",
    title: "PostgreSQL connection pooling: why your app runs out of connections",
    seoTitle: "PostgreSQL Connection Pooling Explained",
    description:
      "Why PostgreSQL connections are expensive, how pool sizing actually works, and when you need PgBouncer, transaction pooling or a serverless data proxy.",
    excerpt:
      "Every PostgreSQL connection is a process. Ten containers with a pool of twenty is two hundred processes, and your database was configured for one hundred.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "postgresql connection pooling",
    secondaryKeywords: [
      "pgbouncer",
      "max_connections postgres",
      "connection pool size",
      "serverless database connections",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-19",
    answer:
      "PostgreSQL uses one operating system process per connection, so connections are expensive in memory and scheduling. Application pools must be sized so that instances × pool size stays under max_connections; beyond a handful of instances or in serverless environments you need an external pooler like PgBouncer in transaction mode.",
    takeaways: [
      "More connections does not mean more throughput — past core count it means more contention.",
      "Pool size × instance count is the number that matters, not pool size alone.",
      "Transaction-mode pooling breaks session state: prepared statements, temp tables, advisory locks.",
      "Serverless and autoscaling workloads need a pooler, not a bigger max_connections.",
    ],
    sections: [
      {
        heading: "Why are PostgreSQL connections expensive?",
        body: [
          {
            type: "p",
            text: "Each connection forks a backend process with its own memory for work_mem, temporary buffers and catalog caches — typically several megabytes at rest, more under query load. Two hundred idle connections can consume gigabytes and add scheduler pressure before executing a single query.",
          },
          {
            type: "p",
            text: "This is different from databases that use a thread-per-connection or event-driven model. It is why PostgreSQL advice about connection counts sounds conservative compared to what people expect.",
          },
        ],
      },
      {
        heading: "How should you size a pool?",
        answer:
          "Start from the database's capacity, divide by the number of application instances, and leave headroom for maintenance and scaling events.",
        body: [
          {
            type: "code",
            lang: "text",
            code: `max_connections            = 100   (database setting)
reserved for superuser     = 3
reserved for migrations    = 5
available to applications  = 92

instances (steady state)   = 6
instances (peak autoscale) = 10
safe pool size per instance = floor(92 / 10) = 9`,
            caption: "Size for peak instance count, not steady state, or a scaling event exhausts the database.",
          },
          {
            type: "p",
            text: "A frequently-cited starting point for the total active connection count is around two to four times the number of CPU cores available to the database. Beyond that, queries queue inside PostgreSQL instead of in your pool, which is strictly worse because you lose visibility and control.",
          },
        ],
      },
      {
        heading: "When do you need PgBouncer?",
        body: [
          {
            type: "list",
            items: [
              "More application instances than the database can host connections for.",
              "Serverless functions, where each concurrent invocation wants its own connection.",
              "Autoscaling workloads where instance count varies with traffic.",
              "Many short-lived connections, where handshake cost dominates.",
              "Multiple applications sharing one database cluster.",
            ],
          },
          {
            type: "table",
            head: ["Pool mode", "Connection released", "Safe for"],
            rows: [
              ["Session", "When the client disconnects", "Everything; least efficient"],
              ["Transaction", "At transaction end", "Most web apps; the usual choice"],
              ["Statement", "After each statement", "Autocommit-only workloads; rarely used"],
            ],
          },
        ],
      },
      {
        heading: "What breaks under transaction pooling?",
        body: [
          {
            type: "p",
            text: "Anything that assumes the same backend across statements. Because a different physical connection can serve your next statement, session-scoped features become unreliable.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Server-side prepared statements — many drivers need them disabled or handled explicitly.",
              "LISTEN/NOTIFY — the listening connection is not stable.",
              "Session-level advisory locks — use transaction-scoped variants instead.",
              "Temporary tables and SET commands outside a transaction.",
              "Cursors held open across statements.",
            ],
          },
          {
            type: "callout",
            title: "Check your driver's pooling flag",
            text: "Most PostgreSQL clients have an explicit option for running behind a transaction pooler. Setting it is usually the entire fix for the 'prepared statement already exists' errors that appear after introducing PgBouncer.",
          },
        ],
      },
      {
        heading: "What should you monitor?",
        body: [
          {
            type: "code",
            lang: "sql",
            code: `SELECT state, count(*),
       max(now() - state_change) AS longest
FROM pg_stat_activity
WHERE backend_type = 'client backend'
GROUP BY state;`,
          },
          {
            type: "list",
            items: [
              "Connection count against max_connections, with an alert at 80%.",
              "Idle in transaction sessions — these hold locks and block vacuum; alert on any lasting over a minute.",
              "Pool wait time in the application: time spent waiting for a connection is invisible in database metrics.",
              "PgBouncer's own pool stats: cl_waiting above zero means clients are queueing.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I just raise max_connections?",
        answer:
          "Up to a point, but each connection costs memory and scheduling. Raising it to 1000 on a 4-core machine converts a connection error into a much slower database. Pool instead.",
      },
      {
        question: "What causes 'idle in transaction' sessions?",
        answer:
          "Application code that opens a transaction and then does slow work — an HTTP call, file processing — before committing. Keep transactions short and never do I/O inside one.",
      },
      {
        question: "Do managed databases handle this for me?",
        answer:
          "Many now offer a built-in pooler, and some serverless drivers connect over HTTP to avoid the problem entirely. Check what your provider offers before deploying your own PgBouncer.",
      },
      {
        question: "Does connection pooling help query performance?",
        answer:
          "It removes connection setup cost and prevents overload, which improves latency under concurrency. It does nothing for an unindexed query — that is a separate problem.",
      },
    ],
    references: [
      { label: "PgBouncer — Features and pool modes", href: "https://www.pgbouncer.org/features.html" },
      { label: "PostgreSQL — Connection settings", href: "https://www.postgresql.org/docs/current/runtime-config-connection.html" },
      { label: "PostgreSQL wiki — Number of database connections", href: "https://wiki.postgresql.org/wiki/Number_Of_Database_Connections" },
    ],
    internalLinks: [
      { label: "Server architecture basics", href: "/blog/server-architecture-basics" },
      { label: "PostgreSQL query optimization", href: "/blog/postgresql-query-optimization" },
      { label: "Database transactions and isolation", href: "/blog/database-transactions-isolation" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "server-architecture-basics",
      "postgresql-query-optimization",
      "database-transactions-isolation",
    ],
  },

  {
    slug: "mongodb-schema-design",
    title: "MongoDB schema design: embed or reference, and how to decide",
    seoTitle: "MongoDB Schema Design: Embed vs Reference",
    description:
      "How to model documents in MongoDB — the embedding rules, the unbounded array problem, indexing strategy and the anti-patterns that cause rewrites.",
    excerpt:
      "MongoDB is schemaless in the same way a spreadsheet is: you still have a schema, it is just enforced by whoever wrote the last query.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "mongodb schema design",
    secondaryKeywords: [
      "embed vs reference mongodb",
      "mongodb data modeling",
      "mongodb indexes",
      "document database design",
    ],
    authorId: "harshal",
    publishedAt: "2026-06-05",
    answer:
      "Model MongoDB documents around how your application reads data. Embed related data that is always read together, is bounded in size, and changes with its parent. Reference data that is large, unbounded, shared across documents, or updated independently. The 16MB document limit and unbounded array growth are the two constraints that force most design decisions.",
    takeaways: [
      "Design for your read patterns, not for normalised purity.",
      "Never embed an array that can grow without bound — comments, events, logs.",
      "Documents have a hard 16MB limit; approaching it is a design failure, not an edge case.",
      "Schema validation exists in MongoDB — use it rather than trusting application discipline.",
    ],
    sections: [
      {
        heading: "When should you embed and when should you reference?",
        body: [
          {
            type: "table",
            head: ["Signal", "Embed", "Reference"],
            rows: [
              ["Read together always", "Yes", "—"],
              ["Bounded size (tens, not thousands)", "Yes", "—"],
              ["Updated independently", "—", "Yes"],
              ["Shared by many parents", "—", "Yes"],
              ["Grows over time indefinitely", "—", "Yes"],
              ["Needs its own queries and indexes", "—", "Yes"],
            ],
          },
          {
            type: "code",
            lang: "js",
            code: `// Embed: an order's line items are read with the order and never alone
{ _id: "ord_1", total: 4900, items: [ { sku: "A1", qty: 2, price: 1200 } ] }

// Reference: a product is shared across thousands of orders and updated separately
{ _id: "ord_1", items: [ { productId: "prd_9", qty: 2, priceAtPurchase: 1200 } ] }`,
            caption: "Note priceAtPurchase — denormalising a point-in-time value is correct, not a shortcut.",
          },
        ],
      },
      {
        heading: "What is the unbounded array problem?",
        answer:
          "An array that grows with user activity will eventually make the document huge, slow to update, and finally impossible to save.",
        body: [
          {
            type: "p",
            text: "Comments on a post, events on a session, messages in a conversation — these look natural to embed and are the most common cause of MongoDB rewrites. Every update rewrites the whole document, indexes on the array grow with it, and at 16MB writes simply fail.",
          },
          {
            type: "list",
            items: [
              "Use a separate collection with an indexed parent id for anything unbounded.",
              "Keep a small denormalised preview if you need it — the latest three comments plus a count.",
              "Consider the bucket pattern for time series: one document per hour or per hundred events.",
              "Set an explicit cap in your validation rules so growth fails loudly at review time, not in production.",
            ],
          },
        ],
      },
      {
        heading: "How should you index a MongoDB collection?",
        body: [
          {
            type: "p",
            text: "The ESR rule governs compound indexes: Equality fields first, then Sort fields, then Range fields. Getting this order wrong means MongoDB performs an in-memory sort, which fails outright past its memory limit for sorts without an index.",
          },
          {
            type: "code",
            lang: "js",
            code: `// Query: find open orders for a customer, newest first
db.orders.find({ customerId: 42, status: "open" }).sort({ createdAt: -1 })

// ESR: equality (customerId, status), then sort (createdAt)
db.orders.createIndex({ customerId: 1, status: 1, createdAt: -1 })`,
          },
          {
            type: "list",
            items: [
              "Use explain('executionStats') and check totalDocsExamined against nReturned — close to 1:1 is the goal.",
              "Partial indexes with a filter expression keep index size down on skewed data.",
              "TTL indexes expire documents automatically — ideal for sessions and ephemeral events.",
              "Every index costs write throughput and RAM, exactly as in a relational database.",
            ],
          },
        ],
      },
      {
        heading: "What about transactions and consistency?",
        body: [
          {
            type: "p",
            text: "MongoDB supports multi-document ACID transactions on replica sets, but they are more expensive than single-document writes and have time limits. The idiomatic design keeps anything that must change atomically inside one document, where atomicity is free.",
          },
          {
            type: "callout",
            title: "Design so you rarely need transactions",
            text: "If your model needs a multi-document transaction on every write path, the document boundaries are probably wrong — or the workload is genuinely relational and a relational database would serve it better.",
          },
        ],
      },
      {
        heading: "Which anti-patterns cause rewrites?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Massive arrays — the single most common cause of a MongoDB migration project.",
              "A collection per tenant or per user, producing tens of thousands of collections and unusable metadata.",
              "Using MongoDB as a relational database with $lookup joins on every query.",
              "No schema validation, so five years of documents have four different shapes for the same field.",
              "Storing large binary files in documents instead of object storage with a reference.",
              "Unbounded document growth from append-only fields, causing constant document relocation.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is MongoDB schemaless?",
        answer:
          "The database does not require a schema, but your application has one implicitly. Use JSON Schema validation on collections so the shape is enforced where the data lives rather than in every code path.",
      },
      {
        question: "When should I choose MongoDB over PostgreSQL?",
        answer:
          "When documents genuinely vary in shape, when your access pattern is overwhelmingly by primary key or a single index, or when horizontal sharding is a near-term requirement. For relational data with reporting needs, PostgreSQL is usually the better fit — and it handles JSONB well.",
      },
      {
        question: "How do I handle many-to-many relationships?",
        answer:
          "Store an array of references on the side with the smaller, bounded set, or use a dedicated join collection when both sides are large. Duplicating the relationship on both sides invites divergence.",
      },
      {
        question: "What is the bucket pattern?",
        answer:
          "Grouping many small time-series records into one document per time window. It reduces document count and index size dramatically for metrics and event data.",
      },
    ],
    references: [
      { label: "MongoDB — Data modeling introduction", href: "https://www.mongodb.com/docs/manual/data-modeling/" },
      { label: "MongoDB — Schema design anti-patterns", href: "https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-massive-arrays/" },
      { label: "MongoDB — Indexing strategies", href: "https://www.mongodb.com/docs/manual/applications/indexes/" },
    ],
    internalLinks: [
      { label: "SQL vs NoSQL: how to choose", href: "/blog/sql-vs-nosql" },
      { label: "PostgreSQL indexing guide", href: "/blog/postgresql-indexing-guide" },
      { label: "Database backup and recovery", href: "/blog/database-backup-and-recovery" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: ["sql-vs-nosql", "postgresql-indexing-guide", "database-backup-and-recovery"],
  },

  {
    slug: "redis-caching-patterns",
    title: "Redis caching patterns: keys, invalidation and the stampede problem",
    seoTitle: "Redis Caching Patterns and Invalidation",
    description:
      "Cache-aside, write-through and write-behind compared, plus key design, TTL strategy, stampede prevention and what should never go in a cache.",
    excerpt:
      "Caching is easy until the cache expires. Everything interesting about Redis in production happens in the seconds after a popular key disappears.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "redis caching patterns",
    secondaryKeywords: [
      "cache invalidation",
      "cache stampede",
      "cache aside pattern",
      "redis ttl strategy",
    ],
    authorId: "harshal",
    publishedAt: "2026-05-22",
    answer:
      "Cache-aside is the default Redis pattern: the application checks the cache, falls back to the database on a miss, and writes the result back with a TTL. The failure mode to design for is the stampede — when a hot key expires and hundreds of requests hit the database simultaneously — solved with a lock, early recomputation, or jittered TTLs.",
    takeaways: [
      "Namespace and version your keys so you can invalidate a whole class at once.",
      "Add random jitter to TTLs so keys written together do not expire together.",
      "Never cache anything you cannot afford to serve slightly stale.",
      "A cache that must be correct is not a cache — it is a database with no durability.",
    ],
    sections: [
      {
        heading: "Which caching pattern should you use?",
        body: [
          {
            type: "table",
            head: ["Pattern", "How it works", "Trade-off"],
            rows: [
              ["Cache-aside", "App reads cache, falls back to DB, writes back", "Simple; first request after expiry is slow"],
              ["Read-through", "Cache layer fetches on miss", "Cleaner app code; needs a cache library"],
              ["Write-through", "Write to cache and DB together", "Cache always warm; slower writes"],
              ["Write-behind", "Write to cache, flush to DB async", "Fast writes; risk of data loss"],
              ["Refresh-ahead", "Recompute before expiry", "No cold misses; wasted work on cold keys"],
            ],
          },
          {
            type: "p",
            text: "Cache-aside covers the vast majority of web workloads and keeps failure behaviour obvious: if Redis is down, you fall back to the database and get slower, not broken. Verify that fallback actually works — a cache that takes the site down when it fails is a liability.",
          },
        ],
      },
      {
        heading: "How should keys be designed?",
        body: [
          {
            type: "code",
            lang: "text",
            code: `app:v3:user:1042:profile          # namespace : schema version : entity : id : field
app:v3:product:list:cat=shoes:p=2 # include every parameter that changes the result
app:v3:session:8f2c...            # opaque ids for sessions`,
          },
          {
            type: "list",
            items: [
              "Include a schema version in the prefix — bump it to invalidate everything after a shape change.",
              "Include every query parameter that affects the value, or you will serve one user another's filtered results.",
              "Keep keys short but readable; you will be reading them in redis-cli during an incident.",
              "Never build keys from unsanitised user input without bounding length.",
            ],
          },
        ],
      },
      {
        heading: "What is a cache stampede and how do you prevent it?",
        answer:
          "A stampede happens when a popular key expires and every concurrent request recomputes it at once, hitting the database with a burst it was shielded from.",
        body: [
          {
            type: "code",
            lang: "ts",
            code: `async function getWithLock<T>(key: string, ttl: number, load: () => Promise<T>) {
  const hit = await redis.get(key);
  if (hit) return JSON.parse(hit) as T;

  const lock = await redis.set(\`\${key}:lock\`, "1", { NX: true, EX: 10 });
  if (!lock) {
    await sleep(50);              // someone else is computing it
    return getWithLock(key, ttl, load);
  }

  const value = await load();
  const jitter = Math.floor(Math.random() * ttl * 0.1);
  await redis.set(key, JSON.stringify(value), { EX: ttl + jitter });
  await redis.del(\`\${key}:lock\`);
  return value;
}`,
          },
          {
            type: "list",
            items: [
              "Jittered TTLs stop keys written in the same deploy from expiring in the same second.",
              "A short lock ensures only one worker recomputes; others wait briefly or serve stale.",
              "Probabilistic early expiry recomputes a key slightly before it expires, under load.",
              "Serving stale-while-revalidate is usually better than making users wait for a recompute.",
            ],
          },
        ],
      },
      {
        heading: "How do you invalidate correctly?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Prefer short TTLs over precise invalidation where staleness is tolerable — far fewer bugs.",
              "On write, delete the key rather than updating it. Updating races with concurrent reads.",
              "Group related keys under a version counter: bump the version instead of deleting many keys.",
              "Never use KEYS in production to find keys to delete — it blocks the server. Use SCAN or a tag set.",
              "Track invalidation in the same code path as the write, ideally in the same function.",
            ],
          },
          {
            type: "callout",
            title: "Design for the cache being wrong",
            text: "Assume every cached value may be stale by up to its TTL and ask what breaks. If the answer is 'a customer sees the wrong balance', that data should not be cached at that TTL.",
          },
        ],
      },
      {
        heading: "What else is Redis good for?",
        body: [
          {
            type: "list",
            items: [
              "Rate limiting counters with atomic increments and expiry.",
              "Session storage, where fast reads and TTLs are exactly the requirement.",
              "Distributed locks — with care, and with an understanding of their limitations under network partitions.",
              "Job queues via streams or lists, for workloads that do not need a full broker.",
              "Leaderboards and counters using sorted sets.",
              "Pub/sub for fan-out where at-most-once delivery is acceptable.",
            ],
          },
          {
            type: "p",
            text: "What it is not: a durable primary datastore. Configure persistence and eviction deliberately, know your maxmemory policy, and treat anything in Redis as reconstructable from a source of truth.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What TTL should I use?",
        answer:
          "Match it to how stale the data may be and how expensive it is to recompute. Minutes for listing pages, seconds for prices, hours for reference data. Always add jitter.",
      },
      {
        question: "What happens when Redis runs out of memory?",
        answer:
          "It applies your maxmemory-policy — evicting least-recently-used keys, or rejecting writes if the policy is noeviction. Set this explicitly; the default may not be what a cache wants.",
      },
      {
        question: "Should I cache database queries or rendered output?",
        answer:
          "Whichever is more expensive and more reusable. Caching a rendered fragment saves rendering and querying; caching a query result is more reusable across pages. Many systems do both at different layers.",
      },
      {
        question: "Is Redis single-threaded?",
        answer:
          "Command execution is effectively single-threaded, which is why a slow command like KEYS on a large keyspace blocks everything. Recent versions use threads for I/O but keep the execution model simple.",
      },
    ],
    references: [
      { label: "Redis — Client-side caching and patterns", href: "https://redis.io/docs/latest/develop/use-cases/caching/" },
      { label: "Redis — Key eviction policies", href: "https://redis.io/docs/latest/develop/reference/eviction/" },
      { label: "AWS — Caching best practices", href: "https://aws.amazon.com/caching/best-practices/" },
    ],
    internalLinks: [
      { label: "Next.js caching explained", href: "/blog/nextjs-caching-explained" },
      { label: "Rate limiting strategies for APIs", href: "/blog/api-rate-limiting-strategies" },
      { label: "PostgreSQL query optimization", href: "/blog/postgresql-query-optimization" },
      { label: "Performance optimisation services", href: "/services#performance" },
    ],
    related: [
      "nextjs-caching-explained",
      "api-rate-limiting-strategies",
      "postgresql-query-optimization",
    ],
  },

  {
    slug: "sql-vs-nosql",
    title: "SQL vs NoSQL: a decision guide that does not start with 'it depends'",
    seoTitle: "SQL vs NoSQL: A Practical Decision Guide",
    description:
      "What relational and document databases are each genuinely better at, how PostgreSQL's JSONB changes the comparison, and how to choose without regret.",
    excerpt:
      "The honest default for most products is PostgreSQL. Here is the specific set of conditions under which it is not.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "sql vs nosql",
    secondaryKeywords: [
      "relational vs document database",
      "postgresql jsonb",
      "when to use nosql",
      "database selection",
    ],
    authorId: "harshal",
    publishedAt: "2026-05-08",
    answer:
      "Choose a relational database when your data has relationships, when you need transactions across entities, or when anyone will ever run an ad-hoc analytical query — which covers most business applications. Choose a document, key-value or wide-column store when the access pattern is narrow and known, documents vary genuinely in shape, or scale demands horizontal partitioning from the start.",
    takeaways: [
      "PostgreSQL with JSONB covers most 'we need flexible documents' requirements.",
      "The question is your access pattern, not the volume of data.",
      "Joins are not a weakness of relational databases; they are the feature.",
      "Polyglot persistence is normal — the primary store does not have to serve every workload.",
    ],
    sections: [
      {
        heading: "What are the real differences?",
        body: [
          {
            type: "table",
            head: ["", "Relational", "Document", "Key-value", "Wide-column"],
            rows: [
              ["Example", "PostgreSQL, MySQL", "MongoDB", "Redis, DynamoDB", "Cassandra"],
              ["Best access", "Any query, including ad hoc", "By key or indexed field", "By key", "By partition key"],
              ["Joins", "Native and efficient", "Limited, expensive", "None", "None"],
              ["Transactions", "Full ACID", "Multi-doc with cost", "Limited", "Limited"],
              ["Schema change", "Migration", "Application-managed", "N/A", "Flexible columns"],
              ["Horizontal scale", "Harder, improving", "Built for sharding", "Trivial", "Built for scale"],
            ],
          },
        ],
      },
      {
        heading: "When is a relational database the right answer?",
        answer:
          "When entities relate to each other and you cannot predict every query in advance.",
        body: [
          {
            type: "list",
            items: [
              "Business applications: orders, customers, invoices, subscriptions — inherently relational.",
              "Anything needing atomic changes across entities: transfer money, allocate stock, apply a refund.",
              "Anything where finance, support or product will ask a question nobody anticipated.",
              "Systems where data integrity constraints should be enforced by the database, not hoped for in code.",
            ],
          },
          {
            type: "p",
            text: "The 'relational databases do not scale' argument is largely historical for typical product workloads. A well-indexed PostgreSQL instance on modern hardware handles tens of thousands of transactions per second and hundreds of gigabytes without exotic architecture.",
          },
        ],
      },
      {
        heading: "When is a non-relational store genuinely better?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Access is exclusively by a known key and predictable partition — session stores, user preferences, feature flags.",
              "Documents differ structurally in ways that would produce a table of eighty mostly-null columns.",
              "Write volume requires horizontal sharding from day one — telemetry, IoT, event ingestion.",
              "The workload is a cache or a queue, where durability and querying are not the point.",
              "Global multi-region writes with tunable consistency are a hard product requirement.",
            ],
          },
          {
            type: "callout",
            title: "Have you tried JSONB?",
            text: "PostgreSQL's JSONB gives you schemaless columns with GIN indexing inside a relational database. For 'some of our data is flexible', it is usually a better answer than adopting a second database.",
          },
        ],
      },
      {
        heading: "What does polyglot persistence look like in practice?",
        body: [
          {
            type: "p",
            text: "A typical production system we build uses PostgreSQL as the source of truth, Redis for caching and rate limiting, object storage for files, and a dedicated search index when full-text needs outgrow the database. Each has a clear job and a clear owner.",
          },
          {
            type: "p",
            text: "The cost is operational: more backups, more monitoring, more failure modes, more expertise. Add a second database when a specific workload demands it, not because a diagram looks more sophisticated with it.",
          },
        ],
      },
      {
        heading: "How do you decide in an hour?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Write down your ten most frequent queries. If most are 'get by key', a document or key-value store is viable.",
              "Identify anything that must change atomically together. If that spans entities, you want ACID transactions.",
              "Ask whether anyone will need ad-hoc reporting. If yes, relational, or plan a separate analytics pipeline.",
              "Estimate 12-month data volume honestly. Under a terabyte with normal write rates, scale is not your deciding factor.",
              "Choose what your team can operate at 3am. Familiarity is a legitimate technical criterion.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I use both?",
        answer:
          "Yes, and most mature systems do. Keep one clear source of truth and use other stores for specific workloads — caching, search, analytics — rather than splitting ownership of the same data.",
      },
      {
        question: "Is NoSQL faster?",
        answer:
          "For its designed access pattern — a single-key lookup on a partitioned dataset — yes. For anything requiring joins, aggregation or ad-hoc filtering, a relational database is usually faster because it was built for exactly that.",
      },
      {
        question: "What about NewSQL databases?",
        answer:
          "Distributed SQL systems offer horizontal scale with relational semantics and are a strong option at large scale. They add operational and latency considerations, so evaluate against your real workload rather than the marketing.",
      },
      {
        question: "How hard is it to migrate later?",
        answer:
          "Hard, and it gets harder with every month of data and every query written against the old model. This is exactly why the decision is worth an hour of structured thought at the start.",
      },
    ],
    references: [
      { label: "PostgreSQL — JSON types", href: "https://www.postgresql.org/docs/current/datatype-json.html" },
      { label: "MongoDB — Data modeling", href: "https://www.mongodb.com/docs/manual/data-modeling/" },
      { label: "AWS — Types of databases", href: "https://aws.amazon.com/products/databases/" },
    ],
    internalLinks: [
      { label: "MongoDB schema design", href: "/blog/mongodb-schema-design" },
      { label: "PostgreSQL vs MySQL", href: "/blog/postgres-vs-mysql" },
      { label: "Database transactions and isolation", href: "/blog/database-transactions-isolation" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: ["mongodb-schema-design", "postgres-vs-mysql", "database-transactions-isolation"],
  },

  {
    slug: "database-migrations-safely",
    title: "Running database migrations without taking the site down",
    seoTitle: "Safe Database Migrations: The Expand/Contract Pattern",
    description:
      "How to add columns, rename fields, backfill data and change types on a live PostgreSQL database using expand/contract, without locks or downtime.",
    excerpt:
      "The migration that takes your site down is almost never the complicated one. It is the ALTER TABLE that took a lock nobody expected.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "database migrations",
    secondaryKeywords: [
      "zero downtime migration",
      "expand contract pattern",
      "postgres alter table lock",
      "schema migration strategy",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-24",
    answer:
      "Safe migrations follow the expand/contract pattern: add the new structure, deploy code that writes to both old and new, backfill in batches, switch reads to the new structure, and only then remove the old one. Each step is independently deployable and reversible, so no release requires the schema and the code to change at the same instant.",
    takeaways: [
      "Never change a schema and the code that depends on it in the same deploy.",
      "Backfill in small batches with pauses; a single UPDATE over ten million rows locks and bloats.",
      "Always set lock_timeout before DDL — a blocked ALTER blocks every query behind it.",
      "Rename in five steps, not one. A rename is the most dangerous 'simple' migration.",
    ],
    sections: [
      {
        heading: "Which operations are safe and which lock?",
        body: [
          {
            type: "table",
            head: ["Operation", "Lock impact (modern PostgreSQL)"],
            rows: [
              ["ADD COLUMN (nullable, no default)", "Safe — metadata only"],
              ["ADD COLUMN with a constant default", "Safe in PostgreSQL 11+"],
              ["ADD COLUMN with a volatile default", "Rewrites the table — dangerous"],
              ["CREATE INDEX", "Blocks writes — use CONCURRENTLY"],
              ["ADD CONSTRAINT ... NOT VALID then VALIDATE", "Safe in two steps"],
              ["ALTER COLUMN TYPE", "Usually rewrites the table"],
              ["DROP COLUMN", "Fast, but breaks any deployed code still selecting it"],
            ],
          },
          {
            type: "callout",
            title: "Set a lock timeout on every migration",
            text: "SET lock_timeout = '3s'; means a migration that cannot acquire its lock fails fast instead of queueing behind a long query — while every subsequent query queues behind it. That queue is how a one-second ALTER becomes a ten-minute outage.",
          },
        ],
      },
      {
        heading: "How does expand/contract work?",
        answer:
          "Split a breaking schema change into a sequence of individually safe, backwards-compatible deploys.",
        body: [
          {
            type: "code",
            lang: "text",
            code: `Renaming users.name -> users.full_name

1. Expand   ALTER TABLE users ADD COLUMN full_name text;
2. Dual write   Deploy code writing both name and full_name
3. Backfill   UPDATE in batches until full_name is complete
4. Switch   Deploy code reading full_name (still writing both)
5. Contract   Stop writing name; ALTER TABLE users DROP COLUMN name;`,
          },
          {
            type: "p",
            text: "Five deploys instead of one. Every step is reversible, no step requires the database and the application to be in lockstep, and a rollback at any point leaves a working system. That is what makes it worth the extra ceremony on anything user-facing.",
          },
        ],
      },
      {
        heading: "How should backfills be run?",
        body: [
          {
            type: "code",
            lang: "sql",
            code: `-- Batched backfill: bounded work per statement, pauses between batches
DO $$
DECLARE rows_updated integer;
BEGIN
  LOOP
    UPDATE users SET full_name = name
    WHERE id IN (SELECT id FROM users WHERE full_name IS NULL LIMIT 5000);
    GET DIAGNOSTICS rows_updated = ROW_COUNT;
    EXIT WHEN rows_updated = 0;
    COMMIT;
    PERFORM pg_sleep(0.1);
  END LOOP;
END $$;`,
          },
          {
            type: "list",
            items: [
              "Batch sizes of a few thousand rows keep transactions short and locks brief.",
              "Pause between batches so autovacuum and normal traffic get their turn.",
              "Make the backfill resumable and idempotent — it will be interrupted at some point.",
              "Run it as a job outside the migration, not inside the deploy, so a slow backfill cannot block a release.",
              "Monitor replication lag while backfilling; large write volumes can push replicas behind.",
            ],
          },
        ],
      },
      {
        heading: "What belongs in your migration process?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Migrations in version control, applied by CI, never by hand in a production console.",
              "Every migration reviewed for lock behaviour by someone other than the author.",
              "Test against a production-sized copy — a migration that takes 40ms on 1,000 rows may take 40 minutes on 40 million.",
              "A written rollback plan; for destructive steps that means a backup and a verified restore path.",
              "Migrations deploy separately from and before the code that depends on them.",
              "A timeout and an abort procedure agreed before you start, not improvised during.",
            ],
          },
        ],
      },
      {
        heading: "What are the classic mistakes?",
        body: [
          {
            type: "list",
            items: [
              "Adding a NOT NULL constraint to a populated table in one statement instead of NOT VALID then VALIDATE.",
              "CREATE INDEX without CONCURRENTLY on a live table.",
              "Dropping a column while old application instances are still selecting it mid-rollout.",
              "One transaction wrapping the schema change and a full-table backfill.",
              "Assuming a migration that is fast in staging will be fast in production — test on real volumes.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should migrations run automatically on deploy?",
        answer:
          "Additive, safe migrations, yes — as a separate step before the application rolls out. Destructive or long-running ones should be run deliberately with someone watching.",
      },
      {
        question: "How do I roll back a migration?",
        answer:
          "For additive changes, deploy the previous code — the extra column is harmless. For destructive changes there is no rollback without a restore, which is precisely why expand/contract defers destruction to the very last step.",
      },
      {
        question: "Do ORM migration tools handle this?",
        answer:
          "They generate the SQL; they do not understand your traffic or lock behaviour. Always read the generated SQL before applying it to production.",
      },
      {
        question: "How do I test a migration realistically?",
        answer:
          "Restore a recent production backup to a staging database of similar size and run it there with representative concurrent load. Row count alone is not enough — locks only bite under traffic.",
      },
    ],
    references: [
      { label: "PostgreSQL — ALTER TABLE", href: "https://www.postgresql.org/docs/current/sql-altertable.html" },
      { label: "PostgreSQL — Explicit locking", href: "https://www.postgresql.org/docs/current/explicit-locking.html" },
      { label: "Martin Fowler — Parallel change (expand/contract)", href: "https://martinfowler.com/bliki/ParallelChange.html" },
    ],
    internalLinks: [
      { label: "Zero downtime deployment strategies", href: "/blog/zero-downtime-deployments" },
      { label: "Database backup and recovery", href: "/blog/database-backup-and-recovery" },
      { label: "PostgreSQL indexing guide", href: "/blog/postgresql-indexing-guide" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "zero-downtime-deployments",
      "database-backup-and-recovery",
      "postgresql-indexing-guide",
    ],
  },

  {
    slug: "database-backup-and-recovery",
    title: "Backups you have actually tested: RPO, RTO and point-in-time recovery",
    seoTitle: "Database Backup and Recovery: A Real Plan",
    description:
      "How to define recovery objectives, configure PostgreSQL point-in-time recovery, protect backups from ransomware and accidental deletion, and prove restores work.",
    excerpt:
      "You do not have backups. You have restores — and you only know whether you have those if you have done one this quarter.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "database backup and recovery",
    secondaryKeywords: [
      "point in time recovery postgres",
      "rpo rto",
      "backup testing",
      "disaster recovery plan",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-10",
    answer:
      "A backup strategy starts with two numbers: RPO, how much data you can afford to lose, and RTO, how long you can be down. Those determine your backup frequency and method. For PostgreSQL, continuous WAL archiving gives point-in-time recovery with an RPO of minutes; the strategy is only real once you have performed a timed restore.",
    takeaways: [
      "Define RPO and RTO with the business before choosing a backup method.",
      "Keep at least one backup copy offline or immutable — ransomware targets backups first.",
      "A replica is not a backup: DROP TABLE replicates in milliseconds.",
      "Schedule restore drills. An untested backup is an assumption.",
    ],
    sections: [
      {
        heading: "What are RPO and RTO?",
        answer:
          "RPO is the maximum acceptable data loss measured in time; RTO is the maximum acceptable time to be back online.",
        body: [
          {
            type: "table",
            head: ["Business type", "Typical RPO", "Typical RTO", "Implies"],
            rows: [
              ["Marketing site", "24 hours", "8 hours", "Nightly snapshots"],
              ["SaaS application", "5 minutes", "1 hour", "WAL archiving + hot standby"],
              ["Ecommerce", "1 minute", "15 minutes", "Streaming replication + PITR"],
              ["Payments / ledger", "~0", "Minutes", "Synchronous replication, multi-region"],
            ],
          },
          {
            type: "p",
            text: "These are business decisions with cost attached, not technical preferences. Ask the owner what an hour of lost orders costs, and the backup budget answers itself.",
          },
        ],
      },
      {
        heading: "What should a PostgreSQL backup strategy include?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A periodic base backup — physical (pg_basebackup or a tool like pgBackRest) for speed at size.",
              "Continuous WAL archiving to object storage, enabling recovery to any point in time.",
              "A logical dump (pg_dump) on a slower cadence — it survives version changes and allows single-table restores.",
              "Cross-region replication of backup storage.",
              "At least one immutable or offline copy with object-lock retention.",
              "Documented, versioned retention: for example 7 daily, 4 weekly, 12 monthly.",
            ],
          },
          {
            type: "callout",
            title: "Replication is availability, not backup",
            text: "A standby protects against hardware failure. It does not protect against a bad migration, a buggy delete, or an attacker — all of which replicate faithfully within milliseconds.",
          },
        ],
      },
      {
        heading: "How does point-in-time recovery work?",
        body: [
          {
            type: "p",
            text: "Restore the most recent base backup, then replay archived write-ahead log segments up to a specified timestamp or transaction. This is what lets you recover to 14:22:59 — one second before someone ran a DELETE without a WHERE clause.",
          },
          {
            type: "code",
            lang: "text",
            code: `# postgresql.conf
archive_mode = on
archive_command = 'pgbackrest --stanza=main archive-push %p'

# Recovery target
recovery_target_time = '2026-04-10 14:22:59+05:30'
recovery_target_action = 'promote'`,
          },
          {
            type: "list",
            items: [
              "Know your archive lag — the gap between the last archived WAL and now is your real RPO.",
              "Recovery time scales with how much WAL must be replayed; more frequent base backups mean faster restores.",
              "Restore to a new instance first, verify, then cut over. Never recover in place under pressure.",
            ],
          },
        ],
      },
      {
        heading: "How do you test restores?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Automate a weekly restore of the latest backup into a scratch environment.",
              "Run integrity checks: row counts on key tables, a checksum on critical data, an application smoke test.",
              "Time it. If the restore takes four hours and your RTO is one, you do not meet your RTO.",
              "Once per quarter, have someone who did not write the runbook perform the restore from the documentation.",
              "Record the results. 'Last verified restore: 2026-04-06, 38 minutes' is the only sentence that counts.",
            ],
          },
        ],
      },
      {
        heading: "What else belongs in a recovery plan?",
        body: [
          {
            type: "list",
            items: [
              "Backups of everything, not just the database: object storage, secrets, DNS records, infrastructure definitions.",
              "Access to backups that does not depend on the system being down — a separate account with separate credentials.",
              "A runbook with exact commands, not prose, plus who to notify and in what order.",
              "Alerting on backup failures. A backup job that has silently failed for six weeks is the classic incident narrative.",
              "Retention aligned with legal and contractual obligations, including deletion requirements.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "How often should backups run?",
        answer:
          "Base backups daily for most systems, with continuous WAL archiving for a low RPO. If you can only afford daily snapshots, be explicit that your RPO is up to 24 hours.",
      },
      {
        question: "Is my managed database provider's backup enough?",
        answer:
          "Often yes for hardware failure, but verify retention, whether point-in-time recovery is enabled, whether backups survive account deletion, and how long a restore actually takes. Then test one.",
      },
      {
        question: "How long should backups be retained?",
        answer:
          "Long enough to catch slow-burn corruption — 30 to 90 days is common — balanced against storage cost and data protection obligations to delete personal data.",
      },
      {
        question: "What about backing up object storage?",
        answer:
          "Enable versioning and cross-region replication, and consider object lock for immutability. Uploaded files are frequently the least-protected part of an otherwise careful backup strategy.",
      },
    ],
    references: [
      { label: "PostgreSQL — Continuous archiving and PITR", href: "https://www.postgresql.org/docs/current/continuous-archiving.html" },
      { label: "pgBackRest documentation", href: "https://pgbackrest.org/" },
      { label: "NIST — Contingency planning guide", href: "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final" },
    ],
    internalLinks: [
      { label: "Running database migrations safely", href: "/blog/database-migrations-safely" },
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
      { label: "Secrets management for teams", href: "/blog/secrets-management-guide" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "database-migrations-safely",
      "secrets-management-guide",
      "observability-for-web-apps",
    ],
  },

  {
    slug: "postgres-vs-mysql",
    title: "PostgreSQL vs MySQL: what actually differs in 2026",
    seoTitle: "PostgreSQL vs MySQL: An Honest Comparison",
    description:
      "Feature, performance and operational differences between PostgreSQL and MySQL as they stand today — and the cases where each is genuinely the better choice.",
    excerpt:
      "Both are excellent. The differences that matter now are extensibility, data type strictness and operational culture, not raw speed.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "postgresql vs mysql",
    secondaryKeywords: [
      "mysql vs postgres performance",
      "database comparison",
      "innodb",
      "postgres extensions",
    ],
    authorId: "harshal",
    publishedAt: "2026-03-27",
    answer:
      "PostgreSQL offers richer data types, stronger standards compliance, powerful extensions and better support for complex queries and concurrent writers. MySQL with InnoDB is simple to operate, extremely well understood, and strong on straightforward read-heavy workloads with mature replication tooling. For new applications with any analytical or structural complexity, PostgreSQL is the stronger default.",
    takeaways: [
      "Performance differences on typical workloads are smaller than schema and index quality.",
      "PostgreSQL's extension ecosystem — PostGIS, pgvector, full-text — is a real differentiator.",
      "MySQL's operational familiarity and hosting ubiquity still count for something.",
      "PostgreSQL's stricter type handling catches data bugs that MySQL historically permitted.",
    ],
    sections: [
      {
        heading: "Where do they genuinely differ?",
        body: [
          {
            type: "table",
            head: ["Area", "PostgreSQL", "MySQL (InnoDB)"],
            rows: [
              ["Data types", "Arrays, JSONB, ranges, custom types, enums", "Solid core set, JSON support"],
              ["Extensions", "PostGIS, pgvector, TimescaleDB, many more", "Plugins, narrower ecosystem"],
              ["Complex queries", "Strong planner, CTEs, window functions", "Improved, generally less capable"],
              ["Concurrency", "MVCC, no read locks", "MVCC, more locking nuance"],
              ["Replication", "Streaming and logical", "Very mature, widely operated"],
              ["Full-text search", "Built in, good enough for many apps", "Available, less capable"],
              ["Strictness", "Strict typing and constraints", "Historically lenient; better now"],
            ],
          },
        ],
      },
      {
        heading: "Which is faster?",
        answer:
          "Neither, meaningfully, for typical application workloads — schema design and indexing dominate the difference.",
        body: [
          {
            type: "p",
            text: "MySQL has traditionally been quick on simple primary-key reads; PostgreSQL tends to be stronger on complex joins, aggregations and heavy concurrent writes. Both handle tens of thousands of transactions per second on modest hardware when correctly indexed.",
          },
          {
            type: "p",
            text: "In every performance engagement we have run, the wins came from indexes, query shape, N+1 elimination and connection pooling. We have never recovered a system by switching engines.",
          },
        ],
      },
      {
        heading: "When should you pick MySQL?",
        body: [
          {
            type: "list",
            items: [
              "The team and the operations culture already run MySQL well — that expertise is worth real money.",
              "You are deploying into an ecosystem built around it, such as much of the PHP and WordPress world.",
              "The workload is simple, read-heavy, and well served by mature replication tooling.",
              "Your hosting environment offers materially better MySQL support or pricing.",
            ],
          },
        ],
      },
      {
        heading: "When should you pick PostgreSQL?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Complex queries, reporting or analytics run against the operational database.",
              "You want JSONB alongside relational columns rather than a separate document store.",
              "You need geospatial (PostGIS) or vector search (pgvector) — both best-in-class.",
              "Write concurrency is high and you want MVCC behaviour with minimal lock contention.",
              "You value strict typing and constraint enforcement as a correctness tool.",
            ],
          },
          {
            type: "callout",
            title: "The vector search factor",
            text: "For products adding AI features, pgvector lets you store embeddings next to your relational data and query both in one statement — removing an entire additional database from the architecture. This has shifted a lot of recent decisions towards PostgreSQL.",
          },
        ],
      },
      {
        heading: "What about operations?",
        body: [
          {
            type: "list",
            items: [
              "PostgreSQL requires understanding vacuum and transaction ID wraparound; autovacuum handles it, until it does not.",
              "MySQL has a longer history of well-trodden replication and failover tooling.",
              "Both are available as managed services from every major cloud provider with comparable pricing.",
              "Major version upgrades take planning in both, and both benefit from logical replication for near-zero-downtime upgrades.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I migrate from MySQL to PostgreSQL?",
        answer:
          "Yes, with tooling to help, but expect real work: type differences, SQL dialect differences, and application-level assumptions about lenient behaviour. Budget it as a project, not a task.",
      },
      {
        question: "Is MariaDB a factor?",
        answer:
          "It is a MySQL fork with its own feature set and an open governance model. It is a reasonable choice if you are in the MySQL world and want an alternative to Oracle stewardship.",
      },
      {
        question: "Which is better for a SaaS product?",
        answer:
          "PostgreSQL, in most cases — row-level security, rich types and extensions map well to multi-tenant SaaS requirements. MySQL is workable but you will build more yourself.",
      },
      {
        question: "Does either handle JSON better?",
        answer:
          "PostgreSQL's JSONB is more capable, with a binary format, containment operators and GIN indexing. MySQL's JSON support is functional but less powerful for querying at scale.",
      },
    ],
    references: [
      { label: "PostgreSQL documentation", href: "https://www.postgresql.org/docs/current/" },
      { label: "MySQL — InnoDB storage engine", href: "https://dev.mysql.com/doc/refman/8.4/en/innodb-storage-engine.html" },
      { label: "pgvector", href: "https://github.com/pgvector/pgvector" },
    ],
    internalLinks: [
      { label: "SQL vs NoSQL", href: "/blog/sql-vs-nosql" },
      { label: "PostgreSQL indexing guide", href: "/blog/postgresql-indexing-guide" },
      { label: "Database transactions and isolation", href: "/blog/database-transactions-isolation" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: ["sql-vs-nosql", "postgresql-indexing-guide", "database-transactions-isolation"],
  },

  {
    slug: "database-transactions-isolation",
    title: "Transactions and isolation levels: the anomalies you will actually hit",
    seoTitle: "Database Transactions and Isolation Levels",
    description:
      "ACID in practice, what each isolation level prevents, the lost update problem, and how to use SELECT FOR UPDATE and optimistic locking correctly.",
    excerpt:
      "Read Committed prevents dirty reads. It does not prevent two people spending the same balance — and that is the bug you will get.",
    category: "Databases",
    cluster: "databases",
    primaryKeyword: "database isolation levels",
    secondaryKeywords: [
      "acid transactions",
      "select for update",
      "optimistic locking",
      "lost update problem",
    ],
    authorId: "harshal",
    publishedAt: "2026-03-13",
    answer:
      "Isolation levels define which concurrency anomalies a transaction can observe. PostgreSQL defaults to Read Committed, which prevents dirty reads but allows lost updates and non-repeatable reads. Prevent those explicitly with SELECT FOR UPDATE, an optimistic version column, or by raising the isolation level to Repeatable Read or Serializable and handling the retries.",
    takeaways: [
      "The default isolation level does not protect against the most common real-world race.",
      "Read-modify-write across two statements is a lost update waiting to happen.",
      "SELECT FOR UPDATE is the simplest correct fix for contended rows.",
      "Serializable is correct but requires your application to retry on failure.",
    ],
    sections: [
      {
        heading: "What do the isolation levels prevent?",
        body: [
          {
            type: "table",
            head: ["Level", "Dirty read", "Non-repeatable read", "Phantom read", "Lost update"],
            rows: [
              ["Read Uncommitted", "Possible*", "Possible", "Possible", "Possible"],
              ["Read Committed (default)", "No", "Possible", "Possible", "Possible"],
              ["Repeatable Read", "No", "No", "No (in PostgreSQL)", "Detected — error"],
              ["Serializable", "No", "No", "No", "Detected — error"],
            ],
            caption: "*PostgreSQL treats Read Uncommitted as Read Committed.",
          },
          {
            type: "p",
            text: "The column that matters in practice is the last one. Read Committed — what almost every application runs by default — allows two concurrent transactions to read the same value, both modify it, and one to silently overwrite the other.",
          },
        ],
      },
      {
        heading: "What does a lost update look like?",
        answer:
          "Two requests read a balance of 100, both subtract 80, and both succeed — leaving 20 instead of rejecting the second.",
        body: [
          {
            type: "code",
            lang: "sql",
            code: `-- Broken: read and write in separate statements
BEGIN;
SELECT balance FROM accounts WHERE id = 1;   -- both see 100
-- application computes 100 - 80 = 20
UPDATE accounts SET balance = 20 WHERE id = 1;
COMMIT;

-- Fix 1: let the database do the arithmetic atomically
UPDATE accounts SET balance = balance - 80
WHERE id = 1 AND balance >= 80;              -- affected rows tells you if it worked

-- Fix 2: lock the row for the duration of the transaction
BEGIN;
SELECT balance FROM accounts WHERE id = 1 FOR UPDATE;
UPDATE accounts SET balance = $1 WHERE id = 1;
COMMIT;`,
          },
          {
            type: "p",
            text: "Fix 1 is best where the update is expressible as arithmetic — it is a single atomic statement with no lock held across application logic. Fix 2 is needed when the new value depends on computation the database cannot do.",
          },
        ],
      },
      {
        heading: "Pessimistic or optimistic locking?",
        body: [
          {
            type: "table",
            head: ["", "Pessimistic (FOR UPDATE)", "Optimistic (version column)"],
            rows: [
              ["How", "Lock the row until commit", "Compare version on write, fail if changed"],
              ["Best for", "High contention, short transactions", "Low contention, long user sessions"],
              ["Failure mode", "Waiting, potential deadlock", "Write rejected; caller retries"],
              ["User experience", "Slower under contention", "'This record changed, please review'"],
            ],
          },
          {
            type: "code",
            lang: "sql",
            code: `-- Optimistic: the update only applies if nobody else changed it
UPDATE documents
SET content = $1, version = version + 1
WHERE id = $2 AND version = $3;
-- 0 rows affected means someone else won; surface a conflict to the user`,
          },
        ],
      },
      {
        heading: "How should transactions be scoped?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Keep transactions short. Every open transaction holds locks and blocks vacuum.",
              "Never perform network I/O inside a transaction — no API calls, no email sending, no file uploads.",
              "Acquire locks in a consistent order across the codebase to avoid deadlocks.",
              "Set statement_timeout and idle_in_transaction_session_timeout so a stuck transaction cannot hold locks forever.",
              "Do not wrap an entire HTTP request in a transaction; wrap the specific write that needs atomicity.",
            ],
          },
          {
            type: "callout",
            title: "Deadlocks are normal, not exceptional",
            text: "PostgreSQL detects deadlocks and aborts one transaction with a specific error code. Your application should catch it and retry with backoff rather than surfacing a 500 to the user.",
          },
        ],
      },
      {
        heading: "When should you use Serializable?",
        body: [
          {
            type: "p",
            text: "When correctness under concurrency matters more than throughput and the invariants span multiple rows — inventory allocation, seat booking, ledger entries. PostgreSQL's serializable snapshot isolation gives you true serialisability without explicit locking, at the cost of aborted transactions you must retry.",
          },
          {
            type: "p",
            text: "Design the retry loop before you enable it: catch the serialisation failure code, retry a bounded number of times with jitter, and make the transaction idempotent so a retry is safe.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Which isolation level should I use by default?",
        answer:
          "Read Committed is a sensible default. Raise it for the specific transactions with invariants that span rows, rather than globally — Serializable everywhere costs throughput and produces retries you may not be handling.",
      },
      {
        question: "Does an ORM handle this for me?",
        answer:
          "It manages transaction boundaries, not concurrency correctness. A read-modify-write through an ORM is exactly as vulnerable to lost updates as raw SQL.",
      },
      {
        question: "What is a phantom read?",
        answer:
          "When a query re-run inside the same transaction returns rows that were not there before, because another transaction inserted them. Repeatable Read in PostgreSQL prevents this via snapshot isolation.",
      },
      {
        question: "How do I avoid deadlocks?",
        answer:
          "Always acquire locks in the same order, keep transactions short, and retry on the deadlock error. A consistent ordering convention across the codebase eliminates most of them.",
      },
    ],
    references: [
      { label: "PostgreSQL — Transaction isolation", href: "https://www.postgresql.org/docs/current/transaction-iso.html" },
      { label: "PostgreSQL — Explicit locking", href: "https://www.postgresql.org/docs/current/explicit-locking.html" },
      { label: "Martin Kleppmann — Designing Data-Intensive Applications", href: "https://dataintensive.net/" },
    ],
    internalLinks: [
      { label: "PostgreSQL query optimization", href: "/blog/postgresql-query-optimization" },
      { label: "PostgreSQL connection pooling", href: "/blog/postgresql-connection-pooling" },
      { label: "Background jobs and queues", href: "/blog/background-jobs-and-queues" },
      { label: "Custom software development", href: "/services#custom-software" },
    ],
    related: [
      "postgresql-query-optimization",
      "postgresql-connection-pooling",
      "background-jobs-and-queues",
    ],
  },
];
