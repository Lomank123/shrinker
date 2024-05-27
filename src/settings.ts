import * as process from 'node:process';

// Main

export const ENV = process.env.ENV || 'dev';
export const APP_PORT = parseInt(process.env.APP_PORT || '3033');

const APP_SCHEMA = process.env.APP_SCHEMA || 'http';
const APP_HOST = process.env.APP_HOST || `localhost:3033`;
export const APP_URL = `${APP_SCHEMA}://${APP_HOST}`;

export const HASH_ALGORITHM = process.env.HASH_ALGORITHM || 'sha256';
export const SHORT_URL_MAX_LENGTH = parseInt(
  process.env.SHORT_URL_MAX_LENGTH || '7',
);

// CORS

const CORS_ORIGIN = process.env.CORS_ORIGIN || 'http://localhost:3000';
export const CORS_OPTIONS = {
  origin: CORS_ORIGIN,
  optionsSuccessStatus: 200,
};

// Database

const DB_USER = process.env.DB_USER || 'user';
const DB_PASS = process.env.DB_PASS || 'password';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'shrinker-db';
const DB_PORT = process.env.DB_PORT || '27022';
export const MONGO_DB_URL = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Redis

const REDIS_HOST = process.env.REDIS_HOST || 'localhost';
const REDIS_PORT = process.env.REDIS_PORT || '6378';
export const REDIS_URL = `redis://${REDIS_HOST}:${REDIS_PORT}`;
