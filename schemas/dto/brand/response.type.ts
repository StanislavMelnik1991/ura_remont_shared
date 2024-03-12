import { ApiProperty } from '@nestjs/swagger';
import { CreateDictionaryDto } from '../dictionary';

export class PublicBrand {
  @ApiProperty({
    description: 'ID',
    example: 1,
    required: true,
  })
  id: number;

  @ApiProperty({
    description: 'Brand name',
    example: 'Caparol',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'Brand description',
    example: 'The most common manufacturer of facade paints',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Brand logo',
    example: 'https://path/to/image',
    required: false,
  })
  image?: string;
}

export class BrandWithLocales {
  @ApiProperty({
    description: 'ID',
    example: 1,
    required: true,
  })
  id: number;

  @ApiProperty()
  name: CreateDictionaryDto;

  @ApiProperty()
  description: CreateDictionaryDto;

  @ApiProperty({
    description: 'Brand logo',
    example: 'https://path/to/image',
    required: false,
  })
  image?: string;
}
