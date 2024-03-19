import { BaseRouter } from '../../baseRouter';
import { authScheme } from './scheme';
import { SignUp } from './signup';
import { SignIn } from './singIn';

export class AuthRouter extends BaseRouter {
  signup: SignUp;
  signIn: SignIn;
  scheme: typeof authScheme;
  constructor(baseRoute: string) {
    super([baseRoute, 'auth']);
    this.signIn = new SignIn(this.baseRoute);
    this.signup = new SignUp(this.baseRoute);
    this.scheme = authScheme;
  }
}
