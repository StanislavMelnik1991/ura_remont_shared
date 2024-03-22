import { BaseRouter } from '../../../../baseRouter';

export class GetRoute extends BaseRouter {
  private brandIdMask: string;
  getRoute: (id: number) => string;
  constructor(baseRoute: string, dictionaryIdMask: string) {
    super([baseRoute, `:${dictionaryIdMask}`]);
    this.brandIdMask = dictionaryIdMask;
    this.getRoute = (id) => `${baseRoute}/${id}`;
  }
}
