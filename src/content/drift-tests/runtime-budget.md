---
id: JK-DRIFT-004
name: Runtime Budget Drift Test
contractId: JK-CONTRACT-004
purpose: Detect when local agent behavior harms speed, cost, or reliability.
requiredInputs:
  - workflow
  - latency_ms
  - cost_usd
  - retry_count
  - toolchain
  - outcome_quality
method:
  - Compare measured latency to the workflow budget.
  - Compare per-decision cost to the allowed budget.
  - Flag retry loops and repeated tool failures.
  - Verify that degraded mode preserved minimum quality.
formula: |
  0.35 * latency_overrun_ratio
  + 0.30 * cost_overrun_ratio
  + 0.20 * retry_violation_score
  + 0.15 * quality_floor_violation
thresholds:
  pass: "< 0.15"
  warn: "0.15 - 0.30"
  fail: "> 0.30"
exampleAssertions:
  - Support reply above p95 budget should warn.
  - Two safe retries may pass, a third should fail.
  - Fallback model with quality below floor should fail.
---
This test makes runtime behavior visible in the same governance frame as tone, safety, and design integrity.

For the `ai-ui-generation` pilot, it protects the workflow from quietly becoming too slow, too expensive, or too brittle to use as a live product tool.
