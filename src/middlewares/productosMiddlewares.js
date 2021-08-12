const { body } = require('express-validator')
const path = require('path')

const { isFileImage } = require('../helpers/file')

const validaciones = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('descripcion').notEmpty().withMessage('Tienes que escribir una descripcion'),
    body('stock').notEmpty().withMessage('Tienes que aclarar el stock disponible'),
    body('categoriaProd').notEmpty().withMessage('Tienes que seleccionar una categoría'),
    body('alto').notEmpty().withMessage('Tienes que especificar el alto'),
    body('ancho').notEmpty().withMessage('Tienes que especificar el ancho'),
    body('color').notEmpty().withMessage('Tienes que especificar el color'),
    body('garantia').notEmpty().withMessage('Tienes que especificar la garantía'),
    body('modelo').notEmpty().withMessage('Tienes que espeficar el modelo'),
    body('origen').notEmpty().withMessage('Tienes que especificar el origen'),
    body('peso').notEmpty().withMessage('Tienes que especificar el peso'),
    body('oferta').notEmpty().withMessage('Debes especificar si esta en oferta'),
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

module.exports = validaciones