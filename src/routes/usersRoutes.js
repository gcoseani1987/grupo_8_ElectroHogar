const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, '../public/images/usuarios')
    },
    filename: function(req, file, cb){
        cb(null, 'fotousuario' + Date.now + path.extname(file.originalname))
    }
}) 

const uploadFile = multer({ storage })

const userController = require('../controllers/usersController')

router.get('/login', userController.login)
router.post('login', userController.loginUsuario)

router.get('/registro', userController.nuevoUsuario)
router.post('registro', userController.crearUsuario)

router.post('/registro', uploadFile.single('imagen'), userController.crearUsuario)



module.exports = router
