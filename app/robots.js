export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/checkout' },
    sitemap: 'https://ryze.shop/sitemap.xml'
  };
}
