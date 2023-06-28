import { Request, Response } from 'express';
import activateUserService from '../../services/auth/activateUserService';

const activateUser = async (req: Request, res: Response) : Promise<Response> => {
  const { userId, activationCode } = req.params;
  const result = await activateUserService.activateUser({ id: Number(userId), activationCode });
  return res.status(result.statusCode).json({
    message: result.message,
  });
};

export default {
  activateUser,
};