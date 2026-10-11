import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getCurrentShard, getShardPage, shardPageSlugs } from "@rovqix/areas";
import { LandingLayout } from "@rovqix/shared/components/sections/landing/landing-layout";
import { landingMetadata } from "@rovqix/shared/lib/seo-base";

/** Static export: exactly the pages for this subdomain's business types. */

const shard = getCurrentShard();

export function generateStaticParams() {
  return shardPageSlugs(shard).map((slug) => ({ slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const page = getShardPage(shard, slug);
  return page ? landingMetadata(page) : {};
}

export default async function AreaPage({ params }: Params) {
  const { slug } = await params;
  const page = getShardPage(shard, slug);
  if (!page) notFound();
  return <LandingLayout page={page} />;
}
