import { createHash, randomBytes } from 'crypto';
import { APP_URL, HASH_ALGORITHM, SHORT_URL_MAX_LENGTH } from '../settings';
import { UrlModel } from '../models/url.model';
import { FilterQuery } from 'mongoose';
import { IUrl } from '../interfaces/url.interface';

export class UrlService {
  async convertToShortUrl(longUrl: string): Promise<string> {
    let url = await this.findExistingUrl(longUrl);

    if (!url) {
      url = await this.generateUrl(longUrl);
    }

    return this.buildFullUrl(url.shortUrl);
  }

  async findExistingUrl(
    longUrl: string,
    { ...filters }: FilterQuery<IUrl> = {},
  ): Promise<IUrl | null> {
    return UrlModel.findOne({ longUrl, ...filters });
  }

  /**
   * Generate and return short URL based on provided long URL.
   */
  async generateUrl(longUrl: string): Promise<IUrl> {
    const prefix = randomBytes(4).toString('hex');
    let hash: string;
    let shortUrl: string;
    let longUrlCopy = `${longUrl}`;
    let hasCollision = false;

    do {
      const hashFunction = createHash(HASH_ALGORITHM);
      hash = hashFunction.update(longUrlCopy).digest('hex');
      shortUrl = hash.slice(0, SHORT_URL_MAX_LENGTH);
      hasCollision = !!(await UrlModel.exists({ shortUrl }));

      if (hasCollision) {
        longUrlCopy += prefix;
      }
    } while (hasCollision);

    return UrlModel.create({ shortUrl, longUrl });
  }

  /**
   * Search for original long URL from given short URL.
   */
  findOriginalUrl(urlHash: string): string {
    console.log(urlHash);
    return 'http://127.0.0.1:8079/new-location';
  }

  buildFullUrl(shortUrl: string): string {
    return `${APP_URL}/${shortUrl}`;
  }
}
