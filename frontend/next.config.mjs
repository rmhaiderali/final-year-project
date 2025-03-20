/** @type {import("next").NextConfig} */

let backend = null

try {
  backend = new URL(process.env.NEXT_PUBLIC_BACKEND)
} catch (e) {}

if (!backend) {
  console.error("env.NEXT_PUBLIC_BACKEND is not a valid URL")
  process.exit(1)
}

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
