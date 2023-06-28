import { SignUpPayload } from '../../types/SignUpPayload';
import { SignUpServiceResponse } from '../../types/SignUpServiceResponse';
import { UserResponse } from '../../types/UserResponse';
import buildActivationUrl from '../../utils/activationUrlBuilder';
import userService from '../userService';

const signUp = async (payload: SignUpPayload) : 
Promise<SignUpServiceResponse<UserResponse>> => {
  const user = await userService.findUserByEmail(payload.email);
  if (user) {
    return { status: 'ERROR', statusCode: 409, message: 'User already exists with this email' };
  }
  const newUser = await userService.createUser(payload);
  // Challenge 1:
  // Não deve devolver o activationCode para o client diretamente
  // Deve ser enviado o código para o email informado
  const { id, username, email, activationCode } = newUser.dataValues;
  return { 
    status: 'SUCCESS',
    statusCode: 201, 
    data: { id, username, email },
    activationUrl: buildActivationUrl({ id, activationCode }),
    message: 'User was registered! Check your email to activate your account',
  };
};

export default {
  signUp,
};