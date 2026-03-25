import type { NavLink } from './site';

export const IA_LABELS = {
  home: 'Home',
  kits: 'Kits',
  resources: 'Resources',
  workflowGovernance: 'Workflow Governance',
  startHere: 'Start here',
  operatingKits: 'Operating kits',
  playbooks: 'Playbooks',
  leadershipFraming: 'Leadership framing'
} as const;

export const ROUTES = {
  home: '/',
  kits: '/kits',
  resources: '/resources',
  contracts: '/contracts',
  designKit: '/kits/design-judgment',
  designLeadership: '/kits/design-judgment/design-leadership-as-contract-authorship',
  pilotWorkflow: '/contracts/workflows/ai-ui-generation',
  workflowGovernance: '/resources#workflow-governance',
  playbooks: '/resources#playbooks'
} as const;

const PRIMARY_NAV: NavLink[] = [
  { href: ROUTES.kits, label: IA_LABELS.kits },
  { href: ROUTES.resources, label: IA_LABELS.resources }
];

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

export function getPrimaryNav(): NavLink[] {
  return PRIMARY_NAV;
}

export function isPrimaryNavActive(pathname: string, href: string): boolean {
  const currentPath = normalizePathname(pathname);
  const targetPath = normalizePathname(href.split('#')[0] || href);

  if (targetPath === ROUTES.kits) {
    return currentPath === ROUTES.kits || currentPath.startsWith(`${ROUTES.kits}/`);
  }

  if (targetPath === ROUTES.resources) {
    return (
      currentPath === ROUTES.resources ||
      currentPath.startsWith(`${ROUTES.resources}/`) ||
      currentPath === ROUTES.contracts ||
      currentPath.startsWith(`${ROUTES.contracts}/`)
    );
  }

  return currentPath === targetPath;
}
