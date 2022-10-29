const path = require('path');
const fs = require('fs');

const bcryptjs = require('bcryptjs');
const {	validationResult } = require('express-validator');


const usersFilePath = path.join(__dirname, '../dataBase/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

const registroController = {
    index: function(req, res){
        res.locals.sessiondata = req.session;
        res.render("registro.ejs");
    },
    create: (req, res) => {
        
      const errors = validationResult(req);
      
        if(!errors.isEmpty()) {
            
            res.render("registro.ejs", {
                errores: errors.errors,
                old: req.body
            })

        } else {

        let indexId = 0;
        if(users.length != 0) {
            indexId = users[users.length - 1].id;
        }
        let hash_ = bcrypt.hashSync(req.body.password, 10)
        let newUser = {
            id: indexId + 1,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            hash: hash_
        };
        users.push(newUser)
        fs.writeFileSync(usersFilePath, JSON.stringify(users, null, ' '));
      
    }}
}
module.exports = registroController;
