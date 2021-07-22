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
    const administrador = false
    const usuarioNuevo = {nombre, apellido, email, password, administrador, password2, imagen: '/images/usuarios/' + req.file.filename }
      usuario.crearUsuario(usuarioNuevo)
      delete usuarioNuevo.password
      delete usuarioNuevo.password2
      req.session.usuarioLoggeado = usuarioNuevo
      res.cookie('Email',bcryptjs.hashSync(req.body.email,10),{ maxAge : (1000*60)*5 })
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

      if(req.body.recordar){
        res.cookie('Email',bcryptjs.hashSync(req.body.email,10),{ maxAge : (1000*60)*60*24 })
      }
      res.redirect('/')
     }else{
    res.render('users/login', { oldData, errors: resultadoValidaciones.mapped() })
    }
  }, 
  password:(req,res)=>{
    let id = req.params.id
    let usuarioEncontrado = usuario.findByPk(id)
    res.render('users/modificarpassword' , { usuarioEncontrado })
  },
  editarPassword: (req,res) => {
    const resultadoValidaciones = validationResult(req)
    const { id } = req.params
    const usuarioEncontrado = usuario.findByPk(id)
    let { nombre, apellido, email, imagen, administrador } = usuarioEncontrado
    if(resultadoValidaciones.isEmpty()){ 
    let passwordEditado = req.body.passwordEditado
    password =  bcryptjs.hashSync(req.body.passwordEditado, 10) 
    const password2 = password
    const dataNueva = {nombre, apellido, email, administrador ,password, password2, imagen }
    usuario.modificar(dataNueva, id);
    res.redirect('/users/perfil/' + id)
    } else{
      res.render('users/modificarpassword', { usuarioEncontrado,  errors: resultadoValidaciones.mapped() })
    };
  },

  listado: (req, res) => {
    let usuarios = usuario.findAll() 
    res.render('./users/listadoUsuario', { usuarios })
  },

  desloggear: (req,res)=>{
    req.session.destroy()
    res.clearCookie('Email')
    res.redirect('/')
  },

  editar: (req, res) => {
    let id = req.params.id
    let usuarioEncontrado = usuario.findByPk(id)
    res.render('users/editarUsuario', { usuarioEncontrado })
  },

  actualizar: (req, res) => {
    const { id } = req.params;
    const usuarioOriginal = usuario.findByPk(id)
    const data = req.body; 
    const { file } = req
    let imagen
    if (file) {
      imagen = '/images/usuarios/' + req.file.filename
    } else {
      imagen = usuarioOriginal.imagen
    }
    data.imagen = imagen
    let { nombre, apellido, email } = req.body
    password = usuarioOriginal.password
    const password2 = password
    const administrador = false
    const dataNueva = {nombre, apellido, email,administrador, password, password2, imagen }
    usuario.modificar(dataNueva, id);
    res.redirect('/users/perfil/' + id);
},

  borrar: (req, res) => {
    let id = req.params.id 
    let usuarioAEliminar = usuario.findByPk(id)
    if(req.session.usuarioLoggeado.administrador == true && req.session.usuarioLoggeado.id != usuarioAEliminar.id){
    res.redirect('/users/listado')
    } else {
      req.session.destroy()
      res.clearCookie('Email')
      res.redirect('/')
    }
    let usuarioEliminado = usuario.delete(id)
  },
  perfil: (req, res) => {
    let id = req.params.id
    let usuarioEncontrado = usuario.findByPk(id) 
    res.render('users/perfil', { usuarioEncontrado } )
  }, 
}

module.exports = controller