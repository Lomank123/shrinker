import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';

export function redirectFromShortUrlController(req: Request, res: Response) {
  // TODO: Add redirect to long url
  console.log(req.params.shortUrl);
  const service = new UrlService();
  const shortUrl = req.params.shortUrl;

  try {
    const originalUrl = service.findOriginalUrl(shortUrl);
    res.redirect(301, originalUrl);
  } catch (error) {
    console.error(error);
    // TODO: Add error message
    res.status(500).send();
  }
}
