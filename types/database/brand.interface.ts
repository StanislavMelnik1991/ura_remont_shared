import { BaseInterface } from './base.interface';
import { IDictionary, IImageList } from '.';

export interface IBrand extends BaseInterface {
  nameId: number;
  descriptionId: number;
}

export interface IBrandFull extends IBrand {
  name: IDictionary;
  description: IDictionary;
  images: IImageList;
}
