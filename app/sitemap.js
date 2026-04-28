export default function sitemap() {
  const base = 'https://ryze.shop';
  const routes = ['/', '/about', '/faq', '/contact', '/checkout',
    '/policies/privacy', '/policies/refund', '/policies/shipping', '/policies/terms'];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}
