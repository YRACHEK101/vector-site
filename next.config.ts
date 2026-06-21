import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next doesn't pick up an unrelated lockfile
  // elsewhere on the machine when inferring the root.
  turbopack: {
    root: process.cwd(),
  },
  // The only images on the site are SVGs (the logo). Serving them directly
  // avoids the image optimizer entirely and keeps the deploy fully static.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
