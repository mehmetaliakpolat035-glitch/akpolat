import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Modern tarayıcılar için polyfill'leri kaldır (ES6+ desteği)
  compiler: {
    // Polyfill'leri devre dışı bırak
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Modern JavaScript hedefi
  experimental: {
    // ES modülleri kullan
    esmExternals: true,
  },
};

export default nextConfig;