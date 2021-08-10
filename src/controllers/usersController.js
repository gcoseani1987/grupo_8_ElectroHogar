const { validationResult } = require('express-validator');
const { Usuario } = require('../database/models');
const { Imagenes } = require('../database/models');
const fs = require('fs');
const bcryptjs = require('bcryptjs'); 

const controller = {
  login: (req, res) => {
    const estadoUsuario = '';
    res.render('users/login', { estadoUsuario });
  }, 

  nuevoUsuario: (req, res) => {
    res.render('users/registro');
  },

  crearUsuario: (req, res) => {
    const resultadoValidaciones = validationResult(req);
    if(!resultadoValidaciones.isEmpty()){
      if(req.file){
        fs.unlinkSync(req.file.path); 
      }  
            const oldData = req.body;
            res.render('users/registro', { oldData, errors: resultadoValidaciones.mapped()});
            return;
    } else {
            const { nombre, apellido, email } = req.body;
            password = bcryptjs.hashSync(req.body.password, 10);
            const administrador = false;
            Usuario.create ({ 
              email, 
              nombre, 
              apellido, 
              password, 
              imagen: '/images/usuarios/' + req.file.filename, 
              administrador
            }).then(usuarioNuevo => {
            usuarioNuevo.password = ''
            req.session.usuarioLoggeado = usuarioNuevo;
            res.cookie('Email',req.body.email,{ maxAge : (1000*60)*5 });
            res.redirect('/');
            })
            }
  },  

  loginUsuario: async (req, res) =>{
    const resultadoValidaciones = validationResult(req);
    const usuarioALoggear = await Usuario.findAll({
        where : { email : req.body.email}
    }) 
    const oldData = req.body;
    if(resultadoValidaciones.isEmpty()){ 
      delete usuarioALoggear.password;
      delete usuarioALoggear.password2;
      req.session.usuarioLoggeado = usuarioALoggear;
      if(req.body.recordar){
        res.cookie('Email',req.body.email,{ maxAge:(1000*60)*60*24 });
      }
        res.redirect('/');
     }else{
        res.render('users/login', { oldData , errors: resultadoValidaciones.mapped()});
    }
  },

  password: async (req,res)=>{
    let id = req.params.id;
    let usuarioEncontrado = await Usuario.findByPk(id,{
      where : {
        id : req.params.id
      }
    })
    res.render('users/modificarpassword' , { usuarioEncontrado });
  },

  editarPassword: async (req,res) => {
    const resultadoValidaciones = validationResult(req);
    const { id } = req.params;
    const usuarioEncontrado = await Usuario.findByPk(id,{
      where : {
         id : req.params.id
      }
    });
      if(resultadoValidaciones.isEmpty()){ 
        let passwordEditado = req.body.passwordEditado;
        password =  bcryptjs.hashSync(req.body.passwordEditado , 10); 
        Usuario.update({                 
            password 
        },            
        { 
          where: { 
            id: req.params.id 
          }}).then(result =>console.log(result));
    res.redirect('/users/perfil/' + id);
    } else{
      res.render('users/modificarpassword', { usuarioEncontrado,  errors: resultadoValidaciones.mapped()});
    };
  },

  listado: async(req, res) => {
    let usuarios = await Usuario.findAll();
    res.render('./users/listadoUsuario', { usuarios });
  },

  desloggear: (req,res)=>{
    req.session.destroy();
    res.clearCookie('Email');
    res.redirect('/');
  },

  editar: async (req, res) => {
    let id = req.params.id;
    let usuarioEncontrado = await Usuario.findByPk(id,{
      where : {
        id : id
      }
    })
    res.render('users/editarUsuario', { usuarioEncontrado });
  },

  actualizar: (req, res) => {
    const { id } = req.params;
    const usuarioOriginal = usuario.findByPk(id);
    const data = req.body; 
    const { file } = req;
    let imagen;
    if (file) {
      imagen = '/images/usuarios/' + req.file.filename;
    } else {
      imagen = usuarioOriginal.imagen;
    }
    data.imagen = imagen;
    let { nombre, apellido, email } = req.body;
    password = usuarioOriginal.password;
    const password2 = password;
    const administrador = usuarioOriginal.administrador;
    const dataNueva = {nombre, apellido, email,administrador, password, password2, imagen };
    usuario.modificar(dataNueva, id);
    res.redirect('/users/perfil/' + id);
},

  borrar: async (req, res) => {
    let usuarioAEliminar = await Usuario.destroy({
      where : {
        id : req.params.id
      }
    });
    if(req.session.usuarioLoggeado[0].administrador == true && req.session.usuarioLoggeado[0].id != req.params.id){
      res.redirect('/users/listado');
    } else {
      req.session.destroy();
      res.clearCookie('Email');
      res.redirect('/');
    }
  },
  perfil: async (req, res) => {
    let id = req.params.id;
    let usuarioEncontrado = await Usuario.findByPk(id,{
      where : {
        id : id
      }
    }) 
    res.render('users/perfil', { usuarioEncontrado });
  }, 
}

module.exports = controller