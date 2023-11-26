const { userAddController } = require("../../modules/user/user.controller");


const router = require("express").Router();

router.post("/adduser", userAddController);

module.exports = router;
