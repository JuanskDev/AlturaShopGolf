const express = require('express');
const usersController = require('../controllers/usersController');
const userLoginRoute = require('../middlewares/userLoginLogs')
const userLogoutRoute = require('../middlewares/userLogoutLogs')

var router = express.Router();

router.get('/iniciosesion', usersController.index);
router.post('/iniciosesion', userLoginRoute, usersController.login);
router.get('/cerrarsesion', userLogoutRoute, usersController.logout);

module.exports = router;