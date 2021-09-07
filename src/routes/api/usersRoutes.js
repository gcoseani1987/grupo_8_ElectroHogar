const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/usersController');


router.post('/emailExist', controller.buscarUsuario);

router.get('/', controller.listado)
router.get('/:id', controller.perfil)

module.exports = router;