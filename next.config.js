/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["api.dicebear.com"],
    dangerouslyAllowSVG: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
