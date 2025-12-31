import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "images7.alphacoders.com",
      },
    ],
  },
};

export default nextConfig;
