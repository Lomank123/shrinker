import { Router } from 'express';
import { redirectFromShortUrlController } from '../controllers/redirect-from-short-url.controller';
import { generateShortUrlController } from '../controllers/generate-short-url.controller';
import { testController } from '../controllers/test.controller';
import { requestValidatorMiddleware } from '../middlewares/request-validator.middleware';

export const urlRouter = Router();

urlRouter.post('/', requestValidatorMiddleware, generateShortUrlController);
urlRouter.get('/:shortUrl', redirectFromShortUrlController);
// TODO: Remove after tests
urlRouter.get('/', testController);
