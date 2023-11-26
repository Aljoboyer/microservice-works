const mongoose = require("mongoose");

const RedisUserSchema = mongoose.Schema({
    id: {
        type: String,
       },
    name: {
        type: Number,
       },
    email: {
        type: String,
       },
    password: {
    type: String,
    },
});

module.exports  = mongoose.model("RedisUser", RedisUserSchema);
