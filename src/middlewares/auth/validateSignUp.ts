import { NextFunction, Request, Response } from 'express';
import signUpValidator from './validators/signUpValidator';

const validateSignUp = (req: Request, res: Response, next: NextFunction) : Response | void => {
  const validation = signUpValidator.validateSchema(req.body);
  console.log(validation);
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

export default validateSignUp;