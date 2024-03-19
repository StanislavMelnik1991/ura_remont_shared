import { BaseRouter } from '../../baseRouter';
import { CreatePrototype } from './create';
import { CurrentBrand } from './current';

export class PrototypeRouter extends BaseRouter {
  create: CreatePrototype;
  current: CurrentBrand;
  constructor(baseRoute: string) {
    super([baseRoute, 'prototype']);

    this.current = new CurrentBrand(this.baseRoute);
    this.create = new CreatePrototype(this.baseRoute);
  }
}
