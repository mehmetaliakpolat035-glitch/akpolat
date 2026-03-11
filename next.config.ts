import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Cloudflare Pages için gerekli
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;