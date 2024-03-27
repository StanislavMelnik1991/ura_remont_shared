import { z } from 'zod';

export const propertyValueCreateScheme = z
  .object({
    value: z.string(),
    propertyId: z.number().positive(),
    productId: z.number().positive(),
  })
  .required();
