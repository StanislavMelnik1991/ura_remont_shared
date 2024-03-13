import { ApiProperty } from '@nestjs/swagger';

export class PublicProduct {
  @ApiProperty()
  id: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  prototypeId: number;

  @ApiProperty({ description: '1c ID' })
  externalId: string;
  @ApiProperty({ description: '1c name' })
  externalName?: string;

  @ApiProperty()
  availableQuantity: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  soldQuantity: number;
  @ApiProperty()
  pendingQuantity: number;
}
