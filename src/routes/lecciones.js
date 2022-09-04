const express = require('express');
const leccionesController = require('../controllers/leccionesController');
var router = express.Router();

router.get('/' , leccionesController.index);

module.exports = router;