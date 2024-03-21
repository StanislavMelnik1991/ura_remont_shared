import { BaseRouter } from '../../baseRouter';

export class AdminRouter extends BaseRouter {
  constructor(baseRoute: string) {
    super([baseRoute, 'admin']);
  }
}
