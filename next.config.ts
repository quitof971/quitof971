import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  // Matches the canonical/sitemap URLs (all with a trailing slash) in
  // both dev/Node builds and the static export, so the served URL
  // structure is identical regardless of where this ends up hosted.
  trailingSlash: true,
  ...(isStaticExport
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
