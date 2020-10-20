var usercontroller = require("../controllers/UserController");
var express = require("express");
var router = express.Router();



router.post("/login",usercontroller.login);
module.exports = router;
