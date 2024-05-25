import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';

// TODO: Add async support (don't forget to change error handling)
export function generateShortUrlController(req: Request, res: Response) {
  const service = new UrlService();
  const url = req.body.url;

  const shortUrl = service.generateShortUrl(url);
  res.status(201).send({ shortUrl: shortUrl });
}
