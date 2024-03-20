import { BaseInterface } from './base.interface';

export interface IUserTelegram extends BaseInterface {
  first_name: string;
  username: string;
  photo_url: string;
  auth_date: Date;
  userId: number;
}
