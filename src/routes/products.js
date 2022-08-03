const express = require('express');

const productsController = require('../controllers/productsController');
// const { get } = require('./users');

var router = express.Router();

router.get('/carrito-de-compras' , productsController.carritoCompra);
router.get('/detalleproducto' , productsController.detalleProducto);

module.exports = router;