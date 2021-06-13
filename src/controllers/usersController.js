const usuarios = require('../models/usuarios')
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
    let nuevoUsuario = req.body
    usuarios.crearUsuario(nuevoUsuario)
    res.redirect('/')
  }, 

  loginUsuario: (req, res) =>{
    const sesion = req.body
    const estadoUsuario = usuarios.validarUsuario(sesion)

    if(estadoUsuario == 'Ha sido registrado'){
    res.redirect('/')

     }else{
    res.render('users/login', { estadoUsuario })
    }
  }
}

module.exports = controller