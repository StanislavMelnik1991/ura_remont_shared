import { BaseRouter } from '../../baseRouter';
import { CurrentRoute } from './current';

export class DictionaryRouter extends BaseRouter {
  current: CurrentRoute;
  constructor(baseRoute: string) {
    super([baseRoute, 'dictionary']);

    this.current = new CurrentRoute(this.baseRoute);
  }
}
