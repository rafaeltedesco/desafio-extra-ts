import { Request, Response } from 'express';
import { LocalResSignInPayload } from '../../types/SignInPayload';
import signInService from '../../services/auth/signInService';

const signIn = async (_req: Request, res: Response): Promise<Response> => {
  const { payload } = res.locals as LocalResSignInPayload;
  const response = await signInService.signIn(payload);
  if (response.status === 'SUCCESS') {
    return res.status(response.statusCode).json({
      token: response.data.token,
    });
  }
  return res.status(response.statusCode).json({
    message: response.message,
  });
};

export default {
  signIn,
};