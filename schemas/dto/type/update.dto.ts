import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsObject } from 'class-validator';
import { UpdateDictionaryDto } from '../dictionary';

export class UpdateTypeDto {
  @ApiProperty()
  @IsOptional()
  @IsObject()
  name?: UpdateDictionaryDto;

  @ApiProperty()
  @IsOptional()
  @IsObject()
  description?: UpdateDictionaryDto;
}
