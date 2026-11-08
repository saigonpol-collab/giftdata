import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://data.vercel.app';
  const routes = [
    '',
    '/solutions',
    '/data-demo',
    '/data-coverage',
    '/applications',
    '/how-it-works',
    '/about',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-11-08'),
    changeFrequency: route === '/data-demo' || route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/data-demo' ? 0.95 : 0.85,
  }));
}
