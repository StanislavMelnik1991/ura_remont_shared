import { BaseRouter } from '../../../../../baseRouter';
import scheme from './scheme';

export class CreateRoute extends BaseRouter {
  scheme: typeof scheme;
  prototypeIdMask: string;
  constructor(baseRoute: string, idMask: string) {
    super([baseRoute]);
    this.prototypeIdMask = idMask;
    this.scheme = scheme;
  }
  getRoute(id: number) {
    return this.baseRoute.replace(this.prototypeIdMask, String(id));
  }
}
