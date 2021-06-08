const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../public/images')
    },
    filename: function(req, file, cb){
        cb(null, 'fotoproducto' + Date.now + path.extname(file.originalname))
    }
})

const uploadFile = multer({ storage })

const productoController = require('../controllers/productoController')

router.get('/listado', productoController.listado)
router.get('/detalle/:id', productoController.detalle)

router.get('/agregar', productoController.formNew) 
router.post('/agregar', uploadFile.array('imagenes'), productoController.crear)

router.get('/:id/editar', productoController.editar) 
router.put('/:id/editar', productoController.update)

router.delete('/:id', productoController.delete)

module.exports = router
