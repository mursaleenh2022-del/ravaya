import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ravaya",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
