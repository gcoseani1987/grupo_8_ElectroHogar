const { Usuario } = require('../../database/models')

const controller = {

    async buscarUsuario (req,res){
        /* /api/users/emailExist */
        const { email } = req.body;
        const usuarioBuscado = await Usuario.findOne({
            where : {
                email : email
            }
        });
        if(usuarioBuscado){
            return res.status(200).json({
                found : true
            })            
        }
            return res.status(404).json({
                found : false
        })   

    }

}
  
module.exports = controller  
