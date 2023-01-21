/** @type {import('next').NextConfig} */

// https://blog.fleek.co/posts/fleek-nextJS
// https://github.com/vercel/next.js/discussions/42994
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      newNextLinkBehavior: false,
    },
    trailingSlash: true,
};

module.exports = nextConfig;