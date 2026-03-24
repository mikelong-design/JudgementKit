import { getCollection, type CollectionEntry } from 'astro:content';

import {
  REQUIRED_PILOT_CONTRACT_IDS,
  REQUIRED_PILOT_TEST_IDS
} from '../data/contract-registry';

export type PolicyAction = 'allow' | 'nudge' | 'correct' | 'quarantine' | 'escalate';
export type DriftStatus = 'pass' | 'warn' | 'fail';

export interface DecisionRecord {
  decision_id: string;
  workflow: string;
  actor: string;
  model_version: string;
  timestamp: string;
  input_ref: string;
  output_ref: string;
  toolchain: string[];
  model_settings: Record<string, unknown>;
  user_context: Record<string, unknown>;
  evidence: string[];
  metrics: Record<string, unknown>;
  artifacts?: Record<string, unknown>;
}

export interface EvaluationResult {
  test_id: string;
  status: DriftStatus;
  drift_score: number;
  action: PolicyAction;
  evidence: string[];
}

export interface EvaluationSummary {
  decision_id: string;
  overall_action: PolicyAction;
  results: EvaluationResult[];
}

export interface EscalationPayload {
  decision_id: string;
  contract_ids: string[];
  test_ids: string[];
  severity: 'low' | 'medium' | 'high';
  observed_drift: number;
  evidence: string[];
  proposed_action: string;
}

export type ContractEntry = CollectionEntry<'contracts'>;
export type DriftTestEntry = CollectionEntry<'drift-tests'>;
export type WorkflowEntry = CollectionEntry<'workflows'>;
export type PlaybookEntry = CollectionEntry<'playbooks'>;

export const PILOT_WORKFLOW_SLUG = 'ai-ui-generation';

function byId<T extends { data: { id: string } }>(left: T, right: T): number {
  return left.data.id.localeCompare(right.data.id);
}

function byTitle<T extends { data: { title?: string; name?: string } }>(left: T, right: T): number {
  return (left.data.title || left.data.name || '').localeCompare(right.data.title || right.data.name || '');
}

function indexById<T extends { data: { id: string } }>(entries: T[]): Map<string, T> {
  return new Map(entries.map((entry) => [entry.data.id, entry]));
}

function indexBySlug<T extends { slug: string }>(entries: T[]): Map<string, T> {
  return new Map(entries.map((entry) => [entry.slug, entry]));
}

function assertContentRelationships({
  contracts,
  driftTests,
  workflows,
  playbooks
}: {
  contracts: ContractEntry[];
  driftTests: DriftTestEntry[];
  workflows: WorkflowEntry[];
  playbooks: PlaybookEntry[];
}): void {
  const contractsById = indexById(contracts);
  const testsById = indexById(driftTests);
  const playbooksBySlug = indexBySlug(playbooks);

  driftTests.forEach((entry) => {
    if (!contractsById.has(entry.data.contractId)) {
      throw new Error(
        `Drift test ${entry.data.id} references missing contract ${entry.data.contractId}.`
      );
    }
  });

  workflows.forEach((entry) => {
    entry.data.contracts.forEach((contractId) => {
      if (!contractsById.has(contractId)) {
        throw new Error(`Workflow ${entry.slug} references missing contract ${contractId}.`);
      }
    });

    entry.data.tests.forEach((testId) => {
      if (!testsById.has(testId)) {
        throw new Error(`Workflow ${entry.slug} references missing drift test ${testId}.`);
      }
    });

    if (!playbooksBySlug.has(entry.data.playbookSlug)) {
      throw new Error(
        `Workflow ${entry.slug} references missing playbook ${entry.data.playbookSlug}.`
      );
    }
  });

  const pilotWorkflow = workflows.find((entry) => entry.slug === PILOT_WORKFLOW_SLUG);

  if (!pilotWorkflow) {
    throw new Error(`Missing required pilot workflow ${PILOT_WORKFLOW_SLUG}.`);
  }

  REQUIRED_PILOT_CONTRACT_IDS.forEach((contractId) => {
    if (!pilotWorkflow.data.contracts.includes(contractId)) {
      throw new Error(
        `Workflow ${PILOT_WORKFLOW_SLUG} must include starter contract ${contractId}.`
      );
    }
  });

  REQUIRED_PILOT_TEST_IDS.forEach((testId) => {
    if (!pilotWorkflow.data.tests.includes(testId)) {
      throw new Error(`Workflow ${PILOT_WORKFLOW_SLUG} must include starter drift test ${testId}.`);
    }
  });
}

