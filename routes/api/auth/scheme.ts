import { z } from 'zod';

const PASSWORD_REGEX =
  /(?=^.{8,}$)((?=.*\d))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;

export const authScheme = z
  .object({
    login: z.string(),
    password: z
      .string()
      .regex(
        PASSWORD_REGEX,
        'The password must contain 8 or more characters with at least one lover case and capital letter (a-z) and one number (0-9).',
      ),
  })
  .required();
