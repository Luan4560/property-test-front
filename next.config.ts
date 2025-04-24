import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  images: {
    domains: ["images.pexels.com"],
  },
  /* config options here */
};

export default nextConfig;
