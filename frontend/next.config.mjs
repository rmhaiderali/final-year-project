/** @type {import("next").NextConfig} */

const backend = new URL(process.env.NEXT_PUBLIC_BACKEND)

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: backend.protocol.replace(":", ""),
        hostname: backend.hostname,
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
}

export default nextConfig
