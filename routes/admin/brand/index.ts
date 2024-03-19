import { BaseRouter } from '../../baseRouter';
import { CreateRoute } from './create';
import { CurrentRoute } from './current';

export class BrandRouter extends BaseRouter {
  create: CreateRoute;
  current: CurrentRoute;
  constructor(baseRoute: string) {
    super([baseRoute, 'brand']);

    this.current = new CurrentRoute(this.baseRoute);
    this.create = new CreateRoute(this.baseRoute);
  }
}
