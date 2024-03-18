import { z } from 'zod';

export const createTypeScheme = z
  .object({
    name: z.string(),
    description: z.string().optional(),
  })
  .required();

export type CreateTypeSchemeType = z.infer<typeof createTypeScheme>;
