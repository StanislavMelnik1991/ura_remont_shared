import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, Matches } from 'class-validator';
import { PASSWORD_REGEX } from 'shared/constants/regex.constants';

export class SingUpDto {
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
