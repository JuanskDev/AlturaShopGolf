const fs = require('fs');
const path = require('path');

const admins = ['ADMINISTRADOR' , 'REGISTRADO' , 'INVITADO'];


function admin(req, res, next){
    let user = req.query.user;
    if(user){
        admins.forEach(function(admin){ // Probar con filter o indexOf
            if(user == admin){
                next();
            }
            else {
                res.send('No tienes los privilegios para ingresar');
            };
        });
    }
    };


module.exports = admin;