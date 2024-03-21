import { BaseRouter } from '../../../baseRouter';
import { CurrentRouter } from './current';

export class TypeRouter extends BaseRouter {
  current: CurrentRouter;
  constructor(baseRoute: string) {
    super([baseRoute, 'type']);
    this.current = new CurrentRouter(this.baseRoute);
  }
}
