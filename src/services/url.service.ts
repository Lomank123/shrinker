import { createHash } from 'crypto';
import { HASH_ALGORITHM, SHORT_URL_MAX_LENGTH } from '../settings';

export class UrlService {
  /**
   * Generate and return short URL based on provided long URL.
   */
  generateShortUrl(longUrl: string): string {
    const hashFunction = createHash(HASH_ALGORITHM);

    const hash = hashFunction.update(longUrl).digest('hex');
    console.log(hash);
    const shortUrl = hash.slice(0, SHORT_URL_MAX_LENGTH);
    console.log(shortUrl);

    // TODO: Check if shortUrl exists in DB

    return shortUrl;
  }

  /**
   * Search for original long URL from given short URL.
   */
  findOriginalUrl(urlHash: string): string {
    console.log(urlHash);
    return 'http://127.0.0.1:8079/new-location';
  }
}
