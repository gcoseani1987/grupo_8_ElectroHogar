const express = require('express')
const router = express.Router()
const productoController = require('../controllers/productoController')


router.get('/detalleProducto', productoController.detalle) 
router.get('/agregar', productoController.agregar)
router.get('/editar', productoController.editar)


module.exports = router
