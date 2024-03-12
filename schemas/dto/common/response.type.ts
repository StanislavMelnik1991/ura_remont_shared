import { ApiProperty } from '@nestjs/swagger';

export class IdOnlyResponse {
  @ApiProperty({
    description: 'Entity ID',
    example: 124458,
    required: true,
  })
  id: number;
}
