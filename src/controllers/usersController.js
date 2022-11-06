const bcrypt = require('bcryptjs');
const db = require('../dataBase/models');
const Usuarios = db.Usuario;
const validationResults= require('express-validator');

const usersController = {
    index: (req, res)  => {
        let error = '';

        res.locals.sessiondata = req.session;
        if(req.session != undefined && req.session.rol != 'ADMINISTRADOR') {
            error="Ya inició una sesión";
        }
        res.render('iniciosesion', { error });
    },
    login: (req, res) => {
        let usuario = Usuarios.findAll({
            where: { correo: req.body.correo }
        });
        
        Promise
           .all([ usuario ])
           .then(([ usuario ]) => {
                let error = '';

                if(usuario.length == 0) {
                     error = 'No fué posible iniciar sesión';
                }
                else {
                    let passwordCorrect = bcrypt.compareSync(req.body.password, usuario[0].hash);
                    if(!passwordCorrect) {
                        //Guardar la información del usuario en variable de session
                        req.session.nombre = usuario[0].nombre;
                        req.session.apellido = usuario[0].apellido;
                        req.session.correo = usuario[0].correo;
                        req.session.rol = usuario[0].rol;
                        res.render('/');
                    }
                    else {
                        error = 'No fué posible iniciar sesión';
                    }
                }
                res.render('iniciosesion', { error })
           })
           .catch(error => res.send(error)) 
    },
    logout: (request, response) => {
        request.session.destroy((err) => {
            if(err) {
                return console.log(err);
            }
            response.redirect('/users/iniciosesion');
        });
    },
    list: (req, res) => {
        res.locals.sessiondata = req.session;
        if(req.session != undefined && req.session.rol != 'ADMINISTRADOR') {
            res.redirect('/');
        }
        db.Usuario.findAll()
            .then(usuarios => {
                res.render('usuarios.ejs', { usuarios })
            })
    },
    create: (request, response) => {
        res.locals.sessiondata = req.session;
        if(request.session != undefined && request.session.rol != 'ADMINISTRADOR') {
            response.redirect('/');
        }
        
        return response.render('usuario-create');
    },
    insert: (req, res) => {
        res.locals.sessiondata = req.session;
        if(request.session != undefined && request.session.rol != 'ADMINISTRADOR') {
            response.redirect('/');
        }
        
        let usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            telefono: req.body.correo,
        }
        let hash = bcrypt.hashSync(req.body.password, 10)
        usuario.hash = hash;
        Usuarios.create(usuario)
    .then(() => {
        return res.redirect('/users')
    })
    .catch(error => res.send(error)) 
    },
    edit: (request, response) => {
        if(request.session != undefined && request.session.rol != 'ADMINISTRADOR') {
            response.redirect('/');
        }

        let id = request.params.id;
        let usuario = Usuarios.findByPk(id);
        
         Promise
            .all([ usuario ])
            .then(([ usuario ]) => {
                return res.render('usuario-edit', { usuario })
            })
            .catch(error => res.send(error)) 
    },
    update: (req, res) => {
        if(request.session != undefined && request.session.rol != 'ADMINISTRADOR') {
            response.redirect('/');
        }

        let usuarioId = req.params.id;
        let usuario = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            correo: req.body.correo,
            telefono: req.body.correo,
        }
        let hash = bcrypt.hashSync(req.body.password, 10)
        usuario.hash = hash;
        
        Usuarios.update(usuario, {
                where: { id: usuarioId }
            })
            .then(() => {
                return res.render('users')
            })
            .catch(error => res.send(error))
        },
    delete: (req, res) => {
        if(request.session != undefined && request.session.rol != 'ADMINISTRADOR') {
            response.redirect('/');
        }
        
        let usuarioId = req.params.id;
		Usuarios.delete({
            where: { id: usuarioId }
        })
        .then(() => {
            return res.render('users')
        })
        .catch(error => res.send(error))
    }
};

module.exports = usersController;