import { z } from 'zod';

export const createValueScheme = z
  .object({
    value: z.string(),
  })
  .required();

export type CreateValueSchemeType = z.infer<typeof createValueScheme>;
