import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';

export async function generateShortUrlController(req: Request, res: Response) {
  const service = new UrlService();
  const url = req.body.url;

  const shortUrl = service.generateShortUrl(url);
  res.status(201).send({ shortUrl: shortUrl });
}
