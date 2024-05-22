import * as process from 'node:process';

// Main

export const ENV = process.env.ENV || 'dev';
export const APP_PORT = parseInt(process.env.APP_PORT || '3033');

export const HASH_ALGORITHM = process.env.HASH_ALGORITHM || 'sha256';
export const SHORT_URL_MAX_LENGTH = parseInt(
  process.env.SHORT_URL_MAX_LENGTH || '7',
);

// Database

const DB_USER = process.env.DB_USER || 'user';
const DB_PASS = process.env.DB_PASS || 'password';
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_NAME = process.env.DB_NAME || 'shrinker-db';
const DB_PORT = process.env.DB_PORT || '27022';
export const MONGO_DB_URL = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
