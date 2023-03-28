const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['static.vecteezy.com', "cdn.sanity.io"],
  },
}

module.exports = nextConfig
