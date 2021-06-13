const express = require('express')
const router = express.Router()

const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname, '../../public/images'))
    },
    filename: function(req, file, cb){
        cb(null,  Date.now() + path.extname(file.originalname))
    }
})

const uploadFile = multer({ storage }) 

const productoController = require('../controllers/productoController')

router.get('/listado', productoController.listado)
router.get('/detalle/:id', productoController.detalle)

router.get('/agregar', productoController.formNew) 
router.post('/agregar', uploadFile.single('imagen'), productoController.crear)

router.get('/:id/editar', productoController.editar) 
router.put('/:id/editar', productoController.actualizar)

router.delete('/:id', productoController.borrar)

module.exports = router
