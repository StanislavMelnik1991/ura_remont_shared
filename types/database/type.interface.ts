import { BaseInterface } from './base.interface';
import { ICharacteristicFull, IDictionary, IImage } from '.';

export interface IProductType extends BaseInterface {
  nameId: number;
  descriptionId: number;
  listId: number;
}

export interface ITypeFull extends BaseInterface {
  nameId: number;
  descriptionId: number;
  listId: number;
  name: IDictionary;
  description: IDictionary;
  images: ImageList;
  characteristics: Array<ICharacteristicFull>;
}

interface ImageList extends BaseInterface {
  images: Array<IImage>;
}
