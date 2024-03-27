import { z } from 'zod';

export const productCreateScheme = z
  .object({
    prototypeId: z.number().positive().int(),
    externalId: z.string(),
    externalName: z.string().optional(),
    availableQuantity: z.number().int().min(0),
    price: z.number().positive(),
  })
  .required();
