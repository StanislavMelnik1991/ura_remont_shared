import { ApiProperty } from '@nestjs/swagger';
import { BaseScheme } from '../base';
import { RolesEnum } from '../../../constants';

export class UserScheme extends BaseScheme {
  @ApiProperty({ example: 'Admin' })
  login: string;

  @ApiProperty({ example: '123qweQWE' })
  password: string;

  @ApiProperty({ example: RolesEnum.USER })
  role: RolesEnum;

  @ApiProperty()
  signupToken: string;

  @ApiProperty()
  resetPasswordToken: string;

  @ApiProperty({ example: new Date() })
  lastRequest: Date;
}

export type UserSchemeType = {
  [P in keyof UserScheme]: UserScheme[P];
};
