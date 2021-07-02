function invitadoMiddleware(req,res,next){
    
    if(!req.session.usuarioLoggeado){
        return res.redirect('/users/registro')
    } 
    next();
}
module.exports = invitadoMiddleware