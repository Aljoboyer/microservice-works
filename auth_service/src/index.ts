import { Server } from 'http';
import app from './app';
import { RedisClient } from './shared/redis';
const port = process.env.PORT || 5000;

async function bootstrap() {
  await RedisClient.connect().then(() => {
    // subscribeToEvents()
  });
  const server: Server = app.listen(port, () => {
   console.log(`Server running on port ${port}`);
  });

}

bootstrap();