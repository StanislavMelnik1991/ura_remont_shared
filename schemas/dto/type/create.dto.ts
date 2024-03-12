import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateTypeDto {
  @ApiProperty({
    example: 'Paint',
    description: 'Type name (ru)',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'All paints',
    description: 'Type description (ru)',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}

export class CreateTypePropertyDto {
  @ApiProperty({
    example: 'field of application',
    description: 'Property name (ru)',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'l/m²', description: 'Property suffix (ru)' })
  @IsOptional()
  @IsString()
  suffix: string;

  @ApiProperty({
    example: true,
    description: 'Whether this property is shown in the filter list',
  })
  @IsOptional()
  @IsBoolean()
  isFilter?: boolean;

  @ApiProperty({
    example: true,
    description: 'Whether this property is shown in the product properties',
  })
  @IsOptional()
  @IsBoolean()
  display?: boolean;
}

export class CreateTypePropertyValueDto {
  @ApiProperty({ example: 'interier', description: 'Property value (ru)' })
  @IsString()
  @IsNotEmpty()
  value: string;

  @ApiProperty({ example: 1, description: 'Property ID' })
  @IsNumber()
  @IsNotEmpty()
  propertyId: number;

  @ApiProperty({ example: 1, description: 'Prototype ID' })
  @IsNumber()
  @IsNotEmpty()
  prototypeId: number;
}
