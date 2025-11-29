/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable lockfile patching to avoid the warning
  experimental: {
    swcMinify: true,
  },
  // Suppress the lockfile warning
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

export default nextConfig;
