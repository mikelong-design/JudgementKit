export const SITE = {
  name: 'Judgment Kit',
  title: 'Judgment Kit Platform',
  description:
    'Practical operating kits for AI-accelerated product teams to preserve decision quality, accountability, and product coherence.',
  domain: 'judgmentkit.design',
  origin: 'https://judgmentkit.design',
  ogImage: '/assets/ownership_visible_v4_header_1536x804.png'
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export function absoluteUrl(pathname: string): string {
  const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return new URL(normalized, SITE.origin).toString();
}

export function buildPageTitle(pageTitle?: string): string {
  return pageTitle ? `${pageTitle} | ${SITE.name}` : SITE.title;
}

export function ogImageUrl(pathname?: string): string {
  return absoluteUrl(pathname || SITE.ogImage);
}
