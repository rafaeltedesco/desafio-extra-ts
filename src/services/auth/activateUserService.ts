import { ActivationUrlPayload } from '../../types/ActivationUrlPayload';
import { ServiceResponse } from '../../types/ServiceResponse';
import userService from '../userService';

const activateUser = async (payload: ActivationUrlPayload) : Promise<ServiceResponse<null>> => {
  const response = await userService.activateUser(payload);
  if (!response.activated) {
    return { status: 'ERROR', statusCode: response.statusCode, message: response.message };
  }
  return { 
    status: 'SUCCESS', 
    statusCode: response.statusCode,
    message: `User with id ${payload.id} was activated!`,
    data: null,
  };
};

export default {
  activateUser,
};