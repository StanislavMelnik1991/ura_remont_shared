import { BaseInterface } from './base.interface';

export interface ICharacteristicValue extends BaseInterface {
  prototypeId: number;

  characteristicId: number;
  value: string;
}
