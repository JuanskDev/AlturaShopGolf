const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const db = require('../dataBase/models');
const Usuarios = db.Usuario;
const usersFilePath = path.join(__dirname, '../dataBase/users.json');
//const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
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
        let user = users.find(e => e.email === req.body.email);


        Usuarios.findAll({
            where: {
               correo: req.body.email}
       })
       .then(usuarios => {
            if(usuarios != null) {
                let user = {
                    id: usuarios.id,
                    nombre: usuarios.nombre,
                    apellido: usuarios.apellido,
                    correo: usuarios.correo,
                    rol: usuarios.rol
                }
                let passwordCorrect = bcrypt.compareSync(req.body.password, usuarios.hash);
                if(passwordCorrect) {
                    //Guardar la información del usuario en variable de session
                    req.session.nombre = user.nombre;
                    req.session.apellido = user.apellido;
                    req.session.email = user.email;
                    req.session.rol = user.rol;
                }
                else {
                    error = 'No fué posible iniciar sesión';
                    res.redirect('/users/iniciosesion');
                }
            }
            else {
                error = 'No fué posible iniciar sesión';
                res.redirect('/users/iniciosesion');
            }
            
            res.redirect('/');
       })

        
    },
    logout: (request, response) => {
        request.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            response.redirect('/users/iniciosesion');
        });
    },
    create: (request, response) => {
        res.locals.sessiondata = req.session;
        
        return res.render('usuario-create');
    },
    insert: (req, res) => {
             
        Productos
        .create({
        nombre: req.body.nombre,
        marca: req.body.marca,
        modelo: req.body.modelo,
        agarre: req.body.agarre,
        tipoDeVara: req.body.tipoDeVara,
        tipoDeBolsa: req.body.tipoDeBolsa,
        hierroTipoDeConjunto: req.body.hierroTipoDeConjunto,
        precio: req.body.precio,
        descuento: req.body.descuento,
        stock: req.body.stock,
        color: req.body.color,
        categoria_id: req.body.categoria_id,
        imagen: req.file.filename
    })
    .then(() => {
        return res.redirect('/products')
    })
    .catch(error => res.send(error))

    },
    edit: (request, response) => {
        
    },
    update: (request, response) => {
        
    },
    delete: (request, response) => {
        
    }
};

module.exports = usersController;