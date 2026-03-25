import type { APIRoute } from 'astro';

import { getContractsSiteData } from '../lib/contracts';
import { getAllKits, orderedModules } from '../lib/kits';
import { absoluteUrl } from '../lib/site';

export const GET: APIRoute = async () => {
  const { contracts, driftTests, workflows, playbooks } = await getContractsSiteData();
  const urls = [
    '/',
    '/kits',
    '/resources',
    '/contracts',
    ...getAllKits().flatMap((kit) => [
      `/kits/${kit.slug}`,
      ...(kit.slug === 'design-judgment'
        ? ['/kits/design-judgment/design-leadership-as-contract-authorship']
        : []),
      ...orderedModules(kit).map((module) => `/kits/${kit.slug}/${module.slug}`)
    ]),
    ...contracts.map((contract) => `/contracts/${contract.slug}`),
    ...driftTests.map((test) => `/contracts/tests/${test.slug}`),
    ...workflows.map((workflow) => `/contracts/workflows/${workflow.slug}`),
    ...playbooks.map((playbook) => `/contracts/playbooks/${playbook.slug}`)
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
