function loggeadoMiddleware(req,res,next){
    if(req.session.usuarioLoggeado && req.session.usuarioLoggeado.administrador == false){
        return res.redirect('/')
    } 
    next();  
}

module.exports = loggeadoMiddleware 