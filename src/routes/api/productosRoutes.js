const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/productosController');

router.get('/', controller.listado)

module.exports = router;