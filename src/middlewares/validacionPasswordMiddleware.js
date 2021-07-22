const { body } = require('express-validator');
const path = require('path');
const usuarios = require('../models/usuarios');
const bcryptjs = require('bcryptjs');


const validacionPassword = [
    body('passwordAEditar').notEmpty().withMessage('Por favor ingrese su contraseña actual').bail()
    .custom((value, {req}) => {
        const { passwordAEditar } = req.body
        const { id } = req.params
        const usuarioEncontrado = usuarios.findByPk(id)
        if( bcryptjs.compareSync( passwordAEditar , usuarioEncontrado.password ) ) { 
            return true
        } else { 
        return false
    }
    }).withMessage('La contraseña ingresada no es válida'),
    body('passwordEditado').notEmpty().withMessage('Ingrese su nueva contraseña').bail()
    .isLength({min: 6}).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('passwordEditado2').notEmpty().withMessage('Repita su nueva contraseña').bail()
    .custom((value, {req}) => {
        const { passwordEditado, passwordEditado2} = req.body
        if( passwordEditado2 == passwordEditado ) {
            return true
        } 
        return false
    }).withMessage('Las contraseñas no coinciden'),

]


module.exports = validacionPassword

