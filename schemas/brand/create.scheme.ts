import { z } from 'zod';

export const createBrandScheme = z
  .object({
    name: z.string(),
    description: z.string().optional(),
  })
  .required();

export type CreateBrandSchemeType = z.infer<typeof createBrandScheme>;
