import { BaseInterface } from './base.interface';

export interface IPropertyValue extends BaseInterface {
  productId: number;
  propertyId: number;
  value: string;
}
