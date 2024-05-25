import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';
import { ServerError } from '../errors/server.error';

export function generateShortUrlController(req: Request, res: Response) {
  const service = new UrlService();
  const url = req.body.url;

  try {
    const shortUrl = service.generateShortUrl(url);
    res.status(201).send({ shortUrl: shortUrl });
  } catch (error) {
    console.error(error);
    throw new ServerError('Error occurred during url conversion');
  }
}
