import { configDotenv } from 'dotenv';
configDotenv();

import mongoose from 'mongoose';
import { APP_PORT, MONGO_DB_URL } from './settings';
import { app } from './express';

async function main() {
  try {
    await mongoose.connect(MONGO_DB_URL);

    app.listen(APP_PORT, () => {
      console.log(`Listening on port ${APP_PORT}...`);
    });
  } catch (err) {
    return console.error(err);
  }
}

process.on('SIGINT', async () => {
  await mongoose.disconnect();
  process.exit();
});

main();
