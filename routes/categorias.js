const express = require('express');
const categoriasRoutes = express.Router();
const path = require('path');

categoriasRoutes.get('/:idCategorias', (req, res) =>{
    let idCategorias = req.params.idCategorias
    res.sendFile(path.join(__dirname, '/views/categoria.html'))
}
);

module.exports = categoriasRoutes


