const { validationResult } = require('express-validator')
const usuario = require('../models/usuarios')
const { usuariosPath } = require('../models/usuarios')

const controller = {
  login: (req, res) => {
    const estadoUsuario = ''
    res.render('users/login', { estadoUsuario })
  },

  nuevoUsuario: (req, res) => {
    res.render('users/registro')
  },

   crearUsuario: (req, res) => {
    const resultadoValidaciones = validationResult(req) 
    const nuevoUsuario = req.body
    nuevoUsuario.imagen = '/images/usuarios/' + req.file.filename
    usuario.crearUsuario(nuevoUsuario)
    if(resultadoValidaciones.length>0){
      return res.render('users/registro'),{
        errors : resultadoValidaciones.errors.mapped(),
        oldData : req.body
      }
  } else {
      res.redirect('/') 
  } 
  },

  loginUsuario: (req, res) =>{
    const sesion = req.body
    const estadoUsuario = usuario.validarUsuario(sesion)

    if(estadoUsuario == 'Ha sido registrado'){ 
    res.redirect('/') 

     }else{
    res.render('users/login', { estadoUsuario })
    }
  },

    listado: (req, res) => {
      let usuarios = usuario.findAll() 
      res.render('./users/listadoUsuario', { usuarios })
  },

  borrar: (req, res) => {
    let id = req.params.id
    let usuarioEliminado = usuario.delete(id)
    res.redirect('/users/listado')
  },
}

module.exports = controller