import { BaseRouter } from '../../../../baseRouter';

export class CreateRouter extends BaseRouter {
  constructor(baseRoute: string) {
    super([baseRoute, 'create']);
  }
}
