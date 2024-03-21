import { BaseRouter } from '../../../baseRouter';
import { CurrentRouter } from './current';

export class BrandRouter extends BaseRouter {
  current: CurrentRouter;
  constructor(baseRoute: string) {
    super([baseRoute, 'brand']);
    this.current = new CurrentRouter(this.baseRoute);
  }
}
