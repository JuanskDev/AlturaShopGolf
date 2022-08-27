const express = require('express');

const mainController = require('../controllers/mainController');
// const { get } = require('./users');

var router = express.Router();

router.get('/' , mainController.index);
<<<<<<< HEAD
router.get('/head' , mainController.head);
router.get('/header' , mainController.header);
router.get('/footer' , mainController.footer);

// router.get('/pruebaSession', function(req, res){
//     if(req.session.numeroVistas == undifined){
//         req.session.numeroVistas = 0;
//     }
//     req.session.numeroVistas++;
//     res.send('Session tiene el numero:' + req.session.numeroVistas);
// });
=======
// router.get('/head' , mainController.head);
// router.get('/header' , mainController.header);
// router.get('/footer' , mainController.footer);
>>>>>>> 69ae88f32f073b3a683f9258d55c7b917dfab6c2

module.exports = router;