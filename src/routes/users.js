const express = require('express');
const userLoginRoute = require('../middlewares/userLoginLogs')
const userLogoutRoute = require('../middlewares/userLogoutLogs')
const validationsRegister = require('../middlewares/registroValidations')
var router = express.Router();

const usersController = require('../controllers/usersController');

router.get('/iniciosesion', usersController.index);
router.post('/iniciosesion', userLoginRoute, usersController.login);

router.get('/cerrarsesion', userLogoutRoute, usersController.logout);

router.get('/registro', usersController.registro);
router.post('/registro' , validationsRegister , usersController.create);

router.get('/contacto' , usersController.contacto) 

module.exports = router;