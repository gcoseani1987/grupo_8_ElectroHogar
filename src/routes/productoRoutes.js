const express = require('express')
const router = express.Router()

const productoController = require('../controllers/productoController')

router.get('/listado', productoController.listado)
router.get('/detalle/:id', productoController.detalle)

router.get('/agregar', productoController.formNew) 
router.post('/agregar', productoController.crear)

router.get('/:id/editar', productoController.editar) 
router.put('/:id/editar', productoController.update)

router.delete('/:id', productoController.delete)

module.exports = router
