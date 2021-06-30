function loggeadoMiddleware(req,res,next){
    if(req.session.usuarioLoggeado){
        return res.redirect('/')
    } 
    next();
}

module.exports = loggeadoMiddleware