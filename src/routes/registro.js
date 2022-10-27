var express = require('express');
var router = express.Router();
const {body, check} = require('express-validator')
//Controller 
var registroController = require('../controllers/registroController')



//Middleware
const validationsRegister = require('../middlewares/registroValidations')

/* GET home page. */

router.get('/', registroController.index);

router.post('/' , validationsRegister , registroController.create)


module.exports = router;