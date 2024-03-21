import { BaseRouter } from '../../../../baseRouter';

const ID_MASK = 'typeId';
export class CurrentRouter extends BaseRouter {
  brandIdMask: string;
  constructor(baseRoute: string) {
    super([baseRoute, `:${ID_MASK}`]);
    this.brandIdMask = ID_MASK;
  }
  getRoute(id: number) {
    return this.baseRoute.replace(`:${this.brandIdMask}`, String(id));
  }
}
