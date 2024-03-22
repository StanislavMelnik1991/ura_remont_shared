import { BaseRouter } from '../../../../baseRouter';
import scheme from './scheme';

export class UpdateRoute extends BaseRouter {
  private dictionaryIdMask: string;
  scheme: typeof scheme;
  getRoute: (id: number) => string;
  constructor(baseRoute: string, dictionaryIdMask: string) {
    super([baseRoute, `:${dictionaryIdMask}`]);
    this.scheme = scheme;
    this.dictionaryIdMask = dictionaryIdMask;
    this.getRoute = (id) => `${baseRoute}/${id}`;
  }
}
