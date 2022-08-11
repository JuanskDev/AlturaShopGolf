const express = require('express');
const path = require("path");
const multer = require('multer');
const productsController = require('../controllers/productsController');

var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/products')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})
var router = express.Router();

router.get('/carrito-de-compras' , productsController.carritoCompra);
router.get('/detalleproducto' , productsController.detalleProducto);
router.get('/create', productsController.create); 
router.get('/edit/:id', productsController.edit); 
router.post('/', upload.any(), productsController.store);
router.put('/edit/:id', upload.any(), productsController.update)

module.exports = router;