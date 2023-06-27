export type SignUpPayload = {
  username: string,
  email: string,
  password: string,
};

export type LocalResPayload = {
  payload: SignUpPayload,
};
