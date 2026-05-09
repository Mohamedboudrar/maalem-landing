import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
};

export default withNextIntl(nextConfig);
