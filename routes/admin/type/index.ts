import { BaseRouter } from '../../baseRouter';
import { CreateType } from './create';
import { CurrentRoute } from './current';

export class TypeRouter extends BaseRouter {
  create: CreateType;
  current: CurrentRoute;
  constructor(baseRoute: string) {
    super([baseRoute, 'type']);

    this.current = new CurrentRoute(this.baseRoute);
    this.create = new CreateType(this.baseRoute);
  }
}
