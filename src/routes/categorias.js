const express = require('express');
const path = require('path');
const categoriasRoutes = express.Router();

const categoriasController = require(path.resolve(__dirname,'../controllers/categoriasController'))

categoriasRoutes.get('/categoria', categoriasController.categoria)

module.exports = categoriasRoutes


