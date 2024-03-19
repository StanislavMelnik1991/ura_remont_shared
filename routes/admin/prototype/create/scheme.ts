import { z } from 'zod';

export default z
  .object({
    name: z.string(),
    description: z.string().optional(),
    brandId: z.number(),
    typeId: z.number(),
  })
  .required();
