import type { APIRoute } from 'astro';

import { getAllKits, orderedModules } from '../lib/kits';
import { absoluteUrl } from '../lib/site';

export const GET: APIRoute = () => {
  const urls = [
    '/',
    '/kits',
    ...getAllKits().flatMap((kit) => [
      `/kits/${kit.slug}`,
      ...orderedModules(kit).map((module) => `/kits/${kit.slug}/${module.slug}`)
    ])
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${absoluteUrl(url)}</loc></url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
