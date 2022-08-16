const express = require('express');
const path = require("path");
const multer = require('multer');
const productsController = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/products')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})
var router = express.Router();

router.get('/carritodecompras' , productsController.carritoCompra);
router.get('/detalleproducto' , productsController.detalleproducto);

router.get('/create', productsController.create); //formulario create
router.post('/create', upload.any(), productsController.store);

router.get('/edit/:id', productsController.edit); // formulario edit
router.put('/edit/:id', upload.any(), productsController.update);

// router.delete('/delete/:id', productsController.destroy);-----// borrar un producto de productos.json

module.exports = router;