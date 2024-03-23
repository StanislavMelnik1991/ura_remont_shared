import { z } from 'zod';

export const typeCreateScheme = z
  .object({
    name: z.string(),
    description: z.string().optional(),
  })
  .required();
