import { ErrorStatus, SuccessStatus } from './ServiceResponse';

type SuccessActivationResponse = {
  activated: true,
  message: string,
  statusCode: SuccessStatus,
};

type ErrorActivationResponse = {
  activated: false,
  message: string,
  statusCode: ErrorStatus,
};

export type ActivationResponse = SuccessActivationResponse | ErrorActivationResponse;