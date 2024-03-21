import { BaseRouter } from '../baseRouter';
import { AdminRouter } from './admin';
import { LoginRouter } from './login';

class AdminClientRouter extends BaseRouter {
  login: LoginRouter;
  admin: AdminRouter;
  constructor() {
    super([]);
    this.login = new LoginRouter(this.baseRoute);
    this.admin = new AdminRouter(this.baseRoute);
  }
}

export const adminClientRouter = new AdminClientRouter();
