const express = require('express');
const contactosController = require('../controllers/contactosController');

var router = express.Router();

router.get('/', contactosController.index);

module.exports = router;