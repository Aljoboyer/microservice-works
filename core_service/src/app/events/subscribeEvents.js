const initUserEvents =  require('../modules/user/user.redis.events')


const subscribeToEvents = () => {
    initUserEvents()
}

module.exports = subscribeToEvents;