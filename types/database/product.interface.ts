import { BaseInterface } from './base.interface';

export interface IProduct extends BaseInterface {
  prototypeId: number;
  externalId: string;
  externalName?: string;
  availableQuantity: number;
  price: number;
  soldQuantity: number;
  pendingQuantity: number;
}
