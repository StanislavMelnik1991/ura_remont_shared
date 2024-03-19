import { CharacteristicRoute } from './characteristic';
import { GetRoute } from './get';
import { PropertyRoute } from './property';

const ID_MASK = 'prototypeId';

export class CurrentBrand {
  idMask: string;
  property: PropertyRoute;
  value: CharacteristicRoute;
  getCurrent: GetRoute;
  constructor(baseRoute: string) {
    this.idMask = ID_MASK;
    this.property = new PropertyRoute(baseRoute, this.idMask);
    this.value = new CharacteristicRoute(baseRoute, this.idMask);
    this.getCurrent = new GetRoute(baseRoute, this.idMask);
  }
}
