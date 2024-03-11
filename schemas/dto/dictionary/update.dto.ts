import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateDictionaryDto {
  @ApiProperty({
    description: 'ru language value',
    example: 'язык',
  })
  @IsString({ message: 'Not a string' })
  @IsOptional()
  ru?: string;

  @ApiProperty({
    description: 'belarus language value',
    example: 'мова',
  })
  @IsString({ message: 'Not a string' })
  @IsOptional()
  be?: string;

  @ApiProperty({
    description: 'ukrainian language value',
    example: 'мова',
  })
  @IsString({ message: 'Not a string' })
  @IsOptional()
  uk?: string;

  @ApiProperty({
    description: 'english language value',
    example: 'language',
  })
  @IsString({ message: 'Not a string' })
  @IsOptional()
  en?: string;

  @ApiProperty({
    description: 'poland language value',
    example: 'language',
  })
  @IsString({ message: 'Not a string' })
  @IsOptional()
  pl?: string;
}
