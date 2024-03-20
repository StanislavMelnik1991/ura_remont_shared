import { BaseRouter } from '../../baseRouter';
import { authScheme } from './scheme';
import { SignUp } from './signup';
import { SignIn } from './singIn';
import { TelegramRouter } from './telegram';

export class AuthRouter extends BaseRouter {
  signup: SignUp;
  signIn: SignIn;
  telegram: TelegramRouter;
  scheme: typeof authScheme;
  constructor(baseRoute: string) {
    super([baseRoute, 'auth']);
    this.signIn = new SignIn(this.baseRoute);
    this.signup = new SignUp(this.baseRoute);
    this.telegram = new TelegramRouter(this.baseRoute);
    this.scheme = authScheme;
  }
}
