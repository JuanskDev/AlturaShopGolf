const path = require('path');
const fs = require('fs');
const { render } = require('ejs');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../dataBase/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

module.exports = {
    cryptPassword: function(password, callback) {
        bcrypt.genSalt(10, function(err, salt) {
         if (err) 
           return callback(err);
     
         bcrypt.hash(password, salt, function(err, hash) {
           return callback(err, hash);
         });
       });
    },
    index: function(req, res){
        res.render(path.join(__dirname , '../views/registro.ejs'))
    },
    store: (req, res) => {
        // let errors = validationResult(req)
        
        // if(!errors.isEmpty()){
        //     return res.render("../src/views/registro.ejs", {errors: errors.errors});
        // } 
        let a = {
            ... req.body
        }
        res.json(JSON.stringify(a))
        //req.session.nombre = req.body.nombre;
        //res.cookie('cookie_nombre', req.body.nombre, {maxAge: 10000 });
        //req.session.name = req.body.name;
        //req.session.email = req.body.email;
        //req.session.age = req.body.age;
        // if(req.body.recordar_color){
        //     res.cookie('color', req.body.name, {maxAge: 60 * 1000});
        //     res.redirect('/')
        // }  
        
// let user = {
//     "id":1,
//     "nombre": "Agustin Alejandro",
//     "apellido": "Contreras Vidal",
//     "email": "agustincontrerasvidal@gmail.com",
//     "contrasena":"xxxxxxxx",
//     "rol": "administrador"
// }

        // let indexId = 0;
        // if(users.length != 0) {
        //     indexId = users[users.length - 1].id;
        // }
        // let newUser = {
        //     id: indexId + 1,
        //     nombre: req.body.nombre,
        //     apellido: req.body.apellido,
        //     email: req.body.email,
        //     telefono: req.body.telefono
        // };
        // this.cryptPassword(req.body.password, function(err, hash) {
        //     if(err.length) {
        //         newUser.hash = hash;
        //     }
        // });
        // users.push(newUser)
        // fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
        // res.redirect('/iniciosesion');
    }
}