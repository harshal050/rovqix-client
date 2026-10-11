import { ImageResponse } from "next/og";
import { siteConfig } from "@rovqix/shared/lib/constants/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050816",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 80% 75%, rgba(124,58,237,0.35), transparent 55%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: -2,
            color: "#ffffff",
          }}
        >
          ROVQIX
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
