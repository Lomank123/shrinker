import { Request, Response } from 'express';
import { UrlService } from '../services/url.service';

export async function redirectFromShortUrlController(
  req: Request,
  res: Response,
): Promise<void> {
  const urlHash = req.params.urlHash;
  const service = new UrlService();

  const redirectUrl = await service.getOriginalRedirectUrl(urlHash);
  res.redirect(301, redirectUrl.longUrl);
}
