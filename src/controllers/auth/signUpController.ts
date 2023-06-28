import { Request, Response } from 'express';
import { LocalResPayload } from '../../types/SignUpPayload';
import signUpService from '../../services/auth/signUpService';

const signUp = async (req: Request, res: Response): Promise<Response> => {
  const { payload } = res.locals as LocalResPayload;
  const result = await signUpService.signUp(payload);
  if (result.status === 'SUCCESS') {
    return res.status(result.statusCode).json(
      { message: result.message, data: result.data, activationUrl: result.activationUrl },
    );
  }
  return res.status(result.statusCode).json({ message: result.message });
};

export default {
  signUp,
};