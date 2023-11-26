import { SetOptions, createClient } from "redis";

const redisClient = createClient({
    url: process.env.REDIS_URL
});
 
const redisPubClient = createClient({
    url: process.env.REDIS_URL
});

const redisSubClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on('error', (error) => console.log('RedisError', error))
redisClient.on('connect', (error) => console.log('Redis Connected'))

const connect = async (): Promise<void> => {
    await redisClient.connect();
    await redisPubClient.connect();
    await redisSubClient.connect();
};

const set = async (key: string, value: string, options?: SetOptions): Promise<void> => {
    await redisClient.set(key, value, options)
}

const get = async (key: string): Promise<string | null> => {
    return await redisClient.get(key)
}

const deletes = async (key: string): Promise<void> => {
     await redisClient.del(key)
}

const setAccessToken = async (userId: string, token: string): Promise<void> => {
    const key = `access-token:${userId}`;
   
    await redisClient.set(key, token, {EX: Number(process.env.REDIS_TOKEN_EXPIRES_IN)})
}


const getAccessToken = async (userId: string): Promise<void> => {
    const key = `access-token:${userId}`;
   
    await redisClient.get(key)
}

const deleteAccessToken = async (userId: string): Promise<void> => {
    const key = `access-token:${userId}`;
   
    await redisClient.del(key)
}

const disconnect = async (): Promise<void> => {
    await redisClient.quit()
    await redisPubClient.quit()
    await redisSubClient.quit()
}

export const RedisClient = {
    connect,
    set,
    get,
    deletes,
    disconnect,
    setAccessToken,
    getAccessToken,
    deleteAccessToken,
    publish: redisPubClient.publish.bind(redisPubClient),
    subscribe: redisSubClient.subscribe.bind(redisSubClient)
}