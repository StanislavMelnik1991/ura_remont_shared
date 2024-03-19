import { z } from 'zod';

export default z
  .object({
    name: z.string(),
    suffix: z.string(),
    isFilter: z.boolean().optional(),
    display: z.boolean().optional(),
  })
  .required();
