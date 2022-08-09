var express = require('express');
var router = express.Router();
var controller = require('../controllers/registroController')
const {body, check} = require('express-validator')

/* GET home page. */
router.get('/registro', controller.index);

router.post('/registro',[
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


], controller.store);

// router.get('/color', controller.color)
// router.get('/borrar', controller.borrar)

module.exports = router;
