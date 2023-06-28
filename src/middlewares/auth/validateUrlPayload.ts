import { NextFunction, Request, Response } from 'express';
import shortUrlValidator from './validators/shortUrlValidator';

const validateUrlPayload = (req: Request, res: Response, next: NextFunction) : Response | void => {
  const validation = shortUrlValidator.validateSchema(req.body);
  if (!validation.success) {
    return res.status(400).json({
      errors: validation.error.formErrors.fieldErrors,
    });
  }
  res.locals = {
    ...res.locals,
    payload: validation.data,
  };
  return next();
};

export default validateUrlPayload;