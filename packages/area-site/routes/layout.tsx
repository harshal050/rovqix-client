import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "@rovqix/shared/styles/globals.css";

import { getCurrentShard, shardName, shardOrigin } from "@rovqix/areas";
import { ThemeProvider } from "@rovqix/shared/components/providers/theme-provider";
import { SmoothScrollProvider } from "@rovqix/shared/components/providers/smooth-scroll-provider";
import { CursorGlow } from "@rovqix/shared/components/shared/cursor-glow";
import { NoiseOverlay } from "@rovqix/shared/components/shared/noise-overlay";
import { Navbar } from "@rovqix/shared/components/layout/navbar";
import { Footer } from "@rovqix/shared/components/layout/footer";
import { JsonLd } from "@rovqix/shared/components/shared/json-ld";
import { siteConfig } from "@rovqix/shared/lib/constants/site";
import { baseKeywords, organizationJsonLd } from "@rovqix/shared/lib/seo-base";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const shard = getCurrentShard();

export const metadata: Metadata = {
  title: {
    default: `${shardName(shard)} websites — ${siteConfig.name}`,
    template: `%s`,
  },
  description: `Websites for ${shardName(shard).toLowerCase()}, city by city. From $349, live in about a week.`,
  keywords: baseKeywords,
  metadataBase: new URL(shardOrigin(shard)),
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <JsonLd data={organizationJsonLd()} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <NoiseOverlay />
            <CursorGlow />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
