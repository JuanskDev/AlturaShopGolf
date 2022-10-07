const express = require('express');
const router = express.Router();
const tipoProductosController = require('../controllers/tipoProductosController');


router.get('/', tipoProductosController.list); 

//--------------FORMULARIO CREAR TIPO DE PRODUCTOS-----------------------//
router.get('/create', tipoProductosController.create); 
router.post('/create', tipoProductosController.insert);

//--------------------FORMULARIO EDITAR TIPO DE PRODUCTOS-----------------------//
router.get('/edit/:id', tipoProductosController.edit);
router.put('/edit/:id', tipoProductosController.update);

//-----------------------ELIMINAR TIPO DE PRODUCTOS-----------------------//
router.delete('/delete/:id', tipoProductosController.delete)

module.exports = router;