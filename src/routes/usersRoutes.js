const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')
const invitadoMiddleware = require('../middlewares/invitadoMiddleware')
const loggeadoMiddleware = require('../middlewares/loggeadoMiddleware')

const { isFileImage }=require('../helpers/file')
const validacionUsuario = require('../middlewares/usuarioMiddlewares')
const validacionesLogin = require('../middlewares/loginMiddlewares')

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

router.get('/login', loggeadoMiddleware , userController.login)
router.post('/login', validacionesLogin , userController.loginUsuario)

router.get('/listado', invitadoMiddleware ,  userController.listado)

router.get('/registro', loggeadoMiddleware , userController.nuevoUsuario)
router.post('/registro', uploadFile.single('imagen'), validacionUsuario, userController.crearUsuario)

router.delete('/:id', userController.borrar) 

router.post('/registro', uploadFile.single('imagen'), userController.crearUsuario)

router.get('/logout', userController.desloggear)

module.exports = router
