import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateDictionaryDto {
  @ApiProperty({
    description: 'ru language value',
    required: true,
    example: 'язык',
  })
  @IsString({ message: 'Not a string' })
  @IsNotEmpty()
  ru: string;

  @ApiProperty({
    description: 'belarus language value',
    required: false,
    example: 'мова',
  })
  @IsString({ message: 'Not a string' })
  be?: string;

  @ApiProperty({
    description: 'ukrainian language value',
    required: false,
    example: 'мова',
  })
  @IsString({ message: 'Not a string' })
  uk?: string;

  @ApiProperty({
    description: 'english language value',
    required: false,
    example: 'language',
  })
  @IsString({ message: 'Not a string' })
  en?: string;

  @ApiProperty({
    description: 'poland language value',
    required: false,
    example: 'language',
  })
  @IsString({ message: 'Not a string' })
  pl?: string;
}
