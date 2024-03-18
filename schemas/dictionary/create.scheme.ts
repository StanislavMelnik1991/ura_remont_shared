import { z } from 'zod';

export const createDictionaryScheme = z
  .object({
    ru: z.string(),
    be: z.string().optional(),
    en: z.string().optional(),
    uk: z.string().optional(),
    pl: z.string().optional(),
  })
  .required();

export type CreateDictionarySchemeType = z.infer<typeof createDictionaryScheme>;
