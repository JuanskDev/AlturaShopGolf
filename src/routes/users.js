const express = require('express');

const usersController = require('../controllers/usersController');

var router = express.Router();

router.get('/login' , usersController.login);
router.get('/registro' , usersController.registro);

module.exports = router;