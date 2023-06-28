import { NextFunction, Request, Response } from 'express';
import signInValidator from './validators/signInValidator';

const validateSignIn = (req: Request, res: Response, next: NextFunction) : Response | void => {
  const validation = signInValidator.validateSchema(req.body);
  if (!validation.success) {
    return res.status(400).json({
      errors: validation.error.formErrors.fieldErrors,
    });
  }
  res.locals = {
    payload: validation.data,
  };
  return next();
};

export default validateSignIn;