import { BaseInterface } from './base.interface';
import { IDictionary } from './dictionary.interface';

export interface ICharacteristic extends BaseInterface {
  nameId: number;
  suffixId: number;
  typeId: number;
  isFilter: boolean;
  display: boolean;
}

export interface ICharacteristicFull extends ICharacteristic {
  name: IDictionary;
  suffix: IDictionary;
  typeId: number;
  isFilter: boolean;
  display: boolean;
}
