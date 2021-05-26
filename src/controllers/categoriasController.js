const express = require('express');
const path = require('path');

const categoriasController = {
    categoria : (req, res) =>{
        res.Sendfile(path.resolve(__dirname, '../views/categoria.html'))
    },
};

module.exports = categoriasController
