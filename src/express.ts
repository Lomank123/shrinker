import express from 'express';
import { urlRouter } from './routes/url.router';
import morgan from 'morgan';
import cors from 'cors';
import { CORS_OPTIONS } from './settings';
import { errorHandlerMiddleware } from './middlewares/error-handler.middleware';

export const app = express();

// Middlewares
app.use(morgan('common'));
app.use(express.json());
app.use(cors(CORS_OPTIONS));

// Routers
app.use('/', urlRouter);

// Error handling middleware must be the last
app.use(errorHandlerMiddleware);
