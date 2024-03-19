import { BaseRouter } from '../baseRouter';
import { AuthRouter } from './auth';

class ApiRouter extends BaseRouter {
  auth: AuthRouter;
  constructor() {
    super(['api']);
    this.auth = new AuthRouter(this.baseRoute);
  }
}

export const apiRouter = new ApiRouter();
