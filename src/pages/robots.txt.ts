import type { APIRoute } from 'astro';

import { SITE } from '../lib/site';

export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /
Disallow: /review
Disallow: /layouts

Sitemap: ${SITE.origin}/sitemap.xml
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
