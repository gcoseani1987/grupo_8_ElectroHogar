const express = require('express');
const router = express.Router();

const path = require('path');
const multer = require('multer');
const { body } = require('express-validator');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname, '../../public/images'))
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const uploadFile = multer({ storage }) 

const productoController = require('../controllers/productoController')

const validaciones = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('descripcion').notEmpty().withMessage('Tienes que escribir una descripcion'),
    body('stock').notEmpty().withMessage('Tienes que aclarar el stock disponible'),
    body('categoriaProd').notEmpty().withMessage('Tienes que seleccionar una categoría'),
    body('alto').notEmpty().withMessage('Tienes que especificar el alto'),
    body('ancho').notEmpty().withMessage('Tienes que especificar el ancho'),
    body('color').notEmpty().withMessage('Tienes que especificar el color'),
    body('garantia').notEmpty().withMessage('Tienes que especificar la garantía'),
    body('modelo').notEmpty().withMessage('Tienes que espeficiar el'),
    body('origen').notEmpty().withMessage('Tienes que especificar el origen'),
    body('peso').notEmpty().withMessage('Tienes que especificar el peso'),
    body('profundidad').notEmpty().withMessage('Tienes que especificar la profundidad'),
    body('precio').notEmpty().withMessage('Tienes que detallar el precio'),
    body('imagen').custom((value, { req }) => {
            const { file } = req
            if (!file) {
                throw new Error('Por favor ingrese una imagen')
            }
            if (!isFileImage(file.originalname)) {
                throw new Error('Por favor ingrese un archivo que sea una imagen')
            }
            return true
        })

]

router.get('/listado', productoController.listado)
router.get('/detalle/:id', productoController.detalle)

router.get('/agregar', productoController.formNew) 
router.post('/agregar', uploadFile.single('imagen'), productoController.crear)

router.get('/:id/editar', productoController.editar) 
router.put('/:id/editar', productoController.actualizar)

router.delete('/:id', productoController.borrar)

module.exports = router 
