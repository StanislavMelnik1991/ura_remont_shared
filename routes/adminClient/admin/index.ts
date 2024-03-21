import { BaseRouter } from '../../baseRouter';
import { BrandRouter } from './brand';
import { TypeRouter } from './type';

export class AdminRouter extends BaseRouter {
  brand: BrandRouter;
  type: TypeRouter;
  constructor(baseRoute: string) {
    super([baseRoute, 'admin']);
    this.brand = new BrandRouter(this.baseRoute);
    this.type = new TypeRouter(this.baseRoute);
  }
}
