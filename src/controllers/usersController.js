const path = require('path');

const usersController = {
    registro: (req , res) => {
        res.render(path.join(__dirname , '../Views/Registro.ejs'))
    },
    login: (req,res)  => {
        res.render(path.join(__dirname, '../views/iniciosesion.ejs'))
    },
    formulario: (req , res) => {
        res.render(path.join(__dirname , '../Views/formulario-create.ejs'))
    },
};

module.exports = usersController;