import { z } from 'zod';

export const characteristicCreateScheme = z
  .object({
    name: z.string(),
    suffix: z.string(),
    isFilter: z.boolean().optional(),
    display: z.boolean().optional(),
    typeId: z.number().positive(),
  })
  .required();
