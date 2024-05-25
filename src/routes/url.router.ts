import { Router } from 'express';
import { redirectFromShortUrlController } from '../controllers/redirect-from-short-url.controller';
import { generateShortUrlController } from '../controllers/generate-short-url.controller';
import { testController } from '../controllers/test.controller';

export const urlRouter = Router();

urlRouter.post('/', generateShortUrlController);
urlRouter.get('/:shortUrl', redirectFromShortUrlController);
// TODO: Remove after tests
urlRouter.get('/', testController);
