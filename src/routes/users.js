const express = require('express');

const usersController = require('../controllers/usersController');

var router = express.Router();

router.get('/login' , usersController.login);
router.get('/registro' , usersController.registro);
router.get('/formulario' , usersController.formulario);

module.exports = router;