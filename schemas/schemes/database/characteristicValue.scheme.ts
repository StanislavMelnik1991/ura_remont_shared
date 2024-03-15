import { ApiProperty } from '@nestjs/swagger';
import { BaseScheme } from '../base';

export class CharacteristicValueScheme extends BaseScheme {
  @ApiProperty({
    description: 'prototype Id',
    example: 1,
    required: true,
  })
  prototypeId: number;

  @ApiProperty({
    description: 'characteristic Id',
    example: 1,
    required: true,
  })
  characteristicId: number;

  @ApiProperty({
    description: 'characteristic value',
    required: true,
  })
  value: string;
}

export type CharacteristicValueSchemeType = {
  [P in keyof CharacteristicValueScheme]: CharacteristicValueScheme[P];
};
