import { BaseRouter } from '../../../../../baseRouter';

export class GetAllRoute extends BaseRouter {
  prototypeIdMask: string;
  constructor(baseRoute: string, idMask: string) {
    super([baseRoute]);
    this.prototypeIdMask = idMask;
  }
  getRoute(id: number) {
    return this.baseRoute.replace(this.prototypeIdMask, String(id));
  }
}
