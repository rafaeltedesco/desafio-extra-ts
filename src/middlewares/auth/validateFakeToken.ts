import { NextFunction, Request, Response } from 'express';

const validateFakeToken = async (req: Request, res: Response, next: NextFunction):
Promise<Response | void> => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Must send token' });
  }

  const data = authorization.split('-');

  const [email, id] = data.slice(1);

  if (!email || !id) {
    return res.status(401).json({ 
      message: 'Invalid Token',
    });
  }

  res.locals = {
    user: { email, id },
  };

  return next();
};

export default validateFakeToken;