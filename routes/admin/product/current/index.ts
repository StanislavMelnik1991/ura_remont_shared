import { PropertyRoute } from './property';
import { UpdateRoute } from './update';

const ID_MASK = 'productId';

export class CurrentRoute {
  idMask: string;
  value: PropertyRoute;
  update: UpdateRoute;
  constructor(baseRoute: string) {
    this.idMask = ID_MASK;
    this.value = new PropertyRoute(baseRoute, this.idMask);
    this.update = new UpdateRoute(baseRoute, this.idMask);
  }
}
