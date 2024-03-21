import { BaseRouter } from '../../../baseRouter';

export class TelegramRouter extends BaseRouter {
  constructor(baseRoute: string) {
    super([baseRoute, 'telegram']);
  }
}
