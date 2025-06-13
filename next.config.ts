import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // <-- add this line
  },
};

export default nextConfig;
