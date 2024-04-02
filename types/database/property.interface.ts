import { BaseInterface } from './base.interface';
import { IDictionary } from './dictionary.interface';

export interface IProperty extends BaseInterface {
  nameId: number;
  suffixId: number;
  prototypeId: number;
  isFilter: boolean;
  display: boolean;
}

export interface IPropertyFull extends IProperty {
  name: IDictionary;
  suffix: IDictionary;
}
