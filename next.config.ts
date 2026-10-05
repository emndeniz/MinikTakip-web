import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // "latest" always points at the current version - temporary (307),
      // never permanent, because which version is "latest" changes over time.
      { source: "/privacy/latest", destination: "/privacy/v1", permanent: false },
      { source: "/terms/latest", destination: "/terms/v1", permanent: false },
      { source: "/kvkk/latest", destination: "/kvkk/v1", permanent: false },
    ];
  },
};

export default nextConfig;
