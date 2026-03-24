export const REQUIRED_PILOT_CONTRACT_IDS = [
  'JK-CONTRACT-001',
  'JK-CONTRACT-002',
  'JK-CONTRACT-003',
  'JK-CONTRACT-004',
  'JK-CONTRACT-005'
] as const;

export const REQUIRED_PILOT_TEST_IDS = [
  'JK-DRIFT-001',
  'JK-DRIFT-002',
  'JK-DRIFT-003',
  'JK-DRIFT-004',
  'JK-DRIFT-005'
] as const;

export const CONTRACT_REGISTRY_TEMPLATE = [
  {
    name: 'id',
    description: 'Stable contract identifier used in workflow mappings, tests, and incidents.'
  },
  {
    name: 'owner',
    description: 'Operational function accountable for keeping the contract current.'
  },
  {
    name: 'approver',
    description: 'Receiving function that signs off on release changes or emergency overrides.'
  },
  {
    name: 'scope',
    description: 'Declared workflows and surfaces where the contract applies.'
  },
  {
    name: 'inputs_required',
    description: 'Evidence and fields the evaluator must receive before making a policy call.'
  },
  {
    name: 'outputs_expected',
    description: 'Policy result, drift score, and remediation action exposed after evaluation.'
  },
  {
    name: 'severity_model',
    description: 'Low, medium, and high response bands that drive nudge, correction, or escalation.'
  },
  {
    name: 'change_policy',
    description: 'Review cadence, override rules, and signoff requirements for contract updates.'
  }
] as const;

export const CONTRACT_SEVERITY_MODEL = [
  { name: 'Low', description: 'Nudge or log the result when drift is minor and intent is preserved.' },
  {
    name: 'Medium',
    description: 'Auto-correct when possible or route for owner review before the output is used.'
  },
  { name: 'High', description: 'Block, quarantine, or escalate when the workflow crosses declared bounds.' }
] as const;

export const CONTRACT_VERSIONING_RULES = [
  'Increment patch for threshold or wording changes.',
  'Increment minor for added rules or test coverage.',
  'Increment major when scope, enforcement behavior, or acceptance criteria change.'
] as const;

export const CONTRACT_OWNERSHIP_RULES = [
  'Every contract needs one operational owner.',
  'Every drift test needs one measurable threshold owner.',
  'Every escalation lane needs one named receiving function.'
] as const;

export const CONTRACT_RELEASE_GATE = [
  'The contract markdown exists.',
  'At least one drift test markdown exists.',
  'Thresholds are specified.',
  'Remediation behavior is specified.',
  'Owner and approver are named.'
] as const;
