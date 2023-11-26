const { getAllUser } = require("../../modules/user/user.controller");


const router = require("express").Router();

router.get("/get-user", getAllUser);

module.exports = router;
