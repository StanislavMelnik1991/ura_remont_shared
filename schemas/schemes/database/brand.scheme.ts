import { ApiProperty } from '@nestjs/swagger';
import { BaseScheme } from '../base';

export class BrandScheme extends BaseScheme {
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
  description: number;
}

export type BrandSchemeType = {
  [P in keyof BrandScheme]: BrandScheme[P];
};
