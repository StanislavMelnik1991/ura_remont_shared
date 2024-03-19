import { z } from 'zod';

export default z
  .object({
    value: z.string(),
  })
  .required();
