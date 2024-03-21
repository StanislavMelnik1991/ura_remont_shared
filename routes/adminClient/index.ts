import { BaseRouter } from '../baseRouter';
import { AdminRouter } from './admin';
import { TelegramRouter } from './telegram';

class AdminClientRouter extends BaseRouter {
  telegramAuth: TelegramRouter;
  admin: AdminRouter;
  constructor() {
    super([]);
    this.telegramAuth = new TelegramRouter(this.baseRoute);
    this.admin = new AdminRouter(this.baseRoute);
  }
}

export const adminClientRouter = new AdminClientRouter();
