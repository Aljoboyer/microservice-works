const app = require('./app');
const redisClientsConnect = require('./shared/redis');
require('dotenv').config();
const port = process.env.PORT || 5000;

async function bootstrap() {
  await redisClientsConnect()
    app.listen(port, (req, res) => {
    console.log(`Api Gateway Server running on port ${port}`);
  });
}

bootstrap();
