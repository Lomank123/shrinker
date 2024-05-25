import { NextFunction, Request, Response } from 'express';
import { RequestError } from '../errors/request.error';

export function errorHandlerMiddleware(
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction,
) {
  if (err instanceof RequestError) {
    res.status(err.statusCode).json({
      errors: err.serialize(),
    });
  }

  // Unhandled error
  console.error(err);
  res.status(500).json({
    errors: [{ message: 'Server Error' }],
  });

  next();
}