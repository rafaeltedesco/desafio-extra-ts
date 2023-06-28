import crypto from 'crypto';

const generateShortenedUrl = (userId: number): string => {
  const host = `${process.env.HOST}:${process.env.APP_PORT}/`;
  const dinamicPath = `${userId}x0${crypto.randomBytes(3).toString('hex')}`;
  return host + dinamicPath;
};
  
export default {
  generateShortenedUrl,
};