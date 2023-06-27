type ErrorStatus = 400 | 401 | 403 | 404 | 409 | 500;
type SuccessStatus = 200 | 201 | 204;

type ErrorResponse = {
  status: 'ERROR'
  statusCode: ErrorStatus,
  message: string
};

type SuccessResponse<T> = {
  status: 'SUCCESS',
  statusCode: SuccessStatus,
  data: T,
  message: string,
};

export type ServiceResponse<T> = ErrorResponse | SuccessResponse<T>;