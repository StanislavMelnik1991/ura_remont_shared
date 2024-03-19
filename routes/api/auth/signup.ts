import { BaseRouter } from '../../baseRouter';

export class SignUp extends BaseRouter {
  constructor(baseRoute: string) {
    super([baseRoute, 'signup']);
  }
}
