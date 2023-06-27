import { UserStatus } from './UserStatus';

export type User = {
  id: number,
  username: string,
  email: string,
  password: string,
  status: UserStatus,
  activationCode: string
};