import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';
import { ServerError } from '../errors/server.error';

export function redirectFromShortUrlController(req: Request, res: Response) {
  const urlHash = req.params.urlHash;
  const service = new UrlService();

  try {
    const originalUrl = service.findOriginalUrl(urlHash);
    res.redirect(301, originalUrl);
  } catch (error) {
    console.error(error);
    throw new ServerError('Error occurred during url resolution');
  }
}
