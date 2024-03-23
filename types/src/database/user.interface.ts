import { RolesEnum } from 'shared-constants';
import { BaseInterface } from './base.interface';

export interface IUser extends BaseInterface {
  role: RolesEnum;
  signupToken: string;
  resetPasswordToken: string;
  lastRequest: Date;
  name: string;
}
