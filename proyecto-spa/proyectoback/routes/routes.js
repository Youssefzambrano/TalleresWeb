const express = require("express");


const router = express.Router();
const userController = require("../controllers/userController")
const compraController = require("../controllers/compraController")
const artistController = require("../controllers/artistController")
const merchController = require("../controllers/merchController")

router.get('/user',userController.getAllusers);
router.get('/compra',compraController.getAllbills);
router.get('/artista',artistController.getAllartist);
router.get("/merch",merchController.getAllmerch);
router.post('/registro',userController.Registro);
router.post('/autenticar',userController.autenticar);
router.put('/actualizar/correo/:correo',userController.updateUser);


module.exports = router;