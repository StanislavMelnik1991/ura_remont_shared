import { BaseInterface } from './base.interface';

export interface IPrototype extends BaseInterface {
  brandId: number;
  typeId: number;
  nameId: number;
  descriptionId?: number;
}
