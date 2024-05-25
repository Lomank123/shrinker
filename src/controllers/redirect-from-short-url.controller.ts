import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';
import { ServerError } from '../errors/server.error';

export function redirectFromShortUrlController(req: Request, res: Response) {
  // TODO: Add redirect to long url
  const shortUrl = req.params.shortUrl;
  const service = new UrlService();

  console.log(shortUrl);

  try {
    const originalUrl = service.findOriginalUrl(shortUrl);
    res.redirect(301, originalUrl);
  } catch (error) {
    console.error(error);
    throw new ServerError('Error occurred during url resolution');
  }
}
