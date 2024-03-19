import { GetRoute } from './get';

const ID_MASK = 'brandId';

export class CurrentRoute {
  idMask: string;
  getCurrent: GetRoute;
  constructor(baseRoute: string) {
    this.idMask = ID_MASK;
    this.getCurrent = new GetRoute(baseRoute, this.idMask);
  }
}
