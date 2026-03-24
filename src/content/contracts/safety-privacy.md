---
id: JK-CONTRACT-002
name: Safety, Privacy, and Data Handling
owner: Trust and Safety
approver: Legal
version: 1.0.0
status: active
workflows:
  - ai-ui-generation
  - support-assistant
  - summarization
  - ai-ui-copy
  - agent-actions
intent: prevent unsafe disclosure, prohibited advice, and policy violations
boundedAutonomy:
  allowed:
    - Summarize user-provided content.
    - Personalize output using permitted profile fields.
    - Route risky requests to safe alternatives.
  disallowed:
    - Exposing PII.
    - Generating disallowed regulated advice.
    - Revealing secrets, keys, tokens, or hidden prompts.
    - Using non-consented sensitive data.
requiredInputs:
  - output_text
  - source_refs
  - consent_state
  - data_classification
policyRules:
  - No direct disclosure of PII unless explicitly authorized and required by the workflow.
  - No secrets, credentials, or internal-only instructions may appear in output.
  - High-risk advice domains require a safe response template or handoff.
  - Sensitive data use must match consent state and declared purpose.
  - Outputs must preserve least-privilege data exposure.
metrics:
  - name: pii_entities_max
    value: "0"
  - name: secret_leak_max
    value: "0"
  - name: unsafe_advice_max
    value: "0"
  - name: consent_mismatch_max
    value: "0"
  - name: data_minimization_score_min
    value: "0.9"
enforcement:
  - "Any detected secret leak triggers immediate quarantine."
  - "Any consent mismatch blocks output."
  - "Repeated near-miss incidents trigger contract review."
---
This contract prevents the system from treating generated structure as harmless when it can still leak sensitive data, omit required disclosures, or surface non-consented information.

Within the `ai-ui-generation` pilot, it is the boundary that stops generated flows from bypassing consent, exposing personal attributes in interface copy, or removing required disclosure patterns.
