import matrixData from '../data/matrix.json';
import raciData from '../data/raci.json';

export interface MatrixRow {
  area: string;
  own: string;
  weekToWeek: string;
  guardrails: string;
  warning: string;
  search: string;
}

export interface RaciRow {
  decisionType: string;
  designer: string;
  pm: string;
  engineering: string;
}

interface RawMatrixRow {
  area: string;
  own: string;
  weekToWeek: string;
  guardrails: string;
  warning: string;
}

interface HeroSlide {
  src: string;
  alt: string;
  label: string;
}

const rawMatrixRows = matrixData as RawMatrixRow[];
const rawRaciRows = raciData as RaciRow[];

export const heroSlides: HeroSlide[] = [
  {
    src: '/assets/ownership_visible_v4_header_tight_1536x804.png',
    alt: 'A small group shares a lantern in fog, lighting a clear path while other lanterns drift unattended.',
    label: 'Ownership stays visible'
  },
  {
    src: '/assets/support_judgment_early_header_1536x804.png',
    alt: 'A small team gathers in a foggy scene while warm light marks where judgment enters early.',
    label: 'Judgment enters early'
  }
];

export const kitModules = [
  {
    title: 'Responsibilities Matrix',
    summary: 'Clarifies what designers own, protect, and monitor while AI output accelerates.'
  },
  {
    title: 'Decision Rights Snapshot',
    summary: 'Defines who is accountable before polished drafts harden into default decisions.'
  },
  {
    title: 'Weekly Operating Cadence',
    summary: 'Turns judgment quality into a repeatable ritual instead of rescue work.'
  }
];

export const howToUseSteps = [
  'Pick one active initiative where AI drafts are moving fast.',
  'Agree on decision rights for that slice using the RACI snapshot.',
  'Use the matrix to spot drift and correct it before commitments lock in.'
];

export const failureModes = [
  'Design review happens only after tickets are scoped.',
  '"Looks complete" is treated as consensus.',
  'AI speed increases output without clear ownership.'
];

export const flowStages = [
  {
    stage: 'Frame',
    purpose: 'Name user impact, constraints, and non-negotiables before generation starts.'
  },
  {
    stage: 'Generate',
    purpose: 'Use AI to expand options quickly while preserving traceable tradeoffs.'
  },
  {
    stage: 'Pressure-test',
    purpose: 'Validate state coverage, accessibility, and implementation constraints early.'
  },
  {
    stage: 'Commit',
    purpose: 'Confirm accountable decision owners and capture rationale for chosen direction.'
  },
  {
    stage: 'Audit',
    purpose: 'Review shipped outcomes and tighten guardrails for the next cycle.'
  }
];

export const opsCadence = [
  {
    ritual: 'Monday alignment',
    focus: 'Pick one high-risk initiative and assign decision owners before sprint drift.'
  },
  {
    ritual: 'Midweek checkpoint',
    focus: 'Compare AI drafts against matrix guardrails and call out unresolved tradeoffs.'
  },
  {
    ritual: 'Friday review',
    focus: 'Audit key decisions, capture warning signals, and tune next-week operating rules.'
  }
];

export function getMatrixRows(): MatrixRow[] {
  return rawMatrixRows.map((row) => ({
    ...row,
    search: `${row.area} ${row.own} ${row.weekToWeek} ${row.guardrails} ${row.warning}`.toLowerCase()
  }));
}

export function getRaciRows(): RaciRow[] {
  return rawRaciRows.map((row) => ({ ...row }));
}
