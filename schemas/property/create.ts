import { z } from 'zod';

export const propertyCreateScheme = z
  .object({
    prototypeId: z.number().positive(),
    name: z.string().optional().default(''),
    suffix: z.string().optional().default(''),
    isFilter: z.boolean().optional(),
    display: z.boolean().optional(),
  })
  .required();
