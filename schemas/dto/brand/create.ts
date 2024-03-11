import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBrandDto {
  @ApiProperty({
    example: 'Caparol',
    description: 'Brand name (ru)',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Brand description (ru)',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}
