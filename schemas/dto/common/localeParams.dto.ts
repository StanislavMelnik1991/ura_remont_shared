import { AcceptedLanguagesEnum } from '../../../constants';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum } from 'class-validator';

export class LocaleParamsDto {
  @ApiProperty({ enum: AcceptedLanguagesEnum })
  @IsString()
  @IsEnum(AcceptedLanguagesEnum)
  locale?: AcceptedLanguagesEnum;
}
