import { GetRoute } from './get';
import { UploadRoute } from './uploadImage';

const ID_MASK = 'brandId';

export class CurrentRoute {
  idMask: string;
  getCurrent: GetRoute;
  upload: UploadRoute;
  constructor(baseRoute: string) {
    this.idMask = ID_MASK;
    this.getCurrent = new GetRoute(baseRoute, this.idMask);
    this.upload = new UploadRoute(baseRoute, this.idMask);
  }
}
