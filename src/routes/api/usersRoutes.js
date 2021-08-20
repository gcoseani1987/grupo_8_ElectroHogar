const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/usersController');


router.post('/emailExist', controller.buscarUsuario);

module.exports = router;