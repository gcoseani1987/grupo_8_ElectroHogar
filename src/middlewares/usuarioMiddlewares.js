const { body } = require('express-validator')
const path = require('path')

const { isFileImage } = require('../helpers/file')

const validacionUsuario = [
    body('nombre').notEmpty().withMessage('Por favor complete un nombre'),
    body('apellido').notEmpty().withMessage('Por favor complete un apellido'),
    body('email').notEmpty().withMessage('Por favor complete con un email').bail()
    .isEmail().withMessage('Por favor ingrese un formato de email válido'),
    body('password').notEmpty().withMessage('Por favor ingrese una contraseña').bail()
    .isLength({min: 6}).withMessage('Por favor que tenga 6 caracteres como minimo'),
    body('password2').custom((value, {req}) => {
        if(value !== req.body.password) {
            throw new Error ('Las contraseñas deben coincidir')
        } 
        return true
    }),
    body('imagen').custom((value, { req })=>{
        const file = req.file
        const extensionesPermitidas = ['.jpg','.png','.gif']
        const extension = path.extname(file.originalname)
        if(!file){
            throw new Error ('Tienes que subir una imagen');
        } else { 
        if(!extensionesPermitidas.includes(extension)){
            throw new Error ('Las extensiones permitidas son .jpg, .png, .gif');
        }
    }
        return true; 
    })
]

module.exports = validacionUsuario

