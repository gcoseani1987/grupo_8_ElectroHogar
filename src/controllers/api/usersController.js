const e = require('express');
const { Usuario } = require('../../database/models')

const controller = {

    async buscarUsuario (req,res){
        /* URL de la api : /api/users/emailExist */
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
    
    },

    async listado(req,res){
        /* URL de al api : /api/users */
        const listadoUsuarios = await Usuario.findAll({
            attributes : [
                "id",
                "nombre",
                "email"
            ]
        });
        const cantidadUsuarios = listadoUsuarios.length;
        const users = listadoUsuarios.map(usuario=>{
            usuario.setDataValue("detail", "http://localhost:3030/api/users/" + usuario.id)
            return usuario
        })
        return res.json({
            count : cantidadUsuarios,
            users 
        })  
    },

    async perfil(req, res){
        /* URL de al api : /api/users/:id */
        try {
            const id = req.params.id
            const usuarioBuscado = await Usuario.findByPk(id, {
                attributes : [ 
                    'id', 'nombre', 'apellido', 'email', 'imagen'
                ]
            })
            usuarioBuscado.setDataValue('imagen', 'http://localhost:3030' + usuarioBuscado.imagen)
            
            res.status(200).json({
                meta : {
                    status : 'success',
                },
                data : {
                    usuarioBuscado
                }
            }) 
        }
        catch(error) {
            res.status(404).json({
                meta : {
                    status : 'error', 
                },
                error : {
                    msg : 'no se encontro el usuario'
                }
            }) 
        }
    }
}

module.exports = controller  
