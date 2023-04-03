/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose",
    headers() {
      return [
        {
          source: "/.well-known/apple-app-site-association",
          headers: [{ key: "content-type", value: "application/json" }]
        }
      ];
    }
  },
};

module.exports = nextConfig;
