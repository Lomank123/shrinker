import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';

export async function generateShortUrlController(req: Request, res: Response) {
  const service = new UrlService();
  const originalUrl = req.body.url;

  const url = await service.convertFromOriginalUrl(originalUrl);
  const shortUrl = service.buildShortUrl(url.shortHash);
  res.status(201).json({ shortUrl });
}
