import { BaseRouter } from '../../../../baseRouter';
import { CreateRoute } from './create';
import { GetAllRoute } from './getAll';

export class PropertyRoute extends BaseRouter {
  private prototypeIdMask: string;
  create: CreateRoute;
  getAll: GetAllRoute;
  constructor(baseRoute: string, idMask: string) {
    super([baseRoute, `:${idMask}`, 'properties']);
    this.prototypeIdMask = idMask;
    this.getAll = new GetAllRoute(this.baseRoute, this.prototypeIdMask);
    this.create = new CreateRoute(this.baseRoute, this.prototypeIdMask);
  }
  getRoute(id: number) {
    return this.baseRoute.replace(`:${this.prototypeIdMask}`, String(id));
  }
}
