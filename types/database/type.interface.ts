import { BaseInterface } from './base.interface';
import { IDictionary, IImage } from '.';

export interface IProductType extends BaseInterface {
  nameId: number;
  descriptionId: number;
}

export interface ITypeFull extends BaseInterface {
  name: IDictionary;
  description: IDictionary;
  images: ImageList;
}

interface ImageList extends BaseInterface {
  images: Array<IImage>;
}
