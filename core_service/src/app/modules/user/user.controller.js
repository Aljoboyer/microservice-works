const RedisUserCollection = require("./user.model");

const getAllUser = async (req, res) => {
    
    res.json({user: req.body}) 
};

const creatUserFromEvents = async (UsereventData) => {
    
    console.log('Data from subscribed events >>>', UsereventData);

    const userCreation = await RedisUserCollection.create(UsereventData);

    // res.json({user: 'User created successfully from events'}) 
};

module.exports = {
    getAllUser,
    creatUserFromEvents
  };