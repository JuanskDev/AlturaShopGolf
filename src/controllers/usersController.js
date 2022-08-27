const path = require('path');
const validationResults= require('express-validator');

const usersController = {
<<<<<<< HEAD
    index: (req, res)  => {
        res.render(path.join(__dirname, '../views/iniciosesion.ejs'))
    },
    login: (req, res) => {

=======
    registro: (req , res) => {
        res.render(path.join(__dirname , '../Views/Registro.ejs'))
    },
    login: (req,res)  => {
        res.render(path.join(__dirname, '../views/iniciosesion.ejs'))
>>>>>>> 69ae88f32f073b3a683f9258d55c7b917dfab6c2
    }
};

module.exports = usersController;