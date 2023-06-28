import { DecodedUserToken } from '../types/DecodedUserToken';
import { Profile } from '../types/Profile';
import { ServiceResponse } from '../types/ServiceResponse';
import userModelService from './userModelService';

const showProfile = async (payload: DecodedUserToken): Promise<ServiceResponse<Profile>> => {
  const user = await userModelService.findUserByEmail(payload.user.email, false);
  if (!user) {
    return { status: 'ERROR', message: 'Invalid User', statusCode: 404 };
  }
  const { id, email, username, status, urls }: Profile = user.dataValues; 
  const userResponse: Profile = { id, email, username, status, urls };
  return { status: 'SUCCESS', data: userResponse, message: '', statusCode: 200 };
};

export default {
  showProfile,
};