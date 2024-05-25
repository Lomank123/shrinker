import { Router } from 'express';
import { redirectFromShortUrlController } from '../controllers/redirect-from-short-url.controller';
import { generateShortUrlController } from '../controllers/generate-short-url.controller';
import { testController } from '../controllers/test.controller';
import { requestValidatorMiddleware } from '../middlewares/request-validator.middleware';
import { body } from 'express-validator';
import { errorHandlerMiddleware } from '../middlewares/error-handler.middleware';

export const urlRouter = Router();

urlRouter.post(
  '/',
  body('url').isString().isURL(),
  requestValidatorMiddleware,
  errorHandlerMiddleware,
  generateShortUrlController,
);
urlRouter.get('/:urlHash', redirectFromShortUrlController);

// TODO: Remove after tests
urlRouter.get('/', testController);
