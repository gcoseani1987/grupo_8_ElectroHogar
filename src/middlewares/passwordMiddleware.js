function passwordMiddleware(req,res,next){
    if(!req.session.usuarioLoggeado || (req.session.usuarioLoggeado &&  req.session.usuarioLoggeado.id != req.params.id)){
        return res.redirect('/')
    } 
    next();  
}

module.exports = passwordMiddleware 