const usuarios = require('../models/usuarios')

function vistasUsuariosMiddleware(req,res,next){
    res.locals.estaLoggeado = false 
   
    const emailCookie = req.cookies.email
    const usuarioCookie = usuarios.findByField('email',emailCookie)

    if(usuarioCookie){
        req.session.usuarioLoggeado = usuarioCookie
    }
   
    if(req.session && req.session.usuarioLoggeado){
        res.locals.estaLoggeado = true
        res.locals.usuarioLoggeado = req.session.usuarioLoggeado
    }



    next()
}

module.exports = vistasUsuariosMiddleware