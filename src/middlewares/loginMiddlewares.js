const { body } = require('express-validator')
const bcryptjs = require('bcryptjs')
const { Usuario } = require('../database/models')

const validacionLogin = [
    body('email').notEmpty().withMessage('Por favor complete con un email').bail()
    .isEmail().withMessage('Por favor ingrese un formato de email válido').bail(),
    body('password').notEmpty().withMessage('Por favor ingrese una contraseña').bail()
    .custom( async (value, {req}) => {
        const { email, password } = req.body
        const usuarioEncontrado = await Usuario.findAll({ 
            where : { email: req.body.email }
        })
        if(usuarioEncontrado){
        if(bcryptjs.compareSync( password , usuarioEncontrado[0].password)) {
            return true
        } 
        return false
    }
    }).withMessage('El usuario o la contraseña no son validos'),
]

module.exports = validacionLogin
