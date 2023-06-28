import { ServiceResponse } from '../../types/ServiceResponse';
import { SignInPayload } from '../../types/SignInPayload';
import { Token } from '../../types/Token';
import { TokenPayload } from '../../types/TokenPayload';
import fakeTokenGenerator from '../../utils/fakeTokenGenerator';
import userService from '../userModelService';

const signIn = async (payload: SignInPayload):Promise<ServiceResponse<Token>> => {
  const user = await userService.findUserByEmail(payload.email);
  if (!user) {
    return { status: 'ERROR', statusCode: 404, message: 'Invalid User' };
  }
  if (user.dataValues.status !== 1) {
    return { status: 'ERROR', statusCode: 401, message: 'Inactive User!' };
  }
  if (user.dataValues.password !== payload.password) {
    return { status: 'ERROR', statusCode: 401, message: 'Invalid User or Password!' };
  }
  // Challenge 2
  // Deve gerar e devolver um token JWT
  const tokenPayload: TokenPayload = { id: user.dataValues.id, email: payload.email };
  return { 
    status: 'SUCCESS', 
    statusCode: 200, 
    data: { token: fakeTokenGenerator.generateFakeToken(tokenPayload) },
    message: 'Token gerado',
  };
};

export default {
  signIn,
};