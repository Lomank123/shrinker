import { RequestError } from './request.error';
import { ValidationError } from 'express-validator';

export class RequestValidationError extends RequestError {
  statusCode = 400;

  constructor(
    public errors: ValidationError[],
    message: string = 'Request validation failed',
  ) {
    super(message);
  }

  serialize() {
    return this.errors.map((error) => {
      if ('param' in error) {
        return { message: error.msg, field: error.param as string };
      }

      return { message: error.msg };
    });
  }
}
