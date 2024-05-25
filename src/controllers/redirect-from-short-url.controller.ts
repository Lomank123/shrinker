import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';

// TODO: Add async support (don't forget to change error handling)
export function redirectFromShortUrlController(req: Request, res: Response) {
  const urlHash = req.params.urlHash;
  const service = new UrlService();

  const originalUrl = service.findOriginalUrl(urlHash);
  res.redirect(301, originalUrl);
}
