const express = require('express');

const mainController = require('../controllers/mainController');
// const { get } = require('./users');

var router = express.Router();

router.get('/' , mainController.index);
router.get('/search', mainController.search)
// router.get('/pruebaSession', function(req, res){
//     if(req.session.numeroVistas == undifined){
//         req.session.numeroVistas = 0;
//     }
//     req.session.numeroVistas++;
//     res.send('Session tiene el numero:' + req.session.numeroVistas);
// });

module.exports = router;