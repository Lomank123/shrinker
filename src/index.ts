import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv();

import {
  APP_PORT,
  MONGO_DB_URL,
  REDIS_BLOOM_ERROR_RATE,
  REDIS_BLOOM_EXPECTED_CAPACITY,
  REDIS_BLOOM_NAME,
  REDIS_URL,
} from './settings';
import { app } from './express';
import { createClient } from 'redis';

export const redisClient = createClient({ url: REDIS_URL });

async function setUpBloomFilter() {
  // From https://github.com/redis/node-redis/blob/master/examples/bloom-filter.js
  try {
    // Delete any pre-existing Bloom Filter.
    await redisClient.del(REDIS_BLOOM_NAME);
    // Reserve a Bloom Filter with configurable error rate and capacity.
    // https://redis.io/commands/bf.reserve/
    await redisClient.bf.reserve(
      REDIS_BLOOM_NAME,
      REDIS_BLOOM_ERROR_RATE,
      REDIS_BLOOM_EXPECTED_CAPACITY,
    );
  } catch (err) {
    console.error(err);
  }
}

async function main() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_DB_URL);
    console.log('Connected to MongoDB!');

    console.log('Connecting to Redis...');
    await redisClient.connect();
    console.log('Connected to Redis!');

    console.log('Reserving space for bloom filter...');
    await setUpBloomFilter();
    console.log('Space for bloom filter reserved!');

    app.listen(APP_PORT, () => {
      console.log(`Listening on port ${APP_PORT}...`);
    });
  } catch (err) {
    return console.error(err);
  }
}

process.on('SIGINT', async () => {
  console.log('\nShutting down gracefully...');
  await mongoose.disconnect();
  await redisClient.disconnect();
  process.exit();
});

main();
