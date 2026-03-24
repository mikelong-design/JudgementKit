import { defineCollection, z } from 'astro:content';

const metricSchema = z.object({
  name: z.string(),
  value: z.string()
});

const thresholdsSchema = z.object({
  pass: z.string(),
  warn: z.string(),
  fail: z.string()
});

const contracts = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    owner: z.string(),
    approver: z.string(),
    version: z.string(),
    status: z.enum(['active', 'draft', 'deprecated']),
    workflows: z.array(z.string()).min(1),
    intent: z.string(),
    boundedAutonomy: z.object({
      allowed: z.array(z.string()).min(1),
      disallowed: z.array(z.string()).min(1)
    }),
    requiredInputs: z.array(z.string()).min(1),
    policyRules: z.array(z.string()).min(1),
    metrics: z.array(metricSchema).min(1),
    enforcement: z.array(z.string()).min(1)
  })
});

const driftTests = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    contractId: z.string(),
    purpose: z.string(),
    requiredInputs: z.array(z.string()).min(1),
    method: z.array(z.string()).min(1),
    formula: z.string(),
    thresholds: thresholdsSchema,
    exampleAssertions: z.array(z.string()).min(1)
  })
});

const workflows = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    defaultSurface: z.string(),
    defaultAudience: z.string(),
    decisionRecordFields: z.array(z.string()).min(1),
    contracts: z.array(z.string()).min(1),
    tests: z.array(z.string()).min(1),
    playbookSlug: z.string(),
    recommendedPilot: z.boolean().default(false)
  })
});

const playbooks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    responseClasses: z
      .array(
        z.object({
          name: z.string(),
          description: z.string()
        })
      )
      .min(1),
    escalationPayloadFields: z.array(z.string()).min(1)
  })
});

export const collections = {
  contracts,
  'drift-tests': driftTests,
  workflows,
  playbooks
};
