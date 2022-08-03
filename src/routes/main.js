const express = require('express');

const mainController = require('../controllers/mainController');
// const { get } = require('./users');

var router = express.Router();

router.get('/' , mainController.index);
// router.get('/head' , mainController.head);
// router.get('/header' , mainController.header);
// router.get('/footer' , mainController.footer);

module.exports = router;