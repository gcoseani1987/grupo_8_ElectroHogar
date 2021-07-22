const controllerUsuarios = require('../controllers/usersController')

function autoLoggeoMiddleware(req,res,next){
    res.locals.estaLoggeado = false 
   
    const usuarioCookie = controllerUsuarios.crearUsuario.usuarioNuevo.email
    req.session.usuarioLoggeado = usuarioCookie


    next()
}

module.exports = autoLoggeoMiddleware