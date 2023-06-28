import { Request, Response } from 'express';
import { DecodedUserToken } from '../../types/DecodedUserToken';
import urlService from '../../services/urlService';

const shortUrl = async (req: Request, res: Response): Promise<Response> => {
  const { user } = res.locals as DecodedUserToken;
  const { url } = req.body;
  
  const response = await urlService.shortUrl({ url, userId: user.id });
  if (response.status === 'SUCCESS') {
    return res.status(response.statusCode).json({ shortnedUrl: response.data });
  }
  return res.status(response.statusCode).json({ message: response.message });
};

const redirect = async (req: Request, res: Response): Promise<Response | void> => {
  const shortnedUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const response = await urlService.fetchShortnedUrl(shortnedUrl);
  if (response.status === 'SUCCESS') {
    return res.status(response.statusCode).redirect(response.data.originalUrl);
  }
  return res.status(response.statusCode).json({
    message: response.message,
  });
};

export default {
  shortUrl,
  redirect,
};