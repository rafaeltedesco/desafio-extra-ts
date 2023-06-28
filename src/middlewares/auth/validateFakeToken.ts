import { NextFunction, Request, Response } from 'express';

const validateFakeToken = async (req: Request, res: Response, next: NextFunction):
Promise<Response | void> => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Must send token' });
  }
  const data = authorization.split('-');
  const id = data[0];
  const email = data.slice(2).join('-');
  if (!email || !id) {
    return res.status(401).json({ message: 'Invalid Token' });
  }

  res.locals = {
    user: { email, id },
  };

  return next();
};

export default validateFakeToken;