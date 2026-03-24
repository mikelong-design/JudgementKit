import type {
  DecisionRecord,
  EscalationPayload,
  EvaluationSummary
} from '../lib/contracts';

export const sampleDecisionRecord: DecisionRecord = {
  decision_id: 'dec_ai_ui_014',
  workflow: 'ai-ui-generation',
  actor: 'assistant.ui.v4',
  model_version: 'nemotron-3-super',
  timestamp: '2026-03-23T12:00:00Z',
  input_ref: 'req_987',
  output_ref: 'out_456',
  toolchain: ['llm:nemotron-3-super', 'layout-engine:v1', 'policy-engine:v1'],
  model_settings: {
    temperature: 0.3,
    max_tokens: 1800
  },
  user_context: {
    surface: 'web-app',
    locale: 'en-US',
    audience: 'workspace-admin'
  },
  evidence: ['token_registry:v12', 'component_inventory:web-app-q1'],
  metrics: {
    latency_ms: 8420,
    cost_usd: 0.34,
    retry_count: 1,
    outcome_quality: 0.83
  },
  artifacts: {
    output_text: 'Act now before it is too late',
    rendered_tree: {
      type: 'MarketingDialog',
      props: {
        color: '#3B82F6',
        disclosure: false
      }
    }
  }
};

export const sampleEvaluationSummary: EvaluationSummary = {
  decision_id: 'dec_ai_ui_014',
  overall_action: 'escalate',
  results: [
    {
      test_id: 'JK-DRIFT-001',
      status: 'warn',
      drift_score: 0.23,
      action: 'nudge',
      evidence: ['coercive_phrase: Act now before it is too late']
    },
    {
      test_id: 'JK-DRIFT-002',
      status: 'pass',
      drift_score: 0,
      action: 'allow',
      evidence: ['no_pii_detected', 'no_secret_patterns_found']
    },
    {
      test_id: 'JK-DRIFT-003',
      status: 'fail',
      drift_score: 0.41,
      action: 'quarantine',
      evidence: [
        'unknown_component:MarketingDialog',
        'raw_style_value:#3B82F6',
        'missing_required_pattern:consent_disclosure'
      ]
    },
    {
      test_id: 'JK-DRIFT-004',
      status: 'warn',
      drift_score: 0.19,
      action: 'nudge',
      evidence: ['latency_within_p95_budget', 'quality_floor_margin:0.03']
    },
    {
      test_id: 'JK-DRIFT-005',
      status: 'fail',
      drift_score: 0.27,
      action: 'escalate',
      evidence: ['missing_audit_evidence', 'override_owner_absent']
    }
  ]
};

export const sampleEscalationPayload: EscalationPayload = {
  decision_id: 'dec_ai_ui_014',
  contract_ids: ['JK-CONTRACT-003', 'JK-CONTRACT-005'],
  test_ids: ['JK-DRIFT-003', 'JK-DRIFT-005'],
  severity: 'high',
  observed_drift: 0.41,
  evidence: [
    'unknown_component:MarketingDialog',
    'raw_style_value:#3B82F6',
    'override_owner_absent'
  ],
  proposed_action: 'policy-review'
};
