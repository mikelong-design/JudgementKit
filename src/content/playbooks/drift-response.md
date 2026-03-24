---
title: Drift Response Playbook
summary: Standardize what the platform does after a contract test passes, warns, fails, or reveals that the contract itself is stale.
responseClasses:
  - name: Allow
    description: Use when output is within threshold and evidence is complete.
  - name: Nudge
    description: Use when drift is low and the system can safely repair the output without changing task intent.
  - name: Correct
    description: Use when the system can deterministically repair the output and preserve the declared workflow.
  - name: Quarantine
    description: Use when the output may be unsafe, misleading, or materially out of policy.
  - name: Escalate
    description: Use when the workflow repeatedly approaches the same boundary or the contract no longer matches reality.
escalationPayloadFields:
  - decision_id
  - contract_ids
  - test_ids
  - severity
  - observed_drift
  - evidence
  - proposed_action
---
The point of the playbook is not to stop local adaptation. The point is to keep adaptation inside declared bounds, then update those bounds when the environment changes.

Judgment Kit uses the playbook to show that contracts are not just documentation. They are operational commitments that decide whether the system allows, nudges, corrects, quarantines, or escalates a decision.
