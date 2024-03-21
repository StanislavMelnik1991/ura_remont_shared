import { BaseRouter } from '../../../../../baseRouter';

export class GetCharacteristicRoute extends BaseRouter {
  typeIdMask: string;
  constructor(baseRoute: string, idMask: string) {
    super([baseRoute]);
    this.typeIdMask = idMask;
  }
  getRoute(id: number) {
    return this.baseRoute.replace(`:${this.typeIdMask}`, String(id));
  }
}
