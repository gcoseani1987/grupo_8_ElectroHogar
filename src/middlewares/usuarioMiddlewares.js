const { body } = require('express-validator')
const path = require('path')
const { Usuario } = require('../database/models')

const { isFileImage } = require('../helpers/file')

const validacionUsuario = [
    body('nombre').notEmpty().withMessage('Por favor complete un nombre').bail()
    .isLength({min : 2}).withMessage('El nombre debe tener mas de 2 letras'),
    body('apellido').notEmpty().withMessage('Por favor complete un apellido').bail()
    .isLength({min : 2}).withMessage('El apellido debe tener mas de 2 letras'),
    body('email').notEmpty().withMessage('Por favor complete con un email').bail()
    .isEmail().withMessage('Por favor ingrese un formato de email válido').bail()
    .custom(async (email) => {
        const usuarioEncontrado = await Usuario.findOne({ 
            where : { email: email }
        })
        if (usuarioEncontrado) {
            return false
        }
        return true
    })
    .withMessage('El usuario ya existe'),
    body('password').notEmpty().withMessage('Por favor ingrese una contraseña').bail()
    .isLength({min: 6}).withMessage('Por favor que tenga 6 caracteres como minimo'),
    body('password2').custom((value, {req}) => {
        if(value !== req.body.password) {
            throw new Error ('Las contraseñas deben coincidir')
        } 
        return true
    }),
    body('imagen').custom((value, { req })=>{
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

module.exports = validacionUsuario

