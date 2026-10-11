import NextLink from "next/link";
import type { ComponentProps } from "react";

/**
 * Drop-in replacement for next/link, used by everything in @rovqix/shared.
 *
 * The same navbar, footer and landing layout render on the main site and on
 * every area subdomain (beauty.rovqix.in, …). Subdomain builds set
 * NEXT_PUBLIC_MAIN_SITE_URL, and there a root-relative link like "/contact"
 * must point at the main site — so it renders as a plain absolute <a>.
 * next/link would instead try a client-side navigation on the subdomain,
 * where that page does not exist.
 *
 * On the main site the variable is unset and this is exactly next/link.
 */
const MAIN_SITE_URL = process.env.NEXT_PUBLIC_MAIN_SITE_URL;

type LinkProps = ComponentProps<typeof NextLink>;

/** next/link-only props, not valid on a plain <a>. */
const NEXT_LINK_ONLY_PROPS = [
  "as",
  "replace",
  "scroll",
  "shallow",
  "passHref",
  "prefetch",
  "locale",
  "legacyBehavior",
  "onNavigate",
  "transitionTypes",
] as const;

export default function Link(props: LinkProps) {
  if (!MAIN_SITE_URL || typeof props.href !== "string") return <NextLink {...props} />;

  const { href, ...rest } = props;
  const anchorProps: Record<string, unknown> = { ...rest };
  for (const key of NEXT_LINK_ONLY_PROPS) delete anchorProps[key];

  return <a href={href.startsWith("/") ? `${MAIN_SITE_URL}${href}` : href} {...anchorProps} />;
}
