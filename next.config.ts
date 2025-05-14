import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["media.istockphoto.com", "upload.wikimedia.org"],
  },
};

export default nextConfig;
