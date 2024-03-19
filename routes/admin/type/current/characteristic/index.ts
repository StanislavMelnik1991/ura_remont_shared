import { BaseRouter } from '../../../../baseRouter';
import { CreateCharacteristicRoute } from './create';
import { GetCharacteristicRoute } from './getAll';

export class CharacteristicRoute extends BaseRouter {
  private typeIdMask: string;
  create: CreateCharacteristicRoute;
  getAll: GetCharacteristicRoute;
  constructor(baseRoute: string, idMask: string) {
    super([baseRoute, 'characteristics']);
    this.typeIdMask = idMask;
    this.getAll = new GetCharacteristicRoute(this.baseRoute, this.typeIdMask);
    this.create = new CreateCharacteristicRoute(
      this.baseRoute,
      this.typeIdMask,
    );
  }
  getRoute(id: number) {
    return this.baseRoute.replace(this.typeIdMask, String(id));
  }
}
