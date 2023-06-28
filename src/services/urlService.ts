import UrlModel from '../database/models/Url';
import { ServiceResponse } from '../types/ServiceResponse';
import { ShortUrlPayloadService, ShortUrlResponseService } from '../types/ShortUrlPayload';
import urlShortnerGenerator from '../utils/urlShortnerGenerator';
import userModelService from './userModelService';

const shortUrl = async (payload: ShortUrlPayloadService): 
Promise<ServiceResponse<ShortUrlResponseService>> => {
  const user = await userModelService.findById(payload.userId);
  if (!user) {
    return { status: 'ERROR', statusCode: 404, message: 'Invalid User' };
  }
  console.log(payload, 'payload');
  const shortnedUrl = urlShortnerGenerator.generateShortenedUrl(payload.userId);
  const newUrl = await UrlModel.create(
    { originalUrl: payload.url, shortnedUrl, userId: payload.userId,
    },
  );
  return { 
    status: 'SUCCESS',
    message: 'Created', 
    statusCode: 200, 
    data: { id: newUrl.dataValues.id, shortnedUrl, originalUrl: payload.url } };
};

export default {
  shortUrl,
};