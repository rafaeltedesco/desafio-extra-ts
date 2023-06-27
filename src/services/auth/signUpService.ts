import { ServiceResponse } from '../../types/ServiceResponse';
import { SignUpPayload } from '../../types/SignUpPayload';
import { UserResponse } from '../../types/UserResponse';
import userService from '../userService';

const signUp = async (payload: SignUpPayload) : 
Promise<ServiceResponse<UserResponse>> => {
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
    data: { id, username, email, activationCode },
    message: 'User was registered! Check your email to activate your account',
  };
};

export default {
  signUp,
};