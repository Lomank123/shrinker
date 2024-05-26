import { IDocument } from './document.interface';

export interface IUrl extends IDocument {
  shortHash: string;
  originalUrl: string;
}
