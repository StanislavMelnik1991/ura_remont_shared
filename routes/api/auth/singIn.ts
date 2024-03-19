import { BaseRouter } from '../../baseRouter';

export class SignIn extends BaseRouter {
  constructor(baseRoute: string) {
    super([baseRoute, 'login']);
  }
}
