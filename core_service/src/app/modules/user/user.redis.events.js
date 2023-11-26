const { subscribeEvents } = require("../../../shared/redis")
const { EVENT_USER_CREATED } = require("../../events/constant")
const { creatUserFromEvents } = require("./user.controller")

const initUserEvents = () => {
    subscribeEvents(EVENT_USER_CREATED, async (e) => {
        const data = JSON.parse(e);

        await creatUserFromEvents(data);
        // console.log(data);
    });
};

module.exports = initUserEvents;