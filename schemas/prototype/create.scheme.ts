import { z } from 'zod';

export const createPrototypeScheme = z
  .object({
    name: z.string(),
    description: z.string().optional(),
    brandId: z.number(),
    typeId: z.number(),
  })
  .required();

export type CreatePrototypeSchemeType = z.infer<typeof createPrototypeScheme>;
