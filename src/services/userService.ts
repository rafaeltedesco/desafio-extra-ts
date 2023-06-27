import UserModel, { UserModelType } from '../database/models/User';
import { SignUpPayload } from '../types/SignUpPayload';
import activationCodeGenerator from '../utils/activationCodeGenerator';

const findUserByEmail = async (email: string): Promise<UserModelType | null> => 
  UserModel.findOne({ where: { email } });

const createUser = async (payload: SignUpPayload): Promise<UserModelType> => {
  const newUser = UserModel.build({
    ...payload,
    activationCode: activationCodeGenerator.generateActivationCode(),
  });
  return newUser.save();
};

export default {
  findUserByEmail,
  createUser,
};