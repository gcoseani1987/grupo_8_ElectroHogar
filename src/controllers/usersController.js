const { validationResult } = require('express-validator')
const usuario = require('../models/usuarios')
const { usuariosPath, findByField } = require('../models/usuarios')
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
    const resultadoValidaciones = validationResult(req)
    const usuarioALoggear = usuario.findByField('email',req.body.email)
    const oldData = req.body
    if(resultadoValidaciones.isEmpty()){ 
      delete usuarioALoggear.password
      delete usuarioALoggear.password2
      req.session.usuarioLoggeado = usuarioALoggear
      res.redirect('/')
     }else{
    res.render('users/login', { oldData, errors: resultadoValidaciones.mapped() })
    }
  }, 

  listado: (req, res) => {
    let usuarios = usuario.findAll() 
    res.render('./users/listadoUsuario', { usuarios })
  },

  desloggear: ()=>{
    req.session.destroy()
    return res.redirect('/')
  },
 
  borrar: (req, res) => {
    let id = req.params.id
    let usuarioEliminado = usuario.delete(id)
    res.redirect('/users/listado')
  },
}

module.exports = controller