import { BaseInterface } from './base.interface';

export interface IImage extends BaseInterface {
  image: string;
  filePath?: string;
  listId: number;
  index?: number;
}

export interface IImageList extends BaseInterface {
  images: Array<IImage>;
}
