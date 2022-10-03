/* const {body, check} = require('express-validator')

const validationsRegister = 
[
    check('nombre').notEmpty().withMessage('Debe ingresar un nombre'),
    check('apellido').notEmpty().withMessage('Debe ingresar un apellido'),
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
]

module.exports = validationsRegister */