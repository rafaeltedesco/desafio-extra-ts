import { TokenPayload } from '../types/TokenPayload';

const generateFakeToken = (payload: TokenPayload) : string => 
  `xablau-${payload.id}-${payload.email}`;

export default {
  generateFakeToken,
};