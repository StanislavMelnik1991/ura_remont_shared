import { BaseRouter } from '../../baseRouter';
import { CreateType } from './create';
import { CurrentRoute } from './current';
import { GetAllRoute } from './getAll';

export class TypeRouter extends BaseRouter {
  create: CreateType;
  current: CurrentRoute;
  getAll: GetAllRoute;
  constructor(baseRoute: string) {
    super([baseRoute, 'type']);

    this.current = new CurrentRoute(this.baseRoute);
    this.create = new CreateType(this.baseRoute);
    this.getAll = new GetAllRoute(this.baseRoute);
  }
}
