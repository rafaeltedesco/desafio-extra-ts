import { ErrorResponse, SuccessResponse } from './ServiceResponse';

export type SignUpServiceResponse<T> = SuccessResponse<T> 
& { activationUrl: string } | ErrorResponse;