const { AuthService } = require("../../../shared/axios");
const RedisUserCollection = require("./user.model");

const userAddController = async (req, res) => {

    const response = await AuthService.post('/add-user', req.body, {
        headers: {
            Authorization: req?.headers?.authorization ?  req?.headers?.authorization : ''
        }
    })

    res.json({user: `response from api gate way ==> ${response}`}) 
};

module.exports = {
    userAddController
  };