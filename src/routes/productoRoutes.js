const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const invitadoMiddleware = require('../middlewares/invitadoMiddleware')
const loggeadoMiddleware = require('../middlewares/loggeadoMiddleware')
 
const { isFileImage }=require('../helpers/file')
const validaciones = require ('../middlewares/productosMiddlewares')
const productoController =require('../controllers/productoController')
 
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname, '../../public/images'))
    }, 
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname)) 
    }
})
const uploadFile = multer({ storage }) 

router.get('/listado', invitadoMiddleware, loggeadoMiddleware, productoController.listado)
router.get('/detalle/:id', productoController.detalle)

router.get('/agregar',invitadoMiddleware, loggeadoMiddleware, productoController.formNew) 
router.post('/agregar', invitadoMiddleware, loggeadoMiddleware, uploadFile.single('imagen'), validaciones, productoController.crear)

router.get('/:id/editar',invitadoMiddleware, loggeadoMiddleware, productoController.editar) 
router.put('/:id/editar', uploadFile.single('imagen'), loggeadoMiddleware, invitadoMiddleware, productoController.actualizar)

router.delete('/:id', invitadoMiddleware,productoController.borrar)

module.exports = router 
