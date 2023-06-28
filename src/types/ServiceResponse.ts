export type ErrorStatus = 400 | 401 | 403 | 404 | 409 | 500;
export type SuccessStatus = 200 | 201 | 204 | 301;

export type ErrorResponse = {
  status: 'ERROR'
  statusCode: ErrorStatus,
  message: string
};

export type SuccessResponse<T> = {
  status: 'SUCCESS',
  statusCode: SuccessStatus,
  data: T,
  message: string,
};

export type ServiceResponse<T> = ErrorResponse | SuccessResponse<T>;