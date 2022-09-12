var express = require('express');
var router = express.Router();
var registroController = require('../controllers/registroController')
const {body, check} = require('express-validator')


/* GET home page. */

router.get('/', registroController.index);

router.post('/',[
    check('nombre').isLength({min:5}).withMessage('Debe ingresar un nombre'),
    check('apellido').isLength({min:1}).withMessage('Debe ingresar un apellido'),
    check('email').isEmail().withMessage('Debe ingresar un email valido'),
    check('confirm-email').isEmail().withMessage('Debe confirmar su direccion de email'),
    check('password').isLength({min:6}).withMessage('Debe ingresar una contraseña con un minimo de 6 caracteres'),
    check('confirmar-password').isLength({min:6}).withMessage('Debe ingresar nuevamente su contraseña'),
    body('telefono').custom(value => {
        if(isNaN(value)){
            throw new Error('El valor ingresado deben ser numeros');
        }else {
            return true;
        }
    })
], registroController.store);

module.exports = router;