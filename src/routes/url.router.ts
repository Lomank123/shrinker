import { Router } from 'express';
import { redirectFromShortUrlController } from '../controllers/redirect-from-short-url.controller';
import { generateShortUrlController } from '../controllers/generate-short-url.controller';
import { requestValidatorMiddleware } from '../middlewares/request-validator.middleware';
import { body } from 'express-validator';
import { asyncErrorHandler } from '../utils/async-error-handler';

export const urlRouter = Router();

urlRouter.post(
  '/',
  body('url').isString().isURL(),
  requestValidatorMiddleware,
  asyncErrorHandler(generateShortUrlController),
);
urlRouter.get('/:shortHash', asyncErrorHandler(redirectFromShortUrlController));
