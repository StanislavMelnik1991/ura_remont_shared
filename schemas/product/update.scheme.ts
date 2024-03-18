import { z } from 'zod';

export const updateProductScheme = z
  .object({
    externalId: z.string().optional(),
    externalName: z.string().optional(),
    availableQuantity: z.number().int().min(0).optional(),
    price: z.number().positive().optional(),
  })
  .required();

export type UpdateProductSchemeType = z.infer<typeof updateProductScheme>;
