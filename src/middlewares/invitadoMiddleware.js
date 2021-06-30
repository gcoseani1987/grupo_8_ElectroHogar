function invitadoMiddleware(req,res,next){
    if(!req.session.usuarioLoggeado){
        return res.redirect('/users/login')
    } 
    next();
}
module.exports = invitadoMiddleware