---
id: JK-CONTRACT-004
name: Runtime, Cost, and Reliability Budgets
owner: Platform Engineering
approver: Product
version: 1.0.0
status: active
workflows:
  - ai-ui-generation
  - agent-actions
  - support-assistant
  - summarization
intent: preserve user experience and cost discipline under local autonomy
boundedAutonomy:
  allowed:
    - Trade model size for latency when the quality floor holds.
    - Use fallback tools when primary tools fail.
    - Retry within bounded limits.
  disallowed:
    - Unbounded tool loops.
    - Budget overrun without escalation.
    - Latency spikes beyond the workflow SLO.
requiredInputs:
  - latency_ms
  - cost_usd
  - retry_count
  - toolchain
  - outcome_quality
policyRules:
  - Each workflow must stay within latency and cost budgets.
  - Retry behavior must stay within defined caps.
  - Fallback behavior must preserve minimum quality.
  - Tool invocations must be traceable.
metrics:
  - name: p95_latency_ms.support-assistant
    value: "3000"
  - name: p95_latency_ms.summarization
    value: "7000"
  - name: p95_latency_ms.ai-ui-generation
    value: "12000"
  - name: per_decision_cost_usd_max.ai-ui-generation
    value: "0.50"
  - name: retry_count_max
    value: "2"
enforcement:
  - "On budget pressure, downgrade gracefully before failing hard."
  - "On loop detection, stop execution and log a reliability incident."
  - "Escalate when repeated budget drift suggests the contract is stale."
---
This contract makes the pilot operational rather than aspirational. It keeps the `ai-ui-generation` workflow inside declared latency, cost, and retry limits so local autonomy does not quietly become a platform tax.

Judgment Kit uses it to show that governance is not only about tone and safety. It also has to protect reliability, traceability, and the cost profile of a workflow that teams might otherwise treat as a black box.
