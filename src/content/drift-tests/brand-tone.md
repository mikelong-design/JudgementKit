---
id: JK-DRIFT-001
name: Brand and Tone Drift Test
contractId: JK-CONTRACT-001
purpose: Measure how far output text deviates from the approved tone envelope.
requiredInputs:
  - output_text
  - workflow
  - locale
  - approved_style_embeddings
  - banned_phrase_list
method:
  - Embed output text and compare it to the workflow-specific tone centroid.
  - Check reading level against the workflow target.
  - Detect banned phrases and coercive patterns.
  - Flag unsupported certainty statements when evidence is absent.
formula: |
  0.45 * (1 - tone_similarity)
  + 0.20 * reading_level_violation
  + 0.20 * coercive_language_score
  + 0.15 * unsupported_claim_score
thresholds:
  pass: "< 0.18"
  warn: "0.18 - 0.35"
  fail: "> 0.35"
exampleAssertions:
  - '"Act now before it is too late" should fail in support flows.'
  - '"We guarantee this will fix the issue" should fail without evidence.'
  - A support answer above grade 8 should warn or fail based on overage.
---
This drift test turns tone from a subjective review note into a measurable signal. It is the first checkpoint that keeps urgency, certainty, and reading level from drifting away from declared intent.

In the `ai-ui-generation` pilot, it is applied to generated UI copy embedded in the proposed structure, not only to standalone marketing or support responses.
