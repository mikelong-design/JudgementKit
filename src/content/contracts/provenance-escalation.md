---
id: JK-CONTRACT-005
name: Provenance, Audit, and Escalation
owner: Governance
approver: Security
version: 1.0.0
status: active
workflows:
  - ai-ui-generation
  - ai-ui-copy
  - support-assistant
  - summarization
  - agent-actions
intent: make every consequential AI decision reviewable and attributable
boundedAutonomy:
  allowed:
    - Continue execution when evidence is complete and drift is low.
    - Use cached policy decisions within TTL.
  disallowed:
    - Opaque decisions without trace data.
    - Suppressed incidents.
    - Manual overrides without justification.
requiredInputs:
  - decision_id
  - actor
  - model_version
  - toolchain
  - input_ref
  - output_ref
  - evidence
  - override_state
policyRules:
  - Every decision must have a stable identifier.
  - Every decision must record actor, version, and toolchain.
  - Overrides must record owner and reason.
  - High-severity incidents must create an escalation payload.
  - Audit records must be immutable for the retention period.
metrics:
  - name: missing_decision_id_max
    value: "0"
  - name: missing_provenance_field_max
    value: "0"
  - name: unowned_override_max
    value: "0"
  - name: suppressed_incident_max
    value: "0"
  - name: audit_write_failure_max
    value: "0"
enforcement:
  - "Missing provenance blocks publish for consequential actions."
  - "Failed audit write forces quarantine for high-risk workflows."
  - "Override abuse triggers governance review."
---
This contract is what turns a generated decision into something the organization can actually inspect later. Without it, the platform can report a pass or fail but still leave no accountable trail behind the result.

For the first pilot, it is also the contract that makes the workbench credible: every displayed decision, result, and escalation artifact needs an attributable source and owner.
