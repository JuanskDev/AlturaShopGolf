const express = require('express');
const camposController = require('../controllers/camposController');

var router = express.Router();

router.get('/' , camposController.index);

module.exports = router;