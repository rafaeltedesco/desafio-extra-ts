import { Request, Response } from 'express';
import { DecodedUserToken } from '../../types/DecodedUserToken';

const showProfile = async (req: Request, res: Response): Promise<Response> => {
  const { user } = res.locals as DecodedUserToken;
  return res.status(200).json(user);
};

export default {
  showProfile,
};