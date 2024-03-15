import { ApiProperty } from '@nestjs/swagger';
import { BaseScheme } from '../base';

export class CharacteristicScheme extends BaseScheme {
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
    description: 'type Id',
    example: 1,
    required: true,
  })
  typeId: number;

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

export type CharacteristicSchemeType = {
  [P in keyof CharacteristicScheme]: CharacteristicScheme[P];
};
