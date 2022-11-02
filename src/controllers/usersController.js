const path = require('path');
const fs = require('fs');
// const { render } = require('ejs');
const bcrypt = require('bcryptjs');
const {	validationResult } = require('express-validator');

const db = require('../dataBase/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const Usuario = db.Usuario;

const usersController = {
    index: (req, res)  => {
        res.locals.sessiondata = req.session;
        res.locals.mensaje = '';
        if(req.session.nombre != undefined) {
            res.locals.mensaje = "Ya inició una sesión"
        }
        res.render(path.join(__dirname, '../views/Users/iniciosesion.ejs'))
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
    },
    registro: function(req, res){
        res.locals.sessiondata = req.session;
        res.render("../views/Users/Registro");
    },
    create: (req, res) => {
        
      const errors = validationResult(req);
      
        if(!errors.isEmpty()) {
            
            res.render("../views/Users/Registro", {
                errores: errors.errors,
                old: req.body
            })

        } else {

            let user = {
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                telefono: req.body.telefono,
                categoria: 'usuario'
              };
        
              Usuario
              .create(user)
              .then((storedUser) => {
                  return  res.redirect('/users/iniciosesion');
              })
              .catch(error => console.log(error));
      
    }},

        contacto: (req,res) => {
            res.locals.sessiondata = req.session;
            res.render(path.join(__dirname, '../views/Users/contacto.ejs'))
       
    }

};
module.exports = usersController;