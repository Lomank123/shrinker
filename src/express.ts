import express from 'express';
import { UrlModel } from './models/url.model';
import { IUrl } from './interfaces/url.interface';

export const app = express();

app.use((req, res, next) => {
  // TODO: Format logging of requests
  console.log(req.url, req.hostname, req.method);
  next();
});

// TODO: Move to router
app.get('/', async (req, res) => {
  // const url: IUrl = await UrlModel.create({
  //   shortUrl: req.url,
  //   longUrl: req.url,
  // });

  const urls: IUrl[] = await UrlModel.find({});

  for (const url of urls) {
    console.log(url.longUrl, url.shortUrl, url.updatedAt, url.createdAt);
  }

  res.send('Hello World!');
});
