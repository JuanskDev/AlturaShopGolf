const express = require('express');
const router = express.Router();
const path = require("path");
const caracteristicaTipoProductoController = require('../controllers/caracteristicaTipoProductoController');


router.get('/', caracteristicaTipoProductoController.list); 

//--------------FORMULARIO CREAR -----------------------//
router.get('/create', caracteristicaTipoProductoController.create); 
router.post('/create', caracteristicaTipoProductoController.insert);

//--------------------FORMULARIO EDITAR -----------------------//
router.get('/edit/:id', caracteristicaTipoProductoController.edit);
router.put('/edit/:id', caracteristicaTipoProductoController.update);

//-----------------------ELIMINAR -----------------------//
router.delete('/delete/:id', caracteristicaTipoProductoController.delete)

module.exports = router;