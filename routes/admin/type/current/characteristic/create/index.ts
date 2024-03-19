import { BaseRouter } from '../../../../../baseRouter';
import scheme from './scheme';

export class CreateCharacteristicRoute extends BaseRouter {
  scheme: typeof scheme;
  typeIdMask: string;
  constructor(baseRoute: string, idMask: string) {
    super([baseRoute]);
    this.typeIdMask = idMask;
    this.scheme = scheme;
  }
  getRoute(id: number) {
    return this.baseRoute.replace(this.typeIdMask, String(id));
  }
}
