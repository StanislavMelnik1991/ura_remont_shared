import { BaseInterface } from './base.interface';
import { IDictionary } from '.';

export interface IBrand extends BaseInterface {
  nameId: number;
  descriptionId: number;
}

export interface IBrandLocalized extends BaseInterface {
  name: IDictionary;
  description: IDictionary;
}
