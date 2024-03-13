import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdateProductDto {
  @ApiProperty({
    example: 'TD99AS8',
    description: '1c ID',
    required: false,
  })
  @IsString()
  @IsOptional()
  externalId?: string;

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
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  availableQuantity?: number;

  @ApiProperty({
    example: 100.99,
    required: false,
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;
}
