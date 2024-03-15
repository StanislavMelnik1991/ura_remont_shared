import { ApiProperty } from '@nestjs/swagger';
import { BaseScheme } from '../base';

export class PrototypeScheme extends BaseScheme {
  @ApiProperty({ example: 1 })
  brandId: number;

  @ApiProperty({ example: 1 })
  typeId: number;

  @ApiProperty({ example: 'Amphibolin', required: true })
  name: number;

  @ApiProperty({ example: 'универсальная акрилатная краска', required: false })
  description?: number;
}

export type PrototypeSchemeType = {
  [P in keyof PrototypeScheme]: PrototypeScheme[P];
};
