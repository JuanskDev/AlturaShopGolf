const express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();

router.get('/' , mainController.index);
router.get('/head' , mainController.head);
router.get('/header' , mainController.header);
router.get('/footer' , mainController.footer);

module.exports = router;