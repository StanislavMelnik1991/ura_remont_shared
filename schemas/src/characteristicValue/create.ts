import { z } from 'zod';

export const characteristicValueCreateScheme = z
  .object({
    value: z.string(),
    characteristicId: z.number().positive(),
    prototypeId: z.number().positive(),  })
  .required();
