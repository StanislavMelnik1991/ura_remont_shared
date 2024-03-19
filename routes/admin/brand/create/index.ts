import { BaseRouter } from '../../../baseRouter';
import createBrandScheme from './scheme';

export class CreateRoute extends BaseRouter {
  scheme: typeof createBrandScheme;
  constructor(baseRoute: string) {
    super([baseRoute]);
    this.scheme = createBrandScheme;
  }
}
