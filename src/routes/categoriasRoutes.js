const express = require('express')
const router = express.Router()
const categoriasController = require('../controllers/categoriasController')

router.get('/:id', categoriasController.categoria)

module.exports = router
   