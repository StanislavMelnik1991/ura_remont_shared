import { ApiProperty } from '@nestjs/swagger';
import { CreateDictionaryDto } from '../dictionary';

export class ProductPrototypeResponse {
  @ApiProperty({
    description: 'ID',
    example: 1,
    required: true,
  })
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ example: 1, description: 'Brand ID' })
  brandId: number;

  @ApiProperty({ example: 1, description: 'Type ID' })
  typeId: number;

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

export class TypePropertyValueResponse {
  @ApiProperty({
    description: 'ID',
    example: 1,
    required: true,
  })
  id: number;

  @ApiProperty({
    example: true,
    description: 'Whether this property is shown in the filter list',
  })
  isFilter: boolean;
  @ApiProperty({
    example: true,
    description: 'Whether this property is shown in the product properties',
  })
  display: boolean;

  @ApiProperty({
    example: 'interier',
    description: 'Property value (ru)',
    required: false,
  })
  value: string;
  @ApiProperty({
    example: 'field of application',
    description: 'Property name (ru)',
  })
  name: CreateDictionaryDto;
  @ApiProperty({ example: 'l/m²', description: 'Property suffix (ru)' })
  suffix: CreateDictionaryDto;
}
