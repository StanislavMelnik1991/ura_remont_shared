import { BaseRouter } from '../../../../baseRouter';

export class GetRoute extends BaseRouter {
  private dictionaryIdMask: string;
  constructor(baseRoute: string, dictionaryIdMask: string) {
    super([baseRoute, `:${dictionaryIdMask}`]);
    this.dictionaryIdMask = dictionaryIdMask;
  }
  getRoute(id: number) {
    return this.baseRoute.replace(this.dictionaryIdMask, String(id));
  }
}
