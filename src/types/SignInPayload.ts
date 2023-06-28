export type SignInPayload = {
  email: string,
  password: string,
};

export type LocalResSignInPayload = {
  payload: SignInPayload,
};
