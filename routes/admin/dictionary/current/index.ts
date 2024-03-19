import { GetRoute } from './get';
import { UpdateRoute } from './update';

const ID_MASK = 'dictionaryId';

export class CurrentRoute {
  idMask: string;
  update: UpdateRoute;
  getCurrent: GetRoute;
  constructor(baseRoute: string) {
    this.idMask = ID_MASK;
    this.update = new UpdateRoute(baseRoute, this.idMask);
    this.getCurrent = new GetRoute(baseRoute, this.idMask);
  }
}
