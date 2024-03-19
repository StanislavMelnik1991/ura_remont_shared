import { BaseRouter } from '../../../../../baseRouter';
import scheme from './scheme';

const ID_MASK = 'propertyId';

export class CreateRoute extends BaseRouter {
  scheme: typeof scheme;
  private prototypeIdMask: string;
  idMask: string;
  constructor(baseRoute: string, idMask: string) {
    super([baseRoute, `:${ID_MASK}`]);
    this.prototypeIdMask = idMask;
    this.idMask = ID_MASK;
    this.scheme = scheme;
  }
  getRoute(id: number) {
    return this.baseRoute.replace(this.prototypeIdMask, String(id));
  }
}
