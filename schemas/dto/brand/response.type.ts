import { ApiProperty } from '@nestjs/swagger';

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
