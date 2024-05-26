import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';

export async function redirectFromShortUrlController(
  req: Request,
  res: Response,
): Promise<void> {
  const shortHash = req.params.shortHash;
  const service = new UrlService();

  const redirectUrl = await service.getOriginalRedirectUrl(shortHash);
  res.redirect(301, redirectUrl.originalUrl);
}
