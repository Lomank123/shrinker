import { IUrl } from '../interfaces/url.interface';
import { UrlModel } from '../models/url.model';
import { Request, Response } from 'express';

export async function testController(req: Request, res: Response) {
  // const url: IUrl = await UrlModel.create({
  //   shortUrl: req.url,
  //   longUrl: req.url,
  // });

  const urls: IUrl[] = await UrlModel.find({});

  for (const url of urls) {
    console.log(
      url._id,
      url.id,
      url.longUrl,
      url.shortUrl,
      url.updatedAt,
      url.createdAt,
    );
  }

  res.send('Hello World!');
}
