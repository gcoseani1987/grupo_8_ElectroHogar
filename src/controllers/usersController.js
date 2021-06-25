const { validationResult } = require('express-validator')
const usuario = require('../models/usuarios')
const { usuariosPath } = require('../models/usuarios')
const fs = require('fs')
const bcryptjs = require('bcryptjs') 

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
    if(!resultadoValidaciones.isEmpty()){
      if(req.file){
        fs.unlinkSync(req.file.path)
      }
      const oldData = req.body
      res.render('users/registro', { oldData, errors: resultadoValidaciones.mapped()})
      return
    } 
    const { nombre, apellido, email } = req.body
    password = bcryptjs.hashSync(req.body.password, 10)
    password2 = bcryptjs.hashSync(req.body.password2, 10)
    const usuarioNuevo = {nombre, apellido, email, password, password2, imagen : '/images/usuarios/' + req.file.filename }
      usuario.crearUsuario(usuarioNuevo)
      res.redirect('/')
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