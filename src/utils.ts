import { createHash } from 'crypto';
import { HASH_ALGORITHM, SHORT_URL_MAX_LENGTH } from './settings';

export async function createShortUrl(longUrl: string): Promise<string> {
  const hashFunction = createHash(HASH_ALGORITHM);

  const hash = hashFunction.update(longUrl).digest('hex');
  const shortUrl = hash.slice(SHORT_URL_MAX_LENGTH);
  console.log(shortUrl);

  // TODO: Check if shortUrl exists in DB

  return shortUrl;
}
