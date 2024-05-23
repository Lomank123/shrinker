import { IDocument } from './document.interface';

export interface IUrl extends IDocument {
  shortUrl: string;
  longUrl: string;
}
