const { Usuario } = require('../database/models')
const bcryptjs = require('bcryptjs') 


const vistasUsuariosMiddleware= async function(req,res,next){
    res.locals.estaLoggeado = false 
   
    const emailCookie = req.cookies.Email

    
    if (emailCookie) {
        usuarioCookie = await Usuario.findAll({
            where : { email: emailCookie}
        })
        console.log('hola' , usuarioCookie)
        
        req.session.usuarioLoggeado = usuarioCookie
    }
    
    if (req.session && req.session.usuarioLoggeado){
        res.locals.estaLoggeado = true
        res.locals.usuarioLoggeado = req.session.usuarioLoggeado[0]
        console.log('usuarioLoggeado:' , res.locals.usuarioLoggeado)
    }



    next()
}



module.exports = vistasUsuariosMiddleware