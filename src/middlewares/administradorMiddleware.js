function loggeadoMiddleware(req,res,next){
    if(req.session.usuarioLoggeado[0] && (req.session.usuarioLoggeado[0].administrador == false && req.session.usuarioLoggeado[0].id != req.params.id)){
        return res.redirect('/')
    } 

    next();  
}

module.exports = loggeadoMiddleware 