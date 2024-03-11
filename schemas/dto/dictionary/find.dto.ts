import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { AcceptedLanguagesEnum } from '../../../constants';

export class FindDictionaryByLocaleDto {
  @ApiProperty({
    description: 'locale name',
    enum: AcceptedLanguagesEnum,
    example: AcceptedLanguagesEnum.EN,
  })
  @IsString({ message: 'Not a string' })
  @IsEnum(AcceptedLanguagesEnum, { message: 'not valid data, must be locale' })
  @IsNotEmpty()
  locale: AcceptedLanguagesEnum;

  @ApiProperty({
    description: 'text',
    example: 'language',
  })
  @IsString({ message: 'Not a string' })
  @IsNotEmpty()
  value: string;
}
