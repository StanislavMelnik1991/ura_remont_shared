import { ApiProperty } from '@nestjs/swagger';

export class PublicDictionary {
  @ApiProperty({
    description: 'ID',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'ru language value',
    required: true,
    example: 'язык',
  })
  ru: string;

  @ApiProperty({
    description: 'belarus language value',
    required: false,
    example: 'мова',
  })
  be?: string;

  @ApiProperty({
    description: 'ukrainian language value',
    required: false,
    example: 'мова',
  })
  uk?: string;

  @ApiProperty({
    description: 'english language value',
    required: false,
    example: 'language',
  })
  en?: string;

  @ApiProperty({
    description: 'poland language value',
    required: false,
    example: 'language',
  })
  pl?: string;
}
