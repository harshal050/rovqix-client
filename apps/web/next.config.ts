import type { NextConfig } from "next";

/**
 * Fully static export for Cloudflare Pages: `next build` writes plain
 * HTML/CSS/JS to `out/`, with no server or backend at runtime.
 */
const nextConfig: NextConfig = {
  output: "export",
  // Workspace packages ship TypeScript source; Next compiles them.
  transpilePackages: ["@rovqix/shared", "@rovqix/areas"],
  images: {
    // There is no image-optimization server on a static host.
    unoptimized: true,
  },
};

export default nextConfig;
