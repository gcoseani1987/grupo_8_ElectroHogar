const express = require('express');
const router = express.Router();
const usersRoutes = require('./usersRoutes');
const productosRoutes = require('./productosRoutes')

router.use('/users', usersRoutes);
router.use('/products', productosRoutes)

module.exports = router; 