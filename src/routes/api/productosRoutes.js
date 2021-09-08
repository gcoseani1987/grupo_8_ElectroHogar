const express = require('express');
const router = express.Router();
const controller = require('../../controllers/api/productosController');

router.get('/', controller.listado)
router.get('/:id', controller.detalle)

module.exports = router;