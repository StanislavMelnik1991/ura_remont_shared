import { BaseRouter } from '../../../baseRouter';
import scheme from './scheme';

export class CreateType extends BaseRouter {
  scheme: typeof scheme;
  constructor(baseRoute: string) {
    super([baseRoute]);
    this.scheme = scheme;
  }
}
