import { BaseRouter } from '../baseRouter';
import { BrandRouter } from './brand';
import { DictionaryRouter } from './dictionary';
import { ProductRouter } from './product';
import { PrototypeRouter } from './prototype';
import { TypeRouter } from './type';

class AdminRouter extends BaseRouter {
  brand: BrandRouter;
  type: TypeRouter;
  prototype: PrototypeRouter;
  dictionary: DictionaryRouter;
  product: ProductRouter;
  constructor() {
    super(['api', 'admin']);
    this.brand = new BrandRouter(this.baseRoute);
    this.type = new TypeRouter(this.baseRoute);
    this.prototype = new PrototypeRouter(this.baseRoute);
    this.dictionary = new DictionaryRouter(this.baseRoute);
    this.product = new ProductRouter(this.baseRoute);
  }
}

export const adminRouter = new AdminRouter();
