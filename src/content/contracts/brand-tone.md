---
id: JK-CONTRACT-001
name: Brand and Tone Integrity
owner: Design Systems
approver: Brand
version: 1.0.0
status: active
workflows:
  - ai-ui-generation
  - ai-ui-copy
  - support-assistant
  - marketing-snippets
intent: preserve voice consistency while allowing channel-specific variation
boundedAutonomy:
  allowed:
    - Adapt reading level by audience.
    - Shorten or expand copy for surface constraints.
    - Localize wording by region.
  disallowed:
    - Fear-based persuasion.
    - Unsupported certainty.
    - Manipulative urgency.
    - Off-brand humor in transactional flows.
requiredInputs:
  - output_text
  - workflow
  - locale
  - audience
policyRules:
  - Reading level must remain within the declared audience band.
  - Tone must score within the approved style envelope for the workflow.
  - Claims must not exceed available evidence.
  - Calls to action must avoid coercive or deceptive framing.
  - Sensitive workflows must prefer clarity over cleverness.
metrics:
  - name: tone_similarity_min
    value: "0.82"
  - name: reading_level_max_grade.support-assistant
    value: "8"
  - name: reading_level_max_grade.marketing-snippets
    value: "10"
  - name: reading_level_max_grade.ai-ui-copy
    value: "9"
  - name: manipulative_phrase_max
    value: "0"
enforcement:
  - "Low drift: rewrite and log."
  - "Medium drift: rewrite and mark for owner review."
  - "High drift: block output and escalate to the Brand owner."
---
This contract keeps generated copy inside the Judgment Kit voice envelope even when the workflow needs to adapt to surface constraints or audience clarity.

For the `ai-ui-generation` pilot, it acts as the copy guardrail around button text, disclosure language, helper copy, and any generated calls to action embedded in interface structure.
