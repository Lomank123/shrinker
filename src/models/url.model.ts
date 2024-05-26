import mongoose, { Model, Schema } from 'mongoose';
import { IUrl } from '../interfaces/url.interface';

const UrlSchema = new Schema<IUrl>(
  {
    shortHash: { type: String, required: true, unique: true },
    originalUrl: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

export const UrlModel: Model<IUrl> = mongoose.model('Url', UrlSchema);
