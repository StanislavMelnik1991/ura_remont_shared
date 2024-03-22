import { BaseRouter } from '../../../baseRouter';
import { CreateRouter } from './create';
import { CurrentRouter } from './current';

export class BrandRouter extends BaseRouter {
  current: CurrentRouter;
  create: CreateRouter;
  constructor(baseRoute: string) {
    super([baseRoute, 'brand']);
    this.current = new CurrentRouter(this.baseRoute);
    this.create = new CreateRouter(this.baseRoute);
  }
}
