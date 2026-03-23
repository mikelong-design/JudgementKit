import matrixData from '../data/matrix.json';
import raciData from '../data/raci.json';
import cadenceData from '../data/weekly-cadence.json';

export type ModuleSlug = 'responsibilities-matrix' | 'decision-rights' | 'weekly-cadence';

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

export interface CadenceRow {
  ritual: string;
  timing: string;
  focus: string;
}

export interface FlowStage {
  stage: string;
  purpose: string;
}

export interface DownloadLink {
  label: string;
  href: string;
  disabled?: boolean;
  note?: string;
}

export type ModuleTableData =
  | { kind: 'matrix'; rows: MatrixRow[] }
  | { kind: 'raci'; rows: RaciRow[] }
  | { kind: 'cadence'; rows: CadenceRow[] };

export interface KitModule {
  slug: ModuleSlug;
  title: string;
  summary: string;
  intro?: string;
  context?: string;
  helper?: string;
  body?: string[];
  tableData?: ModuleTableData;
  downloads?: DownloadLink[];
}

export interface Kit {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  audience: string;
  coreThesis: string;
  modules: KitModule[];
  howToUse: string[];
  failureModes: string[];
  flowStages?: FlowStage[];
  credits?: string[];
  artDirection?: {
    name: string;
    principles: string[];
  };
}

const moduleOrder: ModuleSlug[] = ['responsibilities-matrix', 'decision-rights', 'weekly-cadence'];

const matrixRows = (matrixData as Omit<MatrixRow, 'search'>[]).map((row) => ({
  ...row,
  search: `${row.area} ${row.own} ${row.weekToWeek} ${row.guardrails} ${row.warning}`.toLowerCase()
}));

const raciRows = raciData as RaciRow[];
const cadenceRows = cadenceData as CadenceRow[];

const sharedDownloads: DownloadLink[] = [
  { label: 'Matrix + RACI (PDF)', href: '#', disabled: true, note: 'PDF coming soon' },
  { label: 'Matrix (CSV)', href: '/downloads/matrix.csv' },
  { label: 'RACI (CSV)', href: '/downloads/raci.csv' }
];

export const kits: Kit[] = [
  {
    slug: 'design-judgment',
    title: 'Design Judgment Kit',
    subtitle: 'Product design responsibilities + decision rights for AI-accelerated teams.',
    summary:
      'A kit for making responsibilities, decision rights, and weekly operating cadence explicit before polished drafts harden into defaults.',
    audience: 'Design leaders, with direct working relevance for PM and engineering partners.',
    coreThesis: 'AI accelerates drafts; judgment prevents drafts becoming defaults.',
    modules: [
      {
        slug: 'responsibilities-matrix',
        title: 'Responsibilities Matrix',
        summary:
          'Clarifies what designers own, protect, and monitor while AI output accelerates.',
        intro:
          'A practical view of what the designer owns, protects, and checks week to week.',
        body: [
          'Responsibilities stay operational when they are visible early, not after work has already hardened into scope.',
          'Use the matrix live in planning, review, and weekly checkpoints to expose where judgment is missing or arriving too late.'
        ],
        tableData: { kind: 'matrix', rows: matrixRows },
        downloads: sharedDownloads
      },
      {
        slug: 'decision-rights',
        title: 'Decision Rights Snapshot',
        summary:
          'Defines who is accountable before polished drafts harden into default decisions.',
        intro:
          'A compact RACI-style view of who must own or inform decisions before AI-generated polish is mistaken for consensus.',
        context:
          'Keep this visible in planning, reviews, and release readiness conversations so quality gates are explicit before implementation commits.',
        tableData: { kind: 'raci', rows: raciRows },
        downloads: sharedDownloads
      },
      {
        slug: 'weekly-cadence',
        title: 'Weekly Operating Cadence',
        summary: 'Turns judgment quality into a repeatable ritual instead of rescue work.',
        intro:
          'Cadence makes judgment habitual. These rituals keep the team from discovering ownership and rationale gaps only after scope has locked in.',
        body: [
          'The goal is not more ceremony. The goal is reliable points in the week where teams surface accountability, tradeoffs, and decision drift before it becomes expensive.',
          'Each checkpoint assumes AI is already speeding up draft generation and focuses on where judgment must intervene.'
        ],
        tableData: { kind: 'cadence', rows: cadenceRows }
      }
    ],
    howToUse: [
      'Pick one active initiative where AI drafts are moving fast.',
      'Agree on decision rights for that slice using the RACI snapshot.',
      'Use the matrix to spot drift and correct it before commitments lock in.'
    ],
    failureModes: [
      'Design review happens only after tickets are scoped.',
      '"Looks complete" is treated as consensus.',
      'AI speed increases output without clear ownership.'
    ],
    flowStages: [
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
        purpose: 'Confirm accountable decision owners and capture rationale for the chosen direction.'
      },
      {
        stage: 'Audit',
        purpose: 'Review shipped outcomes and tighten guardrails for the next cycle.'
      }
    ],
    credits: [
      'Written by Mike Long.',
      'Illustrations generated with ChatGPT (OpenAI), art direction: Foggy Bloom Editorial.'
    ],
    artDirection: {
      name: 'Foggy Bloom Editorial',
      principles: [
        'Soft, foggy, desaturated enterprise editorial look',
        'Warm bloom focal glow over a blue-gray palette',
        'Minimal linework, subtle film grain, floating dust motes',
        'Large negative space and low visual noise',
        'No text inside images unless explicitly required'
      ]
    }
  }
];

export function getAllKits(): Kit[] {
  return kits;
}

export function getKitBySlug(slug: string): Kit | undefined {
  return kits.find((kit) => kit.slug === slug);
}

export function getModuleBySlug(kit: Kit, slug: string): KitModule | undefined {
  return kit.modules.find((module) => module.slug === slug);
}

export function getModuleSlugs(): ModuleSlug[] {
  return [...moduleOrder];
}

export function orderedModules(kit: Kit): KitModule[] {
  return [...kit.modules].sort(
    (left, right) => moduleOrder.indexOf(left.slug) - moduleOrder.indexOf(right.slug)
  );
}
