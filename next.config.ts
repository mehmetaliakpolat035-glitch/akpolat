import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // SWC minifikasyonu - daha hızlı ve modern
  swcMinify: true,
  // Modern tarayıcılar için polyfill'leri kaldır
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Modern JavaScript hedefi
  experimental: {
    esmExternals: true,
  },
  // Webpack ayarları - polyfill'leri tamamen kaldır
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      // Core-js ve regenerator-runtime polyfill'lerini engelle
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^(core-js|regenerator-runtime)/,
        })
      );
      
      // Node.js polyfill'lerini devre dışı bırak
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
        http: false,
        https: false,
        zlib: false,
        url: false,
        util: false,
        buffer: false,
        process: false,
        'core-js': false,
        'regenerator-runtime': false,
      };
    }
    return config;
  },
};

export default nextConfig;