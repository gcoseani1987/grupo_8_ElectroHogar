const express = require('express')
const router = express.Router()

const path = require('path')
const multer = require('multer')
const { body } = require('express-validator')
const validacionUsuario = require('../middlewares/usuarioMiddlewares')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, path.resolve(__dirname, '../../public/images/usuarios'))
    },
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname))
    } 
}) 

const uploadFile = multer({ storage })

const userController = require('../controllers/usersController') 

router.get('/login', userController.login)
router.post('/login', userController.loginUsuario)

router.get('/listado',  userController.listado)

router.get('/registro', userController.nuevoUsuario)
router.post('/registro', uploadFile.single('imagen'), validacionUsuario, userController.crearUsuario)

router.delete('/:id', userController.borrar)

router.post('/registro', uploadFile.single('imagen'), userController.crearUsuario)



module.exports = router
