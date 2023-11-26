const { SetOptions, createClient } = require("redis");
require('dotenv').config();

const redisClient = createClient({
    url: process.env.REDIS_URL
})

const redisPubClient = createClient({
    url: process.env.REDIS_URL
})

const redisSubClient = createClient({
    url: process.env.REDIS_URL
})

redisClient.on('error', (error) => console.log('RedisError', error))
redisClient.on('connect', (error) => console.log('Redis Connected'))

const RedisClientConnect = async () => {
    await redisClient.connect();
    await redisPubClient.connect();
    await redisSubClient.connect();
};
const set = async (key, value, options) => {
    await redisClient.set(key, value, options)
}

const get = async (key)=> {
    return await redisClient.get(key)
}

const deletes = async (key) => {
     await redisClient.del(key)
}

const setAccessToken = async (userId, token) => {
    const key = `access-token:${userId}`;
   
    await redisClient.set(key, token, {EX: Number(process.env.REDIS_TOKEN_EXPIRES_IN)})
}


const getAccessToken = async (userId) => {
    const key = `access-token:${userId}`;
   
    await redisClient.get(key)
}

const deleteAccessToken = async (userId) => {
    const key = `access-token:${userId}`;
   
    await redisClient.del(key)
}

const disconnect = async () => {
    await redisClient.quit()
    await redisPubClient.quit()
    await redisSubClient.quit()
}

const publishEvents = redisPubClient.publish.bind(redisPubClient)
const subscribeEvents = redisSubClient.subscribe.bind(redisSubClient)

module.exports = {
    RedisClientConnect,
    set,
    get,
    deletes,
    disconnect,
    setAccessToken,
    getAccessToken,
    deleteAccessToken,
    publishEvents,
    subscribeEvents
}
