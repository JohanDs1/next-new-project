import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  //reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "static.wikia.nocookie.net",
      },
    ],
  },
};

export default nextConfig;
