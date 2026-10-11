/**
 * next.config for every area subdomain app (apps/<id>/next.config.mjs):
 *
 *   export default createAreaSiteConfig("plumber-websites");
 */
export function createAreaSiteConfig(siteId) {
  return {
    output: "export",
    transpilePackages: ["@rovqix/shared", "@rovqix/areas", "@rovqix/area-site"],
    images: { unoptimized: true },
    env: {
      // Which site this app builds; read by getCurrentShard() in @rovqix/areas.
      AREA_SHARD: siteId,
      // Shared components link to main-site pages ("/contact", …). On a
      // subdomain those must be absolute — see @rovqix/shared link.tsx.
      NEXT_PUBLIC_MAIN_SITE_URL: "https://rovqix.in",
    },
  };
}
