import { z } from 'zod';

export const typeGetAllScheme = z
  .object({
    page: z.string().transform(Number).optional().default('1'),
    perPage: z.string().transform(Number).optional().default('10'),
    searchValue: z.string().trim().toLowerCase().optional().default(''),
  })
  .required();
