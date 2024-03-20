import { z } from 'zod';

export default z
  .object({
    id: z.number(),
    first_name: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    photo_url: z.string().optional().nullable(),
    auth_date: z.string().transform((date) => new Date(date)),
    hash: z.string(),
  })
  .required();
