const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')


router.get('/', homeController.home) 
router.get('/home', homeController.home)
router.get('/carritoCompras', homeController.carrito)

module.exports = router
