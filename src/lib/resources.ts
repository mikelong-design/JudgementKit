import {
  getContractsSiteData,
  getContractById,
  getPlaybookBySlug,
  getWorkflowBySlug,
  PILOT_WORKFLOW_SLUG
} from './contracts';
import { IA_LABELS, ROUTES } from './ia';
import { getAllKits } from './kits';

export type ResourceIndexKind = 'kit' | 'workflow' | 'contract' | 'drift-test' | 'playbook';

export interface ResourceIndexEntry {
  kind: ResourceIndexKind;
  title: string;
  summary: string;
  href: string;
  parentLabel: string;
  relatedHref?: string;
  priority: number;
}

function byPriorityThenTitle(left: ResourceIndexEntry, right: ResourceIndexEntry): number {
  if (left.priority !== right.priority) {
    return left.priority - right.priority;
  }

  return left.title.localeCompare(right.title);
}

export function formatResourceKind(kind: ResourceIndexKind): string {
  switch (kind) {
    case 'kit':
      return 'Kit';
    case 'workflow':
      return 'Workflow';
    case 'contract':
      return 'Contract';
    case 'drift-test':
      return 'Drift test';
    case 'playbook':
      return 'Playbook';
    default:
      return kind;
  }
}

export function getResourceActionLabel(entry: ResourceIndexEntry): string {
  switch (entry.kind) {
    case 'kit':
      return `Start ${entry.title}`;
    case 'workflow':
      return `Open ${entry.title}`;
    case 'contract':
      return 'Read contract';
    case 'drift-test':
      return 'Read drift test';
    case 'playbook':
      return 'Read playbook';
    default:
      return 'Open resource';
  }
}

export async function getResourceIndexEntries(): Promise<ResourceIndexEntry[]> {
  const kits = getAllKits().map((kit) => ({
    kind: 'kit' as const,
    title: kit.title,
    summary: kit.summary,
    href: `/kits/${kit.slug}`,
    parentLabel: IA_LABELS.operatingKits,
    relatedHref: kit.slug === 'design-judgment' ? ROUTES.pilotWorkflow : undefined,
    priority: kit.slug === 'design-judgment' ? 10 : 20
  }));

  const { contracts, driftTests, workflows, playbooks } = await getContractsSiteData();

  const workflowEntries = workflows.map((workflow) => ({
    kind: 'workflow' as const,
    title: workflow.data.title,
    summary: workflow.data.summary,
    href: `/contracts/workflows/${workflow.slug}`,
    parentLabel: IA_LABELS.workflowGovernance,
    relatedHref: ROUTES.designKit,
    priority: workflow.data.recommendedPilot ? 20 : 25
  }));

  const contractEntries = contracts.map((contract) => {
    const relatedWorkflow = workflows.find((workflow) =>
      workflow.data.contracts.includes(contract.data.id)
    );

    return {
      kind: 'contract' as const,
      title: contract.data.name,
      summary: contract.data.intent,
      href: `/contracts/${contract.slug}`,
      parentLabel: IA_LABELS.workflowGovernance,
      relatedHref: relatedWorkflow ? `/contracts/workflows/${relatedWorkflow.slug}` : ROUTES.designKit,
      priority: 30
    };
  });

  const driftTestEntries = driftTests.map((driftTest) => {
    const parentContract = getContractById(contracts, driftTest.data.contractId);

    return {
      kind: 'drift-test' as const,
      title: driftTest.data.name,
      summary: driftTest.data.purpose,
      href: `/contracts/tests/${driftTest.slug}`,
      parentLabel: IA_LABELS.workflowGovernance,
      relatedHref: parentContract ? `/contracts/${parentContract.slug}` : ROUTES.pilotWorkflow,
      priority: 40
    };
  });

  const playbookEntries = playbooks.map((playbook) => {
    const relatedWorkflow = workflows.find(
      (workflow) => workflow.data.playbookSlug === playbook.slug
    );

    return {
      kind: 'playbook' as const,
      title: playbook.data.title,
      summary: playbook.data.summary,
      href: `/contracts/playbooks/${playbook.slug}`,
      parentLabel: IA_LABELS.playbooks,
      relatedHref: relatedWorkflow ? `/contracts/workflows/${relatedWorkflow.slug}` : ROUTES.pilotWorkflow,
      priority: 50
    };
  });

  return [...kits, ...workflowEntries, ...contractEntries, ...driftTestEntries, ...playbookEntries].sort(
    byPriorityThenTitle
  );
}

export async function getResourceIndexSections(): Promise<{
  startHere: ResourceIndexEntry[];
  operatingKits: ResourceIndexEntry[];
  workflowGovernance: ResourceIndexEntry[];
  playbooks: ResourceIndexEntry[];
}> {
  const entries = await getResourceIndexEntries();
  const workflowEntry = entries.find(
    (entry) => entry.kind === 'workflow' && entry.href === ROUTES.pilotWorkflow
  );
  const designKitEntry = entries.find(
    (entry) => entry.kind === 'kit' && entry.href === ROUTES.designKit
  );

  return {
    startHere: [designKitEntry, workflowEntry].filter(
      (entry): entry is ResourceIndexEntry => Boolean(entry)
    ),
    operatingKits: entries.filter((entry) => entry.kind === 'kit'),
    workflowGovernance: entries.filter(
      (entry) => entry.kind === 'workflow' || entry.kind === 'contract' || entry.kind === 'drift-test'
    ),
    playbooks: entries.filter((entry) => entry.kind === 'playbook')
  };
}

export async function getWorkflowGovernanceContext() {
  const { contracts, driftTests, workflows, playbooks } = await getContractsSiteData();
  const pilotWorkflow = getWorkflowBySlug(workflows, PILOT_WORKFLOW_SLUG);
  const driftResponsePlaybook = getPlaybookBySlug(playbooks, 'drift-response');

  return {
    contracts,
    driftTests,
    workflows,
    playbooks,
    pilotWorkflow,
    driftResponsePlaybook
  };
}
