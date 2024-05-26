import { createHash, randomBytes } from 'crypto';
import { APP_URL, HASH_ALGORITHM, SHORT_URL_MAX_LENGTH } from '../settings';
import { UrlModel } from '../models/url.model';
import { IUrl } from '../interfaces/url.interface';
import { NotFoundError } from '../errors/not-found.error';

export class UrlService {
  /**
   * Search for existing url. If not then generate a new one.
   */
  async convertFromOriginalUrl(originalUrl: string): Promise<IUrl> {
    let url: IUrl | null = await UrlModel.findOne({ originalUrl });

    if (!url) {
      const shortHash = await this.generateShortHash(originalUrl);
      url = await UrlModel.create({ shortHash: shortHash, originalUrl });
    }

    return url;
  }

  /**
   * Search for original url from given short hash.
   */
  async getOriginalRedirectUrl(shortHash: string): Promise<IUrl> {
    const url = await UrlModel.findOne({ shortHash });

    if (!url) {
      throw new NotFoundError('Original URL not found');
    }

    return url;
  }

  /**
   * Generate and return short hash based on provided url.
   */
  async generateShortHash(originalUrl: string): Promise<string> {
    const prefix = randomBytes(4).toString('hex');
    let hash: string;
    let shortHash: string;
    let originalUrlCopy = `${originalUrl}`;
    let hasCollision = false;

    do {
      const hashFunction = createHash(HASH_ALGORITHM);
      hash = hashFunction.update(originalUrlCopy).digest('hex');
      shortHash = hash.slice(0, SHORT_URL_MAX_LENGTH);
      hasCollision = !!(await UrlModel.exists({ shortHash }));

      if (hasCollision) {
        originalUrlCopy += prefix;
      }
    } while (hasCollision);

    return shortHash;
  }

  /**
   * Build user-friendly url ready to be used.
   */
  buildShortUrl(shortHash: string): string {
    return `${APP_URL}/${shortHash}`;
  }
}
