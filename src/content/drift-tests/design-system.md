---
id: JK-DRIFT-003
name: Design System Drift Test
contractId: JK-CONTRACT-003
purpose: Detect structural and visual divergence from approved surface rules.
requiredInputs:
  - rendered_tree
  - token_registry
  - component_inventory
  - accessibility_report
  - workflow_requirements
method:
  - Traverse the rendered tree and verify every component against inventory.
  - Resolve style values against the token registry.
  - Read the accessibility report for contrast, labels, focus order, and semantics.
  - Check required patterns for the workflow.
formula: |
  0.30 * unknown_component_rate
  + 0.25 * raw_value_rate
  + 0.25 * accessibility_failure_rate
  + 0.20 * required_pattern_miss_rate
thresholds:
  pass: "< 0.10"
  warn: "0.10 - 0.20"
  fail: "> 0.20"
exampleAssertions:
  - A raw hex color where token use is required should warn or fail.
  - A custom modal not in inventory should fail.
  - Missing focus trap in a dialog should fail.
---
This is the highest-signal drift test for the first pilot because it inspects the actual generated interface structure, not just the copy around it.

Judgment Kit uses it to show how a workflow can remain fast while still proving that it stayed inside token, component, accessibility, and required-pattern boundaries.
