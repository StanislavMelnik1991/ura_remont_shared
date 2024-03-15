import { ApiProperty } from '@nestjs/swagger';
import { BaseScheme } from '../base';

export class PropertyValueScheme extends BaseScheme {
  @ApiProperty({
    description: 'prototype Id',
    example: 1,
    required: true,
  })
  productId: number;

  @ApiProperty({
    description: 'property Id',
    example: 1,
    required: true,
  })
  propertyId: number;

  @ApiProperty({
    description: 'property value',
    required: true,
  })
  value: string;
}

export type PropertyValueSchemeType = {
  [P in keyof PropertyValueScheme]: PropertyValueScheme[P];
};
