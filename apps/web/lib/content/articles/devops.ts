import type { Article } from "@rovqix/shared/lib/content/types";

export const devopsArticles: Article[] = [
  {
    slug: "docker-for-node-apps",
    title: "Docker for Node.js applications: images that are small, fast and safe",
    seoTitle: "Docker for Node.js: Small, Fast, Safe Images",
    description:
      "Multi-stage builds, layer caching, non-root users and signal handling — how to containerise a Node.js or Next.js app properly for production.",
    excerpt:
      "A 1.2GB Node image that runs as root and ignores SIGTERM is the default outcome. Every part of that is avoidable.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "docker node.js",
    secondaryKeywords: [
      "multi-stage build",
      "dockerfile node",
      "docker layer caching",
      "container non-root user",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-07-31",
    answer:
      "A production Node.js image should use a multi-stage build to keep build tooling out of the runtime layer, install dependencies before copying source so layer caching works, run as a non-root user, and handle SIGTERM for graceful shutdown. Done properly, a typical Next.js image drops from over a gigabyte to around 150–200MB.",
    takeaways: [
      "Copy package files and install before copying source — that ordering is the whole cache story.",
      "Multi-stage builds keep compilers and dev dependencies out of the shipped image.",
      "Run as a non-root user; it is one line and closes a real escalation path.",
      "Without SIGTERM handling, every deploy drops in-flight requests.",
    ],
    sections: [
      {
        heading: "What does a good Node.js Dockerfile look like?",
        body: [
          {
            type: "code",
            lang: "dockerfile",
            code: `# syntax=docker/dockerfile:1
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
RUN addgroup -S app && adduser -S app -G app
COPY --from=deps  --chown=app:app /app/node_modules ./node_modules
COPY --from=build --chown=app:app /app/.next/standalone ./
COPY --from=build --chown=app:app /app/.next/static ./.next/static
COPY --from=build --chown=app:app /app/public ./public
USER app
EXPOSE 3000
CMD ["node", "server.js"]`,
            caption: "Three stages: production dependencies, build, and a minimal runtime.",
          },
          {
            type: "p",
            text: "For Next.js, the standalone output mode is what makes this small — it traces exactly the files the server needs and leaves the rest behind. Enable it with output: \"standalone\" in next.config.",
          },
        ],
      },
      {
        heading: "Why does layer ordering matter so much?",
        answer:
          "Docker caches each layer and invalidates every layer after the first one that changes, so anything that changes often must come last.",
        body: [
          {
            type: "p",
            text: "Copying your whole source tree before running npm ci means every one-character source change re-installs all dependencies. Copying only package.json and the lockfile first means the install layer is reused until dependencies actually change — turning a three-minute build into twenty seconds.",
          },
          {
            type: "list",
            items: [
              "Order layers from least to most frequently changing.",
              "Use a .dockerignore that excludes node_modules, .git, .next and local env files — it shrinks the build context and prevents cache busting.",
              "Use BuildKit cache mounts for package manager caches in CI.",
              "Pin base images by minor version or digest so builds are reproducible.",
            ],
          },
        ],
      },
      {
        heading: "How do you handle shutdown correctly?",
        body: [
          {
            type: "p",
            text: "When an orchestrator scales down or deploys, it sends SIGTERM and waits before sending SIGKILL. A process that ignores SIGTERM has its in-flight requests killed — visible to users as random errors during every deploy.",
          },
          {
            type: "code",
            lang: "js",
            code: `const server = app.listen(3000);

for (const signal of ["SIGTERM", "SIGINT"]) {
  process.on(signal, async () => {
    server.close(async () => {          // stop accepting new connections
      await db.end();                   // drain the pool
      process.exit(0);
    });
    setTimeout(() => process.exit(1), 10_000).unref(); // hard limit
  });
}`,
          },
          {
            type: "callout",
            title: "Do not start Node through a shell",
            text: "CMD \"npm start\" runs npm as PID 1 and signals often do not reach Node. Use the exec form with node directly, or add an init process such as tini.",
          },
        ],
      },
      {
        heading: "How small should the image be?",
        body: [
          {
            type: "table",
            head: ["Approach", "Typical size", "Notes"],
            rows: [
              ["node:22 + full source", "1.1–1.4 GB", "The accidental default"],
              ["node:22-slim + multi-stage", "300–400 MB", "Good, Debian-based"],
              ["node:22-alpine + multi-stage", "150–200 MB", "Smallest common choice"],
              ["distroless runtime", "120–180 MB", "No shell — hardest to debug"],
            ],
          },
          {
            type: "p",
            text: "Alpine uses musl rather than glibc, which occasionally breaks native modules — sharp, canvas, some database drivers. Test your actual dependency set; if something misbehaves, slim is a perfectly good answer at a modest size cost.",
          },
        ],
      },
      {
        heading: "What else belongs in a production container?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "A HEALTHCHECK or an orchestrator probe pointing at a real readiness endpoint.",
              "Configuration from environment variables at runtime, never baked into the image.",
              "A read-only root filesystem where possible, with writable volumes only where needed.",
              "Resource limits — memory and CPU — so one container cannot starve its neighbours.",
              "An image scan in CI that fails the build on high-severity vulnerabilities.",
              "Logs to stdout and stderr as JSON, collected by the platform rather than written to files.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I use Alpine or Debian slim?",
        answer:
          "Start with Alpine for size. If a native dependency misbehaves under musl, switch to slim — the extra 150MB is not worth hours of debugging obscure binary issues.",
      },
      {
        question: "Do I need Docker for a Next.js app?",
        answer:
          "Not on a managed platform that builds and runs it for you. You need it for self-hosting, for consistent CI, and for running the same artifact across environments.",
      },
      {
        question: "How do I keep secrets out of the image?",
        answer:
          "Never use ARG or ENV for secrets — they persist in the image history. Use BuildKit secret mounts at build time and inject runtime secrets from the orchestrator.",
      },
      {
        question: "Why is my container using more memory than expected?",
        answer:
          "Node sizes its heap from the machine, not the container limit, on older versions. Set --max-old-space-size to roughly 75% of the container's memory limit and verify with a load test.",
      },
    ],
    references: [
      { label: "Docker — Multi-stage builds", href: "https://docs.docker.com/build/building/multi-stage/" },
      { label: "Node.js — Docker best practices", href: "https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md" },
      { label: "Next.js — Self-hosting and standalone output", href: "https://nextjs.org/docs/app/getting-started/deploying" },
    ],
    internalLinks: [
      { label: "Dockerfile best practices", href: "/blog/dockerfile-best-practices" },
      { label: "Do you need Kubernetes?", href: "/blog/do-you-need-kubernetes" },
      { label: "Container security basics", href: "/blog/container-security-basics" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "dockerfile-best-practices",
      "container-security-basics",
      "zero-downtime-deployments",
    ],
  },

  {
    slug: "dockerfile-best-practices",
    title: "Dockerfile best practices: caching, reproducibility and image hygiene",
    seoTitle: "Dockerfile Best Practices for Production",
    description:
      "Base image selection, cache mounts, .dockerignore, layer hygiene, reproducible builds and image scanning — the rules that keep builds fast and images clean.",
    excerpt:
      "Most Dockerfiles are copied from a tutorial and never revisited. Twenty minutes of attention usually halves both build time and image size.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "dockerfile best practices",
    secondaryKeywords: [
      "docker build cache",
      "dockerignore",
      "reproducible builds",
      "docker image scanning",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-07-17",
    answer:
      "Fast, clean Docker images come from a small pinned base image, layer ordering that puts volatile files last, a strict .dockerignore, BuildKit cache mounts for package managers, no secrets in any layer, and an automated vulnerability scan in CI. Reproducibility comes from pinning versions and committing lockfiles.",
    takeaways: [
      "A missing .dockerignore silently invalidates your cache on every build.",
      "Pin base images by digest for builds you need to reproduce exactly.",
      "Secrets in ARG or ENV persist in image history even if later removed.",
      "Scan images in CI and fail on high severity — a policy nobody enforces is not a policy.",
    ],
    sections: [
      {
        heading: "Which base image should you choose?",
        body: [
          {
            type: "table",
            head: ["Base", "Size", "Best for"],
            rows: [
              ["node:22", "~1.1 GB", "Local development only"],
              ["node:22-slim", "~200 MB", "Native modules, glibc compatibility"],
              ["node:22-alpine", "~130 MB", "Most production workloads"],
              ["gcr.io/distroless/nodejs22", "~110 MB", "Hardened runtime, no shell"],
              ["scratch", "0", "Static binaries only"],
            ],
          },
          {
            type: "list",
            items: [
              "Pin at least the minor version: node:22.11-alpine, not node:latest.",
              "For regulated environments, pin by digest so the image cannot change under you.",
              "Rebuild regularly. A pinned base image is a frozen set of unpatched CVEs if you never update it.",
            ],
          },
        ],
      },
      {
        heading: "How do you make builds fast?",
        body: [
          {
            type: "code",
            lang: "dockerfile",
            code: `# syntax=docker/dockerfile:1
FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \\
    npm ci

COPY . .
RUN npm run build`,
            caption: "A cache mount keeps the package manager cache across builds without baking it into a layer.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Write a .dockerignore first — node_modules, .git, .next, coverage, *.log, .env*.",
              "Copy dependency manifests before source so installs are cached.",
              "Combine related RUN commands to avoid layers full of intermediate junk, but keep them logically separate for cache granularity.",
              "Use a registry cache in CI so cold runners still hit warm layers.",
              "Build once, promote the same image through environments — never rebuild per environment.",
            ],
          },
        ],
      },
      {
        heading: "How do you keep secrets out?",
        body: [
          {
            type: "p",
            text: "Every layer is stored and inspectable. A token passed via ARG appears in the build history; a file copied in and deleted in a later RUN still exists in the earlier layer. Both are recoverable by anyone who can pull the image.",
          },
          {
            type: "code",
            lang: "dockerfile",
            code: `# Wrong — recoverable from image history
ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=\${NPM_TOKEN}" > .npmrc && npm ci

# Right — BuildKit secret mount, never written to a layer
RUN --mount=type=secret,id=npmrc,target=/root/.npmrc npm ci`,
          },
        ],
      },
      {
        heading: "What makes a build reproducible?",
        body: [
          {
            type: "list",
            items: [
              "Committed lockfiles and npm ci rather than npm install.",
              "Pinned base image digests and pinned system package versions.",
              "No network calls to unpinned resources during the build — no curl into a shell.",
              "Build metadata as labels: commit SHA, build time, source repository.",
              "The same image artifact promoted across environments, identified by digest.",
            ],
          },
          {
            type: "code",
            lang: "dockerfile",
            code: `ARG GIT_SHA
LABEL org.opencontainers.image.revision="\${GIT_SHA}" \\
      org.opencontainers.image.source="https://github.com/acme/app" \\
      org.opencontainers.image.licenses="UNLICENSED"`,
          },
        ],
      },
      {
        heading: "What should CI check?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Lint the Dockerfile (hadolint) for common mistakes.",
              "Scan the built image for vulnerabilities (Trivy, Grype) and fail on high or critical.",
              "Assert the image size against a budget so it cannot silently double.",
              "Verify the container starts and its health endpoint responds before pushing.",
              "Generate and store an SBOM for supply-chain traceability.",
              "Sign images and verify signatures at deploy time in higher-security environments.",
            ],
          },
          {
            type: "callout",
            title: "Scanning without a policy is theatre",
            text: "Decide in advance what severity blocks a release and who can grant an exception. A scan report nobody is accountable for changes nothing.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should each RUN be combined into one layer?",
        answer:
          "Combine commands that belong together, such as apt-get update and install with cleanup. Do not combine everything — you lose cache granularity and rebuild the world on any change.",
      },
      {
        question: "Is a smaller image always better?",
        answer:
          "Smaller means faster pulls and a reduced attack surface, but distroless images have no shell, which makes incident debugging harder. Choose deliberately for your operational maturity.",
      },
      {
        question: "How often should base images be updated?",
        answer:
          "Monthly at minimum, and immediately for critical CVEs. Automate it with a dependency bot so it becomes a routine pull request rather than a project.",
      },
      {
        question: "What is an SBOM?",
        answer:
          "A software bill of materials: a machine-readable inventory of everything in your image. It is what lets you answer 'are we affected?' within minutes of the next widely-publicised vulnerability.",
      },
    ],
    references: [
      { label: "Docker — Building best practices", href: "https://docs.docker.com/build/building/best-practices/" },
      { label: "Docker — Build secrets", href: "https://docs.docker.com/build/building/secrets/" },
      { label: "Aqua Security — Trivy", href: "https://trivy.dev/" },
    ],
    internalLinks: [
      { label: "Docker for Node.js applications", href: "/blog/docker-for-node-apps" },
      { label: "Container security basics", href: "/blog/container-security-basics" },
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: ["docker-for-node-apps", "container-security-basics", "ci-cd-pipeline-design"],
  },

  {
    slug: "do-you-need-kubernetes",
    title: "Do you actually need Kubernetes? A decision guide",
    seoTitle: "Do You Need Kubernetes? An Honest Assessment",
    description:
      "What Kubernetes gives you, what it costs in operational overhead, the simpler alternatives, and the specific signals that mean you have outgrown them.",
    excerpt:
      "Kubernetes is excellent at problems most teams do not have yet. The cost of adopting it early is paid in engineering hours you needed elsewhere.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "do you need kubernetes",
    secondaryKeywords: [
      "kubernetes alternatives",
      "container orchestration",
      "kubernetes complexity",
      "when to use kubernetes",
    ],
    authorId: "harshal",
    publishedAt: "2026-07-03",
    answer:
      "You need Kubernetes when you are running many services across many machines, need sophisticated scheduling and autoscaling, or have a platform team to operate it. For a handful of services, a managed platform, a container service like ECS or Cloud Run, or plain containers behind a load balancer will do the job with a fraction of the operational burden.",
    takeaways: [
      "Kubernetes solves multi-service, multi-machine orchestration — not deployment in general.",
      "Budget at least one engineer's meaningful time to operate a cluster properly.",
      "Managed container services cover most small and mid-size workloads.",
      "The migration path from a simpler platform to Kubernetes is well-trodden; the reverse is rarer.",
    ],
    sections: [
      {
        heading: "What does Kubernetes actually give you?",
        body: [
          {
            type: "list",
            items: [
              "Declarative desired state with continuous reconciliation.",
              "Scheduling across a pool of machines with bin-packing and resource limits.",
              "Self-healing: failed containers restart, unhealthy nodes are drained.",
              "Rolling updates and rollbacks as a primitive.",
              "Service discovery, internal networking and load balancing.",
              "Horizontal autoscaling driven by metrics you choose.",
              "A consistent API across clouds, and a very large ecosystem.",
            ],
          },
          {
            type: "p",
            text: "Every one of those is genuinely valuable at scale. The question is whether you have the scale that makes them valuable, or whether you are buying an abstraction for a fleet of three containers.",
          },
        ],
      },
      {
        heading: "What does it cost?",
        body: [
          {
            type: "table",
            head: ["Cost", "Detail"],
            rows: [
              ["Learning curve", "Pods, services, ingress, RBAC, CRDs, network policy, storage classes"],
              ["Operational load", "Upgrades, node management, certificate rotation, add-on lifecycle"],
              ["Tooling sprawl", "Helm or Kustomize, a GitOps controller, monitoring stack, secret management"],
              ["Debugging depth", "More layers between a symptom and its cause"],
              ["Baseline cost", "Control plane plus system components before your app runs"],
            ],
          },
          {
            type: "callout",
            title: "The honest test",
            text: "If nobody on the team can confidently explain what happens when a pod fails its readiness probe during a rolling update, you are running a cluster you cannot operate under pressure.",
          },
        ],
      },
      {
        heading: "What are the alternatives?",
        body: [
          {
            type: "table",
            head: ["Option", "Good for", "Ceiling"],
            rows: [
              ["Managed platform (Vercel, Railway, Render)", "Web apps, small teams", "Limited control, cost at scale"],
              ["Serverless containers (Cloud Run, App Runner)", "Stateless HTTP services", "Cold starts, execution limits"],
              ["Managed containers (ECS Fargate)", "Several services on AWS", "AWS-specific concepts"],
              ["Docker Compose on a VM", "Internal tools, staging", "Single machine, manual failover"],
              ["Nomad", "Simpler orchestration", "Smaller ecosystem"],
            ],
          },
          {
            type: "p",
            text: "For most of the client work we do — a Next.js front end, a Node API, a database, a cache, a worker — a managed platform or a container service handles it completely, and the team spends its time on the product.",
          },
        ],
      },
      {
        heading: "What are the signals you have outgrown the alternatives?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "More than roughly ten services with genuinely different scaling and scheduling needs.",
              "Multiple teams needing isolated namespaces, quotas and RBAC on shared infrastructure.",
              "Workloads your platform cannot express: GPU scheduling, stateful sets, complex batch jobs.",
              "A real multi-cloud or hybrid requirement, not an aspirational one.",
              "Platform costs where cluster efficiency would demonstrably save more than it costs to operate.",
              "You have, or are hiring, people whose job is the platform.",
            ],
          },
        ],
      },
      {
        heading: "If you do adopt it, what should you insist on?",
        body: [
          {
            type: "list",
            items: [
              "A managed control plane. Running your own is a specialist job with little upside.",
              "GitOps from day one — the cluster state lives in git, not in someone's shell history.",
              "Resource requests and limits on every workload, or the scheduler cannot do its job.",
              "Readiness and liveness probes that mean different things and are tested.",
              "Pod disruption budgets so node maintenance does not take a service down.",
              "Network policies denying by default, and RBAC scoped per team.",
              "A documented, rehearsed upgrade path — clusters go stale surprisingly fast.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Kubernetes overkill for a startup?",
        answer:
          "Usually yes, in the first year or two. The exception is a team that already knows it deeply, where the familiarity cost is near zero and the abstractions are genuinely useful to them.",
      },
      {
        question: "Can I move to Kubernetes later?",
        answer:
          "Yes, and it is far easier if your app is already containerised, configured entirely through environment variables, stateless, and logs to stdout. Those habits are worth adopting regardless.",
      },
      {
        question: "Is managed Kubernetes much easier?",
        answer:
          "It removes control plane operations, which is significant, but you still own workload configuration, networking, upgrades, monitoring and cost management. Managed means less work, not little work.",
      },
      {
        question: "What about running Kubernetes for a single application?",
        answer:
          "It is a lot of machinery for one workload. A container service gives you rolling deploys, health checks and autoscaling with a fraction of the concepts.",
      },
    ],
    references: [
      { label: "Kubernetes documentation", href: "https://kubernetes.io/docs/home/" },
      { label: "Google Cloud — Cloud Run", href: "https://cloud.google.com/run/docs" },
      { label: "AWS — ECS on Fargate", href: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html" },
    ],
    internalLinks: [
      { label: "Kubernetes basics for developers", href: "/blog/kubernetes-basics-for-developers" },
      { label: "Monolith vs microservices", href: "/blog/monolith-vs-microservices" },
      { label: "AWS vs Vercel: where to deploy", href: "/blog/aws-vs-vercel-deployment" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "kubernetes-basics-for-developers",
      "monolith-vs-microservices",
      "aws-vs-vercel-deployment",
    ],
  },

  {
    slug: "kubernetes-basics-for-developers",
    title: "Kubernetes for application developers: the ten objects you actually touch",
    seoTitle: "Kubernetes Basics for Application Developers",
    description:
      "Pods, deployments, services, ingress, config maps, secrets, probes and resource limits — the Kubernetes concepts a product developer needs and no more.",
    excerpt:
      "You do not need to run a cluster to ship to one. This is the subset of Kubernetes that appears in an application developer's day.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "kubernetes basics",
    secondaryKeywords: [
      "kubernetes deployment yaml",
      "liveness readiness probe",
      "kubernetes resource limits",
      "configmap secret",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-19",
    answer:
      "As an application developer on Kubernetes you mainly work with Deployments (desired replicas of your container), Services (stable internal networking), Ingress (external routing), ConfigMaps and Secrets (configuration), probes (health), and resource requests and limits (scheduling). Understanding those covers the vast majority of day-to-day work.",
    takeaways: [
      "You describe desired state; the control loop makes reality match it.",
      "Readiness controls traffic; liveness controls restarts. They are not interchangeable.",
      "Requests drive scheduling, limits drive throttling and OOM kills.",
      "Secrets are base64-encoded, not encrypted — treat them accordingly.",
    ],
    sections: [
      {
        heading: "What are the objects you will actually use?",
        body: [
          {
            type: "table",
            head: ["Object", "What it does"],
            rows: [
              ["Pod", "One or more containers scheduled together; rarely created directly"],
              ["Deployment", "Maintains N replicas and performs rolling updates"],
              ["Service", "Stable DNS name and load balancing across pods"],
              ["Ingress", "Routes external HTTP traffic to services"],
              ["ConfigMap", "Non-secret configuration as env vars or files"],
              ["Secret", "Sensitive configuration; base64-encoded, encrypt at rest"],
              ["HorizontalPodAutoscaler", "Scales replicas from metrics"],
              ["Job / CronJob", "Run-to-completion and scheduled tasks"],
              ["PersistentVolumeClaim", "Durable storage for stateful workloads"],
              ["PodDisruptionBudget", "Limits voluntary disruption during maintenance"],
            ],
          },
        ],
      },
      {
        heading: "What does a minimal deployment look like?",
        body: [
          {
            type: "code",
            lang: "yaml",
            code: `apiVersion: apps/v1
kind: Deployment
metadata: { name: web }
spec:
  replicas: 3
  selector: { matchLabels: { app: web } }
  template:
    metadata: { labels: { app: web } }
    spec:
      containers:
        - name: web
          image: registry.example.com/web@sha256:abc123
          ports: [{ containerPort: 3000 }]
          envFrom:
            - configMapRef: { name: web-config }
            - secretRef: { name: web-secrets }
          resources:
            requests: { cpu: 100m, memory: 256Mi }
            limits:   { memory: 512Mi }
          readinessProbe:
            httpGet: { path: /readyz, port: 3000 }
            periodSeconds: 5
          livenessProbe:
            httpGet: { path: /healthz, port: 3000 }
            periodSeconds: 15`,
            caption: "Note the image digest — tags are mutable, digests are not.",
          },
        ],
      },
      {
        heading: "How should probes be configured?",
        answer:
          "Readiness answers 'can this pod serve traffic right now'; liveness answers 'is this pod broken beyond recovery'.",
        body: [
          {
            type: "list",
            items: [
              "Readiness may check dependencies. Failing it removes the pod from the service without killing it.",
              "Liveness must not check dependencies. If a shared database blips, a dependency-checking liveness probe restarts your entire fleet at once.",
              "Use a startup probe for slow-booting applications so liveness does not kill them during warm-up.",
              "Keep probe endpoints cheap; they run every few seconds on every pod, forever.",
            ],
          },
        ],
      },
      {
        heading: "How do requests and limits work?",
        body: [
          {
            type: "p",
            text: "Requests are what the scheduler reserves — they decide which node your pod lands on. Limits are the hard ceiling: exceeding a CPU limit throttles the container, and exceeding a memory limit kills it (OOMKilled).",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Always set memory requests and limits. An unbounded pod can take down its node.",
              "Set CPU requests; consider omitting CPU limits, since throttling often hurts latency more than it helps.",
              "Derive numbers from observed usage, not guesses — check actual consumption over a week.",
              "For Node.js, align --max-old-space-size with the memory limit or the runtime will over-allocate and get killed.",
            ],
          },
          {
            type: "callout",
            title: "OOMKilled is not a mystery",
            text: "Exit code 137 means the container exceeded its memory limit. Either the limit is too low or the application is leaking. Check the trend before raising the number.",
          },
        ],
      },
      {
        heading: "What commands will you actually run?",
        body: [
          {
            type: "code",
            lang: "bash",
            code: `kubectl get pods -l app=web                  # what is running
kubectl describe pod web-7d9f...             # events: scheduling, probe failures, OOM
kubectl logs -f deploy/web --tail=100        # logs
kubectl logs web-7d9f... --previous          # logs from the crashed instance
kubectl rollout status deploy/web            # is the deploy done
kubectl rollout undo deploy/web              # roll back
kubectl port-forward svc/web 3000:80         # reach it locally
kubectl top pods                             # actual CPU/memory usage`,
          },
          {
            type: "p",
            text: "kubectl describe is the one to learn first. Its events section explains almost every 'why is my pod not running' question — image pull failures, insufficient resources, failing probes, missing secrets.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should I write YAML by hand?",
        answer:
          "For a couple of services, yes — it is clearer than a templating layer. Once you have many services and environments, Helm or Kustomize removes duplication that would otherwise drift.",
      },
      {
        question: "Are Kubernetes Secrets secure?",
        answer:
          "They are base64-encoded, not encrypted, by default. Enable encryption at rest, restrict RBAC, and for anything sensitive use an external secret manager synced into the cluster.",
      },
      {
        question: "What is CrashLoopBackOff?",
        answer:
          "The container keeps exiting and Kubernetes is backing off between restarts. Check kubectl logs --previous for the actual error; the state itself only tells you it keeps dying.",
      },
      {
        question: "How do zero-downtime deploys work here?",
        answer:
          "A rolling update plus correct readiness probes, a pod disruption budget, and graceful SIGTERM handling with a preStop delay so connections drain before the pod stops.",
      },
    ],
    references: [
      { label: "Kubernetes — Concepts", href: "https://kubernetes.io/docs/concepts/" },
      { label: "Kubernetes — Configure probes", href: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/" },
      { label: "Kubernetes — Resource management", href: "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/" },
    ],
    internalLinks: [
      { label: "Do you need Kubernetes?", href: "/blog/do-you-need-kubernetes" },
      { label: "Docker for Node.js applications", href: "/blog/docker-for-node-apps" },
      { label: "Zero downtime deployment strategies", href: "/blog/zero-downtime-deployments" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: ["do-you-need-kubernetes", "docker-for-node-apps", "zero-downtime-deployments"],
  },

  {
    slug: "ci-cd-pipeline-design",
    title: "Designing a CI/CD pipeline that people trust",
    seoTitle: "CI/CD Pipeline Design: Stages and Gates",
    description:
      "Pipeline stages, what to run in parallel, caching, artifact promotion, environment strategy and the quality gates worth blocking a merge on.",
    excerpt:
      "A pipeline that takes 25 minutes and fails randomly does not improve quality. It teaches the team to merge on red.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "ci/cd pipeline design",
    secondaryKeywords: [
      "github actions workflow",
      "deployment pipeline stages",
      "build once deploy many",
      "continuous delivery",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-06-05",
    answer:
      "A good pipeline gives fast feedback on every pull request — lint, type check and unit tests in a few minutes — then builds one artifact and promotes that same artifact through environments. Slow checks run in parallel or after merge, and every gate that can block a merge must be reliable enough that a red result always means a real problem.",
    takeaways: [
      "Build the artifact once and promote it; rebuilding per environment means you never tested what you shipped.",
      "Order stages by speed so failures surface in the first two minutes.",
      "A flaky test blocking merges destroys trust faster than a missing test.",
      "Deployment should be one command or one merge, with an equally simple rollback.",
    ],
    sections: [
      {
        heading: "What stages should a pipeline have?",
        body: [
          {
            type: "table",
            head: ["Stage", "Target time", "Blocks merge?"],
            rows: [
              ["Lint + type check", "< 60s", "Yes"],
              ["Unit + component tests", "< 3 min", "Yes"],
              ["Build + image scan", "< 5 min", "Yes"],
              ["End-to-end on preview", "< 10 min", "Yes for critical flows"],
              ["Performance / Lighthouse budget", "< 5 min", "Warn, then enforce"],
              ["Deploy to staging", "automatic on merge", "—"],
              ["Deploy to production", "on approval or tag", "—"],
            ],
          },
          {
            type: "p",
            text: "Run independent stages in parallel. Lint, type check and unit tests have no reason to be sequential, and parallelising them typically halves the wall-clock time of a pull request check.",
          },
        ],
      },
      {
        heading: "Why build once and promote?",
        answer:
          "Because rebuilding per environment means the artifact you tested is not the artifact you shipped.",
        body: [
          {
            type: "p",
            text: "Build a single immutable image tagged by commit SHA, push it once, and deploy that exact digest to staging and then production. Configuration comes from the environment at runtime. If staging passed and production fails, you have eliminated 'the build was different' from the investigation.",
          },
          {
            type: "code",
            lang: "yaml",
            code: `- name: Build and push
  run: |
    docker build -t $REGISTRY/app:$GITHUB_SHA .
    docker push $REGISTRY/app:$GITHUB_SHA

- name: Deploy to staging
  run: ./deploy.sh staging $REGISTRY/app:$GITHUB_SHA

- name: Deploy to production      # same digest, different config
  if: github.ref == 'refs/heads/main'
  run: ./deploy.sh production $REGISTRY/app:$GITHUB_SHA`,
          },
        ],
      },
      {
        heading: "How do you keep pipelines fast?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Cache dependencies keyed on the lockfile hash — the single biggest win in most pipelines.",
              "Cache build outputs where the tooling supports it (Next.js build cache, Turborepo, Nx).",
              "Run only what changed in a monorepo, using path filters or a task graph.",
              "Shard test suites across parallel runners.",
              "Move slow, non-blocking checks off the critical path and report them asynchronously.",
              "Measure pipeline duration over time and treat regressions as bugs.",
            ],
          },
          {
            type: "callout",
            title: "Ten minutes is the psychological limit",
            text: "Past roughly ten minutes, developers context-switch away and stop treating the result as feedback. Optimising a 25-minute pipeline to 8 changes team behaviour more than most process interventions.",
          },
        ],
      },
      {
        heading: "What should environments look like?",
        body: [
          {
            type: "list",
            items: [
              "Preview per pull request, with its own URL and seeded data — the highest-value environment you can offer reviewers.",
              "Staging that mirrors production configuration, with production-like data volumes where possible.",
              "Production, deployed from main only, with an approval gate if your risk profile needs one.",
              "Separate credentials and databases per environment, always.",
              "Staging blocked from search engine indexing via an environment variable, not a code branch.",
            ],
          },
        ],
      },
      {
        heading: "What about rollbacks and secrets?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Rollback must be a single command redeploying the previous digest — and it must have been rehearsed.",
              "Keep database migrations backwards compatible so a code rollback does not require a schema rollback.",
              "Secrets come from the platform's secret store, injected at runtime, never committed and never in build args.",
              "Deployment credentials use short-lived identity federation rather than long-lived static keys.",
              "Every deployment is recorded: who, what commit, when — this is the first thing you check during an incident.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Should deployment to production be automatic?",
        answer:
          "Continuous deployment works well with strong test coverage, feature flags and fast rollback. Without those, an approval step is a reasonable safety measure — just keep it a click, not a meeting.",
      },
      {
        question: "How do I handle flaky tests?",
        answer:
          "Quarantine them immediately so they stop blocking merges, then fix them on a deadline. Automatic retries hide the flakiness and let it spread.",
      },
      {
        question: "Do I need a staging environment with preview deployments?",
        answer:
          "Previews validate a change; staging validates the integrated main branch against production-like data and third-party sandboxes. Most teams benefit from both.",
      },
      {
        question: "What metrics should I track?",
        answer:
          "The DORA four: deployment frequency, lead time for changes, change failure rate, and time to restore. They describe delivery health better than pipeline duration alone.",
      },
    ],
    references: [
      { label: "GitHub — Actions documentation", href: "https://docs.github.com/en/actions" },
      { label: "Google Cloud — DORA research", href: "https://dora.dev/" },
      { label: "Martin Fowler — Continuous integration", href: "https://martinfowler.com/articles/continuousIntegration.html" },
    ],
    internalLinks: [
      { label: "Zero downtime deployment strategies", href: "/blog/zero-downtime-deployments" },
      { label: "React testing strategy", href: "/blog/react-testing-strategy" },
      { label: "Dockerfile best practices", href: "/blog/dockerfile-best-practices" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: ["zero-downtime-deployments", "dockerfile-best-practices", "react-testing-strategy"],
  },

  {
    slug: "zero-downtime-deployments",
    title: "Zero downtime deployments: rolling, blue-green and canary compared",
    seoTitle: "Zero Downtime Deployment Strategies Compared",
    description:
      "How rolling updates, blue-green and canary deployments work, what each requires from your application, and how to combine them with feature flags.",
    excerpt:
      "Zero downtime is not a deployment tool setting. It is a property of an application that can run two versions at once.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "zero downtime deployment",
    secondaryKeywords: [
      "blue green deployment",
      "canary release",
      "rolling update",
      "feature flags deployment",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-22",
    answer:
      "Rolling updates replace instances gradually and are the default on most platforms. Blue-green runs two full environments and switches traffic atomically, giving instant rollback. Canary sends a small percentage of traffic to the new version first, catching problems with minimal exposure. All three require backwards-compatible schemas and graceful shutdown to actually be zero downtime.",
    takeaways: [
      "During any rolling deploy, two versions run simultaneously — your schema and API must tolerate that.",
      "Graceful shutdown is mandatory; without it every deploy drops in-flight requests.",
      "Blue-green gives the fastest rollback and doubles infrastructure during the switch.",
      "Canary needs real metrics and an automatic abort rule, or it is just a slow rollout.",
    ],
    sections: [
      {
        heading: "How do the three strategies compare?",
        body: [
          {
            type: "table",
            head: ["", "Rolling", "Blue-green", "Canary"],
            rows: [
              ["Extra infrastructure", "Minimal", "2× during switch", "Small"],
              ["Rollback speed", "Another rolling update", "Instant traffic switch", "Shift traffic back"],
              ["Blast radius on failure", "Growing during rollout", "All users after switch", "Small percentage"],
              ["Complexity", "Low", "Medium", "High"],
              ["Needs metrics automation", "No", "No", "Yes"],
            ],
          },
          {
            type: "p",
            text: "Most teams should run rolling updates well before attempting canary. A canary without automated metric analysis and an abort rule is a rolling update with extra steps.",
          },
        ],
      },
      {
        heading: "What does your application need to support this?",
        answer:
          "It must tolerate the old and new versions running at the same time against the same data.",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Backwards-compatible database schemas — expand/contract, never a breaking change in one deploy.",
              "Graceful shutdown: stop accepting connections on SIGTERM, drain in-flight requests, then exit.",
              "A readiness probe that only reports ready when the instance can genuinely serve.",
              "No in-memory state that matters — sessions in a shared store, not local memory.",
              "Backwards-compatible API responses so an older client can still parse a newer server's output.",
              "Idempotent background jobs, since both versions may process the same queue.",
            ],
          },
          {
            type: "callout",
            title: "Add a preStop delay",
            text: "Load balancers take a moment to stop routing to a terminating instance. A short sleep in preStop before shutdown begins eliminates the small burst of connection errors that otherwise appears on every deploy.",
          },
        ],
      },
      {
        heading: "How do feature flags change the picture?",
        body: [
          {
            type: "p",
            text: "They separate deploying code from releasing behaviour. You ship the new path disabled, enable it for internal users, then a percentage, then everyone — and disable it instantly if something breaks, without a deploy at all.",
          },
          {
            type: "list",
            items: [
              "Rollback becomes a toggle rather than a redeploy, measured in seconds.",
              "Trunk-based development becomes practical: incomplete work merges behind a flag.",
              "Flags accumulate. Give each an owner and a removal date, or you will have 200 of them.",
              "Keep flag evaluation fast and locally cached — an outage in your flag service must fail to a safe default.",
            ],
          },
        ],
      },
      {
        heading: "What should you watch during a deploy?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Error rate by version — a spike confined to the new version is decisive.",
              "Latency at p95 and p99, compared against the previous version, not an absolute threshold.",
              "Saturation: CPU, memory, connection pool usage on the new instances.",
              "Business metrics that move fast: signups, add-to-cart, checkout starts.",
              "Log volume and new error signatures appearing for the first time.",
            ],
          },
          {
            type: "p",
            text: "Define the abort condition in advance and write it down. 'Error rate above 1% for two minutes, or p99 latency 50% worse than baseline' is actionable at 2am. 'It looks a bit off' is not.",
          },
        ],
      },
      {
        heading: "What still causes downtime?",
        body: [
          {
            type: "list",
            items: [
              "A migration that takes an exclusive lock while the application is running.",
              "Dropping a column while old instances are still selecting it.",
              "Cache keys that change shape, causing a cold-cache stampede at cutover.",
              "Connection pool exhaustion when old and new instances both hold their full pools.",
              "A dependency that cannot handle the brief doubling of connections during blue-green.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need blue-green if I have rolling updates?",
        answer:
          "Not usually. Blue-green earns its keep when rollback speed is critical and you can afford double capacity briefly. Rolling updates with good probes cover most web applications.",
      },
      {
        question: "How long should a canary run?",
        answer:
          "Long enough to gather statistically meaningful data on your traffic volume — typically 15 minutes to a few hours. High-traffic services can be confident far faster than low-traffic ones.",
      },
      {
        question: "Can I do zero-downtime deploys with a single server?",
        answer:
          "Partially — a process manager can start the new version, wait for readiness and switch traffic locally. You still have a window during restarts, and no protection against the machine itself failing.",
      },
      {
        question: "What about deploying database changes?",
        answer:
          "Deploy the migration separately and before the code that depends on it, using expand/contract so both versions work against the intermediate schema.",
      },
    ],
    references: [
      { label: "Martin Fowler — Blue-green deployment", href: "https://martinfowler.com/bliki/BlueGreenDeployment.html" },
      { label: "Kubernetes — Rolling updates", href: "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/" },
      { label: "Google SRE Book — Release engineering", href: "https://sre.google/sre-book/release-engineering/" },
    ],
    internalLinks: [
      { label: "Running database migrations safely", href: "/blog/database-migrations-safely" },
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Incident response basics", href: "/blog/incident-response-basics" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "database-migrations-safely",
      "ci-cd-pipeline-design",
      "incident-response-basics",
    ],
  },

  {
    slug: "observability-for-web-apps",
    title: "Observability for web applications: logs, metrics and traces that earn their cost",
    seoTitle: "Observability for Web Apps: A Practical Setup",
    description:
      "What to instrument, how logs, metrics and traces differ, which alerts are worth waking someone for, and how to control observability spend.",
    excerpt:
      "Observability is not more dashboards. It is being able to answer a question you did not anticipate, without shipping new code.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "observability web applications",
    secondaryKeywords: [
      "logs metrics traces",
      "opentelemetry",
      "alerting best practices",
      "distributed tracing",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-05-08",
    answer:
      "Observability rests on three signals: structured logs for detail, metrics for trends and alerting, and traces for following one request across services. Instrument with OpenTelemetry so the data is portable, correlate everything with a request id, and alert only on symptoms users feel rather than on every resource threshold.",
    takeaways: [
      "A request id propagated everywhere is the highest-value instrumentation you can add.",
      "Alert on symptoms — error rate, latency — not on CPU being briefly high.",
      "Sample traces and high-volume logs; keep 100% of errors.",
      "Every alert must be actionable, or it trains people to ignore alerts.",
    ],
    sections: [
      {
        heading: "What are the three signals for?",
        body: [
          {
            type: "table",
            head: ["Signal", "Answers", "Cost driver"],
            rows: [
              ["Logs", "What exactly happened in this request?", "Volume and retention"],
              ["Metrics", "How is the system behaving over time?", "Cardinality of labels"],
              ["Traces", "Where did the time go across services?", "Sampling rate"],
            ],
          },
          {
            type: "p",
            text: "They complement each other. A metric tells you checkout latency doubled at 14:05; a trace tells you it is the tax service; a log tells you it is timing out for one specific country code.",
          },
        ],
      },
      {
        heading: "What should you instrument first?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Request id generated at the edge and attached to every log line, span and job.",
              "The RED metrics per endpoint: Rate, Errors, Duration.",
              "Dependency calls: database, cache, third-party APIs — duration and failure rate for each.",
              "Business events: signups, orders, payments. These catch breakages that infrastructure metrics miss.",
              "Real user monitoring for Core Web Vitals from actual visitors.",
              "Queue depth and job outcomes for background work.",
            ],
          },
          {
            type: "code",
            lang: "ts",
            code: `// Propagate one id across every signal
const requestId = headers.get("x-request-id") ?? crypto.randomUUID();
logger.info({ requestId, route, userId }, "request start");
span.setAttribute("request.id", requestId);
await queue.add("send-email", { payload, requestId });  // carries into the job`,
          },
        ],
      },
      {
        heading: "What should you alert on?",
        answer:
          "Symptoms your users experience, with thresholds tied to your service objectives.",
        body: [
          {
            type: "list",
            items: [
              "Error rate above your budget for a sustained window — not a single spike.",
              "p95 or p99 latency beyond the objective for a sustained window.",
              "Availability from an external probe, so you notice when the whole platform is unreachable.",
              "Business metric anomalies: zero orders in an hour that normally has forty.",
              "Saturation that predicts failure: connection pool near capacity, disk above 85%.",
              "Failed backups, dead letter queue growth, certificate expiry.",
            ],
          },
          {
            type: "callout",
            title: "The 3am test",
            text: "If an alert fires at 3am, is there something a human should do immediately? If not, it is a dashboard item or a ticket — not a page. Every non-actionable page erodes response to the real ones.",
          },
        ],
      },
      {
        heading: "How do you control the cost?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Sample: 100% of errors and slow requests, a small percentage of successful ones.",
              "Watch metric cardinality — a label containing user id or URL path with ids can multiply time series into the millions.",
              "Set retention by signal: 7–14 days for debug logs, 13 months for key business metrics.",
              "Drop noisy log lines at the collector rather than paying to store and then filter them.",
              "Review spend quarterly against what you actually queried; unused data is pure cost.",
            ],
          },
        ],
      },
      {
        heading: "Why OpenTelemetry?",
        body: [
          {
            type: "p",
            text: "It is a vendor-neutral standard for producing traces, metrics and logs, with auto-instrumentation for common frameworks. Instrumenting once against OTel means changing backends is a collector configuration change rather than a re-instrumentation project — which matters, because observability vendor pricing changes more often than your architecture does.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the difference between monitoring and observability?",
        answer:
          "Monitoring watches predefined signals for known failure modes. Observability is having enough data to investigate a failure nobody predicted. You need both; monitoring alerts you, observability explains.",
      },
      {
        question: "Do I need distributed tracing for a monolith?",
        answer:
          "Less urgently, but it still shows where time goes inside a request — database, cache, external calls. It becomes essential the moment a request crosses a service boundary.",
      },
      {
        question: "How long should logs be retained?",
        answer:
          "7 to 30 days covers most debugging. Longer retention should be a deliberate decision for audit or compliance, ideally on cheaper storage.",
      },
      {
        question: "What is an SLO?",
        answer:
          "A service level objective — a target such as '99.9% of requests succeed within 500ms over 30 days'. It converts vague reliability discussions into an error budget you can spend on shipping.",
      },
    ],
    references: [
      { label: "OpenTelemetry documentation", href: "https://opentelemetry.io/docs/" },
      { label: "Google SRE Book — Monitoring distributed systems", href: "https://sre.google/sre-book/monitoring-distributed-systems/" },
      { label: "web.dev — Core Web Vitals field data", href: "https://web.dev/articles/vitals-field-measurement-best-practices" },
    ],
    internalLinks: [
      { label: "Incident response basics", href: "/blog/incident-response-basics" },
      { label: "Node.js error handling", href: "/blog/nodejs-error-handling" },
      { label: "Core Web Vitals explained", href: "/blog/core-web-vitals-explained" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "incident-response-basics",
      "nodejs-error-handling",
      "core-web-vitals-explained",
    ],
  },

  {
    slug: "infrastructure-as-code-basics",
    title: "Infrastructure as code: state, modules and the mistakes that cost weekends",
    seoTitle: "Infrastructure as Code Basics (Terraform)",
    description:
      "Why infrastructure belongs in version control, how Terraform state works, module structure, environment separation and the drift problem.",
    excerpt:
      "Clicking through a cloud console works right up until you need the same thing again, in another region, at 2am, from memory.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "infrastructure as code",
    secondaryKeywords: [
      "terraform state",
      "terraform modules",
      "configuration drift",
      "iac best practices",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-24",
    answer:
      "Infrastructure as code defines your cloud resources in version-controlled files so environments are reproducible and reviewable. With Terraform the central concept is state — a record mapping your configuration to real resources — which must be stored remotely with locking, never committed, and never edited by hand.",
    takeaways: [
      "State is the single most dangerous file in a Terraform setup — remote, locked, versioned, encrypted.",
      "Separate state per environment so a staging mistake cannot destroy production.",
      "Plan output is a code review artifact; read it before every apply.",
      "Console changes cause drift; either import them or forbid them.",
    ],
    sections: [
      {
        heading: "Why bother with infrastructure as code?",
        body: [
          {
            type: "list",
            items: [
              "Reproducibility: a new environment is an apply, not an afternoon of clicking.",
              "Review: infrastructure changes go through pull requests like everything else.",
              "History: git blame explains why a security group has that rule.",
              "Disaster recovery: rebuilding a region is a documented, tested procedure.",
              "Consistency: staging and production differ only in variables, so 'it worked in staging' means something.",
            ],
          },
        ],
      },
      {
        heading: "How does Terraform state work?",
        answer:
          "State is a JSON file mapping resources in your configuration to real infrastructure identifiers, and it is what Terraform diffs against to produce a plan.",
        body: [
          {
            type: "code",
            lang: "hcl",
            code: `terraform {
  backend "s3" {
    bucket         = "acme-tfstate"
    key            = "production/web/terraform.tfstate"
    region         = "ap-south-1"
    dynamodb_table = "tfstate-locks"   # prevents concurrent applies
    encrypt        = true
  }
}`,
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Store state remotely with locking so two people cannot apply simultaneously.",
              "Enable versioning on the bucket — recovering a corrupted state file is otherwise impossible.",
              "Never commit state: it contains resource identifiers and sometimes secrets in plain text.",
              "Separate state per environment and per major component to limit blast radius.",
              "Do not hand-edit state. Use terraform import, state mv and state rm deliberately.",
            ],
          },
        ],
      },
      {
        heading: "How should code be structured?",
        body: [
          {
            type: "code",
            lang: "text",
            code: `infra/
  modules/
    network/          # reusable, no environment-specific values
    web-service/
    database/
  environments/
    staging/
      main.tf         # composes modules with staging variables
      terraform.tfvars
    production/
      main.tf
      terraform.tfvars`,
          },
          {
            type: "list",
            items: [
              "Modules take variables and return outputs; they contain no hardcoded environment values.",
              "Environments are thin compositions, which makes the diff between staging and production readable.",
              "Pin provider and module versions — an unpinned provider upgrade can rewrite resources.",
              "Keep modules small enough to understand; a module that manages an entire platform is not reusable.",
            ],
          },
        ],
      },
      {
        heading: "What is drift and how do you handle it?",
        body: [
          {
            type: "p",
            text: "Drift is the gap between your configuration and reality — someone changed a setting in the console during an incident and never told the code. The next apply either reverts their fix or fails confusingly.",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "Run terraform plan on a schedule and alert on unexpected diffs.",
              "Restrict console write access in production to break-glass roles that are audited.",
              "When an emergency console change is necessary, log it and reconcile the code the same week.",
              "Use import to bring existing resources under management rather than recreating them.",
            ],
          },
          {
            type: "callout",
            title: "Read the plan, every time",
            text: "The plan output is the review. A plan that says 'destroy and recreate' on a database is the last warning you get before an outage — and it is easy to miss when scrolling past 400 lines of diff at the end of the day.",
          },
        ],
      },
      {
        heading: "How should it run in CI?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "terraform fmt and validate on every pull request.",
              "terraform plan posted as a comment on the pull request so reviewers see the actual diff.",
              "A policy or security scan (tfsec, Checkov) failing on public buckets, open security groups and unencrypted storage.",
              "Apply only from the main branch, using short-lived federated credentials rather than static keys.",
              "Production applies behind a manual approval with the reviewed plan attached.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Terraform, Pulumi or CloudFormation?",
        answer:
          "Terraform (or OpenTofu) has the broadest provider ecosystem and the largest hiring pool. Pulumi suits teams who want real programming languages. CloudFormation and CDK make sense for AWS-only shops wanting native integration.",
      },
      {
        question: "Should application deployment go through Terraform?",
        answer:
          "Generally no. Use it for infrastructure that changes rarely and a separate pipeline for application deploys that happen many times a day. Mixing the two makes both slower and riskier.",
      },
      {
        question: "How do I handle secrets in Terraform?",
        answer:
          "Reference them from a secret manager rather than passing them as variables. Anything passed in ends up in state, which is why state must be treated as sensitive regardless.",
      },
      {
        question: "What is OpenTofu?",
        answer:
          "An open-source fork of Terraform created after its licence change, largely compatible and community-governed. It is a reasonable choice if licensing matters to your organisation.",
      },
    ],
    references: [
      { label: "Terraform — State documentation", href: "https://developer.hashicorp.com/terraform/language/state" },
      { label: "Terraform — Module best practices", href: "https://developer.hashicorp.com/terraform/language/modules/develop" },
      { label: "OpenTofu", href: "https://opentofu.org/" },
    ],
    internalLinks: [
      { label: "AWS vs Vercel: where to deploy", href: "/blog/aws-vs-vercel-deployment" },
      { label: "Secrets management for teams", href: "/blog/secrets-management-guide" },
      { label: "CI/CD pipeline design", href: "/blog/ci-cd-pipeline-design" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "aws-vs-vercel-deployment",
      "secrets-management-guide",
      "ci-cd-pipeline-design",
    ],
  },

  {
    slug: "container-security-basics",
    title: "Container security: the controls that matter before the fancy ones",
    seoTitle: "Container Security Basics for Production",
    description:
      "Non-root users, read-only filesystems, capability dropping, image scanning, registry trust and runtime isolation — practical container hardening.",
    excerpt:
      "Container security starts with four lines in a Dockerfile and a scan in CI. Most breaches involve failures at that level, not exotic escapes.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "container security",
    secondaryKeywords: [
      "docker security best practices",
      "non-root container",
      "image vulnerability scanning",
      "kubernetes security context",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-04-10",
    answer:
      "The highest-value container security controls are running as a non-root user, using a read-only root filesystem, dropping all Linux capabilities, scanning images for known vulnerabilities in CI, pulling only from trusted registries by digest, and keeping secrets out of images and environment dumps.",
    takeaways: [
      "Containers share the host kernel — root in a container is closer to root on the host than people assume.",
      "A read-only root filesystem stops most in-container persistence.",
      "Scan images and rebuild regularly; a pinned base image accumulates CVEs.",
      "Most real incidents start with a known vulnerability nobody patched, not a novel escape.",
    ],
    sections: [
      {
        heading: "What are the baseline controls?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Run as a non-root user with a fixed UID, created in the Dockerfile.",
              "Set the root filesystem read-only and mount writable volumes only where needed.",
              "Drop all capabilities and add back only what the workload genuinely requires.",
              "Disallow privilege escalation.",
              "Use a minimal base image so there is less to exploit and less to patch.",
              "Set memory and CPU limits so one container cannot exhaust the node.",
            ],
          },
          {
            type: "code",
            lang: "yaml",
            code: `securityContext:
  runAsNonRoot: true
  runAsUser: 10001
  allowPrivilegeEscalation: false
  readOnlyRootFilesystem: true
  capabilities:
    drop: ["ALL"]
  seccompProfile:
    type: RuntimeDefault`,
            caption: "A Kubernetes security context that covers most of the baseline in one block.",
          },
        ],
      },
      {
        heading: "How should images be scanned and trusted?",
        body: [
          {
            type: "list",
            items: [
              "Scan on every build and fail on high or critical severity with a documented exception process.",
              "Rescan images already in production — new CVEs are published against images that have not changed.",
              "Pull base images from official or internally mirrored sources, referenced by digest.",
              "Generate an SBOM per image so you can answer exposure questions in minutes.",
              "Sign images and verify signatures at admission for higher-assurance environments.",
            ],
          },
          {
            type: "callout",
            title: "Patch cadence beats scan coverage",
            text: "A team that rebuilds and redeploys weekly with an ordinary scanner is far safer than one with an excellent scanner and a six-month-old base image.",
          },
        ],
      },
      {
        heading: "How do secrets get exposed?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Baked into image layers via ARG or COPY — recoverable from image history forever.",
              "Printed by a debug endpoint that dumps the environment.",
              "Written to logs by an error handler that serialises the whole config object.",
              "Kubernetes Secrets readable by any pod in the namespace because RBAC was never scoped.",
              "Committed .env files in a build context without a .dockerignore.",
            ],
          },
          {
            type: "p",
            text: "Inject secrets at runtime from a secret manager, scope access per workload, rotate on a schedule, and scan your repositories for committed credentials automatically.",
          },
        ],
      },
      {
        heading: "What about the network and the runtime?",
        body: [
          {
            type: "list",
            items: [
              "Default-deny network policies: a compromised frontend pod should not be able to reach the database directly.",
              "No container should have access to the container runtime socket — that is equivalent to host root.",
              "Separate namespaces per environment or tenant, with resource quotas.",
              "Runtime detection for unexpected process execution or outbound connections, if your risk profile warrants it.",
              "Keep nodes patched. A container escape usually needs a kernel vulnerability that is already fixed upstream.",
            ],
          },
        ],
      },
      {
        heading: "What does a practical checklist look like?",
        body: [
          {
            type: "table",
            head: ["Control", "Effort", "Impact"],
            rows: [
              ["Non-root user", "One line", "High"],
              ["Read-only root filesystem", "Low", "High"],
              ["Drop all capabilities", "Low", "High"],
              ["Image scanning in CI", "Half a day", "High"],
              ["Secrets from a manager", "Days", "High"],
              ["Network policies", "Days", "Medium-high"],
              ["Image signing and admission control", "Weeks", "Medium"],
              ["Runtime threat detection", "Weeks", "Medium"],
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a container a security boundary?",
        answer:
          "A weak one. Containers share the host kernel, so a kernel vulnerability can allow escape. For strong isolation between untrusted tenants, use separate nodes, VMs, or sandboxed runtimes.",
      },
      {
        question: "Does running as non-root break my app?",
        answer:
          "Sometimes — binding to ports below 1024 or writing to paths owned by root. Bind to a high port behind a service and mount an explicit writable volume for anything that needs to be written.",
      },
      {
        question: "How do I handle a critical CVE in a base image?",
        answer:
          "Rebuild with the patched base and redeploy. If no patch exists, assess whether the vulnerable component is reachable in your context, and apply compensating controls while you wait.",
      },
      {
        question: "Are distroless images worth it?",
        answer:
          "They remove the shell and package manager, cutting the attack surface meaningfully. The trade-off is harder debugging — decide based on whether your team can operate without exec-ing into containers.",
      },
    ],
    references: [
      { label: "NIST SP 800-190 — Application container security", href: "https://csrc.nist.gov/pubs/sp/800/190/final" },
      { label: "Kubernetes — Pod security standards", href: "https://kubernetes.io/docs/concepts/security/pod-security-standards/" },
      { label: "Docker — Security documentation", href: "https://docs.docker.com/engine/security/" },
    ],
    internalLinks: [
      { label: "Dockerfile best practices", href: "/blog/dockerfile-best-practices" },
      { label: "Secrets management for teams", href: "/blog/secrets-management-guide" },
      { label: "Web application security checklist", href: "/blog/web-application-security-checklist" },
      { label: "Enterprise website development", href: "/services#enterprise" },
    ],
    related: [
      "dockerfile-best-practices",
      "secrets-management-guide",
      "web-application-security-checklist",
    ],
  },

  {
    slug: "incident-response-basics",
    title: "Incident response for small teams: what to do in the first fifteen minutes",
    seoTitle: "Incident Response Basics for Small Teams",
    description:
      "Severity levels, roles, communication, mitigation before diagnosis, and blameless postmortems — a lightweight incident process that works without an SRE team.",
    excerpt:
      "During an incident, the instinct is to find the cause. The job is to restore service. Those are different activities and the order matters.",
    category: "DevOps",
    cluster: "devops",
    primaryKeyword: "incident response",
    secondaryKeywords: [
      "postmortem template",
      "severity levels",
      "on-call process",
      "mean time to recovery",
    ],
    authorId: "rovqix-engineering",
    publishedAt: "2026-03-27",
    answer:
      "In the first fifteen minutes of an incident: declare it, assign one person to coordinate, communicate status to users, and mitigate — roll back, disable a flag, scale up — before diagnosing. Root cause analysis belongs in the postmortem, not in the outage.",
    takeaways: [
      "Mitigate first, diagnose second. Restoring service is the objective.",
      "One coordinator. Multiple people making changes simultaneously extends outages.",
      "A status update every 30 minutes, even with nothing new, prevents support pile-up.",
      "Blameless postmortems with owned actions, or you will have the same incident twice.",
    ],
    sections: [
      {
        heading: "How should severity be defined?",
        body: [
          {
            type: "table",
            head: ["Severity", "Definition", "Response"],
            rows: [
              ["SEV1", "Complete outage or data loss risk", "All hands, page immediately, 30-min updates"],
              ["SEV2", "Major feature broken, or severe degradation", "Page on-call, fix during business hours if scoped"],
              ["SEV3", "Minor feature broken with a workaround", "Ticket, next working day"],
              ["SEV4", "Cosmetic or low impact", "Backlog"],
            ],
          },
          {
            type: "p",
            text: "Write these down before you need them. Arguing about whether something is a SEV1 while it is happening wastes the exact minutes that matter most.",
          },
        ],
      },
      {
        heading: "What happens in the first fifteen minutes?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "Declare the incident in a dedicated channel. Ambiguity about whether this is 'a thing' costs time.",
              "Assign an incident commander — one person who coordinates and decides, and who does not also debug.",
              "Post an initial status update internally and externally. 'We are investigating reports of checkout errors' is enough.",
              "Check what changed: deploys, feature flags, migrations, configuration, third-party status pages.",
              "Mitigate: roll back, disable the flag, scale up, fail over. Do not wait for a full diagnosis.",
              "Timestamp everything in the channel — it becomes the postmortem timeline for free.",
            ],
          },
          {
            type: "callout",
            title: "Roll back first, understand later",
            text: "If a deploy went out in the window before the incident, revert it. If it turns out to be unrelated you have lost fifteen minutes; if it was the cause you have ended the outage.",
          },
        ],
      },
      {
        heading: "Who does what?",
        body: [
          {
            type: "list",
            items: [
              "Incident commander: coordinates, decides, keeps the timeline. Does not debug.",
              "Operations lead: makes the actual changes, one at a time, announcing each.",
              "Communications: updates the status page, support and stakeholders.",
              "Scribe (for larger incidents): records actions and timings.",
            ],
          },
          {
            type: "p",
            text: "In a team of four, one person may hold several of these — but the roles should be named explicitly. The failure mode without them is three people changing configuration at once and nobody knowing which change did what.",
          },
        ],
      },
      {
        heading: "How should you communicate?",
        body: [
          {
            type: "list",
            ordered: true,
            items: [
              "First update within 15 minutes of confirming impact, even without a cause.",
              "Then every 30 minutes for a SEV1, including 'still investigating, no change'.",
              "Say what is affected and what works, so customers can route around it.",
              "Never promise a resolution time you cannot support; give a next-update time instead.",
              "Post a resolution notice and follow with a public summary for significant incidents.",
            ],
          },
        ],
      },
      {
        heading: "What makes a postmortem useful?",
        body: [
          {
            type: "list",
            items: [
              "Blameless: the question is what allowed the mistake, not who made it. Anything else guarantees you stop hearing about near misses.",
              "A precise timeline: detection, escalation, mitigation, resolution, with timestamps.",
              "Contributing factors, plural — real incidents rarely have a single cause.",
              "What made detection or mitigation slow, which is often more valuable than the cause itself.",
              "Action items with a named owner and a date, tracked like any other work.",
              "Written within 48 hours, while people still remember the details.",
            ],
          },
          {
            type: "p",
            text: "Track two numbers over time: mean time to detect and mean time to recover. Reducing them is worth more than any single prevention measure, because the next incident will have a cause you did not anticipate.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do small teams need on-call rotations?",
        answer:
          "If you promise availability, someone must be reachable. Keep it fair and paid, keep pages actionable, and make sure the rotation has enough people that it is sustainable.",
      },
      {
        question: "When should you communicate externally?",
        answer:
          "As soon as customer impact is confirmed. Users discovering an outage themselves and finding no acknowledgement is worse for trust than the outage.",
      },
      {
        question: "How do we stop the same incident recurring?",
        answer:
          "Action items with owners and dates, reviewed in your normal planning. Postmortems whose actions are never scheduled are documentation of a repeat incident.",
      },
      {
        question: "What if we cannot find the cause?",
        answer:
          "Document what you ruled out, add the instrumentation whose absence blocked you, and close it. Unexplained incidents are common; unexplained incidents with no new observability are a choice.",
      },
    ],
    references: [
      { label: "Google SRE Book — Managing incidents", href: "https://sre.google/sre-book/managing-incidents/" },
      { label: "Google SRE Book — Postmortem culture", href: "https://sre.google/sre-book/postmortem-culture/" },
      { label: "PagerDuty — Incident response documentation", href: "https://response.pagerduty.com/" },
    ],
    internalLinks: [
      { label: "Observability for web apps", href: "/blog/observability-for-web-apps" },
      { label: "Zero downtime deployment strategies", href: "/blog/zero-downtime-deployments" },
      { label: "Database backup and recovery", href: "/blog/database-backup-and-recovery" },
      { label: "Maintenance and support", href: "/services#maintenance" },
    ],
    related: [
      "observability-for-web-apps",
      "zero-downtime-deployments",
      "database-backup-and-recovery",
    ],
  },
];
