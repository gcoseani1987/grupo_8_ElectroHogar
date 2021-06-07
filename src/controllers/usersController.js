const usuario = require('../models/usuarios')

const controller = {
  login: (req, res) => {
    const estadoUsuario = ''
    res.render('users/login.ejs', { estadoUsuario })
  },

  nuevoUsuario: (req, res) => {
    res.render('users/registro.ejs')
  },

  crearUsuario: (req, res) => {
    let nuevoUsuario = req.body
    usuario.crearUsuario(nuevoUsuario)
    res.redirect('/')
  },

  loginUsuario: (req, res) =>{
    const sesion = req.body
    const estadoUsuario = user.validarUsuario(sesion)

    if(estadoUsuario == 'Ha sido registrado'){
    res.redirect('/productos/listado')

     }else{
    res.render('users/login.ejs', { userStatus })
    }
  }

}

module.exports = controller