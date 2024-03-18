import { PASSWORD_REGEX } from '../../constants/regex.constants';
import { z } from 'zod';

export const authScheme = z
  .object({
    login: z.string().email(),
    password: z
      .string()
      .regex(
        PASSWORD_REGEX,
        'The password must contain 8 or more characters with at least one lover case and capital letter (a-z) and one number (0-9).',
      ),
  })
  .required();

export type AuthSchemeType = z.infer<typeof authScheme>;
