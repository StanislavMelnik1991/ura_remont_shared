import { z } from 'zod';

export const dictionaryUpdateScheme = z
  .object({
    ru: z.string().optional(),
    be: z.string().optional(),
    en: z.string().optional(),
    uk: z.string().optional(),
    pl: z.string().optional(),
  })
  .required();
