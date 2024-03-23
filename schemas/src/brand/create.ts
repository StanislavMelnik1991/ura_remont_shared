import { z } from 'zod';

export const brandCreateScheme = z
  .object({
    name: z.string(),
    description: z.string().optional(),
  })
  .required();
