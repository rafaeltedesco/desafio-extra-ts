import { Request, Response } from 'express';
import { DecodedUserToken } from '../../types/DecodedUserToken';
import userService from '../../services/userService';

const showProfile = async (req: Request, res: Response): Promise<Response> => {
  const { user } = res.locals as DecodedUserToken;
  const response = await userService.showProfile({ user });
  if (response.status === 'SUCCESS') {
    return res.status(response.statusCode).json({ 
      profile: response.data,
    });
  }
  return res.status(response.statusCode).json({
    message: response.message,
  });
};

export default {
  showProfile,
};