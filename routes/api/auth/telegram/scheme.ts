import { z } from 'zod';

export default z
  .object({
    id: z.number(),
    first_name: z.string().optional(),
    username: z.string().optional(),
    photo_url: z.string().optional(),
    auth_date: z.date(),
    hash: z.string().optional(),
  })
  .required();
