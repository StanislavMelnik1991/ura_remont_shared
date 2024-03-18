import { RolesEnum } from '../../constants';
import { BaseInterface } from './base.interface';

export interface IUser extends BaseInterface {
  login: string;
  password: string;
  role: RolesEnum;
  signupToken: string;
  resetPasswordToken: string;
  lastRequest: Date;
}
