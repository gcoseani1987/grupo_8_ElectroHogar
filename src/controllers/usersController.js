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
    const nuevoUsuario = req.body
    nuevoUsuario.imagen = '/images/usuarios' + req.file.filename
    console.log(nuevoUsuario)
    usuario.crearUsuario(nuevoUsuario)
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