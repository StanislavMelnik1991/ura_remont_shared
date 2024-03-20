import { BaseRouter } from '../../../baseRouter';
import scheme from './scheme';

export class TelegramRouter extends BaseRouter {
  scheme: typeof scheme;
  constructor(baseRoute: string) {
    super([baseRoute, 'telegram']);
    this.scheme = scheme;
  }
}
