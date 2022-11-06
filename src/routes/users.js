const express = require('express');
const usersController = require('../controllers/usersController');
const userLoginRoute = require('../middlewares/userLoginLogs')
const userLogoutRoute = require('../middlewares/userLogoutLogs')
var router = express.Router();

router.get('/' , usersController.list)
router.get('/iniciosesion', usersController.index);
router.post('/iniciosesion', userLoginRoute, usersController.login);
router.get('/cerrarsesion', userLogoutRoute, usersController.logout);

//--------------FORMULARIO CREAR USUARIOS-----------------------//
router.get('/create', usersController.create); 
router.post('/create', usersController.insert);

//--------------------FORMULARIO EDITAR USUARIOS-------------------//
router.get('/edit/:id', usersController.edit); // formulario edit
router.put('/edit/:id', usersController.update);

//-----------------------ELIMINAR USUARIOS---------------------------//
router.delete('/delete/:id', usersController.delete)

module.exports = router;