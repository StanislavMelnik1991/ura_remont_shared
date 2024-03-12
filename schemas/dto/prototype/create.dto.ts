import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsPositive,
} from 'class-validator';

export class CreatePrototypeDto {
  @ApiProperty({
    example: 'Amphibolin',
    description: 'Name of production',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'best pain',
    description: 'Production description',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 1, description: 'Brand ID' })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  brandId: number;

  @ApiProperty({ example: 1, description: 'Type ID' })
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  typeId: number;
}

export class CreatePrototypePropertyDto {
  @ApiProperty({
    example: 'Consumption',
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

export class CreatePrototypePropertyValueDto {
  @ApiProperty({ example: 'interier', description: 'Property value (ru)' })
  @IsString()
  @IsNotEmpty()
  value: string;
}
