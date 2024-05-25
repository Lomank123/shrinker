export class UrlService {
  /**
   * Generate and return short URL based on provided long URL.
   */
  generateShortUrl(longUrl: string): string {
    console.log(longUrl);
    return '';
  }

  /**
   * Search for original long URL from given short URL.
   */
  findOriginalUrl(urlHash: string): string {
    console.log(urlHash);
    return 'http://127.0.0.1:8079/new-location';
  }
}
