import { ImageResponse } from "next/og";
import { getBlogPostBySlug } from "@/lib/api/blog";
import { siteConfig } from "@/lib/constants/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export async function generateImageMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  return [{ id: "default", alt: post?.title ?? siteConfig.name, size, contentType }];
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#050816",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 10% 85%, rgba(124,58,237,0.35), transparent 55%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 600, color: "#3B82F6" }}>
          {post?.category ?? "ROVQIX Blog"}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#ffffff",
            maxWidth: 980,
          }}
        >
          {post?.title ?? siteConfig.name}
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,0.6)" }}>
          {siteConfig.name} — {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
