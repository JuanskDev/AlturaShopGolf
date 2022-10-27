const express = require('express');
const router = express.Router();
const path = require("path");
const multer = require('multer');
const productoController = require('../controllers/productoController');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, 'public/images/productos')
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({storage: storage})

router.get('/', productoController.list); 

// ADMINISTRACION
//--------------FORMULARIO CREAR PRODUCTOS-----------------------//
router.get('/create', productoController.create); 
router.post('/create', upload.any(), productoController.insert);

//--------------------FORMULARIO EDITAR PRODUCTOS-------------------//
router.get('/edit/:id', productoController.edit); // formulario edit
router.put('/edit/:id', upload.any(), productoController.update);

//-----------------------ELIMINAR PRODUCTOS---------------------------//
router.get('/delete/:id', productoController.delete)
//---------------------------------


//FRONT END - PRODUCTOS POR CATEGORIA
router.get('/:categoria_id' , productoController.showProductCategory);
router.get('/detalle/:id' , productoController.detalleproducto);
//router.get('/:categoria_id/:subcategory' , productoController.showProductSubcategory);
//----------





module.exports = router;