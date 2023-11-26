const { createClient } = require("redis");

const redisClient = createClient({
    url: 'redis://localhost:6379'
});

redisClient.on('error', () => console.log('Redis Error'));
redisClient.on('connect', () => console.log('Redis connected'))

const redisClientsConnect = async () => {
    await redisClient.connect();
}

module.exports = redisClientsConnect