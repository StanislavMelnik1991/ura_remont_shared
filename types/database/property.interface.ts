import { BaseInterface } from './base.interface';

export interface IProperty extends BaseInterface {
  name: number;
  suffix: number;
  prototypeId: number;
  isFilter: boolean;
  display: boolean;
}
