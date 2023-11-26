const mongoose = require("mongoose");

const RedisUserSchema = mongoose.Schema({
    name: {
        type: String,
       },
    email: {
        type: String,
       },
    password: {
    type: String,
    },
});

module.exports  = mongoose.model("RedisUser", RedisUserSchema);
