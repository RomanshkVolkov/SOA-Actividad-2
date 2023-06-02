/** @type {import('next').NextConfig} */
const nextConfig = {
   crossOrigin: 'anonymous',
   URL_API: process.env.NEXT_PUBLIC_URL_API,
};

module.exports = nextConfig;
