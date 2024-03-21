import { BaseRouter } from '../../../../baseRouter';

export class GetRoute extends BaseRouter {
  private brandIdMask: string;
  constructor(baseRoute: string, dictionaryIdMask: string) {
    super([baseRoute, `:${dictionaryIdMask}`]);
    this.brandIdMask = dictionaryIdMask;
  }
  getRoute(id: number) {
    return this.baseRoute.replace(`:${this.brandIdMask}`, String(id));
  }
}
