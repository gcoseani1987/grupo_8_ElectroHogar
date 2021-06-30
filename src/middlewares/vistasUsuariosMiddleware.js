function vistasUsuariosMiddleware(req,res,next){
    res.locals.estaLoggeado = false 
    if(req.session && req.session.usuarioLoggeado){
        res.locals.estaLoggeado = true
        res.locals.usuarioLoggeado = req.session.usuarioLoggeado
    }
    next()
}

module.exports = vistasUsuariosMiddleware