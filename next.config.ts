import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Turbopack kullan - Webpack yerine
  turbopack: {},
  // Modern tarayıcılar için polyfill'leri kaldır
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Modern JavaScript hedefi
  experimental: {
    esmExternals: true,
  },
};

export default nextConfig;