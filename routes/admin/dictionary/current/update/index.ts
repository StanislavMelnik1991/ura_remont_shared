import { BaseRouter } from '../../../../baseRouter';
import scheme from './scheme';

export class UpdateRoute extends BaseRouter {
  private dictionaryIdMask: string;
  scheme: typeof scheme;
  constructor(baseRoute: string, dictionaryIdMask: string) {
    super([baseRoute, `:${dictionaryIdMask}`]);
    this.scheme = scheme;
    this.dictionaryIdMask = dictionaryIdMask;
  }
  getRoute(id: number) {
    return this.baseRoute.replace(this.dictionaryIdMask, String(id));
  }
}
