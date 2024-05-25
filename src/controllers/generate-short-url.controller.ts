import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';

export function generateShortUrlController(req: Request, res: Response) {
  // TODO: Add body validator
  console.log(req.body);
  const service = new UrlService();

  try {
    const shortUrl = service.generateShortUrl(req.body);
    // TODO: Change output to JSON
    res.status(201).send(shortUrl);
  } catch (error) {
    console.error(error);
    // TODO: Add error message
    res.status(500).send();
  }
}
