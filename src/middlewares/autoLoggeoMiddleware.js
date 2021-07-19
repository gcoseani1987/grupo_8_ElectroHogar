const controllerUsuarios = require('../controllers/usersController')

function vistasUsuariosMiddleware(req,res,next){
    res.locals.estaLoggeado = false 
   
    const usuarioCookie = controllerUsuarios.crearUsuario.usuarioNuevo.email
    req.session.usuarioLoggeado = usuarioCookie


    next()
}

module.exports = vistasUsuariosMiddleware