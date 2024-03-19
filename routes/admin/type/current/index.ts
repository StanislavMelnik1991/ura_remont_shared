import { CharacteristicRoute } from './characteristic';
import { GetRoute } from './get';

const ID_MASK = 'typeId';

export class CurrentRoute {
  idMask: string;
  getCurrent: GetRoute;
  characteristic: CharacteristicRoute;
  constructor(baseRoute: string) {
    this.idMask = ID_MASK;
    this.getCurrent = new GetRoute(baseRoute, this.idMask);
    this.characteristic = new CharacteristicRoute(baseRoute, this.idMask);
  }
}
