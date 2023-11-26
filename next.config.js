/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protocollo dell'URL
        hostname: "raw.githubusercontent.com", // Hostname dell'URL
      },
    ],
  },
};

module.exports = nextConfig;
