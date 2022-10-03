const path = require('path');
const fs = require('fs');
// const { render } = require('ejs');
const bcrypt = require('bcryptjs');
const usersFilePath = path.join(__dirname, '../dataBase/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
const validationResults= require('express-validator');

const usersController = {
    index: (req, res)  => {
        res.locals.sessiondata = req.session;
        res.locals.mensaje = '';
        if(req.session.nombre != undefined) {
            res.locals.mensaje = "Ya inició una sesión"
        }
        res.render(path.join(__dirname, '../views/iniciosesion.ejs'))
    },
    login: (req, res) => {
        let error = '';
        let user = users.find(e => e.email === req.body.email)
        if(user != null) {
            let passwordCorrect = bcrypt.compareSync(req.body.password, user.hash);
            if(passwordCorrect) {
                //Guardar la información del usuario en variable de session
                req.session.nombre = user.nombre;
                req.session.apellido = user.apellido;
                req.session.email = user.email;
            }
            else {
                error = 'No fué posible iniciar sesión';
                res.redirect('/users/iniciosesion')
                ;
            }
        }
        else {
            error = 'No fué posible iniciar sesión';
            res.redirect('/users/iniciosesion');
        }
        res.redirect('/');
    },
    logout: (request, response) => {
        request.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            response.redirect('/users/iniciosesion');
        });
    }
};
module.exports = usersController;