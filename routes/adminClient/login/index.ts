import { BaseRouter } from '../../baseRouter';
import { TelegramRouter } from './telegram';

export class LoginRouter extends BaseRouter {
  telegramAuth: TelegramRouter;
  constructor(baseRoute: string) {
    super([baseRoute, 'login']);
    this.telegramAuth = new TelegramRouter(this.baseRoute);
  }
}