export async function getContractsSiteData(): Promise<{
  contracts: ContractEntry[];
  driftTests: DriftTestEntry[];
  workflows: WorkflowEntry[];
  playbooks: PlaybookEntry[];
}> {
  const [contracts, driftTests, workflows, playbooks] = await Promise.all([
    getCollection('contracts'),
    getCollection('drift-tests'),
    getCollection('workflows'),
    getCollection('playbooks')
  ]);

  const sortedContracts = [...contracts].sort(byId);
  const sortedDriftTests = [...driftTests].sort(byId);
  const sortedWorkflows = [...workflows].sort(byTitle);
  const sortedPlaybooks = [...playbooks].sort(byTitle);

  assertContentRelationships({
    contracts: sortedContracts,
    driftTests: sortedDriftTests,
    workflows: sortedWorkflows,
    playbooks: sortedPlaybooks
  });

  return {
    contracts: sortedContracts,
    driftTests: sortedDriftTests,
    workflows: sortedWorkflows,
    playbooks: sortedPlaybooks
  };
}

export function getContractBySlug(contracts: ContractEntry[], slug: string): ContractEntry | undefined {
  return contracts.find((entry) => entry.slug === slug);
}

export function getContractById(contracts: ContractEntry[], id: string): ContractEntry | undefined {
  return contracts.find((entry) => entry.data.id === id);
}

export function getDriftTestBySlug(
  driftTests: DriftTestEntry[],
  slug: string
): DriftTestEntry | undefined {
  return driftTests.find((entry) => entry.slug === slug);
}

export function getDriftTestsForContract(
  driftTests: DriftTestEntry[],
  contractId: string
): DriftTestEntry[] {
  return driftTests.filter((entry) => entry.data.contractId === contractId);
}

export function getWorkflowBySlug(workflows: WorkflowEntry[], slug: string): WorkflowEntry | undefined {
  return workflows.find((entry) => entry.slug === slug);
}

export function getPlaybookBySlug(
  playbooks: PlaybookEntry[],
  slug: string
): PlaybookEntry | undefined {
  return playbooks.find((entry) => entry.slug === slug);
}

export function getContractsForWorkflow(
  workflow: WorkflowEntry,
  contracts: ContractEntry[]
): ContractEntry[] {
  return workflow.data.contracts
    .map((id) => getContractById(contracts, id))
    .filter((entry): entry is ContractEntry => Boolean(entry));
}

export function getTestsForWorkflow(
  workflow: WorkflowEntry,
  driftTests: DriftTestEntry[]
): DriftTestEntry[] {
  return workflow.data.tests
    .map((id) => driftTests.find((entry) => entry.data.id === id))
    .filter((entry): entry is DriftTestEntry => Boolean(entry));
}

export function formatPolicyAction(action: PolicyAction): string {
  switch (action) {
    case 'allow':
      return 'Allow';
    case 'nudge':
      return 'Nudge';
    case 'correct':
      return 'Correct';
    case 'quarantine':
      return 'Quarantine';
    case 'escalate':
      return 'Escalate';
    default:
      return action;
  }
}

export function formatDriftStatus(status: DriftStatus): string {
  switch (status) {
    case 'pass':
      return 'Pass';
    case 'warn':
      return 'Warn';
    case 'fail':
      return 'Fail';
    default:
      return status;
  }
}
