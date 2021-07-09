const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')
const invitadoMiddleware = require('../middlewares/invitadoMiddleware')
const loggeadoMiddleware = require('../middlewares/loggeadoMiddleware')

router.get('/', homeController.home) 
router.get('/home', homeController.home)
router.get('/carritoCompras', invitadoMiddleware, homeController.carrito)

module.exports = router