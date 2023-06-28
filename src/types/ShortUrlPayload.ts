export type ShortUrlPayload = {
  url: string,
};

export type ShortUrlPayloadService = ShortUrlPayload & { userId: number };

export type ShortUrlResponseService = {
  id: number,
  shortnedUrl: string,
  originalUrl: string
};