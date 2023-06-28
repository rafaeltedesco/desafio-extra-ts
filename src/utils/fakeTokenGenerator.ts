import { TokenPayload } from '../types/TokenPayload';

const generateFakeToken = (payload: TokenPayload) : string => 
  `xablau-${payload.email}-${payload.id}`;

export default {
  generateFakeToken,
};