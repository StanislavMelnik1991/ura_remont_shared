import { ApiProperty } from '@nestjs/swagger';
import { BaseScheme } from '../base';

export class PropertyScheme extends BaseScheme {
  @ApiProperty({
    description: 'dictionary Id',
    example: 1,
    required: true,
  })
  name: number;

  @ApiProperty({
    description: 'dictionary Id',
    example: 1,
    required: false,
  })
  suffix: number;

  @ApiProperty({
    description: 'prototype Id',
    example: 1,
    required: true,
  })
  prototypeId: number;

  @ApiProperty({
    description: 'is characteristic used like filter',
    example: false,
    required: true,
  })
  isFilter: boolean;

  @ApiProperty({
    description: 'is characteristic displayed',
    example: false,
    required: true,
  })
  display: boolean;
}

export type PropertySchemeType = {
  [P in keyof PropertyScheme]: PropertyScheme[P];
};
