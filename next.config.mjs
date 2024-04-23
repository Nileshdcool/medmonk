const { IMAGE_DOMAINS } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: IMAGE_DOMAINS.split(','),
  }
};

export default nextConfig;
