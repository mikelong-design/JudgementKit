---
id: JK-DRIFT-005
name: Provenance and Escalation Completeness Test
contractId: JK-CONTRACT-005
purpose: Detect untraceable or improperly handled decisions.
requiredInputs:
  - decision_id
  - actor
  - model_version
  - toolchain
  - input_ref
  - output_ref
  - evidence
  - incident_state
method:
  - Validate presence of required provenance fields.
  - Verify that high-severity failures generated incidents.
  - Verify that overrides have owner and reason.
  - Check audit write success.
formula: |
  0.40 * missing_provenance_ratio
  + 0.25 * incident_handling_failure
  + 0.20 * override_ownership_failure
  + 0.15 * audit_write_failure
thresholds:
  pass: "= 0"
  warn: "0 < score < 0.2"
  fail: ">= 0.2"
exampleAssertions:
  - Missing decision_id should fail.
  - Missing audit write on high-risk action should fail.
  - Override without named owner should fail.
---
This test verifies that a consequential AI decision can still be inspected after the moment has passed. Without it, incidents become anecdotes instead of evidence.

It is also the test that makes escalation meaningful in the workbench prototype: a failed result should carry named evidence, a linked contract, and a clear next action.
