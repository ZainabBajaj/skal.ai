import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* SEO and Performance Optimizations */
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  /* Image Optimization */
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Required for static export
  },

  /* Headers for Security and Performance */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/xml',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
      {
        source: '/pdf/(.*)',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/pdf',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment',
          },
        ],
      },
    ];
  },

  /* Redirects for SEO */
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      /* Sky has its own site now, and it is the one that gets updated. Every
         "Sky" link on skal.ai still points at /sky — navbar, footer, sitemap
         page, the product split, the comparison and story pages — so sending
         the route itself is what makes all of them land on the product
         without touching a single href. app/sky/ stays in the repo but stops
         rendering; it was the older, thinner version of the same pitch. */
      {
        source: '/sky',
        destination: 'https://sky.skal.ai',
        permanent: true,
      },
      /* The product shipped as Sky. /scale was live and is still linked from
         the stories and comparison pages, so it redirects rather than 404s —
         straight to Sky, not via /sky, so it is one hop and not two. */
      {
        source: '/scale',
        destination: 'https://sky.skal.ai',
        permanent: true,
      },
    ];
  },

  /* Experimental Features for Performance */
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },

  /* Webpack Configuration for Bundle Optimization */
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
