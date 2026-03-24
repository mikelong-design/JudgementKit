---
id: JK-CONTRACT-003
name: Design System and Surface Integrity
owner: Design Systems
approver: Frontend Platform
version: 1.0.0
status: active
workflows:
  - ai-ui-generation
  - component-composition
  - ai-ui-copy
intent: keep generated interfaces inside the approved surface language
boundedAutonomy:
  allowed:
    - Compose approved components.
    - Adjust layout within tokenized spacing scales.
    - Select variants from approved component inventory.
  disallowed:
    - Inventing unregistered components.
    - Using raw values where tokens are required.
    - Breaking accessibility minimums.
    - Bypassing required consent, disclosure, or navigation patterns.
requiredInputs:
  - rendered_tree
  - token_refs
  - component_inventory
  - accessibility_report
policyRules:
  - Every component used must exist in the approved inventory.
  - Color, type, spacing, radius, and elevation values must resolve to tokens.
  - Accessibility checks must pass required thresholds.
  - Required workflow patterns must remain intact.
  - Generated structure must preserve semantic hierarchy.
metrics:
  - name: unknown_component_max
    value: "0"
  - name: raw_style_value_max
    value: "0"
  - name: color_contrast_fail_max
    value: "0"
  - name: missing_required_pattern_max
    value: "0"
  - name: semantic_hierarchy_score_min
    value: "0.95"
enforcement:
  - "Auto-replace raw values with the nearest valid token when confidence is high."
  - "Reject unknown components unless a sandbox flag is enabled."
  - "Block publish when accessibility failures remain."
---
This is the core surface-governance contract for the first Judgment Kit pilot. It keeps generated interface structure inside approved component, token, and workflow boundaries before anything is treated as publishable UI.

It also gives the workbench a concrete way to show design-system drift: raw values, missing patterns, and invented components should all become reviewable evidence instead of vague discomfort.
