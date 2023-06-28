import { Url } from './Url';

export type Profile = {
  id: number,
  username: string,
  email: string,
  status: number,
  urls?: Url[],
};