import { BaseRouter } from '../../baseRouter';
import { CreateRoute } from './create';
import { CurrentRoute } from './current';
import { GetAllRoute } from './getAll';

export class BrandRouter extends BaseRouter {
  create: CreateRoute;
  current: CurrentRoute;
  getAll: GetAllRoute;
  constructor(baseRoute: string) {
    super([baseRoute, 'brand']);

    this.current = new CurrentRoute(this.baseRoute);
    this.create = new CreateRoute(this.baseRoute);
    this.getAll = new GetAllRoute(this.baseRoute);
  }
}
