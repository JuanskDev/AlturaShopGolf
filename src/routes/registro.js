var express = require('express');
var router = express.Router();
var controller = require('../controllers/registroController')
const {body, check} = require('express-validator')

/* GET home page. */
router.get('/registro', controller.index);

router.post('/registro',[
    check('nombre').isLength({min:5}).withMessage('Debe ingresar un nombre'),
    check('apellido').isLength({min:1}).withMessage('Debe ingresar un apellido'),
    
    // check('email').isEmail().withMessage('Debe ingresar un email valido'),
    // check('color').isLength({min:1}).withMessage('Debe seleccionar un color'),
    // body('age').custom(value => {
    //     if(isNaN(value)){
    //         throw new Error('El valor ingresado debe ser un numero');
    //     }else {
    //         return true;
    //     }
    // })


], controller.store);

// router.get('/color', controller.color)
// router.get('/borrar', controller.borrar)

module.exports = router;
