var clientecontroller = require("../controllers/ClienteController");
var express = require("express");
var auth = require('../middlewares/autorizacion');
var router = express.Router();


router.get("/get/:id",auth.ensureAuthenticated,clientecontroller.getById);
router.get("/getall",auth.ensureAuthenticated,clientecontroller.getAll);
router.get("/getbyquery",auth.ensureAuthenticated,clientecontroller.getByQuery);

module.exports = router;
