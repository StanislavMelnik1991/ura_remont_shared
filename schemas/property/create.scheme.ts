import { z } from 'zod';

export const createPropertyScheme = z
  .object({
    name: z.string(),
    suffix: z.string(),
    isFilter: z.boolean().optional(),
    display: z.boolean().optional(),
  })
  .required();

export type CreatePropertySchemeType = z.infer<typeof createPropertyScheme>;
