const express = require('express')
const router = express.Router()

const userController = require('../controllers/usersController')

router.get('/login', userController.login)
router.get('/registro', userController.nuevoUsuario)

router.post('/registro', userController.crearUsuario)
router.post('/login', userController.loginUsuario)

module.exports = router
