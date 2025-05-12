import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  poweredByHeader: false
};

export default nextConfig;
