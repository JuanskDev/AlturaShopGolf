const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');


router.get('/', categoriaController.list); 

//--------------FORMULARIO CREAR -----------------------//
router.get('/create', categoriaController.create); 
router.post('/create', categoriaController.insert);

//--------------------FORMULARIO EDITAR -----------------------//
router.get('/edit/:id', categoriaController.edit);
router.put('/edit/:id', categoriaController.update);

//-----------------------ELIMINAR -----------------------//
router.get('/delete/:id', categoriaController.delete)

module.exports = router;