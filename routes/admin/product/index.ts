import { BaseRouter } from '../../baseRouter';
import { CreateRoute } from './create';
import { CurrentRoute } from './current';

export class ProductRouter extends BaseRouter {
  current: CurrentRoute;
  create: CreateRoute;
  constructor(baseRoute: string) {
    super([baseRoute, 'product']);
    this.current = new CurrentRoute(this.baseRoute);
    this.create = new CreateRoute(this.baseRoute);
  }
}
