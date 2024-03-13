import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 1,
    description: 'Id of prototype reference',
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  prototypeId: number;

  @ApiProperty({
    example: 'TD99AS8',
    description: '1c ID',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  externalId: string;

  @ApiProperty({
    example: 'Amphibolin b1 10l',
    description: '1c name',
    required: false,
  })
  @IsString()
  @IsOptional()
  externalName?: string;

  @ApiProperty({
    example: 10,
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  availableQuantity: number;

  @ApiProperty({
    example: 100.99,
    required: true,
  })
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  price: number;
}

export class CreatePropertyValueDto {
  @ApiProperty({ example: '10', description: 'Property value (ru)' })
  @IsString()
  @IsNotEmpty()
  value: string;
}
