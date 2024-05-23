import mongoose, { Model, Schema } from 'mongoose';
import { IUrl } from '../interfaces/url.interface';

const UrlSchema = new Schema<IUrl>(
  {
    shortUrl: { type: String, required: true },
    longUrl: { type: String, required: true },
  },
  { timestamps: true },
);

export const UrlModel: Model<IUrl> = mongoose.model('Url', UrlSchema);
