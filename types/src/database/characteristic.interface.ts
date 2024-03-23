import { BaseInterface } from './base.interface';

export interface ICharacteristic extends BaseInterface {
  name: number;
  suffix: number;
  typeId: number;
  isFilter: boolean;
  display: boolean;
}
