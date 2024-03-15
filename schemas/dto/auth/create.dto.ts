import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { PASSWORD_REGEX } from 'shared/constants/regex.constants';
import { UserSchemeType } from 'shared/schemas/schemes';

export class AuthDto implements Pick<UserSchemeType, 'login' | 'password'> {
  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty({ example: '123qweQWE' })
  @IsNotEmpty()
  @IsString()
  @Matches(PASSWORD_REGEX)
  password: string;
}
