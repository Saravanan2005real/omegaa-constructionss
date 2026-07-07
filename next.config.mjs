/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compress: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimisticClientCache: true,
  },
};

export default nextConfig;
