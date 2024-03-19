import { BaseRouter } from '../../../../baseRouter';
import { CreateRoute } from './create';

export class CharacteristicRoute extends BaseRouter {
  private prototypeIdMask: string;
  create: CreateRoute;
  constructor(baseRoute: string, idMask: string) {
    super([baseRoute, `:${idMask}`, 'characteristics']);
    this.prototypeIdMask = idMask;
    this.create = new CreateRoute(this.baseRoute, this.prototypeIdMask);
  }
  getRoute(id: number) {
    return this.baseRoute.replace(this.prototypeIdMask, String(id));
  }
}
