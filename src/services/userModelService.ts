import UrlModel from '../database/models/Url';
import UserModel, { UserModelType } from '../database/models/User';
import { ActivationResponse } from '../types/ActivationResponse';
import { ActivationUrlPayload } from '../types/ActivationUrlPayload';
import { SignUpPayload } from '../types/SignUpPayload';
import activationCodeGenerator from '../utils/activationCodeGenerator';

const findUserByEmail = async (email: string, lazy = true): Promise<UserModelType | null> => {
  if (lazy) {
    return UserModel.findOne({ where: { email } });
  }
  return UserModel.findOne({ where: { email }, 
    include: { model: UrlModel, as: 'urls', attributes: { exclude: ['userId', 'id'] } } });
};
  
const createUser = async (payload: SignUpPayload): Promise<UserModelType> => {
  const newUser = UserModel.build({
    ...payload,
    activationCode: activationCodeGenerator.generateActivationCode(),
  });
  return newUser.save();
};

const findById = async (id: number) : Promise<UserModelType | null> =>
  UserModel.findByPk(id);

const activateUser = async (payload: ActivationUrlPayload): Promise<ActivationResponse> => {
  const user = await findById(payload.id);
  if (!user) {
    return { activated: false, message: 'Invalid User', statusCode: 404 };
  }
  if (user.dataValues.status === 1) {
    return { 
      activated: false, message: `User with id ${payload.id} already activated`, statusCode: 403,
    };
  }
  
  if (user.dataValues.activationCode !== payload.activationCode) {
    return { activated: false, message: 'Invalid Activation Code', statusCode: 403 };
  }
  user.setDataValue('status', 1);
  await user.save();
  return { activated: true, message: `User with id ${payload.id} was activated!`, statusCode: 200 };
};

export default {
  findUserByEmail,
  createUser,
  findById,
  activateUser,
};