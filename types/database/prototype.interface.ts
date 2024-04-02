import { BaseInterface } from './base.interface';
import { IDictionary } from './dictionary.interface';

export interface IPrototype extends BaseInterface {
  brandId: number;
  typeId: number;
  nameId: number;
  descriptionId: number;
}

export interface IPrototypeFull extends IPrototype {
  brandId: number;
  typeId: number;
  name: IDictionary;
  description: IDictionary;
}
