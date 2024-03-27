import { z } from 'zod';

export const productUpdateScheme = z
  .object({
    externalId: z.string().optional(),
    externalName: z.string().optional(),
    availableQuantity: z.number().int().min(0).optional(),
    price: z.number().positive().optional(),
  })
  .required();
