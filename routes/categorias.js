const express = require('express');
const categoriasRoutes = express.Router();

const electrohogarController = require('../controllers/categoriasController')

categoriasRoutes.get('/categoria', electrohogarController.categoria)

module.exports = categoriasRoutes


