/* eslint-disable no-console */
const mongoose = require('mongoose')
const app = require('./app');
// import subscribeToEvents from './app/events';
const {RedisClientConnect} = require('./shared/redis');
const subscribeToEvents = require('./app/events/subscribeEvents');
require('dotenv').config();
const port = process.env.PORT || 5000;

async function bootstrap() {
  try {
    await RedisClientConnect().then(() => {
      subscribeToEvents()
    })

    await mongoose.connect(process.env.DATABASE_URL);
    // logger.info(`🛢   Database is connected successfully`);
    console.log(`🛢   AuthService Database is connected successfully`);

    server = app.listen(port, () => {
      // logger.info(`Application  listening on port ${config.port}`);
      console.log(`AuthService Application  listening on port ${port}`);
    });
  } catch (err) {
    console.log('Failed to connect AuthService database', err);
  }
}

bootstrap();
