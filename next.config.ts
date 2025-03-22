/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Ensure App Router is enabled
  },
  compiler: {
    styledComponents: true, // Enables styled-components support in Next.js
  },
};

export default nextConfig;